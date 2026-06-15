import React from 'react';

const Logo = ({ size = 32, className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ flexShrink: 0, minWidth: size, minHeight: size }}
  >
    {/* Thin outer circular arcs (purple) */}
    <circle cx="50" cy="50" r="46" stroke="#a855f7" strokeWidth="0.4" strokeDasharray="200 40" strokeDashoffset="40" />
    <circle cx="50" cy="50" r="39" stroke="#a855f7" strokeWidth="0.4" strokeDasharray="140 30" strokeDashoffset="110" />
    <circle cx="50" cy="50" r="32" stroke="#a855f7" strokeWidth="0.4" strokeDasharray="120 20" strokeDashoffset="15" />
    <circle cx="50" cy="50" r="25" stroke="#a855f7" strokeWidth="0.4" strokeDasharray="100 15" strokeDashoffset="80" />
    
    <g transform="translate(50, 50) scale(0.55) translate(-50, -50)">
      {/* Central black wave shape */}
      <path 
        d="M 32 60 C 32 30, 52 30, 56 46 C 58 56, 64 60, 68 48" 
        stroke="#0f172a" 
        strokeWidth="18" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        fill="none"
      />
      
      {/* Purple dot */}
      <circle cx="74" cy="38" r="8" fill="#a855f7" />
    </g>
  </svg>
);

export default Logo;
