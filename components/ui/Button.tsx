import React from 'react';
import Link from 'next/link';

/**
 * Button Component - Server Component
 * 
 * PERFORMANCE OPTIMIZATIONS:
 * 1. Server Component - Minimal JS (Link prefetching only)
 * 2. Static style computation
 * 3. Prefetch links for instant navigation
 */

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-gradient-to-r from-blue-600 to-blue-700
    text-white
    shadow-md
    hover:from-blue-700 hover:to-blue-800
    hover:shadow-lg
    active:shadow-sm
  `,
  secondary: `
    bg-slate-800
    text-white
    shadow-md
    hover:bg-slate-900
    hover:shadow-lg
    active:shadow-sm
  `,
  outline: `
    bg-transparent
    text-blue-600
    border-2 border-blue-600
    hover:bg-blue-50
    hover:text-blue-700
    active:bg-blue-100
  `,
  ghost: `
    bg-transparent
    text-slate-700
    hover:bg-slate-100
    hover:text-slate-900
    active:bg-slate-200
  `,
  accent: `
    bg-gradient-to-r from-amber-500 to-orange-500
    text-white
    shadow-md
    hover:from-amber-600 hover:to-orange-600
    hover:shadow-lg
    active:shadow-sm
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-2.5 text-base gap-2',
  lg: 'px-8 py-3 text-lg gap-2.5',
  xl: 'px-10 py-4 text-xl gap-3',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  className = '',
  type = 'button',
  ariaLabel,
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center
    font-semibold
    rounded-lg
    transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
    cursor-pointer
  `;

  const combinedStyles = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={combinedStyles}
        aria-label={ariaLabel}
        prefetch={true}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
