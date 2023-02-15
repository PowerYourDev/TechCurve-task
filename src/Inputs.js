import React from 'react'

function Inputs({data,onChangeEventHandler}) {
   
  return (
    <>
     <form className='details-form' >
      
          <div className="input-div">
            <h3 className="input-head">First name: &nbsp; &nbsp; &nbsp;&nbsp;<input className="inputs" type="text" name="firstName" value={data?.firstName || ""} onChange={onChangeEventHandler} /></h3>
            <h3 className="input-head">Last name: &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; <input className="inputs" type="text" name="lastName" value={data?.lastName || ""} onChange={onChangeEventHandler} /></h3>
            <h3 className="input-head">Email Address: <input className="inputs" type="text" name="emailAddress" value={data?.emailAddress || ""} onChange={onChangeEventHandler} /></h3>
            <h3 className="input-head">Phone No: &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="phoneNo" value={data?.phoneNo || ""} onChange={onChangeEventHandler} /></h3>
          </div>
          <div className="input-div">
            <h3 className="input-head">Email Category: <input className="inputs" type="text" name="emailCategory" value={data?.emailCategory || ""} onChange={onChangeEventHandler} /></h3>
            <h3 className="input-head">Source: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="text" name="source" value={data?.source || ""} onChange={onChangeEventHandler} /></h3>
            <h3 className="input-head">Company: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="company" value={data?.company || ""} onChange={onChangeEventHandler} /></h3>
            <h3 className="input-head">Register Date: &nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="registerDate" value={data?.registerDate || ""} onChange={onChangeEventHandler} /></h3>
          </div>

         
        </form>
    
    </>
  )
}

export default Inputs