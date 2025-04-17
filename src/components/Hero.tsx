/* 🎯 Hero.tsx */
import { theme } from '../assets/colors';
export default function Hero() {
  return (
    <section className="text-center py-20 bg-[${theme.primary}] text-white">
      <h1 className="text-4xl font-bold mb-4">Master AI Prompting with Dyyota Tech</h1>
      <p className="text-lg max-w-xl mx-auto">A hands-on course designed for non-technical professionals to become AI superusers in weeks.</p>
      <a href="#enroll" className="mt-8 inline-block bg-[${theme.accent}] px-6 py-3 rounded text-black font-semibold">Get Started</a>
    </section>
  );
}
