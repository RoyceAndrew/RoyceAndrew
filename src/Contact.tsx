import ContactIcon from "./ContactIcon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Contact() {
gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
   let tl = gsap.timeline({scrollTrigger : {
    trigger: ".conAni",
    start: "top bottom",
    toggleActions: "play none none none"
}});

   tl.fromTo(".conAni", {y:100, opacity: 0},{y:0,opacity:1,duration:1,stagger:0.3})
  })


    return <section id="contact" className="closing-gap">
        <div className="contact-desc">
     <p className="conAni">04. What's Ahead?</p>
     <h2 className="conAni connect">Let's Connect</h2>
     <p className="conAni">I’m actively seeking new opportunities and would love to hear from you! Whether you have a project in mind, a question, or just want to have a chat, don’t hesitate to reach out. I’m eager to connect and explore new possibilities together!</p>
     </div>
     <a className="email conAni" href="mailto:royceandrew142@gmail.com">Email Me</a>
     <p className="or conAni">or</p>
     <div className="iconlist conAni">
     <ContactIcon iconlink="https://www.linkedin.com/in/royceandrewwijaya" iconName="bi bi-linkedin"/>
     <ContactIcon iconlink="https://github.com/RoyceAndrew" iconName="bi bi-github"/>
     </div>
     <p className="copyright">Designed & Created by Royce Andrew</p>
    </section>
}

export default Contact;