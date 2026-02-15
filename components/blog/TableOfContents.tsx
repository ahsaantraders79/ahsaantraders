
import React from 'react';

interface TableOfContentsProps {
    toc: { id: string; title: string }[];
}

export default function TableOfContents({ toc }: TableOfContentsProps) {
    return (
        <div className="hidden lg:block">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                On this page
            </h4>
            <nav className="border-l border-slate-200 relative">
                {toc.map((item, i) => (
                    <a
                        key={i}
                        href={`#${item.id}`}
                        className="block py-2 pl-4 text-sm text-slate-600 hover:text-blue-700 hover:border-l-2 hover:border-blue-700 -ml-[1px] transition-all duration-200 ease-in-out text-pretty hover:bg-slate-50 rounded-r-md"
                    >
                        {item.title}
                    </a>
                ))}
            </nav>
        </div>
    );
}
