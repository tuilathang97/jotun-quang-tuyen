import { Metadata } from 'next';
import { generatePageMetadata, siteConfig } from '@/lib/seo';

/**
 * Default metadata for the entire site
 * This can be overridden by individual pages
 */
export const metadata: Metadata = generatePageMetadata({
  // Default values will be used from siteConfig
});

/**
 * Function to generate metadata for specific sections
 * @param section The section name
 * @returns Metadata object for the section
 */
export function generateSectionMetadata(section: string): Metadata {
  const titleCapitalized = section.charAt(0).toUpperCase() + section.slice(1);
  
  return generatePageMetadata({
    title: `${titleCapitalized}`,
    description: `${titleCapitalized} tại ${siteConfig.name}`,
    keywords: [section, 'jotun', 'long hậu'],
  });
} 