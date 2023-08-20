import React, { useState } from 'react'

const Hook = () => {
    const [demo, setDemo] = useState("");
  return (
    <>
      <h2 className='btn btn-warning'>{ demo || 
      <>
        <h4 className='btn btn-warning'>Mast</h4>
        <h4>you can do anything</h4>
      </>
      }</h2>
      <h2 className='btn btn-warning'>{ demo && "Kumar" }</h2>
    </>
  )
}

export default Hook
