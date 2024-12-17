import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

function About() {
  gsap.registerPlugin(useGSAP,ScrollTrigger);
    useGSAP(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.aboAni',
          start: 'top bottom',
          toggleActions: "play none none none"
          
        }
      })

      if (window.innerWidth > 900) {

      tl.fromTo(".aboAni", { y: 100, opacity: 0 },{ y: 0, duration: 1, opacity: 1, stagger: 0.3 })
      tl.fromTo(".face", { x: 100, opacity: 0 },{ x: 0, duration: 1, opacity: 1})
      } else {
        tl.fromTo(".aboAni", { y: 100, opacity: 0 },{ y: 0, duration: 1, opacity: 1, stagger: 0.3 })
      tl.fromTo(".face", { y: 100, opacity: 0 },{ y: 0, duration: 1, opacity: 1})
      }

    }, [])


    return <section id="about" className='closing-gap cols'>
      <div className="row">
    <fieldset className='parttitle aboAni row'>
    <legend><h2 className='border-gap'><span className='titlenumber'>01.</span>About Me</h2></legend>
    
    <div>
    <p className='aboAni aboutp'>Hi there! My name is Royce Andrew, and I'm a passionate web developer with expertise in creating dynamic and interactive web applications. Over time, I have honed my skills in the following technologies:</p>
    <div className='skillList  aboAni'>
    <ul>
      <li>JavaScript</li>
      <li>TypeScript</li>
      <li>React</li>
    </ul>
    <ul>
      <li>Node.js</li>
      <li>SQL</li>
      <li>HTML</li>
    </ul>
    <ul>
      <li>Tailwind</li>
      <li>MongoDB</li>
      <li>CSS</li>
    </ul>
    <ul>
      <li>Bootstrap</li>
    </ul>
    </div>
    <p className='aboAni aboutp'>I am passionate about continuous learning and building solutions that have a meaningful impact. Whether working on personal projects or collaborating with others, I strive to write clean, efficient, and maintainable code. Feel free to explore my projects and get in touch if you'd like to collaborate or learn more!</p>
    </div>
    </fieldset>
    <div>
    <img className="face fc" src="./myface.jpg"/>
    <div className="face face-cover"></div>
    </div>
    
    </div>
  </section>
}

export default About