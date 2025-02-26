"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SparklesText from "../ui/sparkles-text";


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
      >
        {/* Heading */}
        {/* <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          {" "}
          
        </motion.h1> */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          <SparklesText text="SocialSync" />
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold leading-tight mt-0"
          >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 mb-4 dark:bg-gradient-to-r dark:from-gray-200 dark:to-gray-400">
            Your Digital Partner for Tailored Solutions
          </span>
        </motion.h1>
        </motion.h1>
  
        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-400"
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
            className="bg-black text-white dark:bg-white dark:text-black dark:hover:bg-slate-200 hover:bg-gray-800 px-9 py-6 text-lg group rounded-xl"
          >
            Explore 
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            onClick={() => scrollToSection("portfolio")}
            variant="outline"
            className="hover:bg-gray-50 px-8 py-6 text-lg group rounded-xl dark:bg-black dark:hover:bg-gray-950 dark:border-white border-black"
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