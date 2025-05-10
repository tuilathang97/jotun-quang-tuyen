import type { Metadata } from 'next';

/**
 * Configuration for the site's metadata
 */
export const siteConfig = {
  name: 'Jotun Long Hậu',
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://jotunlonghau.com',
  defaultTitle: 'Jotun Long Hậu - Sơn và dịch vụ sơn chất lượng cao',
  defaultDescription: 'Jotun Long Hậu cung cấp sơn và dịch vụ sơn chất lượng cao cho các ứng dụng công nghiệp và dân dụng.',
  defaultKeywords: ['jotun', 'sơn', 'long hậu', 'dịch vụ sơn', 'chất lượng cao'],
};

/**
 * Interface for blog post metadata
 */
export interface BlogPostSeoProps {
  title: string;
  description?: string;
  slug: string;
  coverImage?: string;
  publishedAt?: string;
  authorName?: string;
}

/**
 * Generate keywords from a title and additional terms
 */
export function generateKeywords(title: string, additionalTerms: string[] = []): string[] {
  return title.split(' ')
    .concat(additionalTerms)
    .filter(Boolean)
    .map(word => word.toLowerCase())
    .filter((word, index, self) => self.indexOf(word) === index); // Remove duplicates
}

/**
 * Generate metadata for a standard page
 */
export function generatePageMetadata({
  title,
  description,
  keywords = [],
}: {
  title?: string;
  description?: string;
  keywords?: string[];
}): Metadata {
  const pageTitle = title 
    ? `${title} | ${siteConfig.name}` 
    : siteConfig.defaultTitle;
  
  const pageDescription = description || siteConfig.defaultDescription;
  const pageKeywords = [...keywords, ...siteConfig.defaultKeywords];

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    publisher: siteConfig.name,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: siteConfig.baseUrl,
      siteName: siteConfig.name,
      type: 'website',
    },
  };
}

/**
 * Generate metadata for a blog post
 */
export function generateBlogPostMetadata({
  title,
  description,
  slug,
  coverImage,
  publishedAt,
  authorName,
}: BlogPostSeoProps): Metadata {
  const postTitle = title || 'Blog Post';
  const postDescription = description || 'Read this fascinating blog post.';
  const author = authorName || 'Anonymous';
  const postUrl = `${siteConfig.baseUrl}/blogs/${slug}`;
  
  // Generate keywords from the title and add blog-related terms
  const keywords = generateKeywords(postTitle, ['blog', 'article', author]);
  
  // Open Graph images setup
  const openGraphImages = [];
  if (coverImage) {
    openGraphImages.push({
      url: coverImage,
      width: 1200,
      height: 630,
      alt: `Cover image for ${postTitle}`,
    });
  }

  return {
    title: postTitle,
    description: postDescription,
    keywords: keywords,
    authors: author ? [{ name: author }] : undefined,
    publisher: siteConfig.name,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: postTitle,
      description: postDescription,
      url: postUrl,
      siteName: siteConfig.name,
      images: openGraphImages,
      type: 'article',
      publishedTime: publishedAt || new Date().toISOString(),
      authors: author ? [author] : undefined,
    },
    // Uncomment if you want to add Twitter card metadata
    /*
    twitter: {
      card: 'summary_large_image',
      title: postTitle,
      description: postDescription,
      images: coverImage ? [coverImage] : [],
      creator: '@yourhandle',
    },
    */
  };
} 