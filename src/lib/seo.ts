import type { Metadata } from 'next';

/**
 * Configuration for the site's metadata.
 * Single source of truth for business info — also used by structured data (JSON-LD).
 */
export const siteConfig = {
  name: 'Jotun Long Hậu',
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://jotunlonghau.com',
  defaultTitle: 'Jotun Long Hậu - Đại lý sơn Jotun chính hãng tại Long An',
  defaultDescription:
    'Đại lý sơn Jotun chính hãng tại Long Hậu, Cần Giuộc, Long An. Cung cấp sơn nội thất, sơn ngoại thất, sơn chống thấm Jotun giá tốt, pha màu vi tính chính xác, giao hàng tận nơi. Liên hệ 0898.271.703.',
  defaultKeywords: [
    'sơn jotun',
    'đại lý sơn jotun',
    'sơn jotun long an',
    'sơn jotun cần giuộc',
    'sơn nội thất',
    'sơn ngoại thất',
    'sơn chống thấm',
    'jotashield',
    'majestic',
    'jotun long hậu',
  ],
  business: {
    legalName: 'Cửa Hàng Sơn Khoa Minh Long Hậu',
    phone: '+84898271703',
    phoneDisplay: '0898.271.703',
    address: {
      street: '243 ĐT826C',
      ward: 'Long Hậu',
      district: 'Cần Giuộc',
      province: 'Long An',
      country: 'VN',
    },
    geo: {
      latitude: 10.652181,
      longitude: 106.687075,
    },
    mapUrl: 'https://maps.app.goo.gl/Js9YqWYvGkoci7hm9',
  },
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
 * Turn a relative path into an absolute URL on the site's domain
 */
export function absoluteUrl(path: string = '/'): string {
  return new URL(path, siteConfig.baseUrl).toString();
}

/**
 * Generate metadata for a standard page.
 * Pass `path` (e.g. '/colors') so the page gets a canonical URL.
 */
export function generatePageMetadata({
  title,
  description,
  keywords = [],
  path,
  image,
}: {
  title?: string;
  description?: string;
  keywords?: string[];
  path?: string;
  image?: string;
}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.defaultTitle;

  const pageDescription = description || siteConfig.defaultDescription;
  const pageKeywords = [...keywords, ...siteConfig.defaultKeywords];
  const pageUrl = absoluteUrl(path);

  return {
    metadataBase: new URL(siteConfig.baseUrl),
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    publisher: siteConfig.name,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: siteConfig.name,
      locale: 'vi_VN',
      type: 'website',
      ...(image ? { images: [{ url: image, width: 1200, height: 630, alt: pageTitle }] } : {}),
    },
    twitter: {
      card: image ? 'summary_large_image' : 'summary',
      title: pageTitle,
      description: pageDescription,
      ...(image ? { images: [image] } : {}),
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
  const postDescription = description || siteConfig.defaultDescription;
  const author = authorName || siteConfig.name;
  const postUrl = absoluteUrl(`/blogs/${slug}`);

  // Generate keywords from the title and add blog-related terms
  const keywords = generateKeywords(postTitle, [...siteConfig.defaultKeywords]);

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
    metadataBase: new URL(siteConfig.baseUrl),
    title: `${postTitle} | ${siteConfig.name}`,
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
      locale: 'vi_VN',
      images: openGraphImages,
      type: 'article',
      publishedTime: publishedAt || undefined,
      authors: author ? [author] : undefined,
    },
    twitter: {
      card: coverImage ? 'summary_large_image' : 'summary',
      title: postTitle,
      description: postDescription,
      images: coverImage ? [coverImage] : undefined,
    },
  };
}
