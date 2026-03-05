'use client';

import { forwardRef, type SelectHTMLAttributes } from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, placeholder = 'Bitte wählen...', className = '', id, ...props }, ref) => {
    const selectId = id || props.name;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="block font-heading font-medium text-body-sm text-neutral-700 dark:text-neutral-200 mb-2"
          >
            {label}
            {props.required && <span className="text-secondary ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={`
              w-full px-4 py-3.5 pr-12
              bg-white dark:bg-primary-600
              border-2 ${error ? 'border-red-500' : 'border-neutral-200 dark:border-neutral-700'}
              rounded-lg
              font-body text-body-md text-neutral-800 dark:text-white
              transition-all duration-300
              focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20
              hover:border-neutral-300 dark:hover:border-neutral-600
              disabled:opacity-50 disabled:cursor-not-allowed
              appearance-none
              cursor-pointer
              ${className}
            `.replace(/\s+/g, ' ').trim()}
            {...props}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
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

Select.displayName = 'Select';

export { Select, type SelectProps, type SelectOption };
