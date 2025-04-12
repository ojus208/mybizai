import React from "react";

const BlogCard = ({ blog }) => {
  const {
    title,
    category,
    preview,
    thumbnail,
    publishedAt,
    readTime,
  } = blog;

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-5 flex flex-col gap-2">
        {/* Category Tag */}
        <span className="text-xs text-blue-700 bg-blue-100 px-3 py-1 rounded-full w-fit">
          {category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-900 line-clamp-2">
          {title}
        </h2>

        {/* Preview */}
        <p className="text-sm text-gray-600 line-clamp-2">
          {preview}
        </p>

        {/* Footer Info */}
        <div className="text-xs text-gray-400 mt-2">
          {publishedAt} • {readTime} min read
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
