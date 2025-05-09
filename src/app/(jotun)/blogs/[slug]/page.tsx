import { getDocumentBySlug, getDocumentSlugs } from 'outstatic/server';
import markdownToHtml from '@/lib/markdownToHTML';
import { notFound } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from 'date-fns';
import * as cheerio from 'cheerio';
import TableOfContents, { TocItem } from '@/components/TableOfContents';

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

  return (
    <div className="ftc-blog-post-page min-h-screen bg-gradient-to-br from-white to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <article className="max-w-3xl mx-auto bg-white p-6 sm:p-8 lg:p-10 rounded-lg shadow-md">

        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                {post.author.picture && <AvatarImage src={post.author.picture} alt={post.author.name} />}
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span>By {post.author.name}</span>
            </div>
            <span>•</span>
            <time dateTime={post.publishedAt}>
              {format(new Date(post.publishedAt), 'PPP')} {/* Format date */}
            </time>
          </div>
          {post.shortDescription && (
            <p className="mt-4 text-lg text-gray-600">{post.shortDescription}</p>
          )}
        </header>

        {post.coverImage && (
          <img
            src={post.coverImage}
            alt={`Cover image for ${post.title}`}
            className="w-full h-auto rounded-lg mb-8 shadow-sm"
          />
        )}

        <TableOfContents tocItems={post.tocItems} />

        <div
          className="prose prose-lg max-w-none text-gray-800"
          dangerouslySetInnerHTML={{ __html: post.htmlContentWithIds }}
        />
      </article>
    </div>
  );
}

// Optional: Add metadata generation
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getDocumentBySlug('blogs', params.slug, ['title', 'shortDescription']);

  if (!post) {
    return { title: 'Blog Post Not Found' };
  }
  
  const title = post.title as string || 'Blog Post';
  const description = post.shortDescription as string || 'Read this blog post.';

  return {
    title: title,
    description: description,
  };
}