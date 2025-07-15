'use client';

import React, { useState } from 'react';
import { PlusIcon, TrashIcon } from '@heroicons/react/20/solid';
import { Button, Input, Dropdown, Card } from './ui';
import { clsx } from 'clsx';

interface FilterCondition {
  id: string;
  logic: 'If' | 'And' | 'Or';
  field: string;
  operator: string;
  type: string;
  value: string;
}

const logicOptions = [
  { value: 'If', label: 'If' },
  { value: 'And', label: 'And' },
  { value: 'Or', label: 'Or' },
];

const fieldOptions = [
  { value: 'receipt_type', label: 'Receipt Type' },
  { value: 'amount', label: 'Amount' },
  { value: 'date', label: 'Date' },
  { value: 'vendor', label: 'Vendor' },
  { value: 'category', label: 'Category' },
  { value: 'description', label: 'Description' },
];

const operatorOptions = [
  { value: 'equals', label: 'Equals' },
  { value: 'contains', label: 'Contains' },
  { value: 'starts_with', label: 'Starts with' },
  { value: 'ends_with', label: 'Ends with' },
  { value: 'greater_than', label: 'Greater than' },
  { value: 'less_than', label: 'Less than' },
  { value: 'between', label: 'Between' },
];

const typeOptions = [
  { value: 'text', label: 'Text' },
  { value: 'number', label: 'Number' },
  { value: 'date', label: 'Date' },
  { value: 'boolean', label: 'Boolean' },
];

export function ReceiptSearch() {
  const [searchName, setSearchName] = useState('');
  const [conditions, setConditions] = useState<FilterCondition[]>([
    {
      id: '1',
      logic: 'If',
      field: 'receipt_type',
      operator: 'equals',
      type: 'text',
      value: ''
    }
  ]);

  const addCondition = () => {
    const newCondition: FilterCondition = {
      id: Date.now().toString(),
      logic: 'And',
      field: 'receipt_type',
      operator: 'equals',
      type: 'text',
      value: ''
    };
    setConditions([...conditions, newCondition]);
  };

  const addCriteria = () => {
    const newCondition: FilterCondition = {
      id: Date.now().toString(),
      logic: 'Or',
      field: 'receipt_type',
      operator: 'equals',
      type: 'text',
      value: ''
    };
    setConditions([...conditions, newCondition]);
  };

  const removeCondition = (id: string) => {
    setConditions(conditions.filter(condition => condition.id !== id));
  };

  const updateCondition = (id: string, field: keyof FilterCondition, value: string) => {
    setConditions(conditions.map(condition => 
      condition.id === id ? { ...condition, [field]: value } : condition
    ));
  };

  const clearFilters = () => {
    setSearchName('');
    setConditions([{
      id: '1',
      logic: 'If',
      field: 'receipt_type',
      operator: 'equals',
      type: 'text',
      value: ''
    }]);
  };

  return (
    <Card className="max-w-4xl">
      <div className="space-y-6">
        {/* Search Name Input */}
        <div>
          <Input
            placeholder="Search name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            className="text-sm"
          />
        </div>

        {/* Filter Conditions */}
        <div className="space-y-4">
          {conditions.map((condition) => (
            <div key={condition.id} className="flex items-center gap-3">
              {/* Logic Dropdown */}
              <Dropdown
                options={logicOptions}
                value={condition.logic}
                onChange={(value) => updateCondition(condition.id, 'logic', value)}
                className="w-16"
              />

              {/* Field Dropdown */}
              <Dropdown
                options={fieldOptions}
                value={condition.field}
                onChange={(value) => updateCondition(condition.id, 'field', value)}
                className="w-32"
              />

              {/* Operator Dropdown */}
              <Dropdown
                options={operatorOptions}
                value={condition.operator}
                onChange={(value) => updateCondition(condition.id, 'operator', value)}
                className="w-32"
              />

              {/* Type Dropdown */}
              <Dropdown
                options={typeOptions}
                value={condition.type}
                onChange={(value) => updateCondition(condition.id, 'type', value)}
                className="w-24"
              />

              {/* Value Input */}
              <div className="flex-1">
                <input
                  type="text"
                  value={condition.value}
                  onChange={(e) => updateCondition(condition.id, 'value', e.target.value)}
                  className="input-field text-xs"
                  placeholder="Enter value..."
                />
              </div>

              {/* Delete Button */}
              <button
                onClick={() => removeCondition(condition.id)}
                className={clsx(
                  "flex items-center justify-center w-8 h-8 rounded-full transition-colors",
                  "hover:bg-red-100 text-gray-400 hover:text-red-600"
                )}
                disabled={conditions.length === 1}
              >
                <TrashIcon className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={addCondition}
              leftIcon={<PlusIcon className="h-4 w-4" />}
            >
              Add condition
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={addCriteria}
              leftIcon={<PlusIcon className="h-4 w-4" />}
            >
              Add criteria
            </Button>
          </div>

          <button
            onClick={clearFilters}
            className="text-xs text-primary hover:underline transition-all"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </Card>
  );
} 