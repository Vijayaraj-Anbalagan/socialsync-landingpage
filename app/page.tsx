"use client";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Metrics from "@/components/sections/Metrics";
import ContactUs from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".fade-in").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen">
       
      <Navbar />
      <Hero />
      
<div className="absolute inset-0">
  <motion.div
    className="absolute top-0 left-1/4 transform -translate-x-1/2 w-[40vw] h-[40vw] bg-pink-300 dark:bg-pink-700/50 opacity-40 rounded-full filter blur-3xl"
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
    className="absolute bottom-0 right-1/4 transform translate-x-1/2 w-[40vw] h-[40vw] bg-blue-200 dark:bg-blue-900/50 opacity-40 rounded-full filter blur-3xl"
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
      <Services />
      <Portfolio />
      <Testimonials />
      <Metrics />
      <ContactUs />
      <Footer />
    </main>
  );
}