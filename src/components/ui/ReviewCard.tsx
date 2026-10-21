'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '@/data/data';

export default function ReviewCard({ name, role, rating, text, badge }: Review) {
  return (
    <div className="flex flex-col w-full h-auto min-h-[220px] sm:min-h-[240px] lg:min-h-[260px] justify-between p-6 sm:p-7 rounded-[28px] bg-white border border-[#DCEBFA] shadow-[0_12px_32px_rgba(59,130,246,0.06)] hover:shadow-[0_20px_45px_rgba(59,130,246,0.12)] hover:border-[#BFDBFE] transition-all duration-300">
      {/* Header with Avatar and Information */}
      <div className="w-full flex items-start justify-between gap-3">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#3B82F6] to-[#60A5FA] flex items-center justify-center flex-shrink-0 text-white font-bold text-base shadow-md shadow-blue-500/20">
            {name.charAt(0)}
          </div>
          <div className="flex flex-col min-w-0">
            <h3 className="font-bold text-base sm:text-lg text-[#102A43] leading-tight">
              {name}
            </h3>
            <span className="text-xs sm:text-sm text-[#64748B] leading-tight mt-0.5">
              {role}
            </span>
          </div>
        </div>
        {badge && (
          <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#EFF7FF] text-[#3B82F6] border border-[#BFDBFE]">
            {badge}
          </span>
        )}
      </div>

      {/* Star Rating */}
      <div className="flex items-center gap-2 my-2">
        <div className="flex gap-1">
          {[...Array(rating)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className="text-[#3B82F6] fill-[#3B82F6]"
            />
          ))}
        </div>
        <span className="text-sm font-bold text-[#102A43]">
          {rating}.0
        </span>
      </div>

      {/* Review Text */}
      <p className="text-[#475569] text-sm sm:text-[15px] leading-relaxed italic">
        &ldquo;{text}&rdquo;
      </p>
    </div>
  );
}
