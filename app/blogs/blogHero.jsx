'use client'
import React from "react";
import NewsletterCTA from "./newsletter";
import Blogheroanimate from "../components/Blogheroanimate";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-black via-green-500 to-black py-16 lg:py-30 px-6 md:px-12 lg:px-24">
      <div className="w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Side - Text */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Unlock the Power of{' '}
            <span className="text-transparent bg-clip-text bg-linear-[149deg,#f0c4fc_5%,#c0c0ff_60%,#c0f8f2_90%,teal]">
              AI
            </span>{' '}
            in Your Business
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-xl">
            Learn how to grow faster, work smarter, and innovate with our latest AI insights, tools, and trends.
          </p>

          {/* Featured Categories */}
          <div className="mt-8">
            <h2 className="text-sm font-semibold text-gray-400 mb-3">Popular Topics</h2>
            <nav aria-label="Blog categories">
              <ul className="flex flex-wrap justify-center lg:justify-start gap-2">
                {['AI for SMBs', 'Marketing Automation', 'Tech Trends', 'How-To Guides'].map((cat) => (
                  <li key={cat}>
                    <a
                      href={`/blogs/category/${cat.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-block text-sm px-4 py-1.5 rounded-md font-medium cursor-pointer bg-white/10 text-white hover:bg-white/20 transition-colors"
                    >
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Right Side - Animation */}
        <div className="flex-1 hidden lg:flex justify-end" aria-hidden="true">
          <Blogheroanimate />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
