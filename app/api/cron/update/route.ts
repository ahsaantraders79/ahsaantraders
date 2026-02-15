import { NextRequest, NextResponse } from 'next/server';
import { updateAnnouncements } from '@/lib/update-content';
import { revalidatePath } from 'next/cache';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
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
