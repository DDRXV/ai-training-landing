import React from "react";

const Testimonials: React.FC = () => {
  return (
    <section className="bg-white text-gray-700 py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[--primary]">
          What Others Say
        </h2>
        <p className="italic text-lg md:text-xl">
          “I went from prompt novice to building automated marketing flows with GPT — thanks to Dyyota’s course!”
        </p>
        <p className="font-semibold">— Jane, SaaS Marketer</p>
      </div>
    </section>
  );
};

export default Testimonials;
