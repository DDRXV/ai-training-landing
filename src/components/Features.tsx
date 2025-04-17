/* ✅ Features.tsx */
export default function Features() {
  const features = [
    'Live Projects & Use Cases',
    'Designed for Marketers & Founders',
    'Zero Code Required',
    'Lifetime Access to Materials'
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="text-center text-2xl font-bold mb-10">Why This Course?</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {features.map((f, i) => (
          <div key={i} className="p-6 bg-white rounded shadow text-center">{f}</div>
        ))}
      </div>
    </section>
  );
}
