'use client'
import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Animation from "./Animation";

const HeroAnalyzer = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const scrollToForm = useCallback(() => {
        if (isClient) {
            const formSection = document.getElementById("ai-form-section");
            if (formSection) {
                formSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [isClient]);

    return (
        <section className="w-full py-20 px-6 bg-gradient-to-b from-black via-red-500 to-black md:px-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 animate-gradient"></div>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl"
                >
                    <div className="text-sm bg-[#1F1F1F] border border-gray-700 rounded-full px-4 py-1 inline-block mb-4">
                        🚀 AI-Powered Business Analysis
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
                        Transform Your Business with AI Analytics
                    </h1>
                    <p className="text-gray-300 text-lg mb-8">
                        Get deep insights into your business performance with our AI-powered analytics platform. Make data-driven decisions and optimize your operations.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={scrollToForm}
                        className="bg-gradient-to-r from-blue-500 to-red-500 text-white font-medium px-8 py-4 rounded-xl w-fit transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                    >
                        Get Started
                    </motion.button>
                </motion.div>

                {/* Optional Image/Visual */}
                <div className="w-full max-w-xl">
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
