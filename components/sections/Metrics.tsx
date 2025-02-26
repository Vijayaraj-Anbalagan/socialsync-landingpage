import React from "react";
import { FiBriefcase, FiUsers, FiAward, FiClock } from "react-icons/fi";
import NumberTicker from "../ui/number-ticker";

const Metrics = () => {
  return (
    <div id="metrics" className="p-6 lg:p-20 sm:p-10 dark:bg-black">
      <p className="text-center text-4xl font-bold mb-12 dark:text-white">Our Achievements</p>
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
      <Card
        title="50"
        subtitle="Successful Projects"
        Icon={FiBriefcase}
      />
      <Card
        title="15"
        subtitle="Trusted Clients"
        Icon={FiUsers}
      />
      <Card
        title="10"
        subtitle="Team Members"
        Icon={FiAward}
      />
      <Card
        title="2"
        subtitle="Years of Experience"
        Icon={FiClock}
      />
      </div>
    </div>
  );
};

interface CardProps {
  title: string;
  subtitle: string;
  Icon: React.ElementType;
}

const Card = ({ title, subtitle, Icon }: CardProps) => {
  return (
    <div className="w-full p-4 rounded border-[1px] relative overflow-hidden group border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
      {/* Hover Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />

      {/* Large Icon in the Corner */}
      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 dark:text-gray-800 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />

      {/* Main Icon */}
      <Icon className="mb-2 text-4xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />

      {/* Title and Subtitle */}
      <h3 className="font-bold text-2xl text-slate-950 group-hover:text-white transition-colors relative z-10 duration-300 dark:text-white">
      <NumberTicker className="group-hover:text-white transition-colors " value={parseFloat(title)} />
      +
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </div>
  );
};

export default Metrics;
