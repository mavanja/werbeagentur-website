'use client';

import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';
import { Check } from 'lucide-react';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: ReactNode;
  error?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    const checkboxId = id || props.name;

    return (
      <div className="w-full">
        <label
          htmlFor={checkboxId}
          className={`
            flex items-start gap-3 cursor-pointer group
            ${props.disabled ? 'opacity-50 cursor-not-allowed' : ''}
          `}
        >
          <div className="relative flex-shrink-0 mt-0.5">
            <input
              ref={ref}
              id={checkboxId}
              type="checkbox"
              className="peer sr-only"
              {...props}
            />
            <div
              className={`
                w-5 h-5
                border-2 ${error ? 'border-red-500' : 'border-neutral-300 dark:border-neutral-600'}
                rounded
                bg-white dark:bg-primary-600
                transition-all duration-200
                peer-checked:bg-secondary peer-checked:border-secondary
                peer-focus-visible:ring-2 peer-focus-visible:ring-secondary/50 peer-focus-visible:ring-offset-2
                group-hover:border-secondary/50
              `}
            />
            <Check
              className={`
                absolute top-0.5 left-0.5
                w-4 h-4 text-white
                opacity-0 scale-50
                transition-all duration-200
                peer-checked:opacity-100 peer-checked:scale-100
              `}
              strokeWidth={3}
            />
          </div>
          {label && (
            <span className="font-body text-body-md text-neutral-700 dark:text-neutral-200">
              {label}
            </span>
          )}
        </label>
        {error && (
          <p className="text-red-500 dark:text-red-400 text-body-sm mt-1.5 flex items-center gap-1 ml-8">
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

Checkbox.displayName = 'Checkbox';

export { Checkbox, type CheckboxProps };
