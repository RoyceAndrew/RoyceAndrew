import CertImg from "./CertImg"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

function Certificate() {
gsap.registerPlugin(useGSAP,ScrollTrigger)

   useGSAP(() => {
      let tl = gsap.timeline({scrollTrigger:{
        trigger:  ".cerAni",
        start: "top bottom",
        toggleActions: "play none none none"
      }});
      const handleResize = () => {
         if (window.innerWidth > 900) {
      tl.fromTo(".cerAni", { y: 100, opacity: 0 },{ y: 0, duration: 1, opacity: 1})
      tl.fromTo(".right", { x: 100, opacity: 0 },{ x: 0, duration: 1, opacity: 1})
      tl.fromTo(".right-box", { x: -100, opacity: 0 },{ x: 0, duration: 1, opacity: 1})
      tl.fromTo(".left", { x: -100, opacity: 0 },{ x: 0, duration: 1, opacity: 1})
      tl.fromTo(".left-box", { x: 100, opacity: 0 },{ x: 0, duration: 1, opacity: 1})
   } else if (window.innerWidth <= 900) {
      tl.fromTo(".cerAni", { y: 100, opacity: 0 },{ y: 0, duration: 1, opacity: 1})
      tl.fromTo(".right", { y: 100, opacity: 0 },{ y: 0, duration: 1, opacity: 1})
      tl.fromTo(".right-box", { y: 100, opacity: 0 },{ y: 0, duration: 1, opacity: 1})
      tl.fromTo(".left", { y: 100, opacity: 0 },{ y: 0, duration: 1, opacity: 1})
      tl.fromTo(".left-box", { y: 100, opacity: 0 },{ y: 0, duration: 1, opacity: 1})
    }
};

handleResize();
   })


   return  <section id="certificate" className="closing-gap">
    <fieldset className='parttitle   cerAni'>
    <legend><h2 className='border-gap'><span className='titlenumber'>03.</span>Certificate</h2></legend>    
    <CertImg 
       certiLink="https://www.freecodecamp.org/certification/FakeTuyul/responsive-web-design" 
       imgLink=".\freecodecamp.png"
       desc="I have learned the fundamentals of HTML and CSS through this course, including how to structure web pages using semantic HTML and style them effectively with CSS. This knowledge has provided me with a solid foundation to create responsive and visually appealing websites."
       courseLink="https://www.freecodecamp.org/"
       courseName="freeCodeCamp"
       leftSide={false}
    />
       <CertImg 
       certiLink="https://www.udemy.com/certificate/UC-9e44b1de-60bc-4c2e-ac36-6968e74dcbb0/" 
       imgLink=".\UC-9e44b1de-60bc-4c2e-ac36-6968e74dcbb0.jpg"
       desc="I have completed a comprehensive course that equipped me with full-stack web development skills. I learned to structure web content with HTML, style it using CSS, and add interactivity through JavaScript. Additionally, I gained experience in building dynamic front-end applications using React, creating server-side functionality with Node.js, and managing databases efficiently using PostgreSQL."
       courseLink="https://www.udemy.com/course/the-complete-web-development-bootcamp/?couponCode=BFCPSALE24"
       courseName="Angela Yu - Web Dev (Udemy)"
       leftSide={true}
    />
      
    </fieldset>
   </section>
}

export default Certificate