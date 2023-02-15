import React, { useEffect, useState } from 'react'
import TableData from './TableData';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';


function MainDashBoard(info) {

  const [tablePage, setTablePage] = useState([])

  useEffect(() => {
    
    setTablePage(info.info?.slice(0, 10))
 
 },[info])
  
  const pageHandler = (pageNumber) => {
    setTablePage(info?.info?.slice((pageNumber * 10) - 10, pageNumber * 10))
  }


  return (
    <div className='dashboard'>


      <Link to="add#new">
        <button className="buttons import">Import Contact</button>
      </Link>

      <table className="table">
        <tr>
          <th> </th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email Address</th>
          <th>Phone</th>
          <th>Email Category</th>
          <th>Source</th>
          <th>Company</th>
          <th>Register Date</th>
        </tr>
        {info?.info?.length > 0 ? tablePage.map((user, index) => {
          return <TableData {...user} key={index} />
        }) : <p>no records</p>}
      </table>

     
      <Pagination {...info} pageHandler={pageHandler} />

    </div>
  )
}

export default MainDashBoard;