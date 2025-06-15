'use client';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { useEffect } from 'react';

export default function CareersPage() {
  // Set page metadata using useEffect since we're using 'use client'
  useEffect(() => {
    document.title = "Careers - SocialSync | Join Our Digital Innovation Team";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Join SocialSync and be part of a dynamic team that transforms businesses through cutting-edge digital marketing, branding, and web solutions. Explore career opportunities and grow with us.');
    }
  }, []);
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
        {/* Background Effects */}
         <div className="fixed overflow-hidden inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[40vw] h-[40vw] bg-pink-200 dark:bg-pink-700/30 opacity-40 rounded-full blur-3xl animate-float-1"></div>
        <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-[40vw] h-[40vw] bg-blue-100 dark:bg-blue-900/30 opacity-40 rounded-full blur-3xl animate-float-2"></div>
      </div>

        <div className="relative z-10 px-4 py-20">
         

          {/* Header Section */}
          <div className="max-w-4xl mx-auto text-center mb-16 mt-8">
            <h1 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight mb-6">
              Join Our <span className="text-blue-600">Team</span>
            </h1>
            <p className="text-lg md:text-xl font-medium leading-tight tracking-tight text-gray-600 max-w-2xl mx-auto dark:text-gray-400">
              Be part of a dynamic team that transforms businesses through cutting-edge digital solutions. Your career journey starts here.
            </p>
          </div>

          {/* Company Culture Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold leading-tight tracking-tight mb-2">Innovation First</h3>
                <p className="text-sm font-medium leading-tight tracking-tight text-gray-600 dark:text-gray-400">
                  We embrace cutting-edge technologies and creative solutions to stay ahead of the curve.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold leading-tight tracking-tight mb-2">Collaborative Team</h3>
                <p className="text-sm font-medium leading-tight tracking-tight text-gray-600 dark:text-gray-400">
                  Work with passionate professionals who value teamwork and mutual growth.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold leading-tight tracking-tight mb-2">Growth Focused</h3>
                <p className="text-sm font-medium leading-tight tracking-tight text-gray-600 dark:text-gray-400">
                  Continuous learning opportunities and career advancement in a rapidly growing company.
                </p>
              </div>
            </div>
          </div>          {/* Applications Closed Section */}          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight mb-4">
                Applications <span className="text-red-600">Closed</span>
              </h2>
              <p className="text-lg font-medium leading-tight tracking-tight text-gray-600 dark:text-gray-400">
                Current applications are now closed. Those who have applied will be notified via email by our team.
              </p>
            </div>

            {/* Future Interest Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 rounded-xl p-8">
              <div className="text-center">
                
                <h3 className="text-xl font-semibold leading-tight tracking-tight mb-4">
                  Still Want to Be Part of Our Journey?
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 font-medium leading-tight tracking-tight mb-6 max-w-2xl mx-auto">
                  While current applications are closed, we&apos;re always interested in connecting with talented individuals for future opportunities. Feel free to share your portfolio with us!
                </p>
                
                <a 
                  href="mailto:thesocialsync.in@gmail.com?subject=Future Opportunities - Portfolio Submission&body=Hi SocialSync Team,%0D%0A%0D%0AI'm interested in future opportunities at SocialSync. Please find my resume and portfolio attached.%0D%0A%0D%0APortfolio Link: [Your Portfolio URL]%0D%0ALive Projects:%0D%0A1. [Project 1 URL]%0D%0A2. [Project 2 URL]%0D%0A3. [Project 3 URL]%0D%0A%0D%0AThank you for your time and consideration.%0D%0A%0D%0ABest regards,"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Your Portfolio
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
              <h3 className="text-xl font-semibold leading-tight tracking-tight mb-4">
                Have Questions?
              </h3>
              <p className="font-medium leading-tight tracking-tight text-gray-600 dark:text-gray-400 mb-6">
                Our team is here to help you with any questions about careers at SocialSync.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="mailto:thesocialsync.in@gmail.com"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Us
                </a>
                <span className="text-gray-400">or</span>
                <Link 
                  href="https://thesocialsync.in/#contact"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Contact Form
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
