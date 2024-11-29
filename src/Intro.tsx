"use strict"

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";

function Intro({getScroll}: any) {
  const intro = useRef<HTMLDivElement | null>(null);
  
  const [scroll, setScroll] = useState(true)
  
  useGSAP(() => {
    
    const tl = gsap.timeline()
      tl.from(".introLogo", {scale: 0, rotation: 360});
      tl.to(".introLogo", { scale: 1, transformOrigin: "50% 50%", duration: 1 });
      tl.to(".introLogo", {scale: 0, rotation: 360, duration: 1})
      tl.to(intro.current, {opacity: 0, duration: 1, ease: "power1.out", onComplete: () => {
        
        setScroll(false);
        if (intro.current) {
          intro.current.style.pointerEvents = "none";
          intro.current.style.display = "none";
        }
      },
    });
}, []);

  useEffect(() => {
    getScroll(scroll)

    
  }, [scroll])

  

  return (
    <>
    
      <div className="background" ref={intro} style={{height: "100vh", width: "100%", position: "absolute", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", zIndex: "9"
      }}>
      <img className="introLogo" style={{height: "70px"}} src="./image-removebg-preview.png"/>
      
      </div>
      
    </>
  )
}

export default Intro