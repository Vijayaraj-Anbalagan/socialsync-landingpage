import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <div id="contact" className="flex items-center justify-center bg-white px-12 py-12 text-black">
      <EnquiryCard
        tag="/ Enquiries"
        text={
          <>
            <strong>Interested in our services?</strong> Reach out to us for any
            questions or to learn more about how SocialSync can help your brand.
          </>
        }
        examples={[
          "How can SocialSync help boost my online presence?",
          "Do you offer custom branding strategies?",
          "What is included in your social media marketing packages?",
          "How do I start a project with SocialSync?",
          "What is the process for creating a new website?",
          "Can you help me with my SEO?",
          "Can you help me with poster design?",
        ]}
      />
    </div>
  );
};

const EnquiryCard: React.FC<{ tag: string; text: React.ReactNode; examples: string[] }> = ({
  tag,
  text,
  examples,
}) => {
  return (
    <div className="w-full max-w-xl space-y-6">
      <div>
        <p className="mb-1.5 text-sm font-light uppercase">{tag}</p>
        <hr className="border-black" />
      </div>
      <p className="max-w-lg text-xl leading-relaxed">{text}</p>
      <div>
        <Typewriter examples={examples} />
        <hr className="border-neutral-300" />
      </div>
      <button
        className="w-full rounded-full border border-black py-2 text-sm font-medium transition-colors hover:bg-black hover:text-white"
        onClick={() => window.location.href = "mailto:socialsync.smm@gmail.com"}
      >
        Contact Us
      </button>
    </div>
  );
};

const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;

const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;

const SWAP_DELAY_IN_MS = 5500;

const Typewriter: React.FC<{ examples: string[] }> = ({ examples }) => {
  const [exampleIndex, setExampleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setExampleIndex((prev) => (prev + 1) % examples.length);
    }, SWAP_DELAY_IN_MS);

    return () => clearInterval(intervalId);
  }, [examples]);

  return (
    <p className="mb-2.5 text-sm font-light uppercase">
      <span className="inline-block w-2 h-2 bg-black" />
      <span className="ml-3">
        EXAMPLE:{" "}
        {examples[exampleIndex].split("").map((letter, i) => (
          <motion.span
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: 0,
            }}
            transition={{
              delay: FADE_DELAY,
              duration: MAIN_FADE_DURATION,
              ease: "easeInOut",
            }}
            key={`${exampleIndex}-${i}`}
            className="relative"
          >
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: i * LETTER_DELAY,
                duration: 0,
              }}
            >
              {letter}
            </motion.span>
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                delay: i * LETTER_DELAY,
                times: [0, 0.1, 1],
                duration: BOX_FADE_DURATION,
                ease: "easeInOut",
              }}
              className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-black"
            />
          </motion.span>
        ))}
      </span>
    </p>
  );
};
