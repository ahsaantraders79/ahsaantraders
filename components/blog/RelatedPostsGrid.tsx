import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/data/blogs';

interface RelatedPostsGridProps {
    posts: BlogPost[];
}

export default function RelatedPostsGrid({ posts }: RelatedPostsGridProps) {
    if (posts.length === 0) return null;

    return (
        <section className="mt-16 max-w-[680px] mx-auto">
            <div className="border-t-2 border-slate-200 pt-10">
                <h3 className="text-2xl font-extrabold text-slate-900 mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="relative h-40 overflow-hidden">
                                <Image
                                    src={post.coverImage}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-4 flex flex-col flex-grow">
                                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                                    {post.category || 'Guide'}
                                </span>
                                <h4 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                                    {post.title}
                                </h4>
                                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-3">
                                    {post.excerpt}
                                </p>
                                <span className="mt-auto text-sm font-bold text-blue-600">
                                    Read Article →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
