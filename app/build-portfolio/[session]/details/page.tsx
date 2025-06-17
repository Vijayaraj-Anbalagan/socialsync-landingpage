import { getSessionByNumber, getSessionPosts } from "@/data/session";
import { DATA } from "@/data";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Inter } from 'next/font/google';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { 
  BookOpen, 
  Clock, 
  Users, 
  ArrowLeft,
  Calendar,
  Target,
  Star,
  MessageCircle
} from "lucide-react";

const inter = Inter({
  subsets: ['latin'],
});

export async function generateMetadata({
  params,
}: {
  params: {
    session: string;
  };
}): Promise<Metadata | undefined> {
  // Extract session number from the session parameter
  const sessionMatch = params.session.match(/session(\d+)/);
  const sessionNumber = sessionMatch ? sessionMatch[1] : params.session;
  
  let session = await getSessionByNumber(sessionNumber);

  if (!session) {
    return {
      title: "Session Not Found",
      description: "The requested session could not be found.",
    };
  }

  let {
    title,
    description,
    emoji,
    sessionNumber: number,
  } = session.metadata;

  return {
    title: `Session ${number}: ${title} - Build Portfolio Workshop`,
    description,
    openGraph: {
      title: `Session ${number}: ${title}`,
      description,
      type: "article",
      url: `${DATA.url}/build-portfolio/${params.session}/details`,
    },
    twitter: {
      card: "summary_large_image",
      title: `Session ${number}: ${title}`,
      description,
    },
  };
}

export async function generateStaticParams() {
  const sessions = await getSessionPosts();
  
  return sessions.map((session) => ({
    session: session?.sessionId || '',
  }));
}

export default async function SessionDetailsPage({
  params,
}: {
  params: {
    session: string;
  };
}) {
  // Extract session number from the session parameter
  const sessionMatch = params.session.match(/session(\d+)/);
  const sessionNumber = sessionMatch ? sessionMatch[1] : params.session;
  
  let session = await getSessionByNumber(sessionNumber);

  if (!session) {
    notFound();
  }

  return (
    <div className="bg-white dark:bg-black">
      <Navbar />
      <section className={`min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans antialiased max-w-4xl mx-auto py-12 sm:py-24 px-6 ${inter.className}`}>
        {/* Background Effects */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[40vw] h-[40vw] bg-blue-200 dark:bg-blue-700/30 opacity-40 rounded-full blur-3xl animate-float-1"></div>
          <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-[40vw] h-[40vw] bg-purple-100 dark:bg-purple-900/30 opacity-40 rounded-full blur-3xl animate-float-2"></div>
        </div>

        <div className="relative z-10">
          {/* JSON-LD Schema */}
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "EducationalEvent",
                name: `Session ${session.metadata.sessionNumber}: ${session.metadata.title}`,
                description: session.metadata.description,
                startDate: session.metadata.date,
                duration: session.metadata.duration,
                eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
                eventStatus: "https://schema.org/EventScheduled",
                location: {
                  "@type": "VirtualLocation",
                  url: `${DATA.url}/build-portfolio/${params.session}/details`,
                },
                organizer: {
                  "@type": "Organization",
                  name: DATA.name,
                },
              }),
            }}
          />
          
          {/* Back Navigation */}
          <div className="mb-8">
            <Link 
              href="/build-portfolio" 
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Workshop
            </Link>
          </div>

          {/* Session Header */}
          <div className="text-center mb-12">
            {/* Session Badge */}
            <div className="inline-flex items-center px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400 rounded-full mb-6">
              <BookOpen className="w-3 h-3 mr-2" />
              Session {session.metadata.sessionNumber} Details
            </div>

            {/* Session Emoji */}
            <div className="text-5xl mb-4">
              {session.metadata.emoji}
            </div>

            {/* Session Title */}
            <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-4">
              Session {session.metadata.sessionNumber}: {session.metadata.title}
            </h1>

            {/* Session Meta Info */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-8">
              {session.metadata.date && (
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {formatDate(session.metadata.date)}
                </div>
              )}
              {session.metadata.duration && (
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {session.metadata.duration}
                </div>
              )}
              {session.metadata.difficulty && (
                <div className="flex items-center">
                  <Target className="w-4 h-4 mr-2" />
                  {session.metadata.difficulty}
                </div>
              )}
            </div>

            {/* Session Description */}
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              {session.metadata.description}
            </p>

            {/* Tags */}
            {session.metadata.tags && session.metadata.tags.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {session.metadata.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Session Content */}
          <article
            className={`prose prose-lg dark:prose-invert max-w-none font-sans
                       prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-black dark:prose-headings:text-white
                       prose-p:font-normal prose-p:leading-relaxed prose-p:text-gray-800 dark:prose-p:text-gray-200
                       prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                       prose-strong:font-semibold prose-code:font-mono prose-code:text-sm
                       prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                       prose-pre:bg-gray-900 dark:prose-pre:bg-gray-800 prose-pre:border prose-pre:border-gray-200 dark:prose-pre:border-gray-700
                       prose-blockquote:border-l-blue-600 prose-blockquote:font-medium prose-blockquote:italic
                       prose-ul:font-normal prose-ol:font-normal prose-li:font-normal 
                       prose-li:marker:text-blue-600 prose-table:text-sm
                       prose-th:bg-gray-50 dark:prose-th:bg-gray-800 prose-th:font-semibold
                       prose-td:border-gray-200 dark:prose-td:border-gray-700 ${inter.className}`}
            dangerouslySetInnerHTML={{ __html: session.source }}
          ></article>

          {/* Quick Actions */}
          <div className="mt-16 border-t border-gray-200 dark:border-gray-800 pt-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/build-portfolio/${params.session}/review`}
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors hover:scale-105 transform"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Leave Feedback
              </Link>
              
              <Link
                href="/build-portfolio/register"
                className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                <Users className="w-4 h-4 mr-2" />
                Join Workshop
              </Link>

              <Link
                href="/build-portfolio"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                All Sessions
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
