"use strict"

import gsap from "gsap";
import { useGSAP } from "@gsap/react";


function Home() {
  
  useGSAP(() => {
    gsap.fromTo(".homeAni", {opacity:0, y:100},{opacity:1,delay: 4.4, duration: 1, y:0, stagger: 0.5})
  },[])

    return <section id="home">
          <div>
            <p className="homeAni hello">Hello, i am</p>
            <h1 className="homeAni title">Royce Andrew.</h1>
            <h1 className='homeAni sub-title'>A Web Developer.</h1>
          </div>
          </section>
}

export default Home;