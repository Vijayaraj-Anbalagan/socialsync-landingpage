"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import SparklesText from "../ui/sparkles-text";

const socialLinks = [
  {
    icon: Twitter,
    href: "https://twitter.com/socialsync",
    label: "Twitter",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/socialsync",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/socialsync",
    label: "GitHub",
  },
];

const quickLinks = [
  { name: "Home", id: "home" },
  { name: "Services", id: "services" },
  { name: "Portfolio", id: "portfolio" },
];

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-4 bg-white border-t border-gray-100 dark:bg-black dark:border-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8">
          {/* Left: Logo/Brand */}
          <div className="text-center md:text-left">
            <SparklesText className="text-3xl font-bold" text="SocialSync" />
            <p className="text-gray-600 mt-2 dark:text-gray-300">Your Digital Partner for Tailored Solutions</p>
          </div>

          {/* Center: Quick Links */}
          <div className="flex justify-center space-x-6">
            {quickLinks.map((link) => (
              <Button
                key={link.id}
                variant="link"
                onClick={() => scrollToSection(link.id)}
                className="text-gray-600 hover:text-black transition-colors dark:text-gray-200"
              >
                {link.name}
              </Button>
            ))}
          </div>

          {/* Right: Social Media Icons */}
          <div className="flex justify-center md:justify-end space-x-4">
            {socialLinks.map((social) => (
                <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-black  transform hover:-translate-y-1 transition-all ease-in-out duration-200 dark:text-gray-200"
                aria-label={social.label}
                >
                <social.icon className="w-5 h-5" />
                </a>
            ))}
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="text-center text-gray-600 text-sm border-t border-gray-100 dark:border-gray-900 pt-8 dark:text-gray-300">
          © {new Date().getFullYear()} SocialSync. All rights reserved.
        </div>
      </div>
    </footer>
  );
}