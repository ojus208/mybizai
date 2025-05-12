"use client";
import React from 'react'
import { motion, useInView } from 'framer-motion'
import Animation from "./Animation";

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
                                    <motion.li variants={itemVariants}>
                                        <span className='sm:hidden'>Automate customer queries and inventory management</span>
                                        <span className='hidden sm:inline'>Automate repetitive and time-consuming tasks such as responding to customer queries, managing orders, and updating inventory — freeing up your team for more strategic work.</span>
                                    </motion.li>
                                    <motion.li variants={itemVariants}>
                                        <span className='sm:hidden'>24/7 AI-powered customer support</span>
                                        <span className='hidden sm:inline'>Deliver instant, 24/7 support across platforms like WhatsApp, Instagram, and your website, ensuring customers are always attended to with fast, intelligent responses powered by AI.</span>
                                    </motion.li>
                                    <motion.li variants={itemVariants}>
                                        <span className='sm:hidden'>Smart inventory management with AI</span>
                                        <span className='hidden sm:inline'>Streamline your inventory management by tracking stock levels in real time, predicting demand, and reducing stockouts or overstocking with smart AI forecasts.</span>
                                    </motion.li>
                                    <motion.li variants={itemVariants}>
                                        <span className='sm:hidden'>AI-powered marketing campaigns</span>
                                        <span className='hidden sm:inline'>Create high-performing marketing campaigns effortlessly, with AI generating content, creatives, and targeting strategies based on your audience behavior and trends.</span>
                                    </motion.li>
                                    <motion.li variants={itemVariants}>
                                        <span className='sm:hidden'>Real-time business insights</span>
                                        <span className='hidden sm:inline'>Access real-time dashboards and AI-driven insights that help you make faster, more confident business decisions backed by data — not guesswork.</span>
                                    </motion.li>
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
                            <Animation type="scalebiz" className="w-full h-full" />
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
                            <Animation type="customersupport" className="w-full h-full" />
                        </motion.div>

                        <motion.div 
                            variants={cardVariants}
                            className='w-full lg:w-1/2 bg-linear-[149deg,#f0c4fc_5%,#c0c0ff_60%,#c0f8f2_90%,teal] p-0.5 sm:p-1 rounded-md transition-all duration-1000 ease-in-out'
                        >
                            <div className='flex flex-col items-start justify-between bg-black w-full h-full rounded-lg p-3 sm:p-4 md:p-5 inset-4'>
                                <h3 className='text-xl md:text-2xl lg:text-3xl font-bold text-white capitalize mb-3 sm:mb-4 md:mb-6'>
                                    <span className='hidden sm:inline'>Deliver 24/7 Customer Support with AI – Built for Growing Businesses</span>
                                    <span className='sm:hidden'>24/7 AI Customer Support</span>
                                </h3>
                                <ul className='text-gray-400 space-y-3 sm:space-y-4 text-sm md:text-base w-full'>
                                    {[
                                        {
                                            title: "Instant Responses",
                                            mobile: "Automated FAQ handling",
                                            desktop: "Handle FAQs like return policies, product availability, and delivery timelines without human intervention."
                                        },
                                        {
                                            title: "Omnichannel Support",
                                            mobile: "Unified chat system across platforms",
                                            desktop: "Seamlessly manage customer interactions across WhatsApp, Instagram, website chat, and more from one unified system."
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
                                            mobile: "AI-powered customer behavior prediction",
                                            desktop: "Predict Customer Behavior: Leverage machine learning models to forecast buying intent and tailor your messaging accordingly."
                                        },
                                        {
                                            mobile: "Quick AI marketing content creation",
                                            desktop: "AI-Generated Campaigns: Let AI craft high-performing ad copies, email campaigns, and social media posts in minutes."
                                        },
                                        {
                                            mobile: "Automated lead prioritization",
                                            desktop: "Smart Lead Scoring: Automatically prioritize leads based on their likelihood to convert, helping your team close deals faster."
                                        },
                                        {
                                            mobile: "Smart product recommendations",
                                            desktop: "Personalized Recommendations: Deliver product suggestions tailored to individual customer preferences using real-time data."
                                        },
                                        {
                                            mobile: "AI-driven performance tracking",
                                            desktop: "Performance Analytics: Get actionable insights into campaign performance with intelligent reporting and visualizations."
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
                            <Animation type="boostbiz" className="w-full h-full" />
                        </motion.div>
                    </motion.div>
                </motion.section>
            </div>
        </motion.section>
    )
}

export default Transform_ai