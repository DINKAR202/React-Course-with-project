import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'


const Gsap = () => {

    useGSAP(()=> {
        gsap.to(".box", {
            x:1000,
            duration:2,
            delay:1,
        })
    })

  return (
    <div className='box' style={{backgroundColor: "red", padding:"15px",  width:"45px"}}>
        Dinkar
    </div>
  )
}

export default Gsap
