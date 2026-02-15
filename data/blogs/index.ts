
import { post as post1 } from './roof-waterproofing-karachi';

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    primaryKeyword: string;
    serviceSlug: string;
    publishDate: string;
    updatedDate: string;
    readTime: string;
    author: string;
    coverImage: string;
    tags: string[];
    pinned: boolean; // For "Important Blogs" section
    category: string;
    promise: string; // One-line promise statement
    faq: { question: string; answer: string }[];
    sections: {
        heading?: string;
        title?: string; // For InfoBox titles
        content: string; // Markdown supported
        type?: 'text' | 'list' | 'warning' | 'tip' | 'quote' | 'pros-cons' | 'pricing' | 'answer';
    }[];
}

export const blogPosts: BlogPost[] = [
    post1,
];

export function getAllPosts(): BlogPost[] {
    return blogPosts.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find(post => post.slug === slug);
}

export function getRelatedPosts(currentSlug: string, count: number = 2): BlogPost[] {
    return blogPosts
        .filter(post => post.slug !== currentSlug)
        .slice(0, count);
}

export function getPinnedPosts(): BlogPost[] {
    return blogPosts.filter(post => post.pinned);
}
