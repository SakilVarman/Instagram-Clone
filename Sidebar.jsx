import React from 'react'
import { useNavigate } from 'react-router-dom'

function Sidebar() {

  const navigate =useNavigate();
  return (
    <div className='m-2 position-fixed'>
    <div className='d-flex flex-column gap-3'>
        <img className='logo-text' src="src/assets/Insta text.png" alt="" />
        <div><i className="bi bi-house-door"></i>Home</div>
        <div><i className="bi bi-search"></i>Search</div>
        <div><i className="bi bi-compass"></i>Explore</div>
        <div><i className="bi bi-file-play"></i>Reels</div>
        <div><i className="bi bi-chat-dots-fill"></i>Messages</div>
        <div><i className="bi bi-bell"></i>Notification</div>
        <div><i className="bi bi-plus-square"></i>Create </div>
        <div onClick={()=> {navigate('/profile')}}><i className="bi bi-person-circle"></i>Profile</div>
    </div>

    <div className='d-flex flex-column gap-3 position-fixed bottom-0 mb-3'>
        <div><i className="bi bi-threads"></i> Threads</div>
        <div><i className="bi bi-list"></i> More</div>
    </div>
    </div>
  )
}

export default Sidebar