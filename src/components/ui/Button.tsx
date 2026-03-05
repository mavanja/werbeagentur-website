'use client';

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

/**
 * Button Variants:
 * - primary: Filled with secondary color, white text
 * - secondary: Outlined with secondary border
 * - ghost: Transparent background, text only
 * - accent: Filled with accent color
 */

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'accent';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  asChild?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary: `
    bg-secondary text-white
    hover:bg-secondary-600
    active:bg-secondary-700
    shadow-soft hover:shadow-glow-secondary
    border border-transparent
  `,
  secondary: `
    bg-transparent text-secondary
    border-2 border-secondary
    hover:bg-secondary hover:text-white
  `,
  ghost: `
    bg-transparent text-neutral-700
    hover:bg-neutral-100 hover:text-primary
    dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white
  `,
  accent: `
    bg-accent text-primary
    hover:bg-accent-600
    active:bg-accent-700
    shadow-soft hover:shadow-glow-accent
    border border-transparent
  `,
};

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-body-sm rounded-md gap-1.5',
  md: 'px-6 py-3 text-body-md rounded-lg gap-2',
  lg: 'px-8 py-4 text-body-lg rounded-xl gap-2.5',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      inline-flex items-center justify-center
      font-heading font-semibold
      transition-all duration-300 ease-smooth
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
      touch-target
    `;

    const widthClass = fullWidth ? 'w-full' : '';

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
        className={`
          ${baseStyles}
          ${variants[variant]}
          ${sizes[size]}
          ${widthClass}
          ${className}
        `.replace(/\s+/g, ' ').trim()}
        disabled={disabled || isLoading}
        {...(props as HTMLMotionProps<'button'>)}
      >
        {isLoading ? (
          <>
            <LoadingSpinner />
            <span>Laden...</span>
          </>
        ) : (
          <>
            {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
          </>
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

function LoadingSpinner() {
  return (
    <svg
      className="animate-spin h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

export { Button, type ButtonProps, type ButtonVariant, type ButtonSize };
