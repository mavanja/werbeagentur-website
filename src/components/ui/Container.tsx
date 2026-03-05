import { type ReactNode, type HTMLAttributes } from 'react';

type ContainerSize = 'default' | 'narrow' | 'wide' | 'full';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: ContainerSize;
  as?: 'div' | 'section' | 'article' | 'main';
}

const sizeClasses: Record<ContainerSize, string> = {
  default: 'max-w-7xl', // 1280px
  narrow: 'max-w-5xl',  // 1024px
  wide: 'max-w-8xl',    // 1408px
  full: 'max-w-none',
};

/**
 * Container Component
 * 
 * Provides consistent horizontal padding and max-width for content.
 * Uses a responsive padding scale: 16px (mobile) → 24px (tablet) → 32px (desktop)
 */
export function Container({
  children,
  size = 'default',
  as: Component = 'div',
  className = '',
  ...props
}: ContainerProps) {
  return (
    <Component
      className={`
        mx-auto
        px-4 sm:px-6 lg:px-8
        ${sizeClasses[size]}
        ${className}
      `.replace(/\s+/g, ' ').trim()}
      {...props}
    >
      {children}
    </Component>
  );
}
