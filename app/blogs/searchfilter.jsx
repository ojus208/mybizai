'use client'
import React, { useState } from "react";

const categories = [
  "AI for Business",
  "Marketing Automation",
  "Tech Trends",
  "Case Studies",
  "How-To Guides",
];

const SearchAndFilters = ({ onSearch, onCategoryChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch && onSearch(value);
  };

  const handleCategoryClick = (category) => {
    const newCategory = category === activeCategory ? null : category;
    setActiveCategory(newCategory);
    onCategoryChange && onCategoryChange(newCategory);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-6">
      {/* Search Bar */}
      <div className="flex items-center border border-gray-300 rounded-md shadow-sm px-4 py-2 bg-white focus-within:ring-2 focus-within:ring-green-500">
        <svg
          className="w-5 h-5 text-gray-400 mr-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M16 10a6 6 0 11-12 0 6 6 0 0112 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search articles, guides, case studies..."
          className="w-full outline-none text-gray-700"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Filters */}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => handleCategoryClick(cat)}
            className={`text-sm px-4 py-1.5 rounded-md border transition ${
              activeCategory === cat
                ? "bg-green-600 text-white border-green-600"
                : "border-green-100 bg-green-50 text-green-700 hover:bg-green-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchAndFilters;
