import { siteConfig, absoluteUrl } from '@/lib/seo';
import type { Product } from '@/app/(jotun)/product/[id]/page';

/**
 * Structured data (JSON-LD, schema.org) builders.
 * These help Google show the store in local search results ("sơn jotun gần đây"),
 * and enable rich snippets for products and articles.
 */

const { business } = siteConfig;

/**
 * LocalBusiness schema — rendered site-wide so every page tells Google
 * who and where the store is. Pairs with a Google Business Profile.
 */
export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HardwareStore',
    '@id': `${siteConfig.baseUrl}/#store`,
    name: siteConfig.name,
    alternateName: business.legalName,
    description: siteConfig.defaultDescription,
    url: siteConfig.baseUrl,
    telephone: business.phone,
    image: absoluteUrl('/banner.jpg'),
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: `${business.address.ward}, ${business.address.district}`,
      addressRegion: business.address.province,
      addressCountry: business.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    hasMap: business.mapUrl,
    priceRange: '₫₫',
    brand: {
      '@type': 'Brand',
      name: 'Jotun',
    },
  };
}

/**
 * Parse a Vietnamese-formatted price string like "1.234.567đ" into a number.
 * Returns undefined when the string has no digits.
 */
function parsePriceVnd(price?: string): number | undefined {
  if (!price) return undefined;
  const digits = price.replace(/[^\d]/g, '');
  return digits ? Number(digits) : undefined;
}

/**
 * Product schema for product detail pages — enables price/availability
 * rich results in Google search.
 */
export function productJsonLd(product: Product) {
  const url = absoluteUrl(`/product/${product.id}`);
  const offers = (product.price || [])
    .map((p) => {
      const amount = parsePriceVnd(p.price);
      if (!amount) return null;
      return {
        '@type': 'Offer',
        price: amount,
        priceCurrency: 'VND',
        availability: 'https://schema.org/InStock',
        url,
        seller: { '@id': `${siteConfig.baseUrl}/#store` },
      };
    })
    .filter(Boolean);

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortDescription || product.description,
    image: [
      absoluteUrl(`/images/products/${product.desktopImage}`),
      ...(product.cardImages?.length ? [absoluteUrl(`/images/covers/${product.cardImages[0]}`)] : []),
    ],
    url,
    brand: {
      '@type': 'Brand',
      name: 'Jotun',
    },
    ...(offers.length ? { offers } : {}),
  };
}

/**
 * BlogPosting schema for blog articles.
 */
export function blogPostingJsonLd({
  title,
  description,
  slug,
  coverImage,
  publishedAt,
  authorName,
}: {
  title: string;
  description?: string;
  slug: string;
  coverImage?: string;
  publishedAt?: string;
  authorName?: string;
}) {
  const url = absoluteUrl(`/blogs/${slug}`);
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    url,
    mainEntityOfPage: url,
    ...(coverImage ? { image: absoluteUrl(coverImage) } : {}),
    ...(publishedAt ? { datePublished: publishedAt } : {}),
    author: {
      '@type': 'Organization',
      name: authorName || siteConfig.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.baseUrl,
    },
    inLanguage: 'vi-VN',
  };
}

/**
 * BreadcrumbList schema — helps Google display the page hierarchy in results.
 */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
