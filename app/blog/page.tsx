import { Metadata } from 'next';
import { getAllPosts } from '@/data/blogs';
import BlogCard from '@/components/blog/BlogCard';
import ContactCTA from '@/components/blog/ContactCTA';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
    title: 'Waterproofing & Construction Blog | Ahsaan Traders Karachi',
    description: 'Expert guides on roof waterproofing, heat proofing, and home maintenance in Karachi. Real solutions for local leakage problems.',
    openGraph: {
        title: 'Ahsaan Traders Blog - Expert Insights',
        description: 'Practical guides for waterproofing and construction in Karachi.',
        type: 'website',
        url: 'https://www.ahsaantraders.com/blog',
    },
    alternates: {
        canonical: 'https://www.ahsaantraders.com/blog',
    },
};

export const revalidate = 3600;

export default function BlogIndexPage() {
    const allPosts = getAllPosts();

    return (
        <div className="bg-slate-50 min-h-screen">
            <Breadcrumb
                title="Ahsaan Traders Blog"
                subtitle="Practical guides for waterproofing, heat-proofing, and construction solutions in Karachi."
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Blog' },
                ]}
            />

            {/* Blog List Section */}
            <section className="py-16 sm:py-20 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Posts Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {allPosts.map((post) => (
                            <BlogCard key={post.slug} post={post} />
                        ))}
                    </div>

                    {/* Empty State */}
                    {allPosts.length === 0 && (
                        <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
                            <svg className="w-16 h-16 mx-auto text-slate-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                            <p className="text-slate-500 text-lg font-medium">No articles yet</p>
                            <p className="text-slate-400 text-sm mt-1">Check back soon for expert guides!</p>
                        </div>
                    )}

                    {/* Bottom CTA */}
                    <div className="mt-16 sm:mt-20">
                        <ContactCTA />
                    </div>

                </div>
            </section>
        </div>
    );
}
