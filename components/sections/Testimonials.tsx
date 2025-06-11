"use client";

import { cn } from "@/lib/utils";
import Marquee from '@/components/ui/marquee';
const testimonials = [
  {
    name: "John Rodriguez",
    role: "Founder & CEO",
    company: "DaaSye",
    image: "https://avatar.vercel.sh/john",
    quote: "SocialSync elevated our brand with a sleek website and impactful digital marketing. Their SEO and social media management delivered outstanding visibility and engagement.",
  },
  {
    name: "Graceson Tony",
    role: "Founder & CEO",
    company: "Baeonn",
    image: "https://avatar.vercel.sh/graceson",
    quote: "SocialSync transformed our online presence with a powerful website and digital strategy. Their SEO, creative media, and social handling brought amazing engagement and growth!",
  },
  {
    name: "Vijayaraja K",
    role: "Founder",
    company: "GS Educational Trust",
    image: "https://avatar.vercel.sh/vijay",
    quote: "SocialSync created a meaningful digital presence for our trust. Their website and SEO services helped us reach and impact more lives in our community.",
  },
  {
    name: "Logeshwaran",
    role: "Founder & CEO",
    company: "Dashagriv",
    image: "https://avatar.vercel.sh/logesh",
    quote: "SocialSync brought our vision to life with a stunning website, smart AI solutions, and seamless workspace management. Their branding and SEO support exceeded expectations!",
  },
  {
    name: "Hariharan",
    role: "Founder",
    company: "Machmayers",
    image: "https://avatar.vercel.sh/hari",
    quote: "SocialSync's team delivered exceptional results for our website, SEO, and digital marketing needs. Their creative work on posters and video editing helped us reach new heights!",
  },
];

const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

const TestimonialCard = ({
  image,
  name,
  role,
  company,
  quote,
}: {
  image: string;
  name: string;
  role: string;
  company: string;
  quote: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="40" height="40" alt={name} src={image} />
        <div className="flex flex-col items-start">
          <figcaption className="text-sm font-semibold leading-tight tracking-tight dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium leading-tight tracking-tight dark:text-white/40">
            {role}, {company}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm font-medium leading-tight tracking-tight dark:text-gray-200">{quote}</blockquote>
    </figure>
  );
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-50 dark:bg-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold leading-tight tracking-tight mb-12 dark:text-white">
          What Our Clients Say
        </h2>
        
        <div className="relative flex w-full items-center justify-center overflow-hidden rounded-lg">
          <Marquee pauseOnHover className="[--duration:30s]">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </Marquee>
        </div>
         
      </div>
    </section>
  );
}
