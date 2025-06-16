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
        <h2 className="text-4xl font-bold leading-tight tracking-tight text-center mb-8">Our Work.</h2>
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

interface Card {
  href: string;
  url: string;
  title: string;
  id: number;
  type: 'image' | 'video';
}

interface CardProps {
  card: Card;
}

const Card = ({ card }: CardProps) => {
  return (
    <motion.div
      key={card.id}
      className="group relative h-[180px] w-[400px] md:h-[300px] md:w-[630px] overflow-hidden cursor-pointer rounded-xl border border-white/10 dark:border-gray-800/20"
      onClick={() => window.location.href = card.href}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
      
      {card.type === 'video' ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        >
          <source src={card.url} type="video/mp4" />
        </video>
      ) : (
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
        <div className="absolute inset-0 flex flex-col justify-end p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="flex items-center space-x-2"
            >
              <div className="h-1 w-10 bg-blue-500 rounded-full" />
              <span className="text-blue-400 text-sm font-medium">View Project</span>
            </motion.div>
            
            <h3 className="text-xl md:text-3xl font-bold text-white tracking-tight">
              {card.title}
            </h3>
            
            <p className="text-gray-300 text-sm md:text-base max-w-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              Click to explore this project in detail
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />
    </motion.div>
  );
};

const cards: Card[] = [
  {
    url: "/imgs/dashagriv.mp4",
    href: "https://dashagriv.in",
    title: "Dashagriv Website Redesign 2.0",
    id: 1,
    type: "video"
  },
  {
    url: "/imgs/baeonn.png",
    href: "https://baeonn.com",
    title: "Landing Page for Baeonn",
    id: 2,
    type: "image"
  },
  
  {
    url: "/imgs/dattools.mp4",
    href: "https://datworkspace.in",
    title: "DAT Workspace - Management Tool",
    id: 3,
    type: "video"
  },
  {
    url: "/imgs/daasye.jpg",
    href: "https://daasye.vercel.app",
    title: "Techn and Digital Partner for Daasye",
    id: 4,
    type: "image"
  },
  {
    url: "/imgs/gangashanmuga.jpg",
    href: "https://www.gangashanmugatrust.org",
    title: "Website for Ganga Shanmuga Trust",
    id: 5,
    type: "image"
  },
  {
    url: "/imgs/dat.png",
    href: "https://dashagriv.in",
    title: "Website for Dashagriv Aerospace",
    id: 6,
    type: "image"
  },
  {
    url: "/imgs/machmeyers.png",
    href: "https://machmeyers.in",
    title: "Website for Machmeyers GATE Academy",
    id: 7,
    type: "image"
  },
  {
    url: "/imgs/salesync.png",
    href: "https://sales-sync-test.vercel.app/",
    title: "Landing Page for SalesSync",
    id: 8,
    type: "image"
  },
  {
    url: "/imgs/bizbond.png",
    href: "https://biz-bond.vercel.app/",
    title: "Landing Page for BizBond",
    id: 9,
    type: "image"
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

      if (x === 0 ) {
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
    <div className="flex flex-col relative overflow-hidden gap-6 py-4 sm:block md:hidden">
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
        onDragEnd={onDragEnd}
        className="flex snap-x snap-mandatory touch-pan-x"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>

      <div className="flex flex-col items-center justify-center gap-3 px-4">
        <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Tap image to view project details
        </p>
      </div>
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
          animate={{
            scale: imgIndex === idx ? 1 : 0.9,
            opacity: imgIndex === idx ? 1 : 0.5,
          }}
          transition={SPRING_OPTIONS}
          className="relative w-screen px-6 shrink-0 snap-center"
          onClick={() => window.open(card.href, "_blank")}
        >
          <motion.div 
            className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 dark:border-gray-800/20 bg-white/5 dark:bg-black/5 shadow-lg"
            whileTap={{ scale: 0.97 }}
          >
            {card.type === 'video' ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={card.url} type="video/mp4" />
              </video>
            ) : (
              <div
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: `url(${card.url})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20">
              <div className="absolute inset-0 flex flex-col justify-end p-2">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="h-0.5 w-6 bg-blue-500 rounded-full" />
                    <span className="text-blue-400 text-xs font-medium">
                      {imgIndex === idx ? "Tap to View" : ""}
                    </span>
                  </div>
                  
                  <h3 className="text-base font-bold text-white tracking-tight leading-tight">
                    {card.title}
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>
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
    <div className="flex justify-center gap-3">
      {cards.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setImgIndex(idx)}
          className="relative touch-manipulation"
        >
          <div 
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === imgIndex 
                ? "bg-blue-500 scale-125" 
                : "bg-gray-300 dark:bg-gray-600"
            }`} 
          />
        </button>
      ))}
    </div>
  );
};
