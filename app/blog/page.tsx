
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

export const metadata = {
  title: "Blog - SocialSync",
  description: "Insights, tips, and thoughts on digital marketing, web development, and growing your business online.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white px-4 py-20">      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[40vw] h-[40vw] bg-pink-200 dark:bg-pink-700/30 opacity-40 rounded-full blur-3xl animate-float-1"></div>
        <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-[40vw] h-[40vw] bg-blue-100 dark:bg-blue-900/30 opacity-40 rounded-full blur-3xl animate-float-2"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-6 ml-5">
          <h1 className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight mb-3">
            Our <span className="text-blue-600">Blog</span>
          </h1>
        </div>

        <div className="grid gap-6">
          {posts
            .sort((a, b) => {
              if (
                new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
              ) {
                return -1;
              }
              return 1;
            })            .map((post, id) => (
              <div key={post.slug} className="group">
                <Link
                  className="block p-6 rounded-xl border-b border-gray-200 dark:border-gray-800 hover:bg-white/5 hover:backdrop-blur-sm hover:border hover:border-gray-200/30 dark:hover:border-gray-700/30 hover:shadow-sm hover:rounded-xl transition-all duration-300"
                  href={`/blog/${post.slug}`}
                >
                  <div className="w-full">
                    <h2 className="text-xl font-semibold leading-tight tracking-tight mb-2">
                      {post.metadata.title}
                    </h2>
                    <p className="text-sm font-medium leading-tight tracking-tight text-gray-500 dark:text-gray-400">
                      {new Date(post.metadata.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg font-medium leading-tight tracking-tight text-gray-600 dark:text-gray-400">
              No blog posts available yet. Stay tuned for insights and updates!
            </p>
          </div>
        )}        </div>
      </section>
    </>
  );
}
