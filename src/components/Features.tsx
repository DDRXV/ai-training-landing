import React from "react";

const features = [
  "✅ Live Projects & Use Cases",
  "✅ Designed for Marketers & Founders",
  "✅ Zero Code Required",
  "✅ Lifetime Access to Materials",
];

const Features: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[--primary] mb-10">
          Why This Course?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center text-lg font-medium text-gray-800"
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
