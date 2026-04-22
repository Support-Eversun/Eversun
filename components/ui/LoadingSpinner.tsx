'use client';

import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  /** Taille du spinner (xs, sm, md, lg, xl) */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Couleur personnalisée */
  color?: string;
  /** Classes supplémentaires */
  className?: string;
  /** Texte de chargement optionnel */
  text?: string;
}

const sizeClasses = {
  xs: 'h-4 w-4',
  sm: 'h-5 w-5',
  md: 'h-8 w-8',
  lg: 'h-12 w-12',
  xl: 'h-16 w-16',
};

export default function LoadingSpinner({ 
  size = 'md', 
  color = 'text-amber-500',
  className,
  text 
}: LoadingSpinnerProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <svg
        className={cn('animate-spin', sizeClasses[size], color, className)}
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
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      {text && (
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
          {text}
        </p>
      )}
    </div>
  );
}
