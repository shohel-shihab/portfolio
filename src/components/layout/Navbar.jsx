"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0F0715]/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-purple-500 text-xl font-bold">
            SR
          </div>

          <div className="hidden md:block">
            <h3 className="text-lg font-bold">Shohel Rana</h3>
            <p className="text-sm text-gray-400">
              Full Stack Developer
            </p>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group relative font-medium text-gray-300 hover:text-white transition"
            >
              {item.name}

              <span
                className="
                absolute
                -bottom-2
                left-0
                h-[2px]
                w-0
                bg-gradient-to-r
                from-violet-500
                to-purple-500
                transition-all
                duration-300
                group-hover:w-full
              "
              />
            </a>
          ))}
        </nav>

        {/* Right Button */}
        <div className="hidden lg:flex">
          <a
            href="/resume.pdf"
            download
            className="
              rounded-full
              bg-gradient-to-r
              from-violet-600
              to-purple-500
              px-7
              py-3
              font-semibold
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_10px_40px_rgba(139,92,246,.45)]
            "
          >
            Download CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#15111F] border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="py-4 text-lg border-b border-white/10 hover:text-violet-400 transition"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="/resume.pdf"
                download
                className="
                  mt-6
                  rounded-full
                  bg-gradient-to-r
                  from-violet-600
                  to-purple-500
                  py-3
                  text-center
                  font-semibold
                "
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}