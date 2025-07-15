import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { clsx } from 'clsx';

interface BreadcrumbStep {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbProps {
  steps: BreadcrumbStep[];
}

export function Breadcrumb({ steps }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-xs py-4">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && (
            <ChevronRightIcon className="h-3 w-3 text-gray-400 mx-2" />
          )}
          {step.href && !step.current ? (
            <a 
              href={step.href}
              className="text-muted hover:text-primary transition-colors"
            >
              {step.label}
            </a>
          ) : (
            <span 
              className={clsx(
                step.current ? 'text-primary font-medium' : 'text-muted'
              )}
            >
              {step.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
