import React, { useEffect, useState } from 'react'

const Click = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("object");
        // document.title = `Chats (${count})`
    })

  return (
    <>
        <h1>{count}</h1>
        <button className='btn btn-warning' onClick={ 
            () => setCount(count+1)
        }>Click here</button>
    </>
  )
}

export default Click