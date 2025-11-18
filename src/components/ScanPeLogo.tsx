import React from 'react';

interface ScanPeLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const ScanPeLogo: React.FC<ScanPeLogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
    xl: 'h-16'
  };

  return (
    <div className={`flex items-center ${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 200 60"
        className="h-full w-auto"
        fill="currentColor"
      >
        {/* S */}
        <path d="M10 10 L10 20 Q10 25 15 25 L25 25 Q30 25 30 30 Q30 35 25 35 L15 35 Q10 35 10 40 L10 50" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        
        {/* c */}
        <path d="M40 30 Q40 25 45 25 L55 25 Q60 25 60 30 L60 40 Q60 45 55 45 L45 45 Q40 45 40 40" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        
        {/* Stylized a with four-petal design */}
        <g>
          {/* Outer petals */}
          <path d="M75 25 Q80 20 85 25 Q80 30 75 25" fill="currentColor"/>
          <path d="M85 25 Q90 20 95 25 Q90 30 85 25" fill="currentColor"/>
          <path d="M80 20 Q80 15 80 20 Q85 15 80 20" fill="currentColor"/>
          <path d="M80 30 Q80 35 80 30 Q85 35 80 30" fill="currentColor"/>
          
          {/* Central diamond (negative space) */}
          <path d="M80 22 L82 20 L80 18 L78 20 Z" fill="white"/>
        </g>
        
        {/* n */}
        <path d="M105 25 L105 45 M105 30 Q110 25 115 30 L115 45" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        
        {/* P */}
        <path d="M125 25 L125 45 M125 25 Q135 25 135 30 Q135 35 130 35 L125 35" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        
        {/* e */}
        <path d="M145 30 Q145 25 150 25 L160 25 Q165 25 165 30 L165 40 Q165 45 160 45 L150 45 Q145 45 145 40 M145 35 L160 35" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        
        {/* Period */}
        <circle cx="175" cy="40" r="2" fill="currentColor"/>
      </svg>
    </div>
  );
};

export default ScanPeLogo;

