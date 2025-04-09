"use strict"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectItem from "./ProjectItem";

function Project() {
   gsap.registerPlugin(useGSAP,ScrollTrigger);
    
   
    
   useGSAP(() => {

      let tl = gsap.timeline({
         scrollTrigger: {
            trigger: "#project",
            start: 'top bottom',
         
            toggleActions: "play none none none",
         }
      })
      
      tl.fromTo('.proAni', {opacity: 0   },{opacity: 1,  duration: 1,  })
      tl.fromTo('.project-btn', { x: -200, opacity: 0 },{ x: 0, duration: 1,opacity: 1, stagger: 1})
      tl.fromTo('.seemore', { y: 50, opacity:0  },{ y: 0, opacity: 1 , duration: 1,  })

    }, [])


   return (
      <section id="project" className="closing-gap">
         <fieldset  className="parttitle proAni">
            <legend >
               <h2  className="border-gap">
                  <span  className="titlenumber">02.</span>Project
               </h2>
            </legend>
            <div className="project-lists" > 
            <ProjectItem 
             imgSrc=".\Bleet.png"
             projectTitle="Bleet"
             ytLink="https://www.youtube.com/embed/A8rkHVjwBeg"
             projectDesc="Bleet is a full-stack Twitter clone built using React for the frontend and Express.js for the backend. It uses Zustand for lightweight state management, and JWT with bcrypt for secure authentication. The backend integrates Supabase for real-time storage and image handling, while Prisma ORM is used to interact with a PostgreSQL database."
             reposLink="https://github.com/RoyceAndrew/bleet-frontend"
             demoLink="https://bleet-frontend-4bk4.vercel.app"
            />
            <ProjectItem 
             imgSrc=".\chillflix.png"
             projectTitle="ChillFlix"
             ytLink="https://www.youtube.com/embed/s04WXA7ODd0"
             projectDesc="ChillFlix is a Netflix-inspired movie streaming interface built with React and Redux for seamless state management. It integrates with The Movie Database (TMDb) API to dynamically fetch and display trending movies, TV shows, and genre-based content in real-time."
             reposLink="https://github.com/RoyceAndrew/Chill-react"
             demoLink="https://chill-react-two.vercel.app"
            />
            <ProjectItem 
             imgSrc=".\donezopct.png"
             projectTitle="Donezo"
             ytLink="https://www.youtube.com/embed/tk7eVoccRdk"
             projectDesc="Donezo App is a web-based to-do list application built with the MERN stack (MongoDB, Express, React, Node.js) and TypeScript on the frontend, offering a simple and efficient task management experience. It uses JWT for secure user authentication, with bcrypt for password hashing and validator to ensure strong email and password validation. Context API and useReducer are used for seamless state management, while Axios facilitates smooth communication between the frontend and backend. The design is responsive and modern, created with Tailwind CSS."
             reposLink="https://github.com/RoyceAndrew/Donezo"
             demoLink="https://donezo-xpef.vercel.app"
            />
           </div>
         </fieldset>
         <a href="https://github.com/RoyceAndrew?tab=repositories" className="seemore" target="_blank">See More</a>
      </section>
   );
}

export default Project;