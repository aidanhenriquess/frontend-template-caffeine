import React from 'react';
import { clsx } from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
}

export function Card({ children, className, padding = 'md' }: CardProps) {
  return (
    <div
      className={clsx(
        'card',
        {
          'p-4': padding === 'sm',
          'p-8': padding === 'md',
          'p-12': padding === 'lg',
        },
        className
      )}
    >
      {children}
    </div>
  );
} 