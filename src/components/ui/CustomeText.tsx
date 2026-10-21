import React from 'react';

interface CustomeTextProps {
  title: string;
  className?: string;
}

const CustomeText = ({ title, className = '' }: CustomeTextProps) => {
  return (
    <div className={`leading-tight ${className}`}>
      {title}
    </div>
  );
};

export default CustomeText;
