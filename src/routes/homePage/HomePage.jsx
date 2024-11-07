import React from 'react'
import "./homePage.css"
import { Link } from 'react-router-dom'
const HomePage = () => {
  return (
    <div className='homepage'>
      <img src="/orbital.png" alt="" className='orbital'/>
      <div className="left">
        <h1>GEMINI AI</h1>
        <h2>Supercharge your creativity and productivity!</h2>
        <h3>Lorem ipsum dolor sit amet  Nulla suscipit voluptates aspernatur repudiandae ipsam   </h3> 
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right"></div>
    </div>
  )
}

export default HomePage 