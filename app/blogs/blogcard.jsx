'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const BlogCard = ({ blog }) => {
  const {
    title,
    category,
    preview,
    thumbnail,
    publishedAt,
    readTime,
    slug
  } = blog;

  // Convert title to URL-friendly slug if not provided
  const postSlug = slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1a1a1a] rounded-xl border border-gray-800 hover:border-green-500 transition-all duration-300 overflow-hidden group"
    >
      <Link href={`/blogs/${postSlug}`} className="block">
        <div className="relative h-48 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-teal-500/10 group-hover:opacity-50 transition-opacity"></div>
          <img
            src={thumbnail}
            alt={`Featured image for article: ${title}`}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      <div className="p-6 flex flex-col gap-3">
        <header>
          {/* Category Tag */}
          <Link 
            href={`/blogs/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
            className="inline-flex items-center gap-1 text-xs text-green-400 bg-green-500/10 px-3 py-1 rounded-full hover:bg-green-500/20 transition-colors"
          >
            <span>{category}</span>
          </Link>

          {/* Title */}
          <h2 className="text-xl font-bold text-white mt-3 group-hover:text-green-400 transition-colors line-clamp-2">
            <Link href={`/blogs/${postSlug}`}>
              {title}
            </Link>
          </h2>
        </header>

        {/* Preview */}
        <p className="text-gray-400 line-clamp-2">
          {preview}
        </p>

        {/* Footer Info */}
        <footer className="flex items-center justify-between text-sm text-gray-500 mt-2">
          <time dateTime={publishedAt} className="text-gray-400">
            {new Date(publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          <div className="flex items-center gap-1 text-gray-400">
            <span>{readTime} min read</span>
          </div>
        </footer>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-4"
        >
          <Link 
            href={`/blogs/${postSlug}`}
            className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 inline-block text-center"
          >
            Read More
          </Link>
        </motion.div>
      </div>
    </motion.article>
  );
};

export default BlogCard;
