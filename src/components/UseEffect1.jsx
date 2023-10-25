import React, { useEffect, useState } from 'react'

const UseEffect1 = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if(count >= 1){
        document.title = `Chats (${count})`
        }
        else{
        document.title = `Chats`
        }
    });
    console.log("hello outside");

  return (
    <>
      <h1>{count}</h1>
      <button className='btn btn-warning' onClick={
        () => setCount(count + 1)
      }>Click here</button>
    </>
  )
}

export default UseEffect1
