'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import HeroSection from './blogHero'
import BlogListSection from './blogsections'
import NewsletterCTA from './newsletter'
import SearchAndFilters from './searchfilter'
import Breadcrumb from '../components/Breadcrumb'

// Generate structured data for blog posts
const generateBlogStructuredData = (blogs) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    headline: 'BizAI Blog - AI Business Insights',
    description: 'Latest insights, guides, and tips about AI in business',
    publisher: {
      '@type': 'Organization',
      name: 'BizAI',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mybizai.com/logo.png'
      }
    },
    blogPost: blogs.map(blog => ({
      '@type': 'BlogPosting',
      headline: blog.title,
      description: blog.preview,
      image: blog.thumbnail,
      datePublished: blog.publishedAt,
      author: {
        '@type': 'Organization',
        name: 'BizAI'
      }
    }))
  };
};

const Page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const dummyBlogs = [
    {
      title: "How AI is Revolutionizing Small Businesses",
      category: "AI for Business",
      preview: "Explore how artificial intelligence helps automate tasks...",
      thumbnail: "https://source.unsplash.com/random/800x600/?ai",
      publishedAt: "2024-04-07",
      readTime: 4,
      slug: "how-ai-revolutionizing-small-businesses",
      featured: true
    },
    {
      title: "Top Tech Trends to Watch in 2025",
      category: "Tech Trends",
      preview: "From quantum computing to ambient AI, stay ahead...",
      thumbnail: "https://source.unsplash.com/random/800x600/?technology",
      publishedAt: "2024-03-30",
      readTime: 5,
      slug: "top-tech-trends-2025"
    },
    // Add more blogs here...
  ];

  const breadcrumbItems = [
    { label: 'Blog', path: '/blogs' }
  ];

  const structuredData = generateBlogStructuredData(dummyBlogs);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className='bg-black text-white'>
        {/* <Breadcrumb items={breadcrumbItems} /> */}
        <HeroSection />
        
        {/* Featured Blog Post */}
        {dummyBlogs.find(blog => blog.featured) && (
          <section className="w-full px-6 md:px-12 mb-16">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Highlight Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg"
                  >
                    Featured Article
                  </motion.div>
                </div>

                {/* Glowing Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
                
                <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border-2 border-transparent relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-2xl"></div>
                  <div className="grid md:grid-cols-2 gap-8 p-8 relative">
                    <div className="flex flex-col justify-center">
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl mb-6"
                      >
                        📚
                      </motion.div>
                      <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-3xl font-bold mb-4 text-white"
                      >
                        {dummyBlogs.find(blog => blog.featured).title}
                      </motion.h2>
                      <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-gray-300 mb-6"
                      >
                        {dummyBlogs.find(blog => blog.featured).preview}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="bg-gradient-to-r from-green-500 to-teal-500 text-white font-medium px-8 py-4 rounded-xl w-fit transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
                        >
                          Read More
                        </motion.button>
                      </motion.div>
                    </div>
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 }}
                      className="relative h-[400px] rounded-xl overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-teal-500/10"></div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        <NewsletterCTA />
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="sr-only">Blog Search and Filters</h2>
            <SearchAndFilters 
              onSearch={setSearchTerm}
              onCategoryChange={setSelectedCategory}
            />
          </div>
        </section>

        <motion.section 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="py-12 bg-black/50"
        >
          <div className="container mx-auto px-4">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-bold text-center mb-8 text-white"
            >
              Latest Articles
            </motion.h2>
            <BlogListSection
              blogs={dummyBlogs}
              searchTerm={searchTerm}
              selectedCategory={selectedCategory}
            />
          </div>
        </motion.section>
      </main>
    </>
  )
}

export default Page