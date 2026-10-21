"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const leftMenuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Live Demo", href: "#demo" },
  ];

  const rightMenuItems = [
    { label: "Projects", href: "#projects" },
    { label: "Journey", href: "#journey" },
    { label: "Certs", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  const allMenuItems = [...leftMenuItems, ...rightMenuItems];

  const [activeSection, setActiveSection] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-4 sm:top-6 w-full max-w-[1298px] px-4 sm:px-6 z-50 transition-all duration-300">
      <nav
        className={`w-full h-[70px] sm:h-[80px] lg:h-[86px] px-4 lg:px-6 rounded-[28px] sm:rounded-[38px] lg:rounded-[50px] 
        bg-white/90 backdrop-blur-[20px] border border-[#DCEBFA] 
        shadow-[0_14px_40px_rgba(59,130,246,0.08)] mx-auto flex items-center justify-between transition-all duration-300
        ${scrolled ? "shadow-[0_18px_50px_rgba(59,130,246,0.14)] border-[#BFDBFE]" : ""}`}
      >
        {/* Left Menu (Desktop) */}
        <div className="hidden lg:flex flex-1 justify-start gap-1.5">
          {leftMenuItems.map((item) => {
            const isActive = activeSection === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveSection(item.label)}
                className={`px-5 h-[54px] flex items-center justify-center rounded-[60px] text-[15px] font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-[#3B82F6] text-white font-semibold shadow-md shadow-blue-500/20"
                    : "bg-transparent text-[#102A43] hover:bg-[#EFF7FF] hover:text-[#3B82F6]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Center Brand Identity */}
        <a
          href="#home"
          className="flex flex-col items-center flex-shrink-0 cursor-pointer group"
          onClick={() => setActiveSection("Home")}
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-[#3B82F6] to-[#60A5FA] flex items-center justify-center mb-1 shadow-md shadow-blue-500/30 group-hover:scale-105 transition-transform">
            <span className="font-bold text-white text-xs sm:text-sm tracking-wider">GR</span>
          </div>
          <span className="font-bold text-sm sm:text-base lg:text-lg text-[#102A43] tracking-wide group-hover:text-[#3B82F6] transition-colors">
            GRAHITH RAO
          </span>
        </a>

        {/* Right Menu (Desktop) */}
        <div className="hidden lg:flex flex-1 justify-end gap-1.5">
          {rightMenuItems.map((item) => {
            const isActive = activeSection === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveSection(item.label)}
                className={`px-5 h-[54px] flex items-center justify-center rounded-[60px] text-[15px] font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-[#3B82F6] text-white font-semibold shadow-md shadow-blue-500/20"
                    : "bg-transparent text-[#102A43] hover:bg-[#EFF7FF] hover:text-[#3B82F6]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="/resume.pdf"
            download="Grahith_G_Rao_Resume.pdf"
            className="ml-2 px-5 h-[54px] flex items-center justify-center gap-1.5 rounded-[60px] text-[15px] font-semibold text-[#3B82F6] border border-[#BFDBFE] hover:bg-[#EFF7FF] transition-all"
            title="Download Resume"
          >
            Resume
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full bg-[#3B82F6] text-white hover:bg-[#2563EB] transition-colors shadow-md shadow-blue-500/20"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-[calc(100%+12px)] left-4 right-4 bg-white/95 backdrop-blur-[24px] rounded-[30px] border border-[#DCEBFA] shadow-[0_20px_50px_rgba(59,130,246,0.15)] p-4 flex flex-col gap-1.5 lg:hidden z-50">
            {allMenuItems.map((item) => {
              const isActive = activeSection === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActiveSection(item.label);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full h-[48px] flex items-center px-6 rounded-[24px] text-base font-medium transition-all ${
                    isActive
                      ? "bg-[#3B82F6] text-white font-semibold"
                      : "text-[#102A43] hover:bg-[#EFF7FF] hover:text-[#3B82F6]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-2 border-t border-[#DCEBFA] mt-1 flex gap-2">
              <a
                href="/resume.pdf"
                download="Grahith_G_Rao_Resume.pdf"
                className="flex-1 h-[48px] flex items-center justify-center gap-2 rounded-[24px] bg-[#EFF7FF] text-[#3B82F6] font-semibold text-sm border border-[#BFDBFE]"
              >
                Download Resume <ArrowUpRight size={16} />
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex-1 h-[48px] flex items-center justify-center gap-2 rounded-[24px] bg-[#3B82F6] text-white font-semibold text-sm shadow-md"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
