import React from 'react'
import { Bell, Search, MoreHorizontal } from 'lucide-react'

export default function TopRightBar() {
  return (
    <div className="flex justify-between items-center px-4 py-2 text-sm text-gray-500">
      {/* Left: Breadcrumbs */}
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-sm bg-green-700"></div>
        <span>Workspace</span>
        <span>{'>'}</span>
        <span>Folder 2</span>
        <span>{'>'}</span>
        <span className="text-black font-semibold">Spreadsheet 3</span>
        <MoreHorizontal size={16} className="text-gray-400 ml-1" />
      </div>

      {/* Right: Search + Notifications + Profile */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative">
          <Search size={16} className="absolute left-2 top-2 text-gray-400" />
          <input
            type="text"
            placeholder="Search within sheet"
            className="pl-7 pr-3 py-1 border rounded text-sm bg-gray-50"
          />
        </div>

        {/* Notification */}
        <div className="relative">
          <Bell size={20} className="text-gray-700" />
          <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full px-1">2</span>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2 text-sm">
          <img
            src="/public/icons/download.jpeg"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="leading-tight">
            <div className="font-semibold text-black">John Doe</div>
            <div className="text-xs text-gray-500">john.doe@example.com</div>
          </div>
        </div>
      </div>
    </div>
  )
}
