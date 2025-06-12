'use client';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import FormfacadeEmbed from "@formfacade/embed-react";
import { useEffect, useState } from 'react';

export default function CareersPage() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Set page metadata using useEffect since we're using 'use client'
  useEffect(() => {
    document.title = "Careers - SocialSync | Join Our Digital Innovation Team";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Join SocialSync and be part of a dynamic team that transforms businesses through cutting-edge digital marketing, branding, and web solutions. Explore career opportunities and grow with us.');
    }
  }, []);

  const handleFormSubmit = () => {
    console.log('Form submitted');
    setShowSuccessMessage(true);
    // Scroll to success message
    setTimeout(() => {
      const successElement = document.getElementById('success-message');
      if (successElement) {
        successElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
        {/* Background Effects */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
          </div>          {/* Application Form Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight mb-4">
                Ready to Join Us?
              </h2>
              <p className="text-lg font-medium leading-tight tracking-tight text-gray-600 dark:text-gray-400">
                Fill out the application form below and let&apos;s start your journey with SocialSync.
              </p>
            </div>            {/* Success Message */}
            {showSuccessMessage && (
              <div 
                id="success-message"
                className="mb-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-700/50 rounded-xl backdrop-blur-sm"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-800/50 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">
                      Application Submitted Successfully!
                    </h3>
                    <p className="text-green-700 dark:text-green-400 font-medium mb-3">
                      Thank you for your interest in joining SocialSync. Our team will reach out to you via email or phone within 2-3 business days.
                    </p>
                    <p className="text-sm text-green-600 dark:text-green-500 mb-4">
                      For any urgent queries, feel free to contact us at{' '}
                      <a 
                        href="mailto:thesocialsyncin@gmail.com" 
                        className="underline hover:text-green-800 dark:hover:text-green-300 font-medium transition-colors"
                      >
                        thesocialsyncin@gmail.com
                      </a>
                    </p>
                    <button
                      onClick={() => setShowSuccessMessage(false)}
                      className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 transition-colors"
                    >
                      Submit Another Application
                    </button>
                  </div>
                </div>
              </div>
            )}{/* Form Container */}
            {!showSuccessMessage && (
              <div className="bg-white/5 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 dark:bg-white rounded-xl p-8">
                <FormfacadeEmbed
                  formFacadeURL="https://formfacade.com/include/101962553111290905553/form/1FAIpQLSdVq9sysl3xkVCPd1etknCw7ogEJY_AVp_dTwkjvHId_ZbMhQ/classic.js/?div=ff-compose"
                  onSubmitForm={handleFormSubmit}
                />
              </div>
            )}
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
