import React,{useState} from 'react'

function SideBar() {
  const [aud,setAud]=useState(false)
  const [camp,setCamp]=useState(false)
  return (
    <div>
       <h1 className="sidebar-color">Email Module</h1>

       <h2 className="sidebar-color arrow" onClick={()=>{setAud(!aud)}} >Audience {aud ? "˄" : "⌄" }</h2>
      {aud ? <ul className="list">
        <li className="list-items">All Contact</li>
        <li className="list-items">Email Subscriber List</li>
      </ul> : <></>}
      <h2 className="sidebar-color arrow" onClick={()=>{setCamp(!camp)}}>Campaign { camp ? "˄" : "⌄" }</h2>
     {camp ? <ul  className="list">
      <li className="list-items">All Campaign List</li>
     </ul> : <></>}
      
         
    </div>
  )
}

export default SideBar;