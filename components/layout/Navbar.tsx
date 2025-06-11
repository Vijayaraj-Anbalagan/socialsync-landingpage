"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetTitle 
} from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Metrics", href: "#metrics" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white/30 dark:bg-black backdrop-blur-lg z-50 py-3 px-6 shadow-sm rounded-full border border-white/20 dark:border-gray-800/20"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#" className="text-2xl font-semibold leading-none tracking-tight dark:text-white">
          SocialSync
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-black dark:text-white font-medium leading-tight tracking-tight hover:text-black dark:hover:text-white transition-colors"
            >
              {link.name}
            </button>
          ))}
          <ThemeToggle />
          <Button 
           onClick={() => scrollToSection("#contact")}
           className="bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 font-semibold leading-tight tracking-tight rounded-full">
            Contact us
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
          </div>
          <SheetContent className="bg-white dark:bg-gray-900">
            <SheetTitle className="text-xl font-bold leading-tight tracking-tight mb-4 dark:text-white">Navigation</SheetTitle>
            <div className="flex flex-col space-y-4 mt-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-lg font-medium leading-tight tracking-tight text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection("#contact")}
                className="bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 font-semibold leading-tight tracking-tight w-full rounded-full">
                Contact us
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
}