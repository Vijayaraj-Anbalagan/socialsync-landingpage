"use client";

import React, { useRef } from "react";
import { motion, useTransform , useScroll } from "framer-motion";

export default function Portfolio() {
  return (
    <section id="portfolio" className="pt-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Our Work.</h2>
        <HorizontalScrollCarousel />
      </div>
    </section>
  );
}

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

interface CardProps {
  card: {
    href: string;
    url: string;
    title: string;
    id: number;
  };
}

const Card = ({ card }: CardProps) => {
  return (
    <div
    key={card.id}
    className="group relative h-[180px] w-[400px] md:h-[300px] md:w-[630px] overflow-hidden cursor-pointer"
    onClick={() => window.location.href = card.href}
  >
    {/* Updated to use "contain" instead of "cover" */}
  <div
    style={{
      backgroundImage: `url(${card.url})`,
      backgroundSize: "contain", // Ensures the entire image is visible
      backgroundRepeat: "no-repeat", // Avoid repeating the image
      backgroundPosition: "center", // Centers the image
    }}
    className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-105"
  >
    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75"></div>
  </div>
  <div className="absolute bottom-4 right-4 z-10">
    <h3 className="text-xl md:text-3xl font-bold text-white opacity-0 group-hover:opacity-75">{card.title}</h3>
  </div>
</div>

  );
};


const cards = [
  {
    url: "/imgs/baeonn.png",
    href: "https://baeonn.com",
    title: "Landing Page for Baeonn",
    id: 1,
  },
  {
    url: "/imgs/dat.png",
    href: "https://dashagriv.in",
    title: "Website for Dashagriv Aerospace",
    id: 2,
  },
  {
    url: "/imgs/machmeyers.png",
    href: "https://machmeyers.in",
    title: "Website for Machmeyers GATE Academy",
    id: 3,
  },
  {
    url: "/imgs/salesync.png",
    href: "https://sales-sync-test.vercel.app/",
    title: "Landing Page for SalesSync",
    id: 4,
  },
  {
    url: "/imgs/bizbond.png",
    href: "https://biz-bond.vercel.app/",
    title: "Landing Page for BizBond",
    id: 5,
  },
];