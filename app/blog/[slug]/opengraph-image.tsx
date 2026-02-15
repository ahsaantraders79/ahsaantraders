
import { ImageResponse } from 'next/og';
import { getPostBySlug } from '@/data/blogs';

export const runtime = 'edge';
export const alt = 'Blog Post';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
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
                    Post Not Found
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
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#ffffff', // White
                    backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                    fontFamily: 'sans-serif',
                }}
            >
                {/* Main Card Container */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        width: '85%',
                        height: '80%',
                        backgroundColor: '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: 32,
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                        padding: 60,
                    }}
                >
                    {/* Header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: 24,
                            fontWeight: 700,
                            color: '#1e293b',
                        }}>
                            <div style={{
                                width: 12,
                                height: 12,
                                borderRadius: '50%',
                                background: '#3b82f6',
                                marginRight: 12,
                            }}></div>
                            Ahsaan Traders Blog
                        </div>
                        <div style={{
                            fontSize: 20,
                            color: '#64748b',
                            background: '#f1f5f9',
                            padding: '8px 16px',
                            borderRadius: 99,
                        }}>
                            {post.publishDate}
                        </div>
                    </div>

                    {/* Title */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        flex: 1,
                    }}>
                        <div style={{
                            fontSize: 64,
                            fontWeight: 900,
                            letterSpacing: '-2px',
                            lineHeight: 1.1,
                            color: '#0f172a',
                            marginBottom: 24,
                            maxWidth: '100%',
                        }}>
                            {post.title}
                        </div>
                        <div style={{
                            fontSize: 32,
                            color: '#64748b',
                            lineHeight: 1.4,
                            maxWidth: '90%',
                        }}>
                            {post.excerpt.substring(0, 120)}...
                        </div>
                    </div>

                    {/* Footer / Author */}
                    <div style={{ display: 'flex', alignItems: 'center', borderTop: '2px solid #f1f5f9', paddingTop: 32 }}>
                        {/* Avatar Placeholder */}
                        <div style={{
                            width: 56,
                            height: 56,
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #60a5fa, #2563eb)',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 24,
                            fontWeight: 700,
                            marginRight: 20,
                        }}>
                            {post.author.charAt(0)}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ fontSize: 24, fontWeight: 600, color: '#1e293b' }}>
                                {post.author}
                            </div>
                            <div style={{ fontSize: 18, color: '#94a3b8' }}>
                                {post.category || 'Expert Guide'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
