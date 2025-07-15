import React from 'react';
import { Header } from './Header';
import { Breadcrumb } from './Breadcrumb';

interface BreadcrumbStep {
  label: string;
  href?: string;
  current?: boolean;
}

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  breadcrumbs?: BreadcrumbStep[];
}

export function PageLayout({ children, title, breadcrumbs = [] }: PageLayoutProps) {
  return (
    <div className="min-h-screen canvas">
      <Header />
      
      <main className="max-w-6xl mx-auto px-8 py-6">
        {breadcrumbs.length > 0 && (
          <Breadcrumb steps={breadcrumbs} />
        )}
        
        <div className="mb-8">
          <h1 className="text-heading text-gray-900">{title}</h1>
        </div>
        
        <div className="space-y-6">
          {children}
        </div>
      </main>
    </div>
  );
} 