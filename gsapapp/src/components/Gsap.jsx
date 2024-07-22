import React, { useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(ScrollToPlugin);

const Gsap = () => {

    useEffect(() => {
        gsap.fromTo("h1", {
            x:50,
            duration:2,
            delay:1,
            // rotate:360
        })

        gsap.from("h1", {
            y:50,
            duration:2,
            delay:1,
            // rotate:360
        })
    })

  return (
    <div style={{width: "100%"}}>
      <h1>Hey hi</h1>
    </div>
  )
}

export default Gsap
