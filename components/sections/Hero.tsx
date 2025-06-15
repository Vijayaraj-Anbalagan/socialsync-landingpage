"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";
import SparklesText from "../ui/sparkles-text";
import Link from "next/link";


export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
    id="home"
    className="relative min-h-screen flex items-center justify-center bg-white text-black dark:bg-black dark:text-white px-4 pt-20"
  >
   
    {/* Content */}
    <div className="relative z-10 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >          {/* Workshop Banner */}
          <Link href="/build-portfolio" className="inline-block">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400 rounded-full mb-6 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] cursor-pointer group"
            >
              <Briefcase className="w-4 h-4 mr-2" />
              Build Your Portfolio
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </motion.div>
          </Link>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-none tracking-tight">
              <SparklesText text="SocialSync" />
            </h1>
          
          <p className="text-xl md:text-2xl font-medium leading-tight tracking-tight mt-4">
            <span style={{ color: '#5271ff' }}>
              Your Digital Partner for Tailored Solutions
            </span>
          </p>
        </motion.div>
  
        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl font-medium leading-tight tracking-tight text-gray-600 max-w-2xl mx-auto dark:text-gray-400"
        >
           We craft innovative solutions that help your business thrive in the
        digital age, delivering exceptional results that drive growth and
        success.
        </motion.p>
  
        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
        >
          <Button
            onClick={() => scrollToSection("services")}
            className="bg-black text-white dark:bg-white dark:text-black dark:hover:bg-slate-200 hover:bg-gray-800 px-9 py-6 text-lg font-semibold tracking-tight group rounded-xl"
          >
            Explore 
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            onClick={() => scrollToSection("portfolio")}
            variant="outline"
            className="hover:bg-gray-50 px-8 py-6 text-lg font-semibold tracking-tight group rounded-xl dark:bg-black dark:hover:bg-gray-950 dark:border-white border-black"
          >
            Portfolio
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
  
  
  
  );
}