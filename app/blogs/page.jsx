'use client'
import {useState} from 'react'
import HeroSection from './blogHero'
import BlogListSection from './blogsections'
import NewsletterCTA from './newsletter'
import SearchAndFilters from './searchfilter'
import { NextSeo } from 'next-seo'
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
      slug: "how-ai-revolutionizing-small-businesses"
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

  return (
    <>
      <NextSeo
        title="AI Business Blog - Latest Insights and Guides | BizAI"
        description="Discover the latest insights, guides, and tips about implementing AI in your business. Learn about automation, efficiency, and growth strategies."
        canonical="https://mybizai.com/blogs"
        openGraph={{
          title: 'AI Business Blog - Latest Insights and Guides | BizAI',
          description: 'Discover the latest insights about AI in business',
          images: [
            {
              url: 'https://mybizai.com/blog-og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'BizAI Blog',
            },
          ],
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className='bg-black text-white'>
        <Breadcrumb items={breadcrumbItems} />
        <HeroSection />
        <NewsletterCTA />
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="sr-only">Blog Search and Filters</h2>
            <SearchAndFilters />
          </div>
        </section>
        <section className="py-12 bg-black/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
            <BlogListSection
              blogs={dummyBlogs}
              searchTerm={searchTerm}
              selectedCategory={selectedCategory}
            />
          </div>
        </section>
      </main>
    </>
  )
}

export default Page