import{j as e}from"./index-Cz5OMEyn.js";import{g as s,u as c}from"./index-DMpj2AlO.js";import{S as m}from"./ScrollTrigger-DZdR0iV_.js";function n({certiLink:t,imgLink:o,desc:l,courseLink:d,courseName:p,leftSide:i}){let a="",r="";return i?(a="left",r="left-box"):(a="right",r="right-box"),e.jsxs("div",{style:{paddingTop:"20px",marginBottom:"30px",display:"flex",alignItems:"center",flexDirection:i?"row":"row-reverse"},className:"certi",children:[e.jsxs("a",{href:t,className:a,target:"_blank",children:[e.jsx("div",{className:"img-wrapper"}),e.jsx("img",{className:"certimg",src:o})]}),e.jsxs("div",{className:"desc-box "+r,children:[e.jsx("a",{href:d,target:"_blank",children:e.jsx("h1",{style:{textAlign:i?"start":"end"},children:p})}),e.jsx("div",{style:{marginLeft:i?"-100px":"0px",marginRight:i?"0px":"-100px"},className:"certi-desc",children:e.jsx("p",{children:l})})]})]})}function x(){return s.registerPlugin(c,m),c(()=>{let t=s.timeline({scrollTrigger:{trigger:".cerAni",start:"top bottom",toggleActions:"play none none none"}});t.fromTo(".cerAni",{y:100,opacity:0},{y:0,duration:1,opacity:1}),t.fromTo(".right",{x:100,opacity:0},{x:0,duration:1,opacity:1}),t.fromTo(".right-box",{x:-100,opacity:0},{x:0,duration:1,opacity:1}),t.fromTo(".left",{x:-100,opacity:0},{x:0,duration:1,opacity:1}),t.fromTo(".left-box",{x:100,opacity:0},{x:0,duration:1,opacity:1})}),e.jsx("section",{id:"certificate",className:"closing-gap",children:e.jsxs("fieldset",{className:"parttitle   cerAni",children:[e.jsx("legend",{children:e.jsxs("h2",{className:"border-gap",children:[e.jsx("span",{className:"titlenumber",children:"03."}),"Certificate"]})}),e.jsx(n,{certiLink:"https://www.freecodecamp.org/certification/FakeTuyul/responsive-web-design",imgLink:".\\freecodecamp.png",desc:"I have learned the fundamentals of HTML and CSS through this course, including how to structure web pages using semantic HTML and style them effectively with CSS. This knowledge has provided me with a solid foundation to create responsive and visually appealing websites.",courseLink:"https://www.freecodecamp.org/",courseName:"freeCodeCamp",leftSide:!1}),e.jsx(n,{certiLink:"https://www.udemy.com/certificate/UC-9e44b1de-60bc-4c2e-ac36-6968e74dcbb0/",imgLink:".\\UC-9e44b1de-60bc-4c2e-ac36-6968e74dcbb0.jpg",desc:"I have completed a comprehensive course that equipped me with full-stack web development skills. I learned to structure web content with HTML, style it using CSS, and add interactivity through JavaScript. Additionally, I gained experience in building dynamic front-end applications using React, creating server-side functionality with Node.js, and managing databases efficiently using PostgreSQL.",courseLink:"https://www.udemy.com/course/the-complete-web-development-bootcamp/?couponCode=BFCPSALE24",courseName:"Angela Yu - Web Dev (Udemy)",leftSide:!0})]})})}export{x as default};
