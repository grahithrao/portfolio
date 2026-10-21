import React from 'react';

interface BlueButtonProps {
  title: string;
  className?: string;
  onClick?: () => void;
  href?: string;
}

const BlueButton: React.FC<BlueButtonProps> = ({ title, className = '', onClick, href }) => {
  const buttonEl = (
    <button
      type="button"
      onClick={onClick}
      className={`h-[56px] sm:h-[66px] px-8 sm:px-10 rounded-[60px] bg-[#3B82F6] hover:bg-[#2563EB] font-bold text-[18px] sm:text-[20px] text-white cursor-pointer flex items-center justify-center transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 ${className}`}
    >
      {title}
    </button>
  );

  if (href) {
    return <a href={href}>{buttonEl}</a>;
  }
  return buttonEl;
};

export default BlueButton;
