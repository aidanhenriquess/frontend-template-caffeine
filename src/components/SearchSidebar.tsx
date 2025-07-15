'use client';

import React from 'react';
import { PlusIcon } from '@heroicons/react/20/solid';
import { Button } from './ui';
import { clsx } from 'clsx';

interface SavedSearch {
  id: string;
  number: number;
  name: string;
  description: string;
  count: number;
  isActive?: boolean;
}

interface SearchSidebarProps {
  savedSearches?: SavedSearch[];
  onSelectSearch?: (searchId: string) => void;
  onAddNewSearch?: () => void;
}

const defaultSearches: SavedSearch[] = [
  {
    id: '1',
    number: 1,
    name: 'User ID Filter',
    description: 'Filtering by user id',
    count: 94,
    isActive: false
  },
  {
    id: '2',
    number: 2,
    name: 'Method Filter',
    description: 'Filtered by metho...',
    count: 24,
    isActive: false
  },
  {
    id: '3',
    number: 3,
    name: 'New search name',
    description: 'New search name',
    count: 0,
    isActive: true
  }
];

export function SearchSidebar({ 
  savedSearches = defaultSearches, 
  onSelectSearch,
  onAddNewSearch 
}: SearchSidebarProps) {
  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">
          Advanced search
        </h2>
        
        <div className="space-y-3 mb-6">
          {savedSearches.map((search) => (
            <div
              key={search.id}
              onClick={() => onSelectSearch?.(search.id)}
              className={clsx(
                "flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors",
                search.isActive 
                  ? "bg-blue-50 border border-blue-200" 
                  : "hover:bg-gray-50"
              )}
            >
              {/* Number Circle */}
              <div className={clsx(
                "flex items-center justify-center w-6 h-6 rounded-full text-xs font-medium",
                search.isActive 
                  ? "bg-blue-500 text-white" 
                  : "bg-gray-200 text-gray-600"
              )}>
                {search.number}
              </div>
              
              {/* Search Info */}
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900 truncate">
                  {search.description}
                </div>
              </div>
              
              {/* Count */}
              <div className="text-xs text-gray-500 font-medium">
                {search.count}
              </div>
            </div>
          ))}
        </div>
        
        {/* Add New Search Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onAddNewSearch}
          leftIcon={<PlusIcon className="h-4 w-4" />}
          className="w-full justify-start text-blue-600 border-blue-200 hover:bg-blue-50"
        >
          Add New Search
        </Button>
      </div>
    </div>
  );
} 