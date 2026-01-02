'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface BlogCardProps {
    slug: string;
    title: string;
    date: string;
    image: string;
}

export default function BlogCard({ slug, title, date, image }: BlogCardProps) {
    const [imageError, setImageError] = useState(false);

    return (
        <Link href={`/blog/${slug}`} className="block group max-w-md">
            <article className="space-y-2">
                <div className="relative aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden">
                    {!imageError ? (
                        <Image
                            src={`/blog/photos/${image}`}
                            alt={title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            onError={() => setImageError(true)}
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                            <span className="text-2xl">📝</span>
                        </div>
                    )}
                </div>
                <div className="space-y-0.5">
                    <h2 className="text-lg font-medium group-hover:opacity-70 transition-opacity">
                        {title}
                    </h2>
                    <p className="text-gray-500 font-medium text-sm">
                        {new Date(date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </p>
                </div>
            </article>
        </Link>
    );
}
