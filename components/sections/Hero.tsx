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
    className="relative min-h-screen flex items-center justify-center bg-white text-black px-4 pt-20"
  >
<div className="absolute inset-0 overflow-hidden">
  <motion.div
    className="absolute top-0 left-1/4 transform -translate-x-1/2 w-[40vw] h-[40vw] bg-pink-300 opacity-40 rounded-full filter blur-3xl"
    animate={{
      x: ["-50%", "50%", "-50%"],
      y: ["-50%", "50%", "-50%"],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  ></motion.div>
  <motion.div
    className="absolute bottom-0 right-1/4 transform translate-x-1/2 w-[40vw] h-[40vw] bg-blue-200 opacity-40 rounded-full filter blur-3xl"
    animate={{
      x: ["50%", "-50%", "50%"],
      y: ["50%", "-50%", "50%"],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  ></motion.div>
</div>
   
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
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 mb-4">
            Your Digital Partner for Tailored Solutions
          </span>
        </motion.h1>
        </motion.h1>
  
        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl text-gray-600 max-w-2xl mx-auto"
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
            className="bg-black text-white hover:bg-gray-800 px-9 py-6 text-lg group rounded-xl"
          >
            Explore 
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            onClick={() => scrollToSection("portfolio")}
            variant="outline"
            className="hover:bg-gray-50 px-8 py-6 text-lg group rounded-xl"
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