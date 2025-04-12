

import { notFound } from "next/navigation";

import dummyBlogs from "./data"; // Replace with real data source
import BlogListSection from "../blogsections";


export default async function BlogPostPage({ params }) {
  const blog = dummyBlogs.find((b) => b.slug === params.slug);
  if (!blog) return notFound();

  return (
    <div className="bg-black text-white min-h-screen">
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="text-sm uppercase text-green-500 font-semibold">
        {blog.category}
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold mt-2 text-white">
        {blog.title}
      </h1>

      <p className="text-gray-100 mt-2 text-sm">
        {blog.publishedAt} · {blog.readTime} min read
      </p>

      <img
        src={blog.thumbnail}
        alt={blog.title}
        className="w-full h-auto mt-6 rounded-xl"
      />

<div className="prose prose-slate max-w-none mt-8">
  <div dangerouslySetInnerHTML={{ __html: blog.contentHtml }} />
</div>
    </div>
    <BlogListSection
            blogs={dummyBlogs}
            searchTerm={""}
            selectedCategory={null}
          />
    </div>
  );
}
