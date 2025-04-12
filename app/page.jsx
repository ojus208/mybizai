import React from 'react'
import Hero from './components/hero'
import Features from './components/features'
import Transform_ai from './components/transform_ai'
import FlowSteps from './components/flowsteps'
import TopProductsSection from './components/product_section'
import Link from 'next/link'


const Page = () => {
  return (
    <div className=" min-h-screen ">
    <div className="relative h-auto">
    <Hero/>
    <Transform_ai/>
    <FlowSteps />
    <section className="py-16 bg-black text-white">
  <div className="container mx-auto px-4 text-center max-w-3xl">
    <h2 className="text-3xl font-bold mb-4">
      Discover How AI Can Cut Costs & Boost Your Business Efficiency
    </h2>
    <p className="text-gray-400 mb-8 text-lg">
      Share your business details—like your website, current tools, and daily operations—and our AI-powered analyzer will show you how to reduce costs, automate tasks, and unlock efficiency like never before.
    </p>
    <Link href="/aibusinessanalyzer">
      <button className="bg-white text-black cursor-pointer font-semibold px-6 py-3 rounded-xl hover:bg-gray-200 transition-all duration-300">
        Try the AI Business Analyzer
      </button>
    </Link>
  </div>
</section>

    <TopProductsSection />
    <section className="py-20 bg-gradient-to-b from-black via-blue-800 to-black  text-white">
  <div className="container mx-auto px-4 text-center max-w-3xl">
    <h2 className="text-4xl font-bold mb-4">
      Ready to Unlock the Power of AI for Your Business?
    </h2>
    <p className="text-gray-400 text-lg mb-8">
      MyBizAI helps you simplify operations, boost efficiency, and grow faster with smart tools tailored to your needs. Start your AI journey today — it’s easier than you think.
    </p>
    <a href="/signup">
      <button className="bg-white text-black font-semibold px-8 py-3 rounded-xl hover:bg-gray-200 transition-all duration-300">
        Get Started Now
      </button>
    </a>
  </div>
</section>

{/* <Pricing/> */}
</div>

  </div>
  )
}

export default Page