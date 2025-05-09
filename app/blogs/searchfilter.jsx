'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";

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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto mt-6"
    >
      {/* Search Bar */}
      <div className="relative">
        <svg
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
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
          className="w-full bg-[#1a1a1a] border border-gray-700 text-gray-300 rounded-lg pl-12 pr-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Filters */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-6 flex flex-wrap gap-3"
      >
        {categories.map((cat, idx) => (
          <motion.button
            key={idx}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleCategoryClick(cat)}
            className={`px-6 py-2 rounded-full bg-[#1a1a1a] border ${
              activeCategory === cat
                ? 'border-green-500 text-green-400'
                : 'border-gray-700 text-gray-300 hover:border-green-500 hover:text-green-400'
            } transition-all`}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SearchAndFilters;
