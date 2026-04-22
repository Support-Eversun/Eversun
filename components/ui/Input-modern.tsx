'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Label optionnel */
  label?: string;
  /** Message d'erreur */
  error?: string;
  /** Icône à gauche */
  leftIcon?: React.ReactNode;
  /** Icône à droite */
  rightIcon?: React.ReactNode;
  /** Taille de l'input */
  size?: 'sm' | 'md' | 'lg';
  /** Variante */
  variant?: 'default' | 'subtle' | 'underline';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      error,
      leftIcon,
      rightIcon,
      size = 'md',
      variant = 'default',
      type,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      'w-full transition-all duration-300 focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed';

    const sizes = {
      sm: 'px-3 py-2 text-sm h-9',
      md: 'px-4 py-2.5 text-base h-10',
      lg: 'px-5 py-3 text-lg h-12',
    };

    const variants = {
      // Modern Default: Border with focus glow
      default: `
        bg-white dark:bg-slate-900 
        border border-slate-300 dark:border-slate-700
        text-slate-900 dark:text-white
        placeholder:text-slate-500 dark:placeholder:text-slate-400
        hover:border-slate-400 dark:hover:border-slate-600
        focus:border-primary-500 dark:focus:border-primary-500
        focus:ring-4 focus:ring-primary-100 dark:focus:ring-primary-900/30
      `,

      // Modern Subtle: Glassmorphism
      subtle: `
        bg-slate-100/50 dark:bg-slate-800/50
        backdrop-blur-sm
        border border-transparent
        text-slate-900 dark:text-white
        placeholder:text-slate-500 dark:placeholder:text-slate-400
        hover:bg-slate-100/75 dark:hover:bg-slate-800/75
        focus:bg-white dark:focus:bg-slate-900
        focus:ring-4 focus:ring-primary-100 dark:focus:ring-primary-900/30
        focus:border-primary-500 dark:focus:border-primary-500
      `,

      // Modern Underline: Minimalist
      underline: `
        bg-transparent
        border-0 border-b-2 border-slate-300 dark:border-slate-700
        text-slate-900 dark:text-white
        placeholder:text-slate-500 dark:placeholder:text-slate-400
        focus:border-b-primary-500 dark:focus:border-b-primary-500
        focus:ring-0
        rounded-0
      `,
    };

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            {label}
          </label>
        )}

        <div className="relative flex items-center">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 pointer-events-none flex-shrink-0">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            type={type}
            disabled={disabled}
            className={cn(
              baseClasses,
              sizes[size],
              variants[variant],
              error && 'border-error-500 dark:border-error-500 focus:ring-error-100 dark:focus:ring-error-900/30',
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              className
            )}
            {...props}
          />

          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 pointer-events-none flex-shrink-0">
              {rightIcon}
            </div>
          )}
        </div>

        {error && (
          <p className="text-sm text-error-600 dark:text-error-400 mt-2 font-medium">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
