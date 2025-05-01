import React from "react";

const NewsletterCTA = () => {
  return (
    <div className="bg-transparent mb-20 border-gray-100  rounded-2xl max-w-4xl mx-auto p-4 mt-4 text-center shadow-md">
      <h2 className="text-2xl text-white sm:text-xl font-bold text-gray-900">
        📬 Join 100+ business owners learning AI
      </h2>
      <p className="text-gray-600 text-white mt-2">
        Get exclusive tips, tools, and insights on how to use AI to grow your business. No spam, we promise.
      </p>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-3"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:w-96 px-4 py-3 text-white rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-colors duration-200"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterCTA;
