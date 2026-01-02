import blogsData from '@/public/blogs.json';
import BlogCard from './BlogCard';

export default function Blog() {
    return (
        <div className="max-w-2xl">
            <h1 className="text-4xl font-light tracking-tight mb-6">Blog</h1>
            <p className="text-lg leading-relaxed mb-12">
                Thoughts, reflections, and things I've learned along the way.
            </p>

            <div className="space-y-8">
                {blogsData.blogs.map((blog) => (
                    <BlogCard
                        key={blog.slug}
                        slug={blog.slug}
                        title={blog.title}
                        date={blog.date}
                        image={blog.image}
                    />
                ))}
            </div>
        </div>
    );
}
