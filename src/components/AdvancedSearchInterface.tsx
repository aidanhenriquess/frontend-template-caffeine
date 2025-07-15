'use client';

import React, { useState } from 'react';
import { SearchSidebar } from './SearchSidebar';
import { TabNavigation } from './TabNavigation';
import { EnhancedReceiptSearch } from './EnhancedReceiptSearch';

export function AdvancedSearchInterface() {
  const [activeTab, setActiveTab] = useState('search-parameters');
  const [selectedSearch, setSelectedSearch] = useState('3');

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const handleSearchSelect = (searchId: string) => {
    setSelectedSearch(searchId);
    console.log('Selected search:', searchId);
  };

  const handleAddNewSearch = () => {
    console.log('Adding new search');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'search-parameters':
        return <EnhancedReceiptSearch />;
      case 'dated-parameters':
        return (
          <div className="p-8 text-center text-gray-500">
            <h3 className="text-lg font-medium mb-2">Dated Parameters</h3>
            <p>Configure time-based search parameters here.</p>
          </div>
        );
      case 'search-results':
        return (
          <div className="p-8 text-center text-gray-500">
            <h3 className="text-lg font-medium mb-2">Search Results</h3>
            <p>View your search results here.</p>
          </div>
        );
      default:
        return <EnhancedReceiptSearch />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar */}
      <SearchSidebar
        onSelectSearch={handleSearchSelect}
        onAddNewSearch={handleAddNewSearch}
      />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Tab Navigation */}
        <TabNavigation
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
        
        {/* Tab Content */}
        <div className="flex-1 p-6 overflow-auto">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
} 