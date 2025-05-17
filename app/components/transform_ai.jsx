"use client";
import React, { Suspense } from 'react'
import { motion, useInView } from 'framer-motion'
import dynamic from 'next/dynamic'

// Dynamically import Animation component
const Animation = dynamic(() => import('./Animation'), {
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-pulse bg-gray-200 rounded-lg w-full h-full"></div>
    </div>
  ),
  ssr: false
})

const Transform_ai = () => {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

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
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    const cardVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    return (
        <motion.section 
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="relative min-h-screen z-10 bg-black p-4 sm:p-6 md:p-8 lg:p-10"
        >
            <div className='container mx-auto px-4'>
                <motion.div 
                    variants={itemVariants}
                    className="text-center py-6 md:py-8 lg:py-10 mb-6 md:mb-8 lg:mb-10"
                >
                    <h2 className='text-3xl md:text-4xl lg:text-6xl font-bold text-white capitalize'>
                        Transform your business with <span className='text-transparent bg-clip-text bg-linear-[149deg,#f0c4fc_5%,#c0c0ff_60%,#c0f8f2_90%,teal]'>AI</span>
                    </h2>
                    <p className='text-gray-500 mt-4 text-lg md:text-xl lg:text-2xl px-4'>
                        Embrace the future of business with AI-driven solutions.
                    </p>
                </motion.div>
                
                <motion.section 
                    variants={containerVariants}
                    className='flex flex-col gap-12 md:gap-16 lg:gap-20'
                >
                    {/* First Section */}
                    <motion.div 
                        variants={itemVariants}
                        className='flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12'
                    >
                        <motion.div 
                            variants={cardVariants}
                            className='w-full lg:w-1/2 bg-linear-[149deg,#f0c4fc_5%,#c0c0ff_60%,#c0f8f2_90%,teal] p-1 rounded-md transition-all duration-1000 ease-in-out'
                        >
                            <div className='flex flex-col items-start justify-between bg-black w-full h-full rounded-lg p-4 md:p-5 inset-4'>
                                <h3 className='text-xl md:text-3xl font-bold text-white capitalize mb-4'>
                                    Transform and Scale Your Business with AI-Powered Automation and Smart Insights
                                </h3>
                                <ul className='text-gray-400 gap-4 flex flex-col text-sm md:text-base'>
                                    {[
                                        {
                                            title: "Automated Workflows",
                                            mobile: "Streamline operations",
                                            desktop: "Automate repetitive tasks and workflows to save time and reduce errors, letting your team focus on growth."
                                        },
                                        {
                                            title: "Smart Analytics",
                                            mobile: "Data-driven insights",
                                            desktop: "Get real-time insights and predictions to make informed decisions and stay ahead of market trends."
                                        },
                                        {
                                            title: "AI-Powered Marketing",
                                            mobile: "Targeted campaigns",
                                            desktop: "Create and optimize marketing campaigns with AI that understands your audience and maximizes ROI."
                                        }
                                    ].map((item, index) => (
                                        <motion.li key={index} variants={itemVariants}>
                                            <span className='sm:hidden'>{item.mobile}</span>
                                            <span className='hidden sm:inline'>{item.desktop}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className='mt-6 md:mt-8 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-full sm:w-auto'
                                >
                                    Get Started
                                </motion.button>
                            </div>
                        </motion.div>

                        <motion.div 
                            variants={cardVariants}
                            className='w-full lg:w-1/2 flex justify-center'
                        >
                            <Suspense fallback={
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="animate-pulse bg-gray-200 rounded-lg w-full h-full"></div>
                                </div>
                            }>
                                <Animation type="scalebiz" className="w-full h-full" />
                            </Suspense>
                        </motion.div>
                    </motion.div>

                    {/* Second Section */}
                    <motion.div 
                        variants={itemVariants}
                        className='flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-12'
                    >
                        <motion.div 
                            variants={cardVariants}
                            className='w-full lg:w-1/2 flex justify-center'
                        >
                            <Suspense fallback={
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="animate-pulse bg-gray-200 rounded-lg w-full h-full"></div>
                                </div>
                            }>
                                <Animation type="customersupport" className="w-full h-full" />
                            </Suspense>
                        </motion.div>

                        <motion.div 
                            variants={cardVariants}
                            className='w-full lg:w-1/2 bg-linear-[149deg,#f0c4fc_5%,#c0c0ff_60%,#c0f8f2_90%,teal] p-0.5 sm:p-1 rounded-md transition-all duration-1000 ease-in-out'
                        >
                            <div className='flex flex-col items-start justify-between bg-black w-full h-full rounded-lg p-4 md:p-5 inset-4'>
                                <h3 className='text-xl md:text-3xl font-bold text-white capitalize mb-4'>
                                    Enhance Customer Experience with AI-Powered Support
                                </h3>
                                <ul className='text-gray-400 gap-4 flex flex-col text-sm md:text-base'>
                                    {[
                                        {
                                            title: "Smart Responses",
                                            mobile: "AI-powered chat support",
                                            desktop: "Provide instant, accurate responses to customer queries 24/7 with our AI chatbot."
                                        },
                                        {
                                            title: "Personalized Interactions",
                                            mobile: "Smart customer recognition & responses",
                                            desktop: "Use AI to recognize returning customers, understand preferences, and offer tailored responses for a better customer experience."
                                        },
                                        {
                                            title: "24/7 Availability",
                                            mobile: "Round-the-clock AI support",
                                            desktop: "Ensure your customers are never left waiting—AI handles queries around the clock, even outside of business hours"
                                        }
                                    ].map((item, index) => (
                                        <motion.li 
                                            key={index}
                                            variants={itemVariants}
                                            className='bg-black/40 rounded-lg p-2 sm:p-3 md:p-4 backdrop-blur-sm'
                                        >
                                            <span className='font-semibold text-[#c0c0ff] text-base md:text-lg'>{item.title}:</span>
                                            <br />
                                            <span className='sm:hidden block mt-1'>{item.mobile}</span>
                                            <span className='hidden sm:block mt-1'>{item.desktop}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className='mt-4 sm:mt-6 md:mt-8 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 w-full sm:w-auto text-sm md:text-base'
                                >
                                    Get Started
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Third Section */}
                    <motion.div 
                        variants={itemVariants}
                        className='flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12'
                    >
                        <motion.div 
                            variants={cardVariants}
                            className='w-full lg:w-1/2 bg-linear-[149deg,#f0c4fc_5%,#c0c0ff_60%,#c0f8f2_90%,teal] p-1 rounded-md transition-all duration-1000 ease-in-out'
                        >
                            <div className='flex flex-col items-start justify-between bg-black w-full h-full rounded-lg p-4 md:p-5 inset-4'>
                                <h3 className='text-2xl md:text-3xl font-bold text-white capitalize mb-4'>
                                    Boost Your Sales and Marketing Strategy with AI-Powered Insights
                                </h3>
                                <ul className='text-gray-400 gap-4 flex flex-col text-sm md:text-base'>
                                    {[
                                        {
                                            title: "Smart Campaigns",
                                            mobile: "AI-driven marketing",
                                            desktop: "Create and optimize marketing campaigns with AI that understands your audience and maximizes ROI."
                                        },
                                        {
                                            title: "Predictive Analytics",
                                            mobile: "Future trend insights",
                                            desktop: "Use AI to predict market trends and customer behavior, staying ahead of the competition."
                                        },
                                        {
                                            title: "Personalized Content",
                                            mobile: "Tailored messaging",
                                            desktop: "Deliver personalized content and offers to each customer based on their behavior and preferences."
                                        }
                                    ].map((item, index) => (
                                        <motion.li key={index} variants={itemVariants}>
                                            <span className='sm:hidden'>{item.mobile}</span>
                                            <span className='hidden sm:inline'>{item.desktop}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className='mt-6 md:mt-8 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-full sm:w-auto'
                                >
                                    Get Started
                                </motion.button>
                            </div>
                        </motion.div>

                        <motion.div 
                            variants={cardVariants}
                            className='w-full lg:w-1/2 flex justify-center'
                        >
                            <Suspense fallback={
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="animate-pulse bg-gray-200 rounded-lg w-full h-full"></div>
                                </div>
                            }>
                                <Animation type="boostbiz" className="w-full h-full" />
                            </Suspense>
                        </motion.div>
                    </motion.div>
                </motion.section>
            </div>
        </motion.section>
    )
}

export default Transform_ai