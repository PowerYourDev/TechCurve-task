
import React from 'react'

function TableData({ firstName, lastName, emailAddress, phoneNo, emailCategory, source, company, registerDate }) {
  return (
    <>
      <tr>
        <td><input type="checkbox" /></td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{emailAddress}</td>
        <td>{phoneNo}</td>
        <td>{emailCategory}</td>
        <td>{source}</td>
        <td>{company}</td>
        <td>{registerDate}</td>
      </tr>

    </>
  )
}

export default TableData