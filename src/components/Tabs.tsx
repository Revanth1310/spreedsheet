import React from 'react'

const tabs = ['All Orders', 'Pending', 'Reviewed', 'Arrived']

export default function Tabs() {
  const [activeTab, setActiveTab] = React.useState(0)

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t px-4 py-2 z-20">
      <div className="flex items-center gap-2 overflow-x-auto">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => {
              console.log(`${tab} clicked`)
              setActiveTab(i)
            }}
            className={`px-3 py-1 text-sm rounded 
              ${
                i === activeTab
                  ? 'bg-green-700 text-white font-semibold'
                  : 'text-gray-700 hover:text-black'
              }`}
          >
            {tab}
          </button>
        ))}

        {/* Add New Tab */}
        <button
          onClick={() => console.log('Add new tab')}
          className="text-xl text-gray-500 hover:text-gray-700 px-2"
        >
          +
        </button>
      </div>
    </div>
  )
}
