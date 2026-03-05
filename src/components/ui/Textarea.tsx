'use client';

import { forwardRef, type TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    const textareaId = id || props.name;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block font-heading font-medium text-body-sm text-neutral-700 dark:text-neutral-200 mb-2"
          >
            {label}
            {props.required && <span className="text-secondary ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={`
            w-full px-4 py-3.5
            bg-white dark:bg-primary-600
            border-2 ${error ? 'border-red-500' : 'border-neutral-200 dark:border-neutral-700'}
            rounded-lg
            font-body text-body-md text-neutral-800 dark:text-white
            placeholder:text-neutral-400
            transition-all duration-300
            focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20
            hover:border-neutral-300 dark:hover:border-neutral-600
            disabled:opacity-50 disabled:cursor-not-allowed
            resize-none
            min-h-[140px]
            ${className}
          `.replace(/\s+/g, ' ').trim()}
          {...props}
        />
        {error && (
          <p className="text-red-500 dark:text-red-400 text-body-sm mt-1.5 flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea, type TextareaProps };
