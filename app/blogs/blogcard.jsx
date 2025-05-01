'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Tag } from "lucide-react";

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
    <article className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <Link href={`/blogs/${postSlug}`} className="block">
        <div className="relative h-48 w-full">
          <Image
            src={thumbnail}
            alt={`Featured image for article: ${title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={false}
          />
        </div>
      </Link>

      <div className="p-5 flex flex-col gap-2">
        <header>
          {/* Category Tag */}
          <Link 
            href={`/blogs/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
            className="inline-flex items-center gap-1 text-xs text-blue-700 bg-blue-100 px-3 py-1 rounded-full hover:bg-blue-200 transition-colors"
          >
            <Tag size={12} />
            <span>{category}</span>
          </Link>

          {/* Title */}
          <h2 className="text-lg font-semibold text-gray-900 mt-2 line-clamp-2">
            <Link href={`/blogs/${postSlug}`} className="hover:text-blue-600 transition-colors">
              {title}
            </Link>
          </h2>
        </header>

        {/* Preview */}
        <p className="text-sm text-gray-600 line-clamp-2">
          {preview}
        </p>

        {/* Footer Info */}
        <footer className="flex items-center justify-between text-xs text-gray-500 mt-2">
          <time dateTime={publishedAt} className="text-gray-400">
            {new Date(publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          <div className="flex items-center gap-1">
            <Clock size={12} />
            <span>{readTime} min read</span>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default BlogCard;
