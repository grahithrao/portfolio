'use client';

import React from 'react';
import Image from 'next/image';
import ArrowButton from './ArrowButton';
import { ProjectItem } from '@/data/data';

interface PortfolioCardProps extends ProjectItem {
  priority?: boolean;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  subtitle,
  badge,
  desc,
  image,
  href,
  tags,
  metrics,
  priority = false,
}) => {
  return (
    <div
      className="relative group 
        w-full 
        md:w-[600px] lg:w-[633px] h-[340px] sm:h-[370px] md:h-[400px] 
        rounded-[24px] md:rounded-[30px] 
        overflow-hidden transition-all duration-300 cursor-pointer 
        border border-[#DCEBFA] bg-white
        shadow-[0_10px_30px_rgba(59,130,246,0.08)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.18)]"
    >
      {/* Background Graphic Pattern */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover z-0 transition-transform duration-700 group-hover:scale-105"
        priority={priority}
      />

      {/* Light Gradient Overlay */}
      <div
        className="absolute inset-0 z-10 transition-opacity duration-300 group-hover:opacity-90"
        style={{
          background:
            'linear-gradient(210deg, rgba(16, 42, 67, 0.45) 0%, rgba(16, 42, 67, 0.75) 60%, rgba(16, 42, 67, 0.95) 100%)',
        }}
      />

      {/* Content Layer */}
      <div className="relative z-20 w-full h-full flex flex-col justify-between p-5 sm:p-7 md:p-8">
        {/* Top Bar: Badge and Arrow Button */}
        <div className="flex items-center justify-between">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/30">
            {badge}
          </span>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title}`}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white/80 bg-white/10 backdrop-blur-md group-hover:bg-[#3B82F6] group-hover:border-[#3B82F6] flex items-center justify-center transition-all duration-300 shadow-md"
          >
            <ArrowButton className="stroke-white group-hover:stroke-white transition-all duration-300 -rotate-45" />
          </a>
        </div>

        {/* Bottom Section: Title and Metrics */}
        <div>
          <span className="text-blue-300 text-xs sm:text-sm font-semibold tracking-wide">
            {subtitle}
          </span>
          <h2 className="font-bold text-[28px] sm:text-[34px] md:text-[42px] text-white leading-tight mt-1">
            {title}
          </h2>

          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap gap-4 mt-3 pt-3 border-t border-white/20">
            {metrics.map((m, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-extrabold text-white text-base sm:text-lg leading-tight">
                  {m.value}
                </span>
                <span className="text-white/70 text-xs">{m.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hover Slide-up Detailed Card */}
        <div
          className="absolute bottom-0 left-0 right-0 
          w-[94%] mx-auto mb-3 md:mb-4 
          bg-white/95 backdrop-blur-xl 
          rounded-[20px] md:rounded-[24px] 
          p-5 md:p-6 
          opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 
          transition-all duration-500 ease-out z-30
          border border-[#DCEBFA] shadow-[0_15px_40px_rgba(16,42,67,0.2)]"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[20px] md:text-[24px] font-bold text-[#102A43]">
              {title}
            </h3>
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#EFF7FF] text-[#3B82F6] border border-[#BFDBFE]">
              {badge}
            </span>
          </div>
          <p className="text-[#475569] text-xs sm:text-sm leading-relaxed mb-4">
            {desc}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs font-semibold px-2 py-0.5 rounded-md bg-[#EFF7FF] text-[#3B82F6] border border-[#BFDBFE]/60"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#3B82F6] hover:text-[#2563EB]"
          >
            Explore Repository & Code →
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
