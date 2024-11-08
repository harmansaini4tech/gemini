import React from 'react'
import { Link } from 'react-router-dom'
import "./chatList.css"

export const ChatList = () => {
  return (
    <div className='chatList'>
        <span className='title'>DASHBOARD</span>
        <Link to="/dashboard">Create a new Chat</Link>
        <Link to="/">Explore GEMINI AI</Link>
        <Link to="/">Contact</Link>
        <hr />
        <span className='title'>RECENTS CHATS</span>
        <div className="list">
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            </div>
            <hr />
            <div className="upgrade">
                <img src="/logo.png" alt="logo" />
                <div className="texts">
                    <span>Upgrade to GEMINI AI Pro</span>
                    <span>Get unlimited access to all features</span>
                </div>
            </div>
        
    </div>
  )
}
