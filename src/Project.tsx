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
             imgSrc=".\eeb-scr.png"
             projectTitle="embarrassing-experience-blog"
             ytLink="https://www.youtube.com/embed/UBgOFaKD5aM"
             projectDesc="Embarrassing Experience Blog is an interactive blogging platform where users can share their embarrassing experiences. Built using Express for a robust server-side framework, EJS as the template engine for rendering dynamic pages, Node.js to efficiently handle server-side operations, and Axios to create a custom API, this project demonstrates seamless integration of backend technologies to manage and display user-generated content."
             reposLink="https://github.com/RoyceAndrew/embarrassing-experience-blog"
            />
            <ProjectItem 
             imgSrc=".\mml-scr.png"
             projectTitle="MyMangaList"
             ytLink="https://www.youtube.com/embed/tbVMda6BoGc"
             projectDesc="MyMangaList is a web application built to help users manage and track their manga collections. It leverages the MyAnimeList API to fetch detailed information about various manga, including titles, descriptions, and cover images. The application also uses PostgreSQL as the database to store user data, such as their manga lists, ratings, and preferences. By combining real-time data from MyAnimeList and the power of a PostgreSQL database, MyMangaList provides users with a seamless experience to organize, update, and explore their manga collection."
             reposLink="https://github.com/RoyceAndrew/MyMangaList"
            />
            <ProjectItem 
             imgSrc=".\cc-scr.png"
             projectTitle="currency-converter"
             ytLink="https://www.youtube.com/embed/UmoW2MrSKkQ"
             projectDesc="Currency Converter is a website designed to help users convert currencies from one to another in real-time. It utilizes the Frankfurter API to fetch up-to-date exchange rate data, ensuring accuracy and reliability for all conversions. In this project, I also improved my skills in using Axios to work effectively with external APIs, enhancing my ability to integrate third-party services into web applications."
             reposLink="https://github.com/RoyceAndrew/CurrencyConverter"
            />
           </div>
         </fieldset>
         <a href="https://github.com/RoyceAndrew?tab=repositories" className="seemore" target="_blank">See More</a>
      </section>
   );
}

export default Project;