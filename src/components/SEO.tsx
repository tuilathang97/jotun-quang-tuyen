'use client';

import { useEffect } from 'react';
import Head from 'next/head';
import { siteConfig } from '@/lib/seo';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
    type?: string;
    image?: string;
  };
}

/**
 * SEO component for pages that need additional control over metadata
 * beyond what Next.js 13+ metadata API provides.
 * 
 * Note: This is only needed for special cases where you need to
 * manipulate metadata from client components.
 * For most cases, use the Next.js metadata API in your page.tsx or layout.tsx files.
 */
export default function SEO({
  title,
  description,
  canonical,
  openGraph,
}: SEOProps) {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.defaultTitle;
  const pageDescription = description || siteConfig.defaultDescription;
  const pageUrl = canonical || siteConfig.baseUrl;

  // React to route changes if needed
  useEffect(() => {
    // You can add analytics tracking here
  }, [pageUrl]);

  return (
    <Head>
      {/* Basic tags */}
      {title && <title>{pageTitle}</title>}
      {description && <meta name="description" content={pageDescription} />}
      {canonical && <link rel="canonical" href={pageUrl} />}

      {/* Open Graph */}
      {title && <meta property="og:title" content={openGraph?.title || pageTitle} />}
      {description && (
        <meta property="og:description" content={openGraph?.description || pageDescription} />
      )}
      <meta property="og:url" content={openGraph?.url || pageUrl} />
      <meta property="og:type" content={openGraph?.type || 'website'} />
      <meta property="og:site_name" content={siteConfig.name} />
      {openGraph?.image && <meta property="og:image" content={openGraph.image} />}
    </Head>
  );
} 