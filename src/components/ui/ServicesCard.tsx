import Image from 'next/image';
import { LucideIcon } from 'lucide-react';

interface ServicesCardProps {
  number: string;
  title: string;
  desc: string;
  tags?: string[];
  imageSrc?: string;
  icon?: LucideIcon;
  priority?: boolean;
}

export default function ServicesCard({
  number,
  title,
  desc,
  tags = [],
  imageSrc = '/Rectangle 7.svg',
  icon: Icon,
  priority = false,
}: ServicesCardProps) {
  return (
    <div className="relative flex flex-col justify-between w-full md:max-w-[360px] lg:max-w-[416px] h-[480px] lg:h-[520px] rounded-[32px] lg:rounded-[40px] bg-white border border-[#DCEBFA] hover:border-[#60A5FA] shadow-[0_12px_32px_rgba(59,130,246,0.06)] hover:shadow-[0_24px_50px_rgba(59,130,246,0.15)] transition-all duration-300 ease-in-out overflow-hidden cursor-pointer group p-6 sm:p-8">
      {/* Top Header */}
      <div className="w-full flex items-center justify-between border-b border-[#DCEBFA] pb-4">
        <span className="font-bold text-xs uppercase tracking-widest text-[#3B82F6] bg-[#EFF7FF] px-3 py-1 rounded-full border border-[#BFDBFE]">
          Service {number}
        </span>
        {Icon && (
          <div className="w-10 h-10 rounded-full bg-[#EFF7FF] text-[#3B82F6] flex items-center justify-center group-hover:bg-[#3B82F6] group-hover:text-white transition-colors">
            <Icon size={20} />
          </div>
        )}
      </div>

      {/* Main Information */}
      <div className="flex flex-col gap-3 my-auto">
        <h3 className="font-bold text-[24px] sm:text-[28px] text-[#102A43] group-hover:text-[#3B82F6] transition-colors leading-tight">
          {title}
        </h3>
        <p className="text-[#475569] text-[15px] sm:text-[16px] leading-relaxed line-clamp-4">
          {desc}
        </p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#EFF7FF] text-[#3B82F6] border border-[#BFDBFE]/60"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Card Visual Layer & Action */}
      <div className="w-full pt-4 border-t border-[#DCEBFA] flex items-center justify-between">
        <a
          href="#contact"
          className="text-sm font-semibold text-[#3B82F6] group-hover:text-[#2563EB] flex items-center gap-1.5 transition-colors"
        >
          Request details
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
        <span className="text-xs font-medium text-[#94A3B8]">Production Ready</span>
      </div>
    </div>
  );
}
