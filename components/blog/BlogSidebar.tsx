import React from 'react';
import TOC from './TOC';
import RelatedPosts from './RelatedPosts';
import SidebarCTA from './SidebarCTA';
import { BlogPost } from '@/data/blogs';

interface BlogSidebarProps {
    toc: { id: string; text: string; level: number }[];
    relatedPosts: BlogPost[];
}

export default function BlogSidebar({ toc, relatedPosts }: BlogSidebarProps) {
    return (
        <aside className="lg:col-span-4 lg:pl-12 relative mt-16 lg:mt-0">
            <div className="space-y-10">
                {/* TOC Component handles its own stickiness */}
                {toc.length > 0 && <TOC headings={toc} />}

                {/* CTA */}
                <div className="sticky top-[400px]">
                    <SidebarCTA />
                </div>

                <div className="pt-8 border-t border-slate-100">
                    <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-wider">Related Reads</h5>
                    <RelatedPosts posts={relatedPosts} />
                </div>
            </div>
        </aside>
    );
}
