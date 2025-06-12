'use client';
import type { Metadata } from 'next';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import FormfacadeEmbed from "@formfacade/embed-react";



export default function CareersPage() {
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
          </div>

          {/* Application Form Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight mb-4">
                Ready to Join Us?
              </h2>
              <p className="text-lg font-medium leading-tight tracking-tight text-gray-600 dark:text-gray-400">
                Fill out the application form below and let&apos;s start your journey with SocialSync.
              </p>
            </div>

            {/* Form Container */}
            <FormfacadeEmbed

                    formFacadeURL="https://formfacade.com/include/101962553111290905553/form/1FAIpQLSdVq9sysl3xkVCPd1etknCw7ogEJY_AVp_dTwkjvHId_ZbMhQ/classic.js/?div=ff-compose"
                    onSubmitForm={() => console.log('Form submitted')}

                    />
            </div>

          {/* Contact Section */}
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
              <h3 className="text-xl font-semibold leading-tight tracking-tight mb-4">
                Have Questions?
              </h3>
              <p className="font-medium leading-tight tracking-tight text-gray-600 dark:text-gray-400 mb-6">
                Our HR team is here to help you with any questions about careers at SocialSync.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="mailto:careers@thesocialsync.in"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Us
                </a>
                <span className="text-gray-400">or</span>
                <Link 
                  href="/#contact"
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