'use client'
import {useState} from 'react'
import HeroSection from './blogHero'
import BlogListSection from './blogsections'
import NewsletterCTA from './newsletter'
import SearchAndFilters from './searchfilter'

const Page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const dummyBlogs = [
    {
      title: "How AI is Revolutionizing Small Businesses",
      category: "AI for Business",
      preview: "Explore how artificial intelligence helps automate tasks...",
      thumbnail: "https://source.unsplash.com/random/800x600/?ai",
      publishedAt: "April 7, 2025",
      readTime: 4,
    },
    {
      title: "Top Tech Trends to Watch in 2025",
      category: "Tech Trends",
      preview: "From quantum computing to ambient AI, stay ahead...",
      thumbnail: "https://source.unsplash.com/random/800x600/?technology",
      publishedAt: "March 30, 2025",
      readTime: 5,
    },
    // Add more blogs here...
  ];

  return (
    <div className='bg-black text-white '>
        <HeroSection />
        <NewsletterCTA />

        <SearchAndFilters />
        <BlogListSection
        blogs={dummyBlogs}
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
      />

    </div>
  )
}

export default Page