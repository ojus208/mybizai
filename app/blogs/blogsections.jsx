import React from "react";
import BlogCard from "./blogcard";

const BlogListSection = ({ blogs, searchTerm, selectedCategory }) => {
    const filteredBlogs = blogs.filter((blog) => {
        const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.preview.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory = selectedCategory ? blog.category === selectedCategory : true;

        return matchesSearch && matchesCategory;
    });


    return (
        <div className="max-w-6xl bg-black mx-auto px-4 py-10">
            <h2 className="text-2xl font-semibold mb-6 text-white">
                {filteredBlogs.length > 0
                    ? "Recent Blog Posts"
                    : "No blogs found. Try adjusting your search or filters."}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBlogs.map((blog, index) => (
                    <BlogCard key={index} blog={blog} />
                ))}
            </div>
        </div>
    );
};

export default BlogListSection;
