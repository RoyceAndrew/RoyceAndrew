"use strict"

import { useState } from "react";

type ProjectProps = {
    imgSrc: string,
    projectTitle: string,
    ytLink: string,
    projectDesc: string,
    reposLink: string,
    demoLink?: string
}

function ProjectItem({imgSrc, projectTitle, ytLink, projectDesc, reposLink, demoLink}:ProjectProps) {
   const [show, setShow] = useState(false);
   const [tColor, setTColor] = useState("white");

   function handleDetail() {
      if (show) {
        
               setShow(false); 
              document.body.style.overflow = ""
      } else {
         setShow(true); 
         document.body.style.overflow = "hidden";
         
      }
   }

   function stopPropagation(event:any) {
      event.stopPropagation(); 
   }

   function handleColor() {
     setTColor("#00ADB5")
   }

   function handleLeave() {
      setTColor("white")
   }

   return <>
   <div className="project-btn" onClick={handleDetail} onMouseOver={handleColor} onMouseLeave={handleLeave}>
   <img className="project-img" src={imgSrc}/>
   <div className="project-title"><h2 style={{color: tColor, transition: "0.3s ease-out"}}>{projectTitle}</h2></div>
</div>
<div
   className="background-detail"
   onClick={handleDetail}
   style={{ visibility: show ? "visible" : "collapse" }}
>
   <div className="detail" onClick={stopPropagation}>
   <i className="bi bi-x-circle-fill" onClick={handleDetail}></i>
      <iframe className="project-video" src={ytLink} frameBorder="0" allowFullScreen/>
      <div className="video-detail"><p>{projectDesc}</p>
      <div className="git-demo"><a target="_blank" href={reposLink}><i className="repos bi bi-github"/></a>{demoLink && <a className="demo" href={demoLink} target="_blank">DEMO</a>}</div>
         </div>
   </div>
</div>
</>
}

export default ProjectItem;