import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/data/blogs';

interface BlogCardProps {
    post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className="group block bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-slate-300/80 hover:-translate-y-1 transition-all duration-300"
        >
            {/* Image */}
            <div className="relative h-52 sm:h-56 lg:h-60 overflow-hidden">
                <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className="inline-block bg-blue-600 text-white text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-blue-600/30">
                        {post.category || post.primaryKeyword}
                    </span>
                </div>

                {/* Read Time Badge */}
                <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm text-slate-700 text-[11px] font-semibold px-2.5 py-1.5 rounded-full shadow-sm">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {post.readTime}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6">
                {/* Meta Row */}
                <div className="flex items-center gap-2 text-xs text-slate-400 font-medium mb-3">
                    <span>{post.publishDate}</span>
                    {post.author && (
                        <>
                            <span className="w-1 h-1 rounded-full bg-slate-300" />
                            <span>By {post.author}</span>
                        </>
                    )}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-5">
                    {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                        {post.tags.slice(0, 2).map(tag => (
                            <span
                                key={tag}
                                className="text-[11px] font-medium text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Read More */}
                    <span className="inline-flex items-center gap-1.5 text-blue-600 text-sm font-semibold group-hover:gap-2.5 transition-all">
                        Read
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </span>
                </div>
            </div>
        </Link>
    );
}
