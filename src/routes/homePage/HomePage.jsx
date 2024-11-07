import React from 'react'
import "../homePage/homePage.css"
import { Link } from 'react-router-dom'
const HomePage = () => {
  return (
    <div className='homepage'>
      <Link to="/dashboard">
        Dashboard
      </Link>
    </div>
  )
}

export default HomePage 