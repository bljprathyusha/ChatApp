import React, { useState } from 'react'
import EmojiPicker from 'emoji-picker-react';
import "./chat.css"
const chat = () => {
  const [openEmoji,setOpenEmoji] = useState(false);
  const [text,setText]= useState("");
  return (
    <div className='chat'>
      <div className='top'>
      <div className='msgr'>
        <img src="avatar.png" />
        <div className='msgrinfo'>
          <span>Msgr1</span>
          <p>Msgr Description is added here.</p>
        </div>
        </div>
        <div className='icons'>
          <img src="phone.png" alt=""/>
          <img src="video.png"/>
          <img src="info.png"/>
        </div>
      </div>
      <div className='center'>

      </div>
      <div className='bottom'>
      <div className='emoji'>
            <img src="emoji.png" alt="" onClick={()=>setOpenEmoji(!openEmoji)}/>
            <EmojiPicker open={openEmoji} onEmojiClick={(e)=>{setText(text+e.emoji);
                                                            setOpenEmoji(false);}}/>
        </div>
        <input type="text" placeholder='Type here...' value={text} onChange={(e)=>setText(e.target.value)} />
        <div className='icons'>
          <img src='img.png' alt=''/>
          <img src='camera.png' alt=''/>
          <img src='mic.png' alt=''/>
        </div>
        <button className='sendBtn'>Send</button>
      </div>
    </div>
  )
}

export default chat