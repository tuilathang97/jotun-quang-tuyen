import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

// Replace with your actual domain
const BASE_URL = 'https://jotunlonghau.com';

// Function to get all MDX slugs from the blogs directory
function getBlogSlugs(): string[] {
  const blogsDirectory = path.join(process.cwd(), 'outstatic/content/blogs');
  try {
    const filenames = fs.readdirSync(blogsDirectory);
    return filenames
      .filter((filename) => filename.endsWith('.mdx') || filename.endsWith('.md'))
      .map((filename) => filename.replace(/\.(mdx|md)$/, ''));
  } catch (error) {
    console.error('Error reading blogs directory:', error);
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const blogSlugs = getBlogSlugs();

  const blogPostEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blogs/${slug}`,
    lastModified: new Date(), // You might want to get this from frontmatter or file stats
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://jotunlonghau.com/#interior',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://jotunlonghau.com/#exterior',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://jotunlonghau.com/colors',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://jotunlonghau.com/about',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  return [...staticPages, ...blogPostEntries];
} 