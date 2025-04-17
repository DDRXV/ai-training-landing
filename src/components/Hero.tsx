import { theme } from '../assets/colors';
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-[--primary] text-white py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Master AI Prompting with Dyyota Tech
        </h1>
        <p className="text-lg md:text-xl font-medium">
          A hands-on course designed for non-technical professionals to become AI superusers in just a few weeks.
        </p>
        <a href="#enroll">
          <button className="bg-[--accent] text-white font-bold px-6 py-3 rounded-md hover:opacity-90 transition">
            Get Started
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;

