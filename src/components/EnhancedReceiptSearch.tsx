'use client';

import React, { useState } from 'react';
import { PlusIcon, TrashIcon, LinkIcon } from '@heroicons/react/20/solid';
import { Button, Input, Dropdown, Card } from './ui';

interface FilterCondition {
  id: string;
  logic: 'If' | 'And' | 'Or';
  field: string;
  operator: string;
  type: string;
  value: string;
}

interface ConditionGroup {
  id: string;
  conditions: FilterCondition[];
}

const logicOptions = [
  { value: 'If', label: 'If' },
  { value: 'And', label: 'And' },
  { value: 'Or', label: 'Or' },
];

const fieldOptions = [
  { value: 'policies', label: 'Policies' },
  { value: 'receipt_type', label: 'Receipt Type' },
  { value: 'amount', label: 'Amount' },
  { value: 'date', label: 'Date' },
  { value: 'vendor', label: 'Vendor' },
  { value: 'category', label: 'Category' },
  { value: 'description', label: 'Description' },
  { value: 'sdg', label: 'Sustainable Development Goal' },
  { value: 'certifier', label: 'Carbon Credit Certifier' },
  { value: 'region', label: 'Region' },
  { value: 'project_type', label: 'Project Type' },
];

const operatorOptions = [
  { value: 'contains', label: 'Contains' },
  { value: 'greater_than', label: 'Greater than' },
  { value: 'greater_or_equal', label: 'Greater or Equal' },
  { value: 'equal', label: 'Equal' },
  { value: 'less_than', label: 'Less than' },
  { value: 'less_or_equal', label: 'Less or Equal' },
  { value: 'starts_with', label: 'Starts with' },
  { value: 'ends_with', label: 'Ends with' },
  { value: 'between', label: 'Between' },
];

const typeOptions = [
  { value: 'string', label: 'String' },
  { value: 'number', label: 'Number' },
  { value: 'date', label: 'Date' },
  { value: 'boolean', label: 'Boolean' },
];

// SDG Options
const sdgOptions = [
  { value: 'no_poverty', label: 'No Poverty' },
  { value: 'zero_hunger', label: 'Zero Hunger' },
  { value: 'good_health', label: 'Good Health and Well-being' },
  { value: 'quality_education', label: 'Quality Education' },
  { value: 'gender_equality', label: 'Gender Equality' },
  { value: 'clean_water', label: 'Clean Water and Sanitation' },
  { value: 'affordable_energy', label: 'Affordable and Clean Energy' },
  { value: 'decent_work', label: 'Decent Work and Economic Growth' },
  { value: 'industry_innovation', label: 'Industry, Innovation and Infrastructure' },
  { value: 'reduced_inequalities', label: 'Reduced Inequalities' },
  { value: 'sustainable_cities', label: 'Sustainable Cities and Communities' },
  { value: 'responsible_consumption', label: 'Responsible Consumption and Production' },
  { value: 'climate_action', label: 'Climate Action' },
  { value: 'life_below_water', label: 'Life Below Water' },
  { value: 'life_on_land', label: 'Life on Land' },
  { value: 'peace_justice', label: 'Peace, Justice and Strong Institutions' },
  { value: 'partnerships', label: 'Partnerships for the Goals' },
];

// Carbon Credit Certifier Options
const certifierOptions = [
  { value: 'verra_vcs', label: 'Verra (VCS)' },
  { value: 'gold_standard', label: 'Gold Standard' },
  { value: 'climate_action_reserve', label: 'Climate Action Reserve (CAR)' },
  { value: 'american_carbon_registry', label: 'American Carbon Registry (ACR)' },
  { value: 'plan_vivo', label: 'Plan Vivo' },
  { value: 'global_carbon_council', label: 'Global Carbon Council (GCC)' },
  { value: 'art_trees', label: 'ART TREES' },
  { value: 'cdm', label: 'CDM (Clean Development Mechanism)' },
];

// Region Options
const regionOptions = [
  { value: 'north_america', label: 'North America' },
  { value: 'latin_america', label: 'Latin America' },
  { value: 'africa', label: 'Africa' },
  { value: 'europe', label: 'Europe' },
  { value: 'south_asia', label: 'South Asia' },
  { value: 'southeast_asia', label: 'Southeast Asia' },
  { value: 'oceania', label: 'Oceania' },
  { value: 'middle_east', label: 'Middle East' },
  { value: 'china', label: 'China' },
];

// Project Type Options
const projectTypeOptions = [
  { value: 'redd_plus', label: 'REDD+ (Forestry)' },
  { value: 'afforestation_reforestation', label: 'Afforestation / Reforestation' },
  { value: 'renewable_energy', label: 'Renewable Energy' },
  { value: 'improved_cookstoves', label: 'Improved Cookstoves' },
  { value: 'clean_water_access', label: 'Clean Water Access' },
  { value: 'methane_capture', label: 'Methane Capture' },
  { value: 'soil_carbon_regenerative_ag', label: 'Soil Carbon / Regenerative Agriculture' },
  { value: 'blue_carbon', label: 'Blue Carbon' },
  { value: 'biochar', label: 'Biochar' },
  { value: 'industrial_gas_destruction', label: 'Industrial Gas Destruction' },
];

export function EnhancedReceiptSearch() {
  const [searchName, setSearchName] = useState('Search by content');
  const [conditionGroups, setConditionGroups] = useState<ConditionGroup[]>([
    {
      id: 'group-1',
      conditions: [
        {
          id: '1',
          logic: 'If',
          field: 'policies',
          operator: 'contains',
          type: 'string',
          value: ''
        },
        {
          id: '2',
          logic: 'If',
          field: 'policies',
          operator: 'contains',
          type: 'string',
          value: ''
        }
      ]
    },
    {
      id: 'group-2',
      conditions: [
        {
          id: '3',
          logic: 'If',
          field: 'policies',
          operator: 'contains',
          type: 'string',
          value: ''
        },
        {
          id: '4',
          logic: 'If',
          field: 'policies',
          operator: 'contains',
          type: 'string',
          value: ''
        }
      ]
    }
  ]);

  const addConditionToGroup = (groupId: string) => {
    const newCondition: FilterCondition = {
      id: Date.now().toString(),
      logic: 'If',
      field: 'policies',
      operator: 'contains',
      type: 'string',
      value: ''
    };

    setConditionGroups(groups =>
      groups.map(group =>
        group.id === groupId
          ? { ...group, conditions: [...group.conditions, newCondition] }
          : group
      )
    );
  };

  const addNewGroup = () => {
    const newGroup: ConditionGroup = {
      id: `group-${Date.now()}`,
      conditions: [
        {
          id: Date.now().toString(),
          logic: 'If',
          field: 'policies',
          operator: 'contains',
          type: 'string',
          value: ''
        }
      ]
    };
    setConditionGroups([...conditionGroups, newGroup]);
  };

  const removeCondition = (groupId: string, conditionId: string) => {
    setConditionGroups(groups =>
      groups.map(group =>
        group.id === groupId
          ? { ...group, conditions: group.conditions.filter(c => c.id !== conditionId) }
          : group
      ).filter(group => group.conditions.length > 0)
    );
  };

  const updateCondition = (groupId: string, conditionId: string, field: keyof FilterCondition, value: string) => {
    setConditionGroups(groups =>
      groups.map(group =>
        group.id === groupId
          ? {
              ...group,
              conditions: group.conditions.map(condition =>
                condition.id === conditionId ? { ...condition, [field]: value } : condition
              )
            }
          : group
      )
    );
  };

  const clearFilters = () => {
    setSearchName('');
    setConditionGroups([
      {
        id: 'group-1',
        conditions: [
          {
            id: '1',
            logic: 'If',
            field: 'policies',
            operator: 'contains',
            type: 'string',
            value: ''
          }
        ]
      }
    ]);
  };

  const shareLink = () => {
    // Implementation for sharing saved filters
    console.log('Sharing link with saved filters');
  };

  return (
    <Card className="max-w-none">
      <div className="space-y-6">
        {/* Search Name Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Search name
          </label>
          <Input
            placeholder="Search by content"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            className="text-sm"
          />
        </div>

        {/* Search Conditions */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Search conditions
          </label>
          
          <div className="space-y-6">
            {conditionGroups.map((group, groupIndex) => (
              <div key={group.id}>
                {/* Group Separator */}
                {groupIndex > 0 && (
                  <div className="flex items-center justify-center py-4">
                    <div className="flex items-center">
                      <div className="border-t border-gray-300 flex-grow mr-3" style={{ width: '100px' }}></div>
                      <span className="bg-gray-100 px-3 py-1 rounded text-xs font-medium text-gray-600">
                        And
                      </span>
                      <div className="border-t border-gray-300 flex-grow ml-3" style={{ width: '100px' }}></div>
                    </div>
                  </div>
                )}

                {/* Conditions in Group */}
                <div className="space-y-3">
                  {group.conditions.map((condition) => (
                    <div key={condition.id} className="flex items-center gap-3">
                      {/* Logic Dropdown */}
                      <Dropdown
                        options={logicOptions}
                        value={condition.logic}
                        onChange={(value) => updateCondition(group.id, condition.id, 'logic', value)}
                        className="w-20 min-w-16"
                      />

                      {/* Field Dropdown */}
                      <Dropdown
                        options={fieldOptions}
                        value={condition.field}
                        onChange={(value) => updateCondition(group.id, condition.id, 'field', value)}
                        className="w-48 min-w-32"
                      />

                      {/* Operator Dropdown */}
                      <Dropdown
                        options={operatorOptions}
                        value={condition.operator}
                        onChange={(value) => updateCondition(group.id, condition.id, 'operator', value)}
                        className="w-44 min-w-36"
                      />

                      {/* Type Dropdown */}
                      <Dropdown
                        options={typeOptions}
                        value={condition.type}
                        onChange={(value) => updateCondition(group.id, condition.id, 'type', value)}
                        className="w-28 min-w-24"
                      />

                      {/* Value Input/Dropdown */}
                      <div className="flex-1">
                        {condition.field === 'sdg' ? (
                          <Dropdown
                            options={sdgOptions}
                            value={condition.value}
                            onChange={(value) => updateCondition(group.id, condition.id, 'value', value)}
                            placeholder="Select SDG"
                            className="w-full"
                          />
                        ) : condition.field === 'certifier' ? (
                          <Dropdown
                            options={certifierOptions}
                            value={condition.value}
                            onChange={(value) => updateCondition(group.id, condition.id, 'value', value)}
                            placeholder="Select Certifier"
                            className="w-full"
                          />
                        ) : condition.field === 'region' ? (
                          <Dropdown
                            options={regionOptions}
                            value={condition.value}
                            onChange={(value) => updateCondition(group.id, condition.id, 'value', value)}
                            placeholder="Select Region"
                            className="w-full"
                          />
                        ) : condition.field === 'project_type' ? (
                          <Dropdown
                            options={projectTypeOptions}
                            value={condition.value}
                            onChange={(value) => updateCondition(group.id, condition.id, 'value', value)}
                            placeholder="Select Project Type"
                            className="w-full"
                          />
                        ) : (
                          <input
                            type="text"
                            value={condition.value}
                            onChange={(e) => updateCondition(group.id, condition.id, 'value', e.target.value)}
                            className="input-field text-xs"
                            placeholder="Enter text"
                          />
                        )}
                      </div>

                      {/* Delete Button */}
                      <button
                        onClick={() => removeCondition(group.id, condition.id)}
                        className="flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-red-100 text-gray-400 hover:text-red-600"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Add Condition Button for this group */}
                <div className="pt-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => addConditionToGroup(group.id)}
                    leftIcon={<PlusIcon className="h-4 w-4" />}
                    className="text-blue-600 border-blue-200 hover:bg-blue-50"
                  >
                    Add condition
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Add New Group Buttons */}
          <div className="flex items-center gap-3 pt-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={addNewGroup}
              leftIcon={<PlusIcon className="h-4 w-4" />}
              className="text-blue-600 border-blue-200 hover:bg-blue-50"
            >
              Add condition
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={addNewGroup}
              leftIcon={<PlusIcon className="h-4 w-4" />}
              className="text-blue-600 border-blue-200 hover:bg-blue-50"
            >
              Add Criteria
            </Button>
          </div>
        </div>

        {/* Bottom Action Buttons */}
        <div className="flex items-center justify-between pt-6 border-t border-gray-200">
          <Button
            variant="ghost"
            size="sm"
            onClick={shareLink}
            leftIcon={<LinkIcon className="h-4 w-4" />}
            className="text-blue-600 border-blue-200 hover:bg-blue-50"
          >
            Share Link with saved filters
          </Button>

          <button
            onClick={clearFilters}
            className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-all"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </Card>
  );
} 