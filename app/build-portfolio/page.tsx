"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Clock, 
  Users, 
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Globe,
  Award,
  Laptop,
  UserPlus,
  BookOpen
} from "lucide-react";

export default function BuildPortfolio() {
  useEffect(() => {
    document.title = "Build Portfolio Workshop - SocialSync";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Join SocialSync Build Portfolio Workshop - Learn web development, deploy your portfolio, and build your digital presence in 2 weeks.');
    }
  }, []);
  const handleWhatsAppJoin = () => {
    // Replace with your actual WhatsApp group link
    window.open("https://chat.whatsapp.com/L88laJDdMbrHhDTTBnGuHu", "_blank");
  };

  const handleRegisterRedirect = () => {
    window.location.href = "/build-portfolio/register";
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white">        {/* Background Effects - Extended to entire page */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[40vw] h-[40vw] bg-pink-200 dark:bg-pink-700/30 opacity-40 rounded-full blur-3xl animate-float-1"></div>
          <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-[40vw] h-[40vw] bg-blue-100 dark:bg-blue-900/30 opacity-40 rounded-full blur-3xl animate-float-2"></div>
        </div>

        <div className="relative z-10 px-4 py-20">
          {/* Header Section */}
          <div className="max-w-4xl mx-auto text-center mb-16 mt-8">
            <div className="inline-flex items-center px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400 rounded-full mb-6">
              <Calendar className="w-3 h-3 mr-2" />
              From Today
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-6">
              Build. Deploy. <span className="text-blue-600">Launch.</span>
            </h1>
            
            <p className="text-lg md:text-xl font-medium leading-tight tracking-tight text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              Portfolio Workshop — 10 guided sessions to build your personal portfolio from scratch and deploy it live.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-12">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                2 Weeks
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                10 Sessions
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-2" />
                Online
              </div>
            </div>
          </div>          {/* Event Details Grid */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Workshop Details */}              <div className="space-y-6">
                <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800/50 bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:shadow-sm hover:border-blue-300 dark:hover:border-gray-700/50 transition-all duration-300">
                  <h2 className="text-xl font-semibold leading-tight tracking-tight mb-4">
                    Workshop Details
                  </h2>
                  <div className="space-y-3 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-3 text-blue-600" />
                      <span>June 16 – 24, 2025</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-3 text-blue-600" />
                      <span>6:00 PM - 7:00 PM IST</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-3 text-blue-600" />
                      <span>Live Interactive Sessions</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="w-4 h-4 mr-3 text-blue-600" />
                      <span>Online Platform</span>
                    </div>
                  </div>
                </div>                <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800/50 bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:shadow-sm hover:border-green-300 dark:hover:border-gray-700/50 transition-all duration-300">
                  <h2 className="text-xl font-semibold leading-tight tracking-tight mb-4">
                    What You&apos;ll Build
                  </h2>
                  <div className="space-y-3 text-gray-600 dark:text-gray-400">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-green-600" />
                      <span>Personal portfolio website</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-green-600" />
                      <span>Responsive design for all devices</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-green-600" />
                      <span>SEO optimized pages</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-green-600" />
                      <span>Live deployment with custom domain</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - What's Included */}
              <div className="space-y-6">                <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800/50 bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:shadow-sm hover:border-blue-300 dark:hover:border-gray-700/50 transition-all duration-300">
                  <h2 className="text-xl font-semibold leading-tight tracking-tight mb-4">
                    What&apos;s Included
                  </h2>
                  <div className="space-y-3 text-gray-600 dark:text-gray-400">
                    <div className="flex items-start">
                      <Laptop className="w-4 h-4 mr-3 mt-0.5 text-blue-600" />
                      <span>Real-time project work</span>
                    </div>
                    <div className="flex items-start">
                      <Globe className="w-4 h-4 mr-3 mt-0.5 text-blue-600" />
                      <span>Free .me domain (₹1000+ value)</span>
                    </div>
                    <div className="flex items-start">
                      <Award className="w-4 h-4 mr-3 mt-0.5 text-blue-600" />
                      <span>Certificate of completion</span>
                    </div>
                    <div className="flex items-start">
                      <Users className="w-4 h-4 mr-3 mt-0.5 text-blue-600" />
                      <span>Internship opportunities</span>
                    </div>
                  </div>
                </div>                <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800/50 bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:shadow-sm hover:border-indigo-300 dark:hover:border-gray-700/50 transition-all duration-300">
                  <h2 className="text-xl font-semibold leading-tight tracking-tight mb-4">
                    Topics Covered
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "HTML", "CSS", "Bootstrap", "Tailwind", "UX/UI", "SEO", 
                      "PRD", "SRD", "Color Theory", "Asset Management", "Git",
                      "Client Relations", "Hosting", "Deployment", "GitHub Pages", "VS Code"
                    ].map((topic) => (
                      <span 
                        key={topic} 
                        className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-700/50 rounded-full hover:from-blue-100 hover:to-indigo-100 dark:hover:from-blue-900/50 dark:hover:to-indigo-900/50 transition-all duration-200"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>          {/* Workshop Roadmap */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-semibold leading-tight tracking-tight mb-8 text-center">
              Workshop <span className="text-blue-600">Roadmap</span>
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              10 Guided Sessions | Real-World Projects | Hosted Portfolio | Internship-Ready
            </p>
            
            <div className="grid gap-4">              {[
                {
                  number: 1,
                  title: "Into the Webverse",
                  emoji: "🚀",
                  desc: "Understanding web fundamentals and setting up your development environment.",
                  showButtons: true,
                  resourceUnlocked: true,
                  reviewUnlocked: true
                },                {
                  number: 2,
                  title: "Building the Base – From Editor to GitHub",
                  emoji: "🧱",
                  desc: "HTML structure, semantic markup, and version control with GitHub.",
                  showButtons: true,
                  resourceUnlocked: true,
                  reviewUnlocked: true
                },
                {
                  number: 3,
                  title: "Styling Sorcery – Part 1",
                  emoji: "🎨",
                  desc: "CSS fundamentals, layouts, and responsive design principles.",
                  showButtons: false,
                  resourceUnlocked: false,
                  reviewUnlocked: false
                },
                {
                  number: 4,
                  title: "Styling Sorcery – Part 2",
                  emoji: "🌀",
                  desc: "Advanced CSS techniques and Bootstrap framework integration.",
                  showButtons: false,
                  resourceUnlocked: false,
                  reviewUnlocked: false
                },
                {
                  number: 5,
                  title: "The Utility Toolkit",
                  emoji: "⚙️",
                  desc: "Tailwind CSS, modern tools, and efficient development workflows.",
                  showButtons: false,
                  resourceUnlocked: false,
                  reviewUnlocked: false
                },
                {
                  number: 6,
                  title: "Architect's Mindset",
                  emoji: "🧠",
                  desc: "Design thinking, user experience, and project planning strategies.",
                  showButtons: false,
                  resourceUnlocked: false,
                  reviewUnlocked: false
                },
                {
                  number: 7,
                  title: "Blueprint to Reality",
                  emoji: "🧩",
                  desc: "Converting designs to code and building responsive layouts.",
                  showButtons: false,
                  resourceUnlocked: false,
                  reviewUnlocked: false
                },
                {
                  number: 8,
                  title: "Make It Yours",
                  emoji: "🖌️",
                  desc: "Personal branding, typography, color theory, and unique design choices.",
                  showButtons: false,
                  resourceUnlocked: false,
                  reviewUnlocked: false
                },
                {
                  number: 9,
                  title: "Launch Sequence Initiated",
                  emoji: "🚀",
                  desc: "Deployment, hosting, analytics, and performance optimization.",
                  showButtons: false,
                  resourceUnlocked: false,
                  reviewUnlocked: false
                },
                {
                  number: 10,
                  title: "Own Your Web Identity",
                  emoji: "🎯",
                  desc: "SEO, professional networking, and career advancement strategies.",
                  showButtons: false,
                  resourceUnlocked: false,
                  reviewUnlocked: false
                }              ].map((session, index) => (
                <div 
                  key={session.number}
                  onClick={() => {
                    if (session.resourceUnlocked) {
                      window.location.href = `/build-portfolio/session${session.number}/details`;
                    }
                  }}
                  className={`group p-6 rounded-xl border border-gray-200 dark:border-gray-800/50 bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:shadow-sm hover:border-blue-300 dark:hover:border-blue-700/50 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-indigo-50/50 dark:hover:from-blue-900/20 dark:hover:to-indigo-900/20 transition-all duration-300 ${
                    session.resourceUnlocked ? 'cursor-pointer' : 'cursor-default'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 border border-blue-200 dark:border-blue-700/50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                        {session.emoji}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full">
                          Session {session.number}
                        </span>
                        <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {session.title}
                        </h3>
                      </div>                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {session.desc}
                      </p>
                        {/* Action Buttons */}
                      {session.showButtons && (
                        <div className="flex gap-3 mt-4" onClick={(e) => e.stopPropagation()}>
                          
                          {/* Resource Button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (session.resourceUnlocked) {
                                window.location.href = `/build-portfolio/session${session.number}/details`;
                              }
                            }}
                            disabled={!session.resourceUnlocked}
                            className={`flex items-center px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${
                              session.resourceUnlocked
                                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 cursor-pointer'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 cursor-not-allowed opacity-75'
                            }`}
                          >
                            <BookOpen className="w-3 h-3 mr-1" />
                            {session.resourceUnlocked ? 'Details' : 'Unlock'}
                          </button>
                          
                          {/* Feedback Button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (session.reviewUnlocked) {
                                window.location.href = `/build-portfolio/session${session.number}/review`;
                              }
                            }}
                            disabled={!session.reviewUnlocked}
                            className={`flex items-center px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${
                              session.reviewUnlocked
                                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/50 cursor-pointer'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 cursor-not-allowed opacity-75'
                            }`}
                          >
                            <MessageCircle className="w-3 h-3 mr-1" />
                            {session.reviewUnlocked ? 'Feedback' : 'Locked'}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <div className="p-6 rounded-xl border border-orange-200 dark:border-orange-800/50 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-200 mb-2">
                  🔓 But Here&apos;s the Catch…
                </h3>
                <p className="text-sm text-orange-700 dark:text-orange-300 mb-2">
                  The <strong>what</strong> is here. The <strong>how</strong> is unlocked only when you attend.
                </p>
                <p className="text-sm text-orange-700 dark:text-orange-300">
                  Join the journey. First Session = Free. Rest is earned. 🧠💻✨
                </p>
              </div>
            </div>
          </div>          {/* Pricing */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold leading-tight tracking-tight mb-4">
                Simple <span className="text-blue-600">Pricing</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">              <div className="text-center p-6 rounded-xl border border-green-200 dark:border-green-800/50 bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:shadow-sm hover:border-green-300 dark:hover:border-green-700/50 hover:bg-gradient-to-r hover:from-green-50/50 hover:to-emerald-50/50 dark:hover:from-green-900/20 dark:hover:to-emerald-900/20 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 border border-green-200 dark:border-green-700/50 flex items-center justify-center text-2xl">
                  🆓
                </div>
                <h3 className="font-semibold mb-2">First Session</h3>
                <div className="text-2xl font-bold text-green-600 mb-2">Free</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Try before you commit</p>
              </div>
              
              <div className="text-center p-6 rounded-xl border-2 border-blue-500 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-900/20 dark:to-indigo-900/20 backdrop-blur-sm hover:shadow-sm hover:border-blue-400 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 border border-blue-200 dark:border-blue-700/50 flex items-center justify-center text-2xl">
                  🚀
                </div>
                <h3 className="font-semibold mb-2">Full Workshop</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">₹300</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Complete 10-session program</p>
              </div>
            </div>
          </div>          {/* Registration Banner */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="p-6 rounded-2xl border-2 border-blue-500 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-blue-400">
              <div className="text-center">
                <div className="inline-flex items-center px-3 py-1 text-xs font-medium text-blue-600 bg-blue-100 dark:bg-blue-900/40 dark:text-blue-300 rounded-full mb-4">
                  <UserPlus className="w-3 h-3 mr-2" />
                  Registration Open
                </div>
                <h2 className="text-xl md:text-2xl font-bold leading-tight tracking-tight mb-3 text-gray-900 dark:text-white">
                  Secure Your Spot Now!
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto">
                  Limited seats available. Register now to guarantee your place in the Build Portfolio Workshop and start your journey to building an amazing portfolio.
                </p>
                
                <Button
                  onClick={handleRegisterRedirect}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 inline-flex items-center hover:scale-105 transform shadow-lg hover:shadow-xl"
                >
                  <UserPlus className="w-5 h-5 mr-2" />
                  Register Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-8 rounded-2xl border border-green-200/50 dark:border-green-800/50 bg-gradient-to-r from-green-50/50 to-emerald-50/50 dark:from-green-900/20 dark:to-emerald-900/20 backdrop-blur-sm hover:shadow-sm transition-all duration-300">
              <h2 className="text-2xl font-semibold leading-tight tracking-tight mb-4">
                Stay Connected & Get Updates
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto">
                Join our WhatsApp group to get notified about session schedules, important announcements, and connect with fellow participants.
              </p>
              
              <Button
                onClick={handleWhatsAppJoin}
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3 rounded-xl transition-all duration-200 inline-flex items-center hover:scale-105 transform"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Join WhatsApp Group
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
