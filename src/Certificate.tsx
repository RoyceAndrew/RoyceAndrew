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
         if (window.innerWidth > 960) {
      tl.fromTo(".cerAni", { y: 100, opacity: 0 },{ y: 0, duration: 1, opacity: 1})
      tl.fromTo(".right", { x: 100, opacity: 0 },{ x: 0, duration: 1, opacity: 1})
      tl.fromTo(".right-box", { x: -100, opacity: 0 },{ x: 0, duration: 1, opacity: 1})
      tl.fromTo(".left", { x: -100, opacity: 0 },{ x: 0, duration: 1, opacity: 1})
      tl.fromTo(".left-box", { x: 100, opacity: 0 },{ x: 0, duration: 1, opacity: 1})
      tl.fromTo(".third", { x: 100, opacity: 0 },{ x: 0, duration: 1, opacity: 1})
      tl.fromTo(".third-box", { x: -100, opacity: 0 },{ x: 0, duration: 1, opacity: 1})
   } else if (window.innerWidth <= 960) {
      tl.fromTo(".cerAni", { y: 100, opacity: 0 },{ y: 0, duration: 1, opacity: 1})
      tl.fromTo(".right", { y: 100, opacity: 0 },{ y: 0, duration: 1, opacity: 1})
      tl.fromTo(".right-box", { y: 100, opacity: 0 },{ y: 0, duration: 1, opacity: 1})
      tl.fromTo(".left", { y: 100, opacity: 0 },{ y: 0, duration: 1, opacity: 1})
      tl.fromTo(".left-box", { y: 100, opacity: 0 },{ y: 0, duration: 1, opacity: 1})
      tl.fromTo(".third", { x: 100, opacity: 0 },{ x: 0, duration: 1, opacity: 1})
      tl.fromTo(".third-box", { x: -100, opacity: 0 },{ x: 0, duration: 1, opacity: 1})
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
       desc="I completed a full-stack web development course, mastering HTML, CSS, and JavaScript for building interactive web content. I also gained experience with React for front-end development, Node.js for server-side functionality, and PostgreSQL for database management."
       courseLink="https://www.udemy.com/course/the-complete-web-development-bootcamp/?couponCode=BFCPSALE24"
       courseName="Angela Yu - Web Dev (Udemy)"
       leftSide={true}
    />
    <CertImg
      certiLink="https://app.luminpdf.com/viewer/6800756dcda2ff7a8fe21aeb"
      imgLink=".\certiharisenin.png"
      desc="Completed a fullstack web development bootcamp at Harisenin.com.
Learned to build responsive web apps using HTML, CSS, JavaScript, React, and Redux.
Gained backend experience with Node.js, Express, PostgreSQL, and JWT authentication.
Also practiced version control (Git), API integration, and app deployment using Vercel and Railway."
      courseLink="harisenin.com"
      courseName="Harisenin.com"
      leftSide={false}
      third={true}
      />
    </fieldset>
   </section>
}

export default Certificate