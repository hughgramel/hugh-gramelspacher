'use client';

import Markdown from 'react-markdown';

interface BlogContentProps {
    content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
    return (
        <div className="prose prose-lg max-w-none">
            <Markdown
                components={{
                    h1: ({ children }) => (
                        <h1 className="text-3xl font-medium mt-8 mb-4">{children}</h1>
                    ),
                    h2: ({ children }) => (
                        <h2 className="text-2xl font-medium mt-8 mb-4">{children}</h2>
                    ),
                    h3: ({ children }) => (
                        <h3 className="text-xl font-medium mt-6 mb-3">{children}</h3>
                    ),
                    p: ({ children }) => (
                        <p className="text-lg leading-relaxed mb-4">{children}</p>
                    ),
                    ul: ({ children }) => (
                        <ul className="list-disc list-inside space-y-2 mb-4 text-lg">{children}</ul>
                    ),
                    ol: ({ children }) => (
                        <ol className="list-decimal list-inside space-y-2 mb-4 text-lg">{children}</ol>
                    ),
                    li: ({ children }) => (
                        <li className="leading-relaxed">{children}</li>
                    ),
                    strong: ({ children }) => (
                        <strong className="font-semibold">{children}</strong>
                    ),
                    em: ({ children }) => (
                        <em className="italic">{children}</em>
                    ),
                    a: ({ href, children }) => (
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline underline-offset-2 hover:opacity-70"
                        >
                            {children}
                        </a>
                    ),
                    code: ({ children, className }) => {
                        const isBlock = className?.includes('language-');
                        if (isBlock) {
                            return (
                                <code className="block bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto mb-4">
                                    {children}
                                </code>
                            );
                        }
                        return (
                            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">
                                {children}
                            </code>
                        );
                    },
                    pre: ({ children }) => (
                        <pre className="mb-4">{children}</pre>
                    ),
                    blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">
                            {children}
                        </blockquote>
                    ),
                }}
            >
                {content}
            </Markdown>
        </div>
    );
}
