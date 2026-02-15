
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/data/blogs';

interface RelatedPostsProps {
    posts: BlogPost[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
    if (posts.length === 0) return null;

    return (
        <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                Related Reading
            </h4>
            <div className="space-y-4">
                {posts.map(rp => (
                    <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group flex gap-3 items-start">
                        <div className="w-16 h-16 rounded-lg overflow-hidden relative flex-shrink-0 bg-slate-100">
                            <Image
                                src={rp.coverImage}
                                alt={rp.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div>
                            <h5 className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                                {rp.title}
                            </h5>
                            <span className="text-[10px] text-slate-400 mt-1 block uppercase font-medium">{rp.readTime}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
