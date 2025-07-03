import React from 'react'
import {
  EyeOff,
  ArrowUpDown,
  Import,
  Upload,
  Share2,
  PlusCircle
} from 'lucide-react'

export default function Toolbar() {
  return (
    <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
      {/* Left-side buttons */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Tool bar »</span>

        <button
          onClick={() => console.log('Hide Fields')}
          className="flex items-center gap-1 px-3 py-1 text-sm border rounded hover:bg-gray-100"
        >
          <EyeOff size={16} /> Hide fields
        </button>

        <button
          onClick={() => console.log('Sort')}
          className="flex items-center gap-1 px-3 py-1 text-sm border rounded hover:bg-gray-100"
        >
          <ArrowUpDown size={16} /> Sort
        </button>

        <button
          onClick={() => console.log('Filter')}
          className="flex items-center gap-1 px-3 py-1 text-sm border rounded hover:bg-gray-100"
        >
          <img src="/public/icons/filter.svg" className="w-4 h-4" alt="Filter" /> Filter
        </button>

        <button
          onClick={() => console.log('Cell View')}
          className="flex items-center gap-1 px-3 py-1 text-sm border rounded hover:bg-gray-100"
        >
          <img src="/public/icons/download.png" className="w-4 h-4" alt="Cell View" /> Cell view
        </button>
      </div>

      {/* Right-side icons */}
      <div className="flex items-center gap-2 ml-auto">
        <button
          onClick={() => console.log('Import')}
          className="flex items-center gap-1 px-3 py-1 text-sm border rounded hover:bg-gray-100"
        >
          <Import size={16} /> Import
        </button>

        <button
          onClick={() => console.log('Export')}
          className="flex items-center gap-1 px-3 py-1 text-sm border rounded hover:bg-gray-100"
        >
          <Upload size={16} /> Export
        </button>

        <button
          onClick={() => console.log('Share')}
          className="flex items-center gap-1 px-3 py-1 text-sm border rounded hover:bg-gray-100"
        >
          <Share2 size={16} /> Share
        </button>

        <button
          onClick={() => console.log('New Action')}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-1 rounded text-sm hover:bg-green-700"
        >
          <PlusCircle size={16} /> New Action
        </button>
      </div>
    </div>
  )
}
