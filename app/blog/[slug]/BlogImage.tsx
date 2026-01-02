'use client';

import Image from 'next/image';
import { useState } from 'react';

interface BlogImageProps {
    image: string;
    title: string;
}

export default function BlogImage({ image, title }: BlogImageProps) {
    const [imageError, setImageError] = useState(false);

    return (
        <div className="relative aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden">
            {!imageError ? (
                <Image
                    src={`/blog/photos/${image}`}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                    onError={() => setImageError(true)}
                />
            ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <span className="text-6xl">📝</span>
                </div>
            )}
        </div>
    );
}
