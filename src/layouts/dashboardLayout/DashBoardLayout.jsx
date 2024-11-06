import React from 'react'
import { Outlet } from 'react-router-dom'

const DashBoardLayout = () => {
  return (
    <div className='dashboardLayout'>
        <div className="menu">MENU</div>
        <div className="content">
            <Outlet/>
        </div>
    </div>
  )
}

export default DashBoardLayout