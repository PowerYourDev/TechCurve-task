import React from 'react'
import "./index.css"
import { useState } from "react";
import { Link } from 'react-router-dom';
import MainDashBoard from './MainDashBoard';
import Inputs from './Inputs';


function ImportContact() {
  const [data, setData] = useState({})
  const [info, setInfo] = useState([])
  // const [comp, setComp] = useState(window.location.hash)
  const comp = window.location.hash

  function onChangeEventHandler(e) {
    const { name, value } = e.target

    setData((p) => {
      return { ...p, [name]: value }

    })
  }


  function saveData(e) {
    e.preventDefault()
    setInfo((p) => {
      return [...p, data]

    })
    setData(' ')

  }
  if (info.length === 0) {
    return (<div className="form-data">
      <Inputs data={data} onChangeEventHandler={onChangeEventHandler} />
      <button className="buttons" onClick={saveData}>Save</button>
    </div>)
  }

  return (
    <div >
      {(info.length > 0 && !comp) && <MainDashBoard info={info} />}

      {comp && <div className="form-data " >
        
        <Inputs className="form-data" data={data} onChangeEventHandler={onChangeEventHandler} />
        <button className="buttons save" onClick={saveData}>Save</button>

        <Link to="/" > <button className="buttons show-table">Show Table</button></Link>
        </div>
      }
    </div>
  )
}

export default ImportContact