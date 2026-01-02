import Link from 'next/link';
import { notFound } from 'next/navigation';
import blogsData from '@/public/blogs.json';
import BlogContent from './BlogContent';
import BlogImage from './BlogImage';

interface BlogPageProps {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return blogsData.blogs.map((blog) => ({
        slug: blog.slug,
    }));
}

export default async function BlogPost({ params }: BlogPageProps) {
    const { slug } = await params;
    const blog = blogsData.blogs.find((b) => b.slug === slug);

    if (!blog) {
        notFound();
    }

    return (
        <div className="max-w-2xl">
            <Link
                href="/blog"
                className="inline-block mb-8 text-gray-400 hover:text-gray-600 transition-colors"
            >
                &larr; Back to Blog
            </Link>

            <article className="space-y-6">
                <header className="space-y-4">
                    <h1 className="text-4xl font-light tracking-tight">{blog.title}</h1>
                    <p className="text-gray-400">
                        {new Date(blog.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </p>
                </header>

                <BlogImage image={blog.image} title={blog.title} />

                <BlogContent content={blog.content} />
            </article>
        </div>
    );
}
