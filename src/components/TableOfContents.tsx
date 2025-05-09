'use client';

import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react'; // Using lucide-react for icons

export interface TocItem {
  id: string;
  level: number; // 1 for h1, 2 for h2, etc.
  text: string;
}

interface TableOfContentsProps {
  tocItems: TocItem[];
}

export default function TableOfContents({ tocItems }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(true);

  if (!tocItems || tocItems.length === 0) {
    return null;
  }

  return (
    <div className="border rounded-lg p-4 my-6 bg-gray-50 shadow">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-lg font-semibold text-gray-700 hover:text-gray-900 mb-2"
      >
        <span>Table of Contents</span>
        {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
      </button>
      {isOpen && (
        <ul className="space-y-2">
          {tocItems.map((item) => (
            <li key={item.id} className={`ml-${(item.level - 1) * 4}`}>
              <a
                href={`#${item.id}`}
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-150"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
} 