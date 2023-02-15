import React from 'react'

function pagination({info,pageHandler}) {
  
    
let pagenumber=[]


for(let i=1;i<Math.ceil(info.length/10)+1 ; i++){
    pagenumber.push(i)
}
  return (
    <div className='pages'>
      {pagenumber.map((page,index)=><div key={index} className='page' onClick={()=>pageHandler(page)}>
         {page}
        </div>)}     
    </div>
  )
}

export default pagination 