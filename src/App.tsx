import React from 'react'
import Toolbar from './components/Toolbar'
import Spreadsheet from './components/Spreadsheet'
import Tabs from './components/Tabs'
import TopRightBar from './components/TopRightBar'
import { sheetData } from './data/sheetData'

export default function App() {
  return (
    <div className="p-4 space-y-3">
      <TopRightBar />

      
      <Toolbar />
      <Spreadsheet data={sheetData} />
      <Tabs />
    </div>
  )
}
