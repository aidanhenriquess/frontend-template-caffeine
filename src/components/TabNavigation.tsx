'use client';

import React from 'react';
import { clsx } from 'clsx';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

interface Tab {
  id: string;
  label: string;
  count?: number;
}

interface TabNavigationProps {
  tabs?: Tab[];
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
}

const defaultTabs: Tab[] = [
  { id: 'search-parameters', label: 'Search parameters' },
  { id: 'dated-parameters', label: 'Dated parameters' },
  { id: 'search-results', label: 'Search results' }
];

export function TabNavigation({ 
  tabs = defaultTabs, 
  activeTab = 'search-parameters',
  onTabChange 
}: TabNavigationProps) {
  return (
    <div className="border-b border-gray-200 bg-white">
      <nav className="flex items-center px-6" aria-label="Tabs">
        {tabs.map((tab, index) => {
          const isActive = tab.id === activeTab;
          
          return (
            <React.Fragment key={tab.id}>
              <button
                onClick={() => onTabChange?.(tab.id)}
                className={clsx(
                  "whitespace-nowrap py-4 px-4 border-b-2 font-medium text-sm transition-colors rounded-t-md",
                  isActive
                    ? "border-blue-500 text-blue-600 bg-blue-50"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                <span className="flex items-center gap-2">
                  {tab.label}
                  {tab.count !== undefined && (
                    <span className={clsx(
                      "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium",
                      isActive
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-600"
                    )}>
                      {tab.count}
                    </span>
                  )}
                </span>
              </button>
              
              {/* Arrow separator between tabs */}
              {index < tabs.length - 1 && (
                <div className="flex items-center px-2">
                  <ChevronRightIcon className="h-4 w-4 text-gray-400" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </div>
  );
} 