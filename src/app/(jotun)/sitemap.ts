import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { siteConfig } from '@/lib/seo';
import { fetchArrayJson } from '@/utils/utils';
import type { Product } from './product/[id]/page';

const BASE_URL = siteConfig.baseUrl;

type BlogEntry = { slug: string; lastModified: Date };

// Read blog slugs with their real last-modified time (from frontmatter, falling back to file mtime)
function getBlogEntries(): BlogEntry[] {
  const blogsDirectory = path.join(process.cwd(), 'outstatic/content/blogs');
  try {
    const filenames = fs.readdirSync(blogsDirectory);
    return filenames
      .filter((filename) => filename.endsWith('.mdx') || filename.endsWith('.md'))
      .map((filename) => {
        const filePath = path.join(blogsDirectory, filename);
        let lastModified = fs.statSync(filePath).mtime;
        try {
          const content = fs.readFileSync(filePath, 'utf-8');
          const match = content.match(/publishedAt:\s*["']?([^"'\n]+)["']?/);
          if (match) {
            const published = new Date(match[1]);
            if (!isNaN(published.getTime())) lastModified = published;
          }
        } catch {}
        return {
          slug: filename.replace(/\.(mdx|md)$/, ''),
          lastModified,
        };
      });
  } catch (error) {
    console.error('Error reading blogs directory:', error);
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPostEntries: MetadataRoute.Sitemap = getBlogEntries().map((entry) => ({
    url: `${BASE_URL}/blogs/${entry.slug}`,
    lastModified: entry.lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const products = fetchArrayJson<Product>('products');
  const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${BASE_URL}/product/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/colors`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  return [...staticPages, ...productEntries, ...blogPostEntries];
}
