import { getPost, getBlogPosts } from "@/data/blog";
import { DATA } from "@/data";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Inter } from 'next/font/google';
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";

const inter = Inter({
  subsets: ['latin'],
});
export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let post = await getPost(params.slug);

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },  };
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
   
  };
}) {
  let post = await getPost(params.slug);

  if (!post) {
    notFound();
  }  return (
    <div className="bg-white dark:bg-black">
      <Navbar />
      <section id="blog" className={`min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6 ${inter.className}`}>
      {/* Background Effects */}
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[40vw] h-[40vw] bg-pink-200 dark:bg-pink-700/30 opacity-40 rounded-full blur-3xl animate-float-1"></div>
          <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-[40vw] h-[40vw] bg-blue-100 dark:bg-blue-900/30 opacity-40 rounded-full blur-3xl animate-float-2"></div>
        </div>


      <div className="relative z-10">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `${DATA.url}${post.metadata.image}`
                : `${DATA.url}/og?title=${post.metadata.title}`,
              url: `${DATA.url}/blog/${post.slug}`,
              author: {
                "@type": "Organization",
                name: DATA.name,
              },
            }),
          }}        />
        
        {/* Back to Blog Navigation */}
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>

        <h1 className="font-bold text-3xl md:text-4xl tracking-tight max-w-[650px] mb-4">
          {post.metadata.title}
        </h1>
        <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
          <Suspense fallback={<p className="h-5" />}>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {formatDate(post.metadata.publishedAt)} • SocialSync Team
            </p>
          </Suspense>
        </div>
        
        <article
          className={`prose prose-lg dark:prose-invert max-w-none font-sans
                     prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-black dark:prose-headings:text-white
                     prose-p:font-normal prose-p:leading-relaxed prose-p:text-gray-800 dark:prose-p:text-gray-200
                     prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-a:font-medium
                     prose-strong:font-semibold prose-code:font-mono
                     prose-blockquote:border-l-blue-600 prose-blockquote:font-medium prose-blockquote:italic
                     prose-ul:font-normal prose-ol:font-normal prose-li:font-normal ${inter.className}`}
          dangerouslySetInnerHTML={{ __html: post.source }}        ></article>
      </div>
    </section>
    </div>
  );
}