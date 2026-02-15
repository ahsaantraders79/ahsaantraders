import React from 'react';
import './blog-article.css';

interface ArticleProseProps {
    children: React.ReactNode;
}

export default function ArticleProse({ children }: ArticleProseProps) {
    return (
        <div className="article-prose">
            {children}
        </div>
    );
}
