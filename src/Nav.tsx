"use strict"

import "./index.css";
import { useEffect, useState } from "react";
import NavTarget from "./NavTarget";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Nav() {
    const [fixed, setFixed] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollPos, setLastScrollPos] = useState(0);

    useGSAP(() => {
      const tl = gsap.timeline();

      tl.fromTo(".navAni", {y:-20, opacity:0},{duration: 0.5,delay: 3  ,opacity:1, y:0, stagger: 0.3})
      tl.fromTo(".logoAni", {scale: 0},{scale: 1,rotation: 360,duration: 1.4, stagger: 0.2 }, "<0")
      
    },[])

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            
            if (currentScrollPos === 0) {
              setFixed(false);
              setVisible(true);
            } else {
              setFixed(true);
      
              if (currentScrollPos < lastScrollPos) {
                setVisible(true);
              } else {
                setVisible(false);
              }
            }
      
            setLastScrollPos(currentScrollPos);
          };
      
          window.addEventListener("scroll", handleScroll);
          return () => {
            window.removeEventListener("scroll", handleScroll);
          };
    }, [lastScrollPos])
    
    const handleReload = () => {
        window.location.reload();
      };

    return <nav style={{
        position: fixed ? "fixed" : "absolute",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: fixed ? "#222831" : "transparent",
        
        padding: fixed ? "10px 50px" : "20px 50px",
        transition: "all 0.3s ease",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        boxShadow: fixed ? "0px 2px 10px rgba(0, 0, 0, 0.2)" : "none",
    }} id="nav">
    <a href="#" className="logo" onClick={handleReload}><img className="logoAni" src=".\image-removebg-preview.png"></img></a>
    <div className="nav-list">
    <NavTarget navLink="#about" navName="About" navNumber="01."/>
    <NavTarget navLink="#project" navName="Project" navNumber="02."/>
    <NavTarget navLink="#certificate" navName="Certificate" navNumber="03."/>
    <NavTarget navLink="#contact" navName="Contact" navNumber="04."/>
    </div>
   </nav>
}

export default Nav;