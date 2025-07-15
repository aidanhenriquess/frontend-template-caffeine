'use client';

import React from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { clsx } from 'clsx';

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function Dropdown({
  options,
  value,
  onChange,
  placeholder = "Select option",
  disabled = false,
  className
}: DropdownProps) {
  const selectedOption = options.find(option => option.value === value);

  return (
    <Listbox value={value} onChange={onChange} disabled={disabled}>
      <div className={clsx("relative", className)}>
        <Listbox.Button
          className={clsx(
            "relative w-full cursor-default rounded-sm bg-gray-50 py-2 pl-3 pr-8 text-left text-xs font-medium",
            "border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
            "hover:bg-gray-100 transition-colors",
            disabled && "opacity-50 cursor-not-allowed"
          )}
        >
          <span className="block text-gray-700 whitespace-nowrap overflow-hidden text-ellipsis" title={selectedOption ? selectedOption.label : placeholder}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronDownIcon
              className="h-4 w-4 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-xs shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {options.map((option) => (
              <Listbox.Option
                key={option.value}
                className={({ active }) =>
                  clsx(
                    "relative cursor-default select-none py-2 pl-3 pr-9",
                    active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
                  )
                }
                value={option.value}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={clsx(
                        "block",
                        selected ? 'font-medium' : 'font-normal'
                      )}
                    >
                      {option.label}
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
} 