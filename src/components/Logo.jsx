import React from 'react';

const Logo = ({ size = 32, className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Thin outer circular arcs (purple) */}
    <circle cx="50" cy="50" r="44" stroke="#a855f7" strokeWidth="0.5" strokeDasharray="180 40" strokeDashoffset="45" />
    <circle cx="50" cy="50" r="36" stroke="#a855f7" strokeWidth="0.5" strokeDasharray="100 30" strokeDashoffset="120" />
    <circle cx="50" cy="50" r="28" stroke="#a855f7" strokeWidth="0.5" strokeDasharray="150 20" strokeDashoffset="20" />
    <circle cx="50" cy="50" r="20" stroke="#a855f7" strokeWidth="0.3" strokeDasharray="50 15" strokeDashoffset="10" />
    
    {/* Central black wave shape */}
    <path 
      d="M 32 60 C 32 30, 52 30, 56 46 C 58 56, 64 60, 68 48" 
      stroke="#0f172a" 
      strokeWidth="12" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      fill="none"
    />
    
    {/* Purple dot */}
    <circle cx="74" cy="38" r="5.5" fill="#a855f7" />
  </svg>
);

export default Logo;
