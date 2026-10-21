import React from "react";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import ClientOnly from "./ui/ClientOnly";
import { personalInfo } from "@/data/data";

const Footer = () => {
  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Live Demo", href: "#demo" },
    { name: "Projects", href: "#projects" },
    { name: "Journey", href: "#journey" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="w-full mt-20 pt-16 pb-10 px-4 sm:px-6 lg:px-[71px] bg-gradient-to-b from-[#EFF7FF] to-[#E0F2FE] border-t border-[#DCEBFA] rounded-t-[40px] sm:rounded-t-[60px] text-[#102A43]">
      <div className="max-w-[1298px] mx-auto flex flex-col gap-12">
        {/* Top Call to Action Banner */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 pb-10 border-b border-[#DCEBFA]">
          <div>
            <h2 className="font-extrabold leading-tight text-[32px] sm:text-[44px] lg:text-[54px] text-[#102A43] text-center lg:text-left">
              Let&apos;s Connect &amp; <span className="text-[#3B82F6]">Build Together</span>
            </h2>
            <p className="text-[#475569] text-base sm:text-lg mt-2 text-center lg:text-left">
              Available for full-time AI/ML roles, software engineering, and high-impact freelance projects.
            </p>
          </div>

          <ClientOnly>
            <a
              href="#contact"
              className="group flex items-center justify-center gap-2.5 w-full sm:w-[200px] h-[56px] sm:h-[62px] px-6 text-white text-base sm:text-lg font-bold rounded-full bg-[#3B82F6] hover:bg-[#2563EB] shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Hire Me
              <ArrowUpRight
                size={22}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </a>
          </ClientOnly>
        </div>

        {/* Four Column Navigation & Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#3B82F6] to-[#60A5FA] flex items-center justify-center shadow-md shadow-blue-500/25">
                <span className="font-bold text-white text-sm tracking-wider">GR</span>
              </div>
              <span className="font-extrabold text-xl text-[#102A43] tracking-wide">
                GRAHITH RAO
              </span>
            </div>
            <p className="text-sm text-[#475569] leading-relaxed">
              Artificial Intelligence &amp; Machine Learning Engineer building intelligent, production-ready systems from embedded hardware to full-stack web and mobile applications.
            </p>
            {/* Social Links */}
            <div className="flex gap-2.5 mt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full bg-white border border-[#DCEBFA] hover:bg-[#3B82F6] hover:text-white text-[#102A43] flex items-center justify-center transition-all shadow-sm hover:scale-110"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white border border-[#DCEBFA] hover:bg-[#3B82F6] hover:text-white text-[#102A43] flex items-center justify-center transition-all shadow-sm hover:scale-110"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="w-10 h-10 rounded-full bg-white border border-[#DCEBFA] hover:bg-[#3B82F6] hover:text-white text-[#102A43] flex items-center justify-center transition-all shadow-sm hover:scale-110"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg text-[#102A43] border-b border-[#DCEBFA] pb-2">
              Navigation
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#475569] hover:text-[#3B82F6] transition-colors py-1"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Verified Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg text-[#102A43] border-b border-[#DCEBFA] pb-2">
              Direct Contact
            </h3>
            <div className="flex flex-col gap-3 text-sm text-[#475569]">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 hover:text-[#3B82F6] transition-colors"
              >
                <Mail size={16} className="text-[#3B82F6] flex-shrink-0" />
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 hover:text-[#3B82F6] transition-colors"
              >
                <Phone size={16} className="text-[#3B82F6] flex-shrink-0" />
                <span>{personalInfo.phone}</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-[#3B82F6] flex-shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter / Stay Updated */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg text-[#102A43] border-b border-[#DCEBFA] pb-2">
              Stay in Touch
            </h3>
            <p className="text-xs text-[#475569] leading-relaxed">
              Have an idea or need an AI solution? Leave your email and I will get back to you shortly.
            </p>
            <div className="relative w-full">
              <ClientOnly>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full h-[50px] bg-white text-[#102A43] text-sm px-4 pr-12 rounded-[14px] border border-[#DCEBFA] focus:border-[#3B82F6] outline-none shadow-sm transition-all placeholder:text-[#94A3B8]"
                />
                <a
                  href={`mailto:${personalInfo.email}?subject=Project%20Discussion`}
                  className="absolute top-1 right-1 h-[42px] w-[42px] bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-[10px] flex items-center justify-center transition-colors shadow-sm"
                  aria-label="Send Email"
                >
                  <ArrowUpRight size={18} />
                </a>
              </ClientOnly>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Policy */}
        <div className="pt-8 border-t border-[#DCEBFA] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>© 2026 Grahith G Rao. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-[#3B82F6] transition-colors">
              Back to Top ↑
            </a>
            <a href="/resume.pdf" target="_blank" className="hover:text-[#3B82F6] transition-colors">
              View Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
