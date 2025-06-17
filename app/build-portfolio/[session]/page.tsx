"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  MessageCircle,
  ArrowLeft,
  ExternalLink
} from "lucide-react";

export default function SessionPage() {
  const params = useParams();
  const router = useRouter();
  const sessionNumber = params.session as string;
  
  // Helper function to extract session number from parameter
  const getSessionNumber = () => {
    const sessionMatch = sessionNumber.match(/session(\d+)/);
    return sessionMatch ? sessionMatch[1] : sessionNumber;
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
        {/* Background Effects */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[40vw] h-[40vw] bg-blue-200 dark:bg-blue-700/30 opacity-40 rounded-full blur-3xl animate-float-1"></div>
          <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-[40vw] h-[40vw] bg-purple-100 dark:bg-purple-900/30 opacity-40 rounded-full blur-3xl animate-float-2"></div>
        </div>

        <div className="relative z-10 px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Back Button */}
            <div className="mb-8">
              <a 
                href="/build-portfolio"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Workshop
              </a>
            </div>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="text-5xl mb-6">🚀</div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Session {getSessionNumber()}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Choose what you&apos;d like to access for this session
              </p>
            </motion.div>

            {/* Action Cards */}
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {/* Session Details */}
              <motion.a
                href={`/build-portfolio/${sessionNumber}/details`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group p-8 rounded-xl border border-gray-200 dark:border-gray-800/50 bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  📚
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Session Details
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  View the complete session content, learning objectives, code examples, and resources.
                </p>
                <div className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium">
                  View Details
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </motion.a>

              {/* Session Review */}
              <motion.a
                href={`/build-portfolio/${sessionNumber}/review`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group p-8 rounded-xl border border-gray-200 dark:border-gray-800/50 bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:shadow-lg hover:border-green-300 dark:hover:border-green-700/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  💬
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  Leave Feedback
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Share your experience and help us improve the workshop for future participants.
                </p>
                <div className="inline-flex items-center text-green-600 dark:text-green-400 font-medium">
                  Give Feedback
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </motion.a>
            </div>            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12"
            >
              <div className="p-6 rounded-xl border border-blue-200 dark:border-blue-800/50 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  💡 Quick Tip
                </h3>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  For the best learning experience, view the session details first, then leave feedback after attending the live session.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
