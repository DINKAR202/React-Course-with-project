import React from 'react'
import { gsap } from "gsap";
import { Flip } from 'gsap/Flip';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(Flip, ScrollTrigger);

const Gsap = () => {

    gsap.to(".box", {
        duration: 3,
        rotation: 360,
        scale:2,
        rotate:-1,
        scrollTrigger:{
            trigger:".box",
            markers: true,
            scrub: true,
        }
    
    })

  return (
    <div className='box' style={{backgroundColor: "red", padding:"15px",  width:"45px"}}>
    </div>
  )
}

export default Gsap
