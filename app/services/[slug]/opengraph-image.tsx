
import { ImageResponse } from 'next/og';
import { getServiceBySlug } from '@/lib/services-data';

export const runtime = 'edge';
export const alt = 'Service Detail';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        return new ImageResponse(
            (
                <div
                    style={{
                        fontSize: 48,
                        background: 'white',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    Service Not Found
                </div>
            ),
            { ...size }
        );
    }

    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#0f172a', // Slate 900
                    backgroundImage: 'linear-gradient(to bottom right, #0f172a, #1e293b)',
                    color: 'white',
                    fontFamily: 'sans-serif',
                    padding: 80,
                    justifyContent: 'space-between',
                }}
            >
                {/* Header Brand */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{
                        width: 40,
                        height: 40,
                        borderRadius: 8,
                        background: '#3b82f6',
                        marginRight: 16,
                    }}></div>
                    <div style={{ fontSize: 24, fontWeight: 700, color: '#94a3b8' }}>Ahsaan Traders</div>
                </div>

                {/* Main Content */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{
                        fontSize: 24,
                        color: '#60a5fa',
                        fontWeight: 600,
                        marginBottom: 16,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                    }}>
                        Service
                    </div>
                    <div style={{
                        fontSize: 80,
                        fontWeight: 900,
                        letterSpacing: '-2px',
                        lineHeight: 1,
                        marginBottom: 24,
                        backgroundImage: 'linear-gradient(to right, #ffffff, #cbd5e1)',
                        backgroundClip: 'text',
                        color: 'transparent',
                    }}>
                        {service.title}
                    </div>
                    <div style={{
                        fontSize: 32,
                        color: '#94a3b8',
                        maxWidth: 900,
                        lineHeight: 1.4,
                    }}>
                        {service.metaDescription.substring(0, 100)}...
                    </div>
                </div>

                {/* Footer / CTA */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 40,
                    borderTop: '1px solid #334155',
                    paddingTop: 40,
                }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ fontSize: 24, fontWeight: 600, color: 'white', marginRight: 30 }}>
                            0321-2420460
                        </div>
                        <div style={{ fontSize: 24, color: '#94a3b8' }}>
                            Karachi
                        </div>
                    </div>
                    <div style={{
                        background: '#2563eb',
                        color: 'white',
                        padding: '12px 32px',
                        borderRadius: 12,
                        fontSize: 20,
                        fontWeight: 600,
                    }}>
                        Book Free Inspection
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
