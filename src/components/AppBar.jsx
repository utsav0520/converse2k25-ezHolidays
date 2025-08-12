import React from 'react'
import { ezHolidayLogo, converseLogo } from '../assets/index'

function AppBar() {
  return (
    <div className="flex justify-between items-center p-4 bg-transperent border-b border-primary">
      <img src={converseLogo} alt="Converse Logo" className="h-18" />
      <div className="text-primary">
        <h2>Our Official Trip Patner</h2>
      </div>
      <img src={ezHolidayLogo} alt="EZ Holidays Logo" className="h-18" />
    </div>
  )
}

export default AppBar
