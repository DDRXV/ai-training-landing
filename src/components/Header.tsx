import { theme } from '../assets/colors';
export default function Header() {
  return (
    <header className="flex items-center justify-between p-6 bg-white shadow">
      <img src="/logo.png" alt="Dyyota Logo" className="h-10" />
      <nav className="space-x-6 text-sm text-gray-700">
        <a href="#features" className="hover:text-[${theme.primary}]">Features</a>
        <a href="#testimonials" className="hover:text-[${theme.primary}]">Testimonials</a>
        <a href="#enroll" className="bg-[${theme.accent}] text-white px-4 py-2 rounded">Enroll</a>
      </nav>
    </header>
  );
}