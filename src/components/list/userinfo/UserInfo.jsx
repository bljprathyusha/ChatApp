import React, { useState } from 'react'
import "./userinfo.css"
function UserInfo() {
    const [user,setUser]=useState({
        name:"PB",
    });
  return (
    <div className='userinfo'>
        <div className='user'>
            <img src="avatar.png" alt="avatar"/>
            <h2>{user.name}</h2>
        </div>
        <div className='icons'>
            <img src="more.png" alt="more"/>
            <img src="video.png" alt="video"/>
            <img src="edit.png" alt="edit"/>
        </div>
    </div>
  )
}

export default UserInfo