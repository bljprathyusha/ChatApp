import React, { useState } from 'react'
import "./chatlist.css"
function ChatList() {
    const [addNewBtn, setAddNewBtn] = useState(true);
    const [msngrs,setMsngrs] = useState([
        {
            name:"Msgr1",
            topmsg:"Hiiii"
        },
        {
            name:"Msgr2",
            topmsg:"Hiiii"
        },
        {
            name:"Msgr3",
            topmsg:"Hiiii"
        }])
    return (
        <div className='chatlist'>
            <div className='searchusers'>
                <div className='searchbar'>
                    <img src="search.png" />
                    <input type="text" placeholder="Search" />
                </div>
                <img src={addNewBtn ? "plus.png" : "minus.png"} alt="addnew" className='addnew' onClick={() => setAddNewBtn(!addNewBtn)} />
            </div>
            <div className='msngrs'>
                {msngrs.map(msngr=>(<div className='msngr'>
                    <img src="avatar.png" />
                    <div className='msg'>
                        <span>{msngr.name}</span>
                        <p>{msngr.topmsg}</p>
                    </div>
                </div>))}
            </div>
        </div>
    )
}

export default ChatList