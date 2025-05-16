import React from "react";
import {
  Facebook,
  Instagram,
  Github,
  Youtube,
  X,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full rounded-b-xl bg-[#101726] py-6 px-4 flex flex-col md:flex-row items-center justify-between">
      <span className="text-sm text-gray-400">
        © 2024 Your Company, Inc. All rights reserved.
      </span>
      <div className="flex items-center gap-6 mt-4 md:mt-0">
        <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition">
          <Facebook className="w-6 h-6" />
        </a>
        <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition">
          <Instagram className="w-6 h-6" />
        </a>
        <a href="#" aria-label="X" className="text-gray-400 hover:text-white transition">
          <X className="w-6 h-6" />
        </a>
        <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-white transition">
          <Github className="w-6 h-6" />
        </a>
        <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-white transition">
          <Youtube className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
} 