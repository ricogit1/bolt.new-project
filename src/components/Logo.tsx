import React from 'react';

export function Logo({ className = '', size = 64 }: { className?: string; size?: number }) {
  return (
    <div 
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Main T shape with gradient */}
      <div className="w-full h-full relative">
        {/* Top bar of T */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[25%] rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, #6366f1 0%, #3b82f6 50%, #2dd4bf 100%)'
          }}
        />
        {/* Vertical bar of T */}
        <div 
          className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[30%] h-[80%] rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, #6366f1 0%, #3b82f6 50%, #2dd4bf 100%)'
          }}
        />
      </div>
    </div>
  );
}