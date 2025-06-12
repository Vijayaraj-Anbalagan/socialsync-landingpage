"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetTitle 
} from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

const navLinks = [
  { name: "Home", href: "#home", type: "scroll" },
  { name: "Services", href: "#services", type: "scroll" },
  { name: "Portfolio", href: "#portfolio", type: "scroll" },
  { name: "Testimonials", href: "#testimonials", type: "scroll" },
  { name: "Metrics", href: "#metrics", type: "scroll" },
  { name: "Blog", href: "/blog", type: "link" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (link: { name: string; href: string; type: string }) => {
    if (link.type === "scroll") {
      // If we're not on the home page, navigate to home first
      if (pathname !== "/") {
        router.push(`/${link.href}`);
      } else {
        // If we're on home page, scroll to section
        const element = document.querySelector(link.href);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const handleContactClick = () => {
    if (pathname !== "/") {
      router.push("/#contact");
    } else {
      const element = document.querySelector("#contact");
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white/30 dark:bg-black backdrop-blur-lg z-50 py-3 px-6 shadow-sm rounded-full border border-white/20 dark:border-gray-800/20"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-semibold leading-none tracking-tight dark:text-white hover:opacity-80 transition-opacity duration-200">
          SocialSync
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            link.type === "link" ? (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-black dark:text-white font-medium leading-tight tracking-tight transition-colors group py-2"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 ease-out group-hover:w-full origin-left"></span>
              </Link>
            ) : (
              <button
                key={link.name}
                onClick={() => handleNavigation(link)}
                className="relative text-black dark:text-white font-medium leading-tight tracking-tight transition-colors group py-2"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 ease-out group-hover:w-full origin-left"></span>
              </button>
            )
          ))}
          <ThemeToggle />
          <Button 
           onClick={handleContactClick}
           className="bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 font-semibold leading-tight tracking-tight rounded-full transition-all duration-200">
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
                link.type === "link" ? (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium leading-tight tracking-tight text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-left"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <button
                    key={link.name}
                    onClick={() => handleNavigation(link)}
                    className="text-lg font-medium leading-tight tracking-tight text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-left"
                  >
                    {link.name}
                  </button>
                )
              ))}
              <Button 
                onClick={handleContactClick}
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