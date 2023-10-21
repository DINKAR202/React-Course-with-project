import React, { useEffect, useState } from 'react'


const Timer = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      document.title = `Chats (${count})`
        setTimeout(() => {
            setCount((count)=> count+1);
        }, 1000)
    })
  return (
    <>
        <h1>I have rendered {count} times!</h1>
    </>
  )
}

export default Timer