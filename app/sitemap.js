export default async function sitemap() {
  const baseUrl = 'https://mybizai.com'

  // Get all blog posts
  // This is a placeholder - replace with your actual blog fetching logic
  const blogs = [
    {
      url: `${baseUrl}/blogs/how-ai-revolutionizing-small-businesses`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blogs/top-tech-trends-2025`,
      lastModified: new Date(),
    },
  ]

  // Define your main routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  return [...routes, ...blogs]
} 