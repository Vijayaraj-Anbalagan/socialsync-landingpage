"use client";

import { cn } from "@/lib/utils";
import Marquee from '@/components/ui/marquee';
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    quote: "SocialSync transformed our digital presence. Their team delivered beyond our expectations.",
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    company: "Growth Labs",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    quote: "Professional, creative, and highly skilled team. They helped us achieve our goals.",
  },
  {
    name: "Emma Williams",
    role: "Founder",
    company: "Digital First",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    quote: "Outstanding service and results. SocialSync is our go-to digital partner.",
  },
  {
    name: "Jack Anderson",
    role: "Product Manager",
    company: "InnovateX",
    image: "https://avatar.vercel.sh/jack",
    quote: "Working with SocialSync was seamless and efficient. Highly recommend them!",
  },
  {
    name: "Alice Brown",
    role: "Creative Lead",
    company: "DesignPro",
    image: "https://avatar.vercel.sh/alice",
    quote: "SocialSync truly understands the essence of digital transformation. A brilliant team!",
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
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">
            {role}, {company}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm dark:text-gray-200">{quote}</blockquote>
    </figure>
  );
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 dark:text-white">
          What Our Clients Say
        </h2>
        
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </Marquee>
         
      </div>
    </section>
  );
}
