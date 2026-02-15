import { NextRequest, NextResponse } from 'next/server';
import { updateAnnouncements } from '@/lib/update-content';
import { revalidatePath } from 'next/cache';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
    // Security Check: Verify Authorization header or ?secret= query param
    const authHeader = request.headers.get('authorization');
    const secret = request.nextUrl.searchParams.get('secret');

    if (authHeader !== `Bearer ${process.env.CRON_SECRET}` && secret !== process.env.CRON_SECRET) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        console.log("Triggering daily update...");

        const result = await updateAnnouncements();

        if (result.success) {
            // Revalidate homepage and layout to pick up new announcements
            revalidatePath('/');
            revalidatePath('/', 'layout');

            return NextResponse.json({
                message: 'Content updated successfully',
                announcements: result.data,
                timestamp: new Date().toISOString()
            });
        }

        return NextResponse.json({
            error: 'Failed to update content',
            details: result.error
        }, { status: 500 });

    } catch (error) {
        return NextResponse.json({
            error: 'Internal Server Error',
            details: String(error)
        }, { status: 500 });
    }
}
