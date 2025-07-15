import React, { useId } from 'react';
import { clsx } from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

export function Input({
  label,
  error,
  fullWidth = true,
  className,
  id,
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id || `input-${generatedId}`;

  return (
    <div className={clsx('flex flex-col gap-1', fullWidth && 'w-full')}>
      {label && (
        <label 
          htmlFor={inputId}
          className="text-label text-neutral-700"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={clsx(
          'input-field',
          error && 'border-red-500 focus:border-red-500',
          className
        )}
        {...props}
      />
      {error && (
        <span className="text-xs text-red-500 mt-1">{error}</span>
      )}
    </div>
  );
} 