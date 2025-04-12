import Image from 'next/image'
import React from 'react'
import ai_automation1 from '@/public/assets/ai_automation1.png'
import transform_ai2 from '@/public/assets/transform_ai2.png'
import transform_ai3 from '@/public/assets/transform_ai3.png'


const Transform_ai = () => {
    return (
        <section className='relative min-h-screen z-10   bg-black p-10'>
            <div className='w-full text-center py-10 mb-10 '>
                <h2 className='lg:text-6xl font-bold text-white capitalize '>
                    Transform your business with <span className='text-transparent bg-clip-text bg-linear-[149deg,#f0c4fc_5%,#c0c0ff_60%,#c0f8f2_90%,teal] '>AI</span>
                </h2>
                <p className='text-gray-500 mt-4 lg:text-2xl'>
                    Embrace the future of business with AI-driven solutions. <br />
                    {/* Discover how AI can revolutionize your business operations, from automating tasks to enhancing customer experiences. <br/>
                Explore the endless possibilities of AI and take your business to the next level. */}
                </p>
            </div>
            <section className='flex flex-col lg:gap-30'>
                <div className='flex justify-around items-center '>
                    <div className='bg-linear-[149deg,#f0c4fc_5%,#c0c0ff_60%,#c0f8f2_90%,teal] p-1 rounded-md transition-all duration-1000 ease-in-out'>
                        <div className='flex flex-col items-start justify-between lg:max-w-[700px]  bg-black w-full h-full  rounded-lg p-5 inset-4 '>
                            <h3 className='text-3xl font-bold text-white capitalize mb-2 '>
                                Transform and Scale Your Business with AI-Powered Automation and Smart Insights
                            </h3>
                            <ul className='text-gray-400 gap-5 flex flex-col '>
                                <li>
                                    Automate repetitive and time-consuming tasks such as responding to customer queries, managing orders, and updating inventory — freeing up your team for more strategic work.
                                </li>
                                <li>
                                    Deliver instant, 24/7 support across platforms like WhatsApp, Instagram, and your website, ensuring customers are always attended to with fast, intelligent responses powered by AI.
                                </li>
                                <li>
                                    Streamline your inventory management by tracking stock levels in real time, predicting demand, and reducing stockouts or overstocking with smart AI forecasts.
                                </li>
                                <li>
                                    Create high-performing marketing campaigns effortlessly, with AI generating content, creatives, and targeting strategies based on your audience behavior and trends.
                                </li>
                                <li>
                                    Access real-time dashboards and AI-driven insights that help you make faster, more confident business decisions backed by data — not guesswork.
                                </li>
                            </ul>
                            <button className='mt-10 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300'>
                                Get Started
                            </button>

                        </div>
                    </div>

                    <div>
                        <Image src={ai_automation1} alt='AI powered marketing automation' />
                    </div>
                </div>
                <div className='flex justify-around items-center '>

                    <div>
                        <Image src={transform_ai2} alt='AI powered marketing automation' />
                    </div>
                    <div className='bg-linear-[149deg,#f0c4fc_5%,#c0c0ff_60%,#c0f8f2_90%,teal] p-1 rounded-md transition-all duration-1000 ease-in-out'>
                        <div className='flex flex-col items-start justify-between bg-black lg:max-w-[700px] w-full h-full  rounded-lg p-5 inset-4'>
                            <h3 className='text-3xl font-bold text-white capitalize mb-2 '>
                                Deliver 24/7 Customer Support with AI – Built for Growing Businesses
                            </h3>
                            <ul className='text-gray-400 space-y-2  '>
                                <li>
                                    Instant Responses to Common Queries: <br />
                                    Handle FAQs like return policies, product availability, and delivery timelines without human intervention.
                                </li>
                                <li>
                                    Omnichannel Support Integration:
                                    Seamlessly manage customer interactions across WhatsApp, Instagram, website chat, and more from one unified system.                        </li>
                                <li>
                                    Personalized Interactions at Scale:
                                    Use AI to recognize returning customers, understand preferences, and offer tailored responses for a better customer experience.

                                </li>
                                <li>
                                    Multilingual Support Out of the Box:
                                    Break language barriers and support customers in their native language using advanced natural language processing.                        </li>
                                <li>
                                    24/7 Availability with Zero Downtime:
                                    Ensure your customers are never left waiting—AI handles queries around the clock, even outside of business hours                        </li>
                            </ul>
                            <button className='mt-10 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300'>
                                Get Started
                            </button>

                        </div>
                    </div>
                </div>
                <div className='flex justify-around items-center '>
                    <div className='bg-linear-[149deg,#f0c4fc_5%,#c0c0ff_60%,#c0f8f2_90%,teal] p-1 rounded-md transition-all duration-1000 ease-in-out'>
                        <div className='flex flex-col items-start justify-between lg:max-w-[700px]  bg-black w-full h-full  rounded-lg p-5 inset-4 '>
                            <h3 className='text-3xl font-bold text-white capitalize mb-2 '>
                                Boost Your Sales and Marketing Strategy with AI-Powered Insights
                            </h3>
                            <ul className='text-gray-400 gap-5 flex flex-col '>
                                <li>
                                    Predict Customer Behavior: Leverage machine learning models to forecast buying intent and tailor your messaging accordingly.                                </li>
                                <li>
                                    AI-Generated Campaigns: Let AI craft high-performing ad copies, email campaigns, and social media posts in minutes.

                                </li>
                                <li>
                                    Smart Lead Scoring: Automatically prioritize leads based on their likelihood to convert, helping your team close deals faster.                                </li>
                                <li>
                                    Personalized Recommendations: Deliver product suggestions tailored to individual customer preferences using real-time data.                                </li>
                                <li>
                                    Performance Analytics: Get actionable insights into campaign performance with intelligent reporting and visualizations.

                                </li>
                            </ul>
                            <button className='mt-10 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300'>
                                Get Started
                            </button>

                        </div>
                    </div>

                    <div>
                        <Image src={transform_ai3} alt='AI powered marketing automation' />
                    </div>
                </div>
            </section>
        </section >
    )
}

export default Transform_ai