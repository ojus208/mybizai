'use client'
import React from "react";
import Animation from "./Animation";
const HeroAnalyzer = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("ai-form-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-black via-purple-500  to-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="max-w-2xl">
          <div className="text-sm bg-[#1F1F1F] border border-gray-700 rounded-full px-4 py-1 inline-block mb-4">
            🚀 Free AI Tool for Businesses
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Instantly Discover How AI Can Boost Your Business — For Free
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            No login. No signup. Just enter your business site or operation type and get instant AI-powered insights to cut costs, improve efficiency, and scale smarter.
          </p>
          <button
            onClick={scrollToForm}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition duration-300"
          >
            Analyze My Business Now
          </button>
        </div>

        {/* Optional Image/Visual */}
        <div className=" w-full max-w-xl">
          {/* <img
            src="/images/ai-analyzer-hero.png" // Replace with your illustration path
            alt="AI Analyzing Illustration"
            className="w-full h-auto"
          /> */}
          <Animation type="analyzer" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroAnalyzer;
