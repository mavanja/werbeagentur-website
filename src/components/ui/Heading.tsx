'use client';

import { type ReactNode, type HTMLAttributes } from 'react';
import { motion } from 'framer-motion';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4';
type HeadingSize = 'display-xl' | 'display-lg' | 'display-md' | 'h1' | 'h2' | 'h3' | 'h4';
type HeadingAlign = 'left' | 'center' | 'right';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  as?: HeadingLevel;
  size?: HeadingSize;
  align?: HeadingAlign;
  gradient?: boolean;
  animate?: boolean;
  animationDelay?: number;
}

const sizeClasses: Record<HeadingSize, string> = {
  'display-xl': 'text-4xl md:text-5xl lg:text-display-xl',
  'display-lg': 'text-3xl md:text-4xl lg:text-display-lg',
  'display-md': 'text-2xl md:text-3xl lg:text-display-md',
  'h1': 'text-2xl md:text-3xl lg:text-h1',
  'h2': 'text-xl md:text-2xl lg:text-h2',
  'h3': 'text-lg md:text-xl lg:text-h3',
  'h4': 'text-base md:text-lg lg:text-h4',
};

const alignClasses: Record<HeadingAlign, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

/**
 * Heading Component
 * 
 * A versatile heading component with:
 * - Semantic HTML levels (h1-h4)
 * - Independent visual sizing (display-xl to h4)
 * - Gradient text option
 * - Scroll-triggered animations
 */
export function Heading({
  children,
  as: Component = 'h2',
  size = 'h2',
  align = 'left',
  gradient = false,
  animate = false,
  animationDelay = 0,
  className = '',
  ...props
}: HeadingProps) {
  const baseClasses = `
    font-heading font-bold
    ${sizeClasses[size]}
    ${alignClasses[align]}
    ${gradient ? 'text-gradient' : 'text-primary dark:text-white'}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  if (!animate) {
    return (
      <Component className={baseClasses} {...props}>
        {children}
      </Component>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: animationDelay,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <Component className={baseClasses} {...props}>
        {children}
      </Component>
    </motion.div>
  );
}

/**
 * Subheading Component
 * 
 * For overline text / section labels
 */
interface SubheadingProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  align?: HeadingAlign;
}

export function Subheading({
  children,
  align = 'left',
  className = '',
  ...props
}: SubheadingProps) {
  return (
    <p
      className={`
        font-heading text-overline uppercase tracking-widest
        text-secondary
        ${alignClasses[align]}
        ${className}
      `.replace(/\s+/g, ' ').trim()}
      {...props}
    >
      {children}
    </p>
  );
}
