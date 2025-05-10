import { getDocuments } from 'outstatic/server';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from 'date-fns'; // Assuming date-fns is installed
import { OstDocument } from 'outstatic';
import Image from 'next/image';

type BlogDocument = {
  slug: string;
  title?: string;
  publishedAt?: string;
  author?: {
    name?: string;
    picture?: string;
  };
  shortDescription?: string;
  coverImage?: string;
}

async function getBlogs(): Promise<BlogDocument[]> {
  const blogs = getDocuments('blogs', [
    'title',
    'publishedAt',
    'slug',
    'author',
    'shortDescription',
    'coverImage',
  ]);
  return blogs;
}

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen bg-gradient-to-br from-white to-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Our Blog</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Card key={blog.slug} className="flex flex-col bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden">
            {blog.coverImage && (
              <div className="relative w-full h-48 overflow-hidden">
                <Link href={`/blogs/${blog.slug}`}>
                  <Image 
                    src={blog.coverImage} 
                    alt={blog.title || 'Blog post'} 
                    fill 
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </Link>
              </div>
            )}
            <CardHeader>
              <Link href={`/blogs/${blog.slug}`} className="hover:underline">
                <CardTitle className="text-xl font-semibold text-gray-900">{blog.title || 'Untitled'}</CardTitle>
              </Link>
              {blog.shortDescription && (
                <CardDescription className="text-gray-600 mt-2">{blog.shortDescription}</CardDescription>
              )}
            </CardHeader>
            <CardContent className="flex-grow">
              {/* Content can be added here if needed in the future */}
            </CardContent>
            <CardFooter className="text-sm text-gray-500 border-t pt-4 mt-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Avatar className="h-6 w-6">
                  {blog.author?.picture && <AvatarImage src={blog.author.picture} alt={blog.author.name || 'Author'} />}
                  <AvatarFallback>{blog.author?.name?.charAt(0) || 'A'}</AvatarFallback>
                </Avatar>
                <span>{blog.author?.name || 'Anonymous'}</span>
              </div>
              {blog.publishedAt && (
                <time dateTime={blog.publishedAt}>
                  {format(new Date(blog.publishedAt), 'PPP')}
                </time>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}