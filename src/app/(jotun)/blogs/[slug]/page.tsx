import { getDocumentBySlug, getDocumentSlugs } from 'outstatic/server';
import markdownToHtml from '@/lib/markdownToHTML';
import { notFound } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from 'date-fns';
import * as cheerio from 'cheerio';
import TableOfContents, { TocItem } from '@/components/TableOfContents';
import type { Metadata, ResolvingMetadata } from 'next';
import { generateBlogPostMetadata } from '@/lib/seo';

import './blogs.scss';

// Utility to generate slugs for IDs
function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-'); // Replace multiple - with single -
}

// Define the structure for a single blog post
interface BlogPost {
  title: string;
  publishedAt: string;
  slug: string;
  author: {
    name: string;
    picture?: string;
  };
  content: string;
  coverImage?: string;
  shortDescription?: string;
}

// Define the structure for the processed post including HTML content
interface ProcessedBlogPost extends BlogPost {
  htmlContentWithIds: string;
  tocItems: TocItem[];
}

// Fetch data for a specific blog post by slug
async function getData(params: { slug: string }): Promise<ProcessedBlogPost> {
  const doc = getDocumentBySlug('blogs', params.slug, [
    'title',
    'publishedAt',
    'slug',
    'author',
    'content',
    'coverImage',
    'shortDescription'
  ]);

  if (!doc) {
    notFound();
  }

  const postData: BlogPost = {
    title: (doc.title as string) || 'Untitled Post',
    publishedAt: (doc.publishedAt as string) || new Date().toISOString(),
    slug: doc.slug as string,
    author: {
      name: ((doc.author as any)?.name as string) || 'Anonymous',
      picture: (doc.author as any)?.picture as string | undefined,
    },
    content: (doc.content as string) || '',
    coverImage: doc.coverImage as string | undefined,
    shortDescription: doc.shortDescription as string | undefined,
  };

  const rawHtmlContent = await markdownToHtml(postData.content);
  const $ = cheerio.load(rawHtmlContent);
  const tocItems: TocItem[] = [];
  const headingTags = 'h1, h2, h3, h4, h5, h6';

  $(headingTags).each((index: number, element: any) => {
    const $element = $(element);
    const text = $element.text();
    let id = $element.attr('id');
    if (!id) {
      id = slugify(text);
      let uniqueId = id;
      let counter = 1;
      while ($(`[id="${uniqueId}"]`).length > 0 && $(`[id="${uniqueId}"]`)[0] !== element) {
        uniqueId = `${id}-${counter}`;
        counter++;
      }
      id = uniqueId;
      $element.attr('id', id);
    }
    
    const level = parseInt(element.tagName.substring(1), 10);
    if (text.trim() && level >= 1 && level <= 6) { 
        tocItems.push({ id, level, text: text.trim() });
    }
  });

  const htmlContentWithIds = $.html();

  return {
    ...postData,
    htmlContentWithIds,
    tocItems,
  };
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const slugs = getDocumentSlugs('blogs');
  return slugs.map((slug) => ({ slug }));
}

// The Blog Post Page Component
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getData(params);

  console.log({post});
  return (
    <div className="ftc-blog-post-page min-h-screen bg-gradient-to-br from-white to-gray-100">
      {/* Container for both hero and content to ensure consistent width */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Hero Banner with Cover Image */}
          {post.coverImage ? (
            <div className="relative w-full h-[40vh] md:h-[50vh] mb-10 rounded-lg overflow-hidden shadow-lg">
              <div className="absolute inset-0">
                <img
                  src={post.coverImage}
                  alt={`Cover image for ${post.title}`}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60"></div>
              </div>

              {/* Hero Content */}
              <div className="relative h-full flex flex-col justify-end">
                <div className="p-6 sm:p-8 lg:p-10">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-md">
                    {post.title}
                  </h1>
                  
                  {post.shortDescription && (
                    <p className="text-lg text-white/90 max-w-3xl mb-6 drop-shadow-sm">
                      {post.shortDescription}
                    </p>
                  )}
                  
                  <div className="flex items-center space-x-4 text-sm text-white/80">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-8 w-8 border border-white/30">
                        {post.author.picture && <AvatarImage src={post.author.picture} alt={post.author.name} />}
                        <AvatarFallback className="bg-white/20 text-white">{post.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span>By {post.author.name}</span>
                    </div>
                    <span>•</span>
                    <time dateTime={post.publishedAt}>
                      {format(new Date(post.publishedAt), 'PPP')}
                    </time>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Alternative header for posts without cover image */
            <div className="bg-gray-900 py-16 mb-10 rounded-lg shadow-lg">
              <div className="p-6 sm:p-8 lg:p-10">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                  {post.title}
                </h1>
                
                {post.shortDescription && (
                  <p className="text-lg text-white/90 max-w-3xl mb-6">
                    {post.shortDescription}
                  </p>
                )}
                
                <div className="flex items-center space-x-4 text-sm text-white/80">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8 border border-white/30">
                      {post.author.picture && <AvatarImage src={post.author.picture} alt={post.author.name} />}
                      <AvatarFallback className="bg-white/20 text-white">{post.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span>By {post.author.name}</span>
                  </div>
                  <span>•</span>
                  <time dateTime={post.publishedAt}>
                    {format(new Date(post.publishedAt), 'PPP')}
                  </time>
                </div>
              </div>
            </div>
          )}

          {/* Main Content */}
          <article className="bg-white p-6 sm:p-8 lg:p-10 rounded-lg shadow-md">
            <TableOfContents tocItems={post.tocItems} />

            <div
              className="prose prose-lg max-w-none text-gray-800"
              dangerouslySetInnerHTML={{ __html: post.htmlContentWithIds }}
            />
          </article>
        </div>
      </div>
    </div>
  );
}

// Enhanced metadata generation for SEO
export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = getDocumentBySlug('blogs', params.slug, [
    'title',
    'shortDescription',
    'author',
    'coverImage',
    'publishedAt',
    'slug'
  ]);

  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The blog post you are looking for does not exist.'
    };
  }

  // Use the reusable function from our SEO utilities
  return generateBlogPostMetadata({
    title: post.title as string,
    description: post.shortDescription as string,
    slug: post.slug as string,
    coverImage: post.coverImage as string,
    publishedAt: post.publishedAt as string,
    authorName: (post.author as { name?: string })?.name,
  });
}