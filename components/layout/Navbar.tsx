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
      className="fixed w-full bg-white/30 backdrop-blur-lg z-50 py-3 px-6 shadow-sm rounded-full border border-white/20"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#" className="text-2xl font-bold">
          SocialSync
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-black font-semibold hover:text-black transition-colors"
            >
              {link.name}
            </button>
          ))}
          <Button 
           onClick={() => scrollToSection("#contact")}
           className="bg-black text-white hover:bg-gray-800 rounded-full">
            Contact us
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-white">
            <SheetTitle className="text-xl font-bold mb-4 ">Navigation</SheetTitle>
            <div className="flex flex-col space-y-4 mt-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-lg text-gray-600 hover:text-black transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
                <Button 
                onClick={() => scrollToSection("#contact")}
                className="bg-black text-white hover:bg-gray-800 w-full rounded-full">
                Contact us
                </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
}