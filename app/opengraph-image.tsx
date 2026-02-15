
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Ahsaan Traders - Waterproofing Experts';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
    // Fonts
    // We can load Google Fonts here. For simplicity and speed in this demo, 
    // we'll rely on system default sans-serif or fetch if needed.
    // But to look "Big Tech", a good font is key. 
    // Let's try to fetch Inter Bold.

    // Note: In production, you should fetch fonts from the deployment URL or import them.
    // For now, we'll use standard sans-serif with heavy weight.

    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#1e293b', // Slate 800
                    backgroundImage: 'radial-gradient(circle at 25px 25px, #334155 2%, transparent 0%), radial-gradient(circle at 75px 75px, #334155 2%, transparent 0%)',
                    backgroundSize: '100px 100px',
                    color: 'white',
                    fontFamily: 'sans-serif',
                }}
            >
                {/* Logo/Brand Area */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 40 }}>
                    {/* Simple Icon Simulation or Text Logo */}
                    <div style={{
                        width: 80,
                        height: 80,
                        borderRadius: 20,
                        background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 30,
                        boxShadow: '0 10px 30px -10px rgba(37,99,235,0.5)'
                    }}>
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                    </div>
                </div>

                {/* Main Title */}
                <div style={{
                    fontSize: 80,
                    fontWeight: 900,
                    letterSpacing: '-2px',
                    textAlign: 'center',
                    lineHeight: 1.1,
                    backgroundImage: 'linear-gradient(to bottom right, #ffffff, #94a3b8)',
                    backgroundClip: 'text',
                    color: 'transparent',
                    marginBottom: 30,
                }}>
                    Ahsaan Traders
                </div>

                {/* Subtitle / Tagline */}
                <div style={{
                    fontSize: 36,
                    color: '#94a3b8',
                    textAlign: 'center',
                    maxWidth: 900,
                    fontWeight: 500,
                }}>
                    Waterproofing & Construction Solutions
                </div>

                {/* Footer / CTA */}
                <div style={{
                    marginTop: 60,
                    display: 'flex',
                    alignItems: 'center',
                    background: 'rgba(255,255,255,0.1)',
                    padding: '12px 32px',
                    borderRadius: 50,
                    border: '1px solid rgba(255,255,255,0.1)',
                }}>
                    <div style={{ fontSize: 24, fontWeight: 600, color: '#60a5fa', marginRight: 16 }}>
                        ahsaantraders.com
                    </div>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#475569', marginRight: 16 }}></div>
                    <div style={{ fontSize: 24, color: '#e2e8f0' }}>
                        Karachi
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
