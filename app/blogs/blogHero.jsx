import React from "react";
import NewsletterCTA from "./newsletter";

const categories = ["AI for SMBs", "Marketing Automation", "Tech Trends", "How-To Guides"];

const HeroSection = () => {
  return (
    <section className="w-full bg-gradient-to-b items-center from-black via-green-500 to-black py-16 lg:py-20 px-6 md:px-12 lg:px-24">
      <div className="w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left Side - Text */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Unlock the Power of <span className="text-transparent bg-clip-text bg-linear-[149deg,#f0c4fc_5%,#c0c0ff_60%,#c0f8f2_90%,teal]">AI</span> in Your Business
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-xl">
            Learn how to grow faster, work smarter, and innovate with our latest AI insights, tools, and trends.
          </p>
          <NewsletterCTA />

          {/* Search Bar
          <div className="mt-6 max-w-xl mx-auto lg:mx-0">
            <div className="flex items-center  rounded-md shadow-sm px-4 py-2 bg-white focus-within:ring-2 focus-within:ring-blue-500">
              <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M16 10a6 6 0 11-12 0 6 6 0 0112 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search articles, guides, case studies..."
                className="w-full outline-none text-gray-700"
              />
            </div>
          </div> */}

          {/* Category Filters */}
          {/* <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-2">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className="text-sm px-4 py-1.5 rounded-md font-bold cursor-pointer bg-green-50 text-green-700 hover:bg-green-100 transition"
              >
                {cat}
              </button>
            ))}
          </div> */}
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 hidden lg:flex justify-end">
          <img
            src="https://illustrations.popsy.co/gray/robot-reading.svg"
            alt="AI for business illustration"
            className="w-full max-w-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
