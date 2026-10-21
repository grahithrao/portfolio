'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function DualToggleButtons() {
  const [active, setActive] = useState<"projects" | "hire">("projects");

  return (
    <div className="flex border border-[#DCEBFA] bg-white/80 backdrop-blur-[14px] shadow-[0_12px_36px_rgba(59,130,246,0.12)] rounded-full gap-[8px] p-[8px] w-[350px] sm:w-[367px] h-[74px] sm:h-[80px] items-center justify-center transition-all duration-300">
      {/* Portfolio / Projects Button */}
      <a
        href="#projects"
        onMouseEnter={() => setActive("projects")}
        className={`group flex items-center justify-center gap-2 rounded-[60px] transition-all duration-300 ease-in-out cursor-pointer
          ${
            active === "projects"
              ? "bg-[#3B82F6] text-white font-semibold text-[19px] sm:text-[22px] w-[190px] sm:w-[208px] h-[58px] sm:h-[62px] shadow-lg shadow-blue-500/30 border border-blue-400"
              : "bg-transparent text-[#102A43] hover:text-[#3B82F6] font-medium text-[16px] sm:text-[18px] w-[120px] sm:w-[129px] h-[50px] sm:h-[54px]"
          }`}
      >
        <span>Projects</span>
        <ArrowUpRight
          size={18}
          className={`transition-all duration-300 ${
            active === "projects"
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-1 group-hover:opacity-100"
          }`}
        />
      </a>

      {/* Hire Me / Contact Button */}
      <a
        href="#contact"
        onMouseEnter={() => setActive("hire")}
        className={`group flex items-center justify-center gap-2 rounded-[60px] transition-all duration-300 ease-in-out cursor-pointer
          ${
            active === "hire"
              ? "bg-[#3B82F6] text-white font-semibold text-[19px] sm:text-[22px] w-[190px] sm:w-[208px] h-[58px] sm:h-[62px] shadow-lg shadow-blue-500/30 border border-blue-400"
              : "bg-transparent text-[#102A43] hover:text-[#3B82F6] font-medium text-[16px] sm:text-[18px] w-[120px] sm:w-[129px] h-[50px] sm:h-[54px]"
          }`}
      >
        <span>Hire me</span>
        <ArrowUpRight
          size={18}
          className={`transition-all duration-300 ${
            active === "hire"
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-1 group-hover:opacity-100"
          }`}
        />
      </a>
    </div>
  );
}
