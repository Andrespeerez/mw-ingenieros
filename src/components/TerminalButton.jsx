import React from 'react';

export default function TerminalButton({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary', 
  active = false,
  ariaLabel,
  disabled = false
}) {
  const baseStyles = 'px-4 py-2 border transition-all duration-150 cursor-pointer font-bold text-xs tracking-wider uppercase disabled:opacity-50 disabled:cursor-not-allowed select-none';
  
  const variants = {
    primary: active 
      ? 'bg-green-500 text-black border-green-500 shadow-[0_0_10px_rgba(0,255,0,0.5)]' 
      : 'bg-transparent text-green-500 border-green-500 hover:bg-green-500/10 hover:shadow-[0_0_5px_rgba(0,255,0,0.3)]',
    secondary: active
      ? 'bg-green-700 text-white border-green-700'
      : 'bg-transparent text-green-700 border-green-900 hover:border-green-700 hover:text-green-600',
    danger: 'bg-transparent text-red-500 border-red-500 hover:bg-red-500/10 hover:shadow-[0_0_5px_rgba(255,0,0,0.3)]',
    ghost: 'border-transparent text-green-700 hover:text-green-500 p-1'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
    >
      {variant === 'ghost' ? children : `[ ${children} ]`}
    </button>
  );
}
