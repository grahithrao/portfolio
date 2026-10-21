import React from 'react';

interface ArrowButtonProps {
  className?: string;
  strokeColor?: string;
}

const ArrowButton = ({ className = '', strokeColor = '#3B82F6' }: ArrowButtonProps) => {
  return (
    <div
      style={{
        height: '48px',
        width: '48px',
        borderRadius: '9999px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
      }}
      className="z-10"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={`stroke-[${strokeColor}] transition-all duration-300 ${className}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M5 12h14M13 5l7 7-7 7" />
      </svg>
    </div>
  );
};

export default ArrowButton;
