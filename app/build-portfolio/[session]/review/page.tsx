"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { 
  Star, 
  MessageSquare, 
  User, 
  Mail, 
  Users, 
  CheckCircle,
  Clock,
  BookOpen,
  Target,
  ThumbsUp,
  ThumbsDown
} from "lucide-react";

export default function SessionReviewPage() {
  const params = useParams();
  const sessionNumber = params.session as string;
  
  // Helper function to extract session number from parameter
  const getSessionNumber = () => {
    const sessionMatch = sessionNumber.match(/session(\d+)/);
    return sessionMatch ? sessionMatch[1] : sessionNumber;
  };
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    teamName: "",
    overallRating: "",
    contentHelpfulness: "",
    sessionTime: "",
    instructorRating: "",
    practicalActivity: "",
    assignmentClarity: "",
    likedMost: "",
    improvements: "",
    difficultTopics: "",
    suggestions: "",
    futureAttendance: "",
    recommendation: ""
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);  // Validate session number
  useEffect(() => {
    // Extract number from session parameter (e.g., "session1" -> "1")
    const sessionMatch = sessionNumber.match(/session(\d+)/);
    const sessionNum = sessionMatch ? parseInt(sessionMatch[1]) : NaN;
    
    if (isNaN(sessionNum) || sessionNum < 1 || sessionNum > 10) {
      window.location.href = "/build-portfolio";
      return;
    }
    
    const displaySessionNumber = sessionMatch ? sessionMatch[1] : sessionNumber;
    document.title = `Session ${displaySessionNumber} Review - Build Portfolio Workshop`;
  }, [sessionNumber]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Extract just the number from session parameter
      const sessionMatch = sessionNumber.match(/session(\d+)/);
      const sessionNum = sessionMatch ? sessionMatch[1] : sessionNumber;
      
      const submissionData = {
        ...formData,
        sessionNumber: sessionNum,
        submittedAt: new Date().toISOString()
      };

      const response = await fetch("/api/submit-session-review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        throw new Error("Failed to submit review");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Error submitting review. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white flex items-center justify-center">
          {/* Background Effects */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[40vw] h-[40vw] bg-pink-200 dark:bg-pink-700/30 opacity-40 rounded-full blur-3xl animate-float-1"></div>
            <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-[40vw] h-[40vw] bg-blue-100 dark:bg-blue-900/30 opacity-40 rounded-full blur-3xl animate-float-2"></div>
          </div>

          <div className="relative z-10 px-4 py-20">
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-green-100 dark:bg-green-900/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="w-12 h-12 text-green-600" />
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl font-bold mb-4"
              >
                Review Submitted Successfully!
              </motion.h1>              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-gray-600 dark:text-gray-400 mb-8"
              >
                Thank you for your valuable feedback on Session {getSessionNumber()}. Your input helps us improve the workshop experience.
              </motion.p>
              
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                href="/build-portfolio"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors hover:scale-105 transform"
              >
                Back to Workshop Details
              </motion.a>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
        {/* Background Effects */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[40vw] h-[40vw] bg-pink-200 dark:bg-pink-700/30 opacity-40 rounded-full blur-3xl animate-float-1"></div>
          <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-[40vw] h-[40vw] bg-blue-100 dark:bg-blue-900/30 opacity-40 rounded-full blur-3xl animate-float-2"></div>
        </div>

        <div className="relative z-10 px-4 py-20">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mt-5 mb-12">              <div className="inline-flex items-center px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400 rounded-full mb-6">
                <MessageSquare className="w-3 h-3 mr-2" />
                Session {getSessionNumber()} Feedback
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-blue-600">Session {getSessionNumber()}</span> Review
              </h1><p className="text-lg text-gray-600 dark:text-gray-400">
                Help us improve by sharing your experience and feedback from today&apos;s session.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <div className="bg-white/5 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-6 flex items-center">
                  <User className="w-5 h-5 mr-2 text-blue-600" />
                  Basic Information
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">
                      Team Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="teamName"
                      value={formData.teamName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Session Rating */}
              <div className="bg-white/5 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-6 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-blue-600" />
                  Session Rating
                </h2>
                
                <div className="space-y-6">                  <div>
                    <label className="block text-sm font-medium mb-4">
                      How would you rate today&apos;s session overall? <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                        <span>Poor</span>
                        <span>Excellent</span>
                      </div>
                      <div className="relative">
                        {/* Progress Bar Background */}
                        <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          {/* Progress Bar Fill */}                          <div 
                            className={`h-full transition-all duration-300 ease-out ${
                              formData.overallRating === '1' ? 'bg-red-500' :
                              formData.overallRating === '2' ? 'bg-orange-500' :
                              formData.overallRating === '3' ? 'bg-yellow-500' :
                              formData.overallRating === '4' ? 'bg-lime-500' :
                              formData.overallRating === '5' ? 'bg-green-500' :
                              'bg-gray-300'
                            }`}
                            style={{ 
                              width: formData.overallRating ? `${(parseInt(formData.overallRating) / 5) * 100}%` : '0%' 
                            }}
                          />
                        </div>
                        {/* Clickable Steps */}
                        <div className="absolute inset-0 flex">
                          {[1, 2, 3, 4, 5].map((rating) => (
                            <button
                              key={rating}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, overallRating: rating.toString() }))}
                              className="flex-1 h-3 cursor-pointer relative group"
                              title={`Rating: ${rating}`}
                            >
                              {/* Step Indicator */}
                              <div className="absolute top-1/2 -translate-y-1/2 right-0 w-0.5 h-6 bg-white dark:bg-gray-800 opacity-50" />
                              {/* Hover Effect */}
                              <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                          ))}
                        </div>
                        {/* Rating Numbers */}
                        <div className="flex justify-between mt-2 px-1">
                          {[1, 2, 3, 4, 5].map((rating) => (
                            <button
                              key={rating}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, overallRating: rating.toString() }))}
                              className={`w-8 h-8 rounded-full text-sm font-medium transition-all duration-200 ${
                                formData.overallRating === rating.toString()
                                  ? 'bg-blue-500 text-white shadow-lg scale-110'
                                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                              }`}
                            >
                              {rating}
                            </button>
                          ))}
                        </div>
                      </div>
                      {/* Selected Rating Display */}
                      {formData.overallRating && (
                        <div className="text-center">
                          <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full">
                            <Star className="w-4 h-4 mr-1 fill-current" />
                            Rating: {formData.overallRating}/5
                          </span>
                        </div>
                      )}
                    </div>
                  </div><div>
                    <label className="block text-sm font-medium mb-3">
                      How helpful was the content delivered today? <span className="text-red-500">*</span>
                    </label>                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        { value: "Not useful", color: "red", icon: "😞" },
                        { value: "Somewhat useful", color: "yellow", icon: "😐" },
                        { value: "Very useful", color: "green", icon: "😊" },
                        { value: "Extremely useful", color: "blue", icon: "🤩" }
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, contentHelpfulness: option.value }))}
                          className={`p-4 rounded-lg border-2 transition-all duration-200 text-center ${
                            formData.contentHelpfulness === option.value
                              ? option.color === 'red' ? 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400' :
                                option.color === 'yellow' ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400' :
                                option.color === 'green' ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400' :
                                'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                              : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800'
                          }`}
                        >
                          <div className="text-2xl mb-2">{option.icon}</div>
                          <div className="text-sm font-medium">{option.value}</div>
                        </button>
                      ))}
                    </div>
                  </div>                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Was the session time (1 hour) adequate for the content? <span className="text-red-500">*</span>
                    </label>                    <div className="flex gap-3">
                      {[
                        { value: "Too short", icon: "⏰", color: "orange" },
                        { value: "Just right", icon: "✅", color: "green" },
                        { value: "Too long", icon: "😴", color: "red" }
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, sessionTime: option.value }))}
                          className={`flex-1 p-4 rounded-lg border-2 transition-all duration-200 text-center ${
                            formData.sessionTime === option.value
                              ? option.color === 'orange' ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400' :
                                option.color === 'green' ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400' :
                                'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400'
                              : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800'
                          }`}
                        >
                          <div className="text-2xl mb-2">{option.icon}</div>
                          <div className="text-sm font-medium">{option.value}</div>
                        </button>
                      ))}
                    </div>
                  </div>                  <div>
                    <label className="block text-sm font-medium mb-4">
                      How would you rate the instructor&apos;s clarity and engagement? <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                        <span>Poor</span>
                        <span>Excellent</span>
                      </div>
                      <div className="relative">
                        {/* Progress Bar Background */}
                        <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          {/* Progress Bar Fill */}                          <div 
                            className={`h-full transition-all duration-300 ease-out ${
                              formData.instructorRating === '1' ? 'bg-red-500' :
                              formData.instructorRating === '2' ? 'bg-orange-500' :
                              formData.instructorRating === '3' ? 'bg-yellow-500' :
                              formData.instructorRating === '4' ? 'bg-lime-500' :
                              formData.instructorRating === '5' ? 'bg-green-500' :
                              'bg-gray-300'
                            }`}
                            style={{ 
                              width: formData.instructorRating ? `${(parseInt(formData.instructorRating) / 5) * 100}%` : '0%' 
                            }}
                          />
                        </div>
                        {/* Clickable Steps */}
                        <div className="absolute inset-0 flex">
                          {[1, 2, 3, 4, 5].map((rating) => (
                            <button
                              key={rating}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, instructorRating: rating.toString() }))}
                              className="flex-1 h-3 cursor-pointer relative group"
                              title={`Rating: ${rating}`}
                            >
                              {/* Step Indicator */}
                              <div className="absolute top-1/2 -translate-y-1/2 right-0 w-0.5 h-6 bg-white dark:bg-gray-800 opacity-50" />
                              {/* Hover Effect */}
                              <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                          ))}
                        </div>
                        {/* Rating Numbers */}
                        <div className="flex justify-between mt-2 px-1">
                          {[1, 2, 3, 4, 5].map((rating) => (
                            <button
                              key={rating}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, instructorRating: rating.toString() }))}
                              className={`w-8 h-8 rounded-full text-sm font-medium transition-all duration-200 ${
                                formData.instructorRating === rating.toString()
                                  ? 'bg-purple-500 text-white shadow-lg scale-110'
                                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                              }`}
                            >
                              {rating}
                            </button>
                          ))}
                        </div>
                      </div>
                      {/* Selected Rating Display */}
                      {formData.instructorRating && (
                        <div className="text-center">
                          <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full">
                            <Users className="w-4 h-4 mr-1" />
                            Instructor Rating: {formData.instructorRating}/5
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Activity & Assignment */}
              <div className="bg-white/5 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-6 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                  Activity & Assignment
                </h2>
                
                <div className="space-y-6">                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Did you find the practical/demo activity helpful for understanding the session&apos;s concepts? <span className="text-red-500">*</span>
                    </label>                    <div className="flex gap-3">
                      {[
                        { value: "Yes", icon: "👍", color: "green" },
                        { value: "No", icon: "👎", color: "red" },
                        { value: "Somewhat", icon: "🤷", color: "yellow" }
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, practicalActivity: option.value }))}
                          className={`flex-1 p-4 rounded-lg border-2 transition-all duration-200 text-center ${
                            formData.practicalActivity === option.value
                              ? option.color === 'green' ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400' :
                                option.color === 'red' ? 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400' :
                                'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400'
                              : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800'
                          }`}
                        >
                          <div className="text-2xl mb-2">{option.icon}</div>
                          <div className="text-sm font-medium">{option.value}</div>
                        </button>
                      ))}
                    </div>
                  </div>                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Was the assignment or challenge clear and practical for this session? <span className="text-red-500">*</span>
                    </label>                    <div className="flex gap-3">
                      {[
                        { value: "Yes", icon: "✅", color: "green" },
                        { value: "No", icon: "❌", color: "red" },
                        { value: "Didn't attempt yet", icon: "⏳", color: "gray" }
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, assignmentClarity: option.value }))}
                          className={`flex-1 p-4 rounded-lg border-2 transition-all duration-200 text-center ${
                            formData.assignmentClarity === option.value
                              ? option.color === 'green' ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400' :
                                option.color === 'red' ? 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400' :
                                'border-gray-500 bg-gray-50 dark:bg-gray-900/20 text-gray-600 dark:text-gray-400'
                              : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800'
                          }`}
                        >
                          <div className="text-xl mb-2">{option.icon}</div>
                          <div className="text-sm font-medium">{option.value}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Feedback */}
              <div className="bg-white/5 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-6 flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2 text-blue-600" />
                  Detailed Feedback
                </h2>
                
                <div className="space-y-6">
                  <div>                    <label className="block text-sm font-medium mb-2">
                      What did you like the most or what went well in Session {getSessionNumber()}?
                    </label>
                    <textarea
                      name="likedMost"
                      value={formData.likedMost}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Share what you enjoyed or found most valuable..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      What could be improved or covered more in future sessions?
                    </label>
                    <textarea
                      name="improvements"
                      value={formData.improvements}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Suggest areas for improvement..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Was there any topic you found difficult or would like more clarity on?
                    </label>
                    <textarea
                      name="difficultTopics"
                      value={formData.difficultTopics}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Mention any challenging topics..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Any suggestions to improve the workshop structure or materials?
                    </label>
                    <textarea
                      name="suggestions"
                      value={formData.suggestions}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Share your suggestions for overall improvement..."
                    />
                  </div>
                </div>
              </div>

              {/* Future Engagement */}
              <div className="bg-white/5 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-6 flex items-center">
                  <ThumbsUp className="w-5 h-5 mr-2 text-blue-600" />
                  Future Engagement
                </h2>
                
                <div className="space-y-6">                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Are you likely to attend future sessions in this workshop series? <span className="text-red-500">*</span>
                    </label>                    <div className="flex gap-3">
                      {[
                        { value: "Yes", icon: "🙋‍♂️", color: "green" },
                        { value: "No", icon: "🚫", color: "red" },
                        { value: "Maybe", icon: "🤔", color: "yellow" }
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, futureAttendance: option.value }))}
                          className={`flex-1 p-4 rounded-lg border-2 transition-all duration-200 text-center ${
                            formData.futureAttendance === option.value
                              ? option.color === 'green' ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400' :
                                option.color === 'red' ? 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400' :
                                'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400'
                              : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800'
                          }`}
                        >
                          <div className="text-2xl mb-2">{option.icon}</div>
                          <div className="text-sm font-medium">{option.value}</div>
                        </button>
                      ))}
                    </div>
                  </div>                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Would you recommend this workshop to your friends? <span className="text-red-500">*</span>
                    </label>                    <div className="flex gap-3">
                      {[
                        { value: "Yes", icon: "💯", color: "green" },
                        { value: "No", icon: "🚫", color: "red" },
                        { value: "Maybe", icon: "🤷‍♀️", color: "yellow" }
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, recommendation: option.value }))}
                          className={`flex-1 p-4 rounded-lg border-2 transition-all duration-200 text-center ${
                            formData.recommendation === option.value
                              ? option.color === 'green' ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400' :
                                option.color === 'red' ? 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400' :
                                'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400'
                              : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800'
                          }`}
                        >
                          <div className="text-2xl mb-2">{option.icon}</div>
                          <div className="text-sm font-medium">{option.value}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? "Submitting Review..." : "Submit Review"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
