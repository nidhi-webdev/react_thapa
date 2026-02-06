import React, { useEffect } from 'react'

const Example = () => {
useEffect(() => {
    console.log("I am trying useEffect Example");
    
}, [])



  return (
    <div> 
        <h1> Hello Example one </h1>  
      
    </div>
  )
}

export default Example
