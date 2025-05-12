'use client'
import React from "react";
import NewsletterCTA from "./newsletter";
import Animation from "../components/Animation";
import { motion } from 'framer-motion'

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative w-full bg-gradient-to-b from-black via-green-500 to-black py-16 lg:py-30 px-6 md:px-12 lg:px-24"
    >
      <div className="w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Side - Text */}
        <motion.div 
          variants={itemVariants}
          className="flex-1 text-center lg:text-left"
        >
          <motion.h1 
            variants={textVariants}
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Unlock the Power of{' '}
            <motion.span 
              variants={textVariants}
              className="text-transparent bg-clip-text bg-linear-[149deg,#f0c4fc_5%,#c0c0ff_60%,#c0f8f2_90%,teal]"
            >
              AI
            </motion.span>{' '}
            in Your Business
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="mt-4 text-lg text-gray-300 max-w-xl"
          >
            Learn how to grow faster, work smarter, and innovate with our latest AI insights, tools, and trends.
          </motion.p>

          {/* Featured Categories */}
          <motion.div 
            variants={itemVariants}
            className="mt-8"
          >
            <h2 className="text-sm font-semibold text-gray-400 mb-3">Popular Topics</h2>
            <nav aria-label="Blog categories">
              <ul className="flex flex-wrap justify-center lg:justify-start gap-2">
                {['AI for SMBs', 'Marketing Automation', 'Tech Trends', 'How-To Guides'].map((cat, index) => (
                  <motion.li 
                    key={cat}
                    variants={itemVariants}
                    custom={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      className="inline-block text-sm px-4 py-1.5 rounded-md font-medium cursor-pointer bg-white/10 text-white hover:bg-white/20 transition-colors"
                    >
                      {cat}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </motion.div>

        {/* Right Side - Animation */}
        <motion.div 
          variants={itemVariants}
          className="flex-1 hidden lg:flex justify-end" 
          aria-hidden="true"
        >
          <Animation type="blog" className="w-full h-full" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
