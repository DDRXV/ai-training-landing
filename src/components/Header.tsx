import { theme } from '../assets/colors';
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img src="/logo.png" alt="Logo" className="h-10" />
            </a>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex space-x-6 items-center text-[--primary] font-medium">
            <a href="#features" className="hover:text-[--accent] transition-colors duration-200">
              Features
            </a>
            <a href="#testimonials" className="hover:text-[--accent] transition-colors duration-200">
              Testimonials
            </a>
            <a href="#enroll">
              <button className="bg-[--accent] text-white px-4 py-2 rounded-md hover:opacity-90 transition">
                Enroll
              </button>
            </a>
          </nav>

          {/* Mobile Menu Button (optional) */}
          <div className="md:hidden">
            {/* You can add a mobile menu toggle here */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;