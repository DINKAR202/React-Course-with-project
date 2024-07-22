import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Gsap = () => {

    useGSAP(() => {
        gsap.to("div", {
            x:1200,
            duration:2,
            delay:1,
            rotate:360
        })
    })

  return (
    <div>
      Hey hi
    </div>
  )
}

export default Gsap
