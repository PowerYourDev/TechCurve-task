import React from 'react'
import ImportContact from './ImportContact'
import './index.css'
import { Outlet } from 'react-router-dom'
import {createBrowserRouter} from "react-router-dom"
import SideBar from "./SideBar.js"


function App() {
  return (
    <div className="App">
      <SideBar />
      <Outlet/>
    </div>
  )
}

const appRouter=createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {
      path:"/",
      element:<ImportContact/>,
      
  
    },
    {
      path:"/add",
      element:<ImportContact/>,
    }   
  ]
}])
export default appRouter