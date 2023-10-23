import React, { useState } from 'react'
import { useRef } from 'react'

const UseRef2 = () => {
    const refElement = useRef("");
    const [name, setName] = useState("Dinkar");
    console.log(refElement);

    function Submit(e){
        setName(e.target.value);
    }

    function Reset(){
        setName("");
        refElement.current.focus()
    }

    function handleInput(){
        refElement.current.style.color="blue"
        refElement.current.value="Aditi"
    }


  return (
    <>
        <h1><b>Learning useRef</b></h1>
        <input ref={refElement} type="text" value={name} onChange={Submit}></input>
        <button onClick={Reset}>Reset</button>
        <button onClick={handleInput}>handleinput</button>
    </>
  )
}

export default UseRef2