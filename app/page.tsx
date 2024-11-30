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
      <Services />
      <Portfolio />
      <Testimonials />
      <Metrics />
      <ContactUs />
      <Footer />
    </main>
  );
}