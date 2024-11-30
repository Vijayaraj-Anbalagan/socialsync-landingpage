"use client";

import React from "react";
import { motion } from "framer-motion";
import { Monitor, Palette, Megaphone, Briefcase } from "lucide-react";

const services = [
  {
    title: "UI/UX Design",
    description: "Creating intuitive and engaging user experiences.",
    gradient: "from-sky-400 to-blue-400", // Starts with sky blue
    icon: Palette,
  },
  {
    title: "Website Development",
    description: "Building responsive and performant web applications.",
    gradient: "from-blue-400 to-indigo-400", // Transitioning into indigo
    icon: Monitor,
  },
  {
    title: "Digital Marketing",
    description: "Driving growth through strategic digital campaigns.",
    gradient: "from-indigo-400 to-pink-400", // Indigo to pink
    icon: Megaphone,
  },
  {
    title: "Branding",
    description: "Crafting unique and memorable brand identities.",
    gradient: "from-pink-400 to-rose-400", // Ends with light pink (rose)
    icon: Briefcase,
  },
];


const BounceCard = ({
  title,
  description,
  gradient,
  Icon,
}: {
  title: string;
  description: string;
  gradient: string;
  Icon: React.ElementType;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: "-1deg" }}
      className="group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 shadow-lg"
    >
      <h3 className="text-xl font-semibold text-center group-hover: transition-opacity duration-300">
        {title}
      </h3>
      <div
        className={`absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br ${gradient} p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]`}
      >
        <span className="block text-center font-semibold text-white transition-opacity duration-300 group-hover:hidden sm:group-hover:block">
          {description}
        </span>
        <Icon className="w-16 h-16 mx-auto mt-4 text-white" />
      </div>
    </motion.div>
  );
};

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
          <h2 className="max-w-lg text-4xl font-bold md:text-5xl ml-1">
            Discover Our{" "}
            <span className="text-slate-400">Expert Services</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <BounceCard
              key={index}
              title={service.title}
              description={service.description}
              gradient={service.gradient}
              Icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
