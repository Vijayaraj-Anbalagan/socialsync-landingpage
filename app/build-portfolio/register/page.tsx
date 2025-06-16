"use client";

import { useState, useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { Upload, FileText, User, Mail, Phone, Building, Code, Target, CheckCircle, Copy, CreditCard, QrCode } from "lucide-react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    collegeName: "",
    department: "",
    linkedinProfile: "",
    interests: "",
    skills: "",
    internshipInterest: "",
    githubExperience: "",
    primaryGoals: [] as string[],
    otherGoal: "",
    expectations: "",
    availability: "",
    consent: false
  });
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedText, setCopiedText] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === "consent") {
        setFormData(prev => ({ ...prev, [name]: checked }));
      } else if (name === "primaryGoals") {
        setFormData(prev => ({
          ...prev,
          primaryGoals: checked 
            ? [...prev.primaryGoals, value]
            : prev.primaryGoals.filter(goal => goal !== value)
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size <= 10 * 1024 * 1024) { // 10MB limit
      setUploadedFile(file);
    } else {
      alert("File size must be less than 10MB");
    }
  };

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        resolve(result.split(',')[1]); // Remove data:image/...;base64, prefix
      };
      reader.onerror = error => reject(error);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);

    try {
      let imageBase64 = "";
      let imageName = "";

      if (uploadedFile) {
        imageBase64 = await convertToBase64(uploadedFile);
        imageName = uploadedFile.name;
      }

      const submissionData = {
        ...formData,
        primaryGoals: formData.primaryGoals.join(", "),
        image: imageBase64,
        imageName: imageName,
        submittedAt: new Date().toISOString()
      };

      const response = await fetch("/api/submit-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });      if (response.ok) {
        setSubmitted(true);
        // Scroll to top with smooth animation
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");    } finally {
      setUploading(false);
    }
  };

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(type);
      setTimeout(() => setCopiedText(""), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
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
                Registration Successful!
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-gray-600 dark:text-gray-400 mb-8"
              >
                Thank you for registering for the Build Portfolio Workshop. We&apos;ll contact you soon with further details.
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
            <div className="text-center mt-5 mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Register for <span className="text-blue-600">Build Portfolio Workshop</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Fill out this form to secure your spot in our comprehensive portfolio building workshop.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Personal Information */}
              <div className="bg-white/5 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-6 flex items-center">
                  <User className="w-5 h-5 mr-2 text-blue-600" />
                  Personal Information
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

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      LinkedIn Profile Link
                    </label>
                    <input
                      type="url"
                      name="linkedinProfile"
                      value={formData.linkedinProfile}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Academic Information */}
              <div className="bg-white/5 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-6 flex items-center">
                  <Building className="w-5 h-5 mr-2 text-blue-600" />
                  Academic Information
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      College Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="collegeName"
                      value={formData.collegeName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Department <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Workshop Information */}
              <div className="bg-white/5 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-6 flex items-center">
                  <Code className="w-5 h-5 mr-2 text-blue-600" />
                  Workshop Information
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      What interests you about this workshop? <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="interests"
                      value={formData.interests}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      What skills or technologies are you already familiar with? <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="skills"
                      value={formData.skills}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Are you interested in internship opportunities upon completion of the workshop? <span className="text-red-500">*</span>
                    </label>                    <div className="flex gap-4">
                      <label className="flex items-center text-sm">
                        <input
                          type="radio"
                          name="internshipInterest"
                          value="Yes"
                          checked={formData.internshipInterest === "Yes"}
                          onChange={handleInputChange}
                          required
                          className="mr-2"
                        />
                        Yes
                      </label>
                      <label className="flex items-center text-sm">
                        <input
                          type="radio"
                          name="internshipInterest"
                          value="No"
                          checked={formData.internshipInterest === "No"}
                          onChange={handleInputChange}
                          required
                          className="mr-2"
                        />
                        No
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Do you have any prior experience with GitHub or version control? <span className="text-red-500">*</span>
                    </label>                    <div className="flex gap-4">
                      <label className="flex items-center text-sm">
                        <input
                          type="radio"
                          name="githubExperience"
                          value="Yes"
                          checked={formData.githubExperience === "Yes"}
                          onChange={handleInputChange}
                          required
                          className="mr-2"
                        />
                        Yes
                      </label>
                      <label className="flex items-center text-sm">
                        <input
                          type="radio"
                          name="githubExperience"
                          value="No"
                          checked={formData.githubExperience === "No"}
                          onChange={handleInputChange}
                          required
                          className="mr-2"
                        />
                        No
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      What is your primary goal for joining this workshop? (Select all that apply) <span className="text-red-500">*</span>
                    </label>                    <div className="space-y-2">
                      {[
                        "Build a professional portfolio",
                        "Learn specific web development skills",
                        "Prepare for an internship"
                      ].map((goal) => (
                        <label key={goal} className="flex items-center text-sm">
                          <input
                            type="checkbox"
                            name="primaryGoals"
                            value={goal}
                            checked={formData.primaryGoals.includes(goal)}
                            onChange={handleInputChange}
                            className="mr-2"
                          />
                          {goal}
                        </label>
                      ))}
                      <div className="flex items-center text-sm">
                        <input
                          type="checkbox"
                          name="primaryGoals"
                          value={formData.otherGoal}
                          checked={formData.primaryGoals.includes(formData.otherGoal) && formData.otherGoal !== ""}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        <input
                          type="text"
                          name="otherGoal"
                          value={formData.otherGoal}
                          onChange={handleInputChange}
                          placeholder="Other:"
                          className="flex-1 px-3 py-1 border border-gray-200 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      What are your expectations from this workshop? <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="expectations"
                      value={formData.expectations}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Please let us know if you have any upcoming exams or commitments that might affect your availability during the workshop. <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>              {/* Payment Section */}
              <div className="bg-white/5 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-6 flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-blue-600" />
                  Payment
                </h2>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* QR Code */}
                    <div className="text-center">
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 inline-block">
                        <QrCode className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                        <p className="text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">Scan QR Code to Pay</p>
                        <img 
                          src="/imgs/qr.jpg" 
                          alt="Payment QR Code" 
                          className="w-48 h-48 mx-auto rounded-lg border border-gray-200 dark:border-gray-600"
                        />
                      </div>
                    </div>

                    {/* Payment Details */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">UPI ID</label>
                        <div className="flex items-center space-x-2">
                          <input
                            type="text"
                            value="shrishanmugam2@okaxis"
                            readOnly
                            className="flex-1 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-sm"
                          />
                          <button
                            type="button"
                            onClick={() => copyToClipboard("shrishanmugam2@okaxis", "upi")}
                            className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                            title="Copy UPI ID"
                          >
                            <Copy className="w-4 h-4" />
                          </button>
                        </div>
                        {copiedText === "upi" && (
                          <p className="text-xs text-green-600 mt-1">UPI ID copied!</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Mobile Number</label>
                        <div className="flex items-center space-x-2 mb-2">
                          <input
                            type="text"
                            value="7550227793"
                            readOnly
                            className="flex-1 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-sm"
                          />
                          <button
                            type="button"
                            onClick={() => copyToClipboard("7550227793", "mobile")}
                            className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                            title="Copy Mobile Number"
                          >
                            <Copy className="w-4 h-4" />
                          </button>
                        </div>
                        {copiedText === "mobile" && (
                          <p className="text-xs text-green-600 mt-1">Mobile number copied!</p>
                        )}
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 border border-blue-200 dark:border-blue-800">
                        <p className="text-sm text-blue-800 dark:text-blue-200">
                          <li>Pay <strong>₹300</strong> for the workshop fee</li>
                          <li>Add your <strong>Name</strong> in the remarks while paying</li>
                          <li>Take a screenshot of the payment</li>
                          <li>Upload the screenshot below</li>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* File Upload Section */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Upload Payment Screenshot <span className="text-red-500">*</span>
                    </label>
                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileUpload}
                        accept="image/*,.pdf"
                        required
                        className="hidden"
                      />
                      <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {uploadedFile ? uploadedFile.name : "Click to upload payment screenshot"}
                      </p>
                      <p className="text-xs text-gray-500">
                        Upload 1 supported file. Max 10 MB.
                      </p>
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="mt-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Choose File
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consent */}              <div className="bg-white/5 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 rounded-xl p-6">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    required
                    className="mr-3 mt-1"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Consent Confirmation <span className="text-red-500">*</span></strong><br />
                    By submitting this form, you consent to participating in the workshop, following the guidelines, and sharing the information with the workshop team for internal use only.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={uploading}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {uploading ? "Submitting..." : "Register for Workshop"}
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
