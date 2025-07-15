'use client';

import React from 'react';

export function Header() {
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  return (
    <header className="bg-white border-b border-gray-200 h-12 px-8 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="text-lg font-semibold text-gray-900">
            ETHDenver Carbon Offset
          </div>
        </div>
        <div className="text-caption text-muted">
          Synchronized hourly
        </div>
      </div>
      
      <div className="text-sm text-neutral-600 font-mono">
        {currentTime}
      </div>
    </header>
  );
}
