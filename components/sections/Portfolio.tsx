"use client";

import React, { useEffect, useRef } from "react";
import { motion, useTransform , useScroll, useMotionValue } from "framer-motion";
import { useMediaQuery } from 'react-responsive';
import { useState } from "react";

export default function Portfolio() {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });

  return (
    <section id="portfolio" className="pt-10 px-4 dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Our Work.</h2>
      {isDesktopOrLaptop ? <HorizontalScrollCarousel /> : <SwipeCarousel />}
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
    <section ref={targetRef} className={`relative h-[300vh] dark:bg-black`}>
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
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
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


const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 2,
  stiffness: 200,
  damping: 30,
};

export const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((prev) => {
          if (prev === cards.length - 1) {
            return 0;
          }
          return prev + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [dragX]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < cards.length - 1) {
      setImgIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative overflow-hidden py-8 sm:block md:hidden">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      
    </div>
  );
};

interface ImagesProps {
  imgIndex: number;
}

const Images: React.FC<ImagesProps> = ({ imgIndex }) => {
  return (
    <>
      {cards.map((card, idx) => (
        <motion.div
          key={card.id}
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          animate={{
            scale: imgIndex === idx ? 0.85 : 0.75,
          }}
          transition={SPRING_OPTIONS}
          className="aspect-video w-screen shrink-0 rounded-xl object-cover"
          onClick={() => window.open(card.href, "_blank")} // Redirects to `href` on click
        >
          <div className="absolute inset-0 z-10 flex items-end p-1">
            <h3 className=" opacity-0 hover:opacity-75 text-xl font-semibold text-white">{card.title}</h3>
          </div>
        </motion.div>
      ))}
    </>
  );
};

interface DotsProps {
  imgIndex: number;
  setImgIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Dots: React.FC<DotsProps> = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {cards.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setImgIndex(idx)}
          className={`h-3 w-3 rounded-full transition-colors ${
            idx === imgIndex ? "bg-blue-500" : "bg-neutral-300"
          }`}
        />
      ))}
    </div>
  );
};
