import{r as n,j as e}from"./index-Cz5OMEyn.js";import{g as c,u as l}from"./index-DMpj2AlO.js";import{S as x}from"./ScrollTrigger-DZdR0iV_.js";function r({imgSrc:t,projectTitle:d,ytLink:p,projectDesc:m,reposLink:g}){const[i,o]=n.useState(!1),[h,a]=n.useState("white");function s(){i?(o(!1),document.body.style.overflow=""):(o(!0),document.body.style.overflow="hidden")}function u(j){j.stopPropagation()}function b(){a("#00ADB5")}function y(){a("white")}return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"project-btn",onClick:s,onMouseOver:b,onMouseLeave:y,children:[e.jsx("img",{className:"project-img",src:t}),e.jsx("div",{className:"project-title",children:e.jsx("h2",{style:{color:h,transition:"0.3s ease-out"},children:d})})]}),e.jsx("div",{className:"background-detail",onClick:s,style:{visibility:i?"visible":"collapse"},children:e.jsxs("div",{className:"detail",onClick:u,children:[e.jsx("i",{className:"bi bi-x-circle-fill",onClick:s}),e.jsx("iframe",{className:"project-video",src:p,frameBorder:"0",allowFullScreen:!0}),e.jsxs("div",{className:"video-detail",children:[e.jsx("p",{children:m}),e.jsx("div",{children:e.jsx("a",{target:"_blank",href:g,children:e.jsx("i",{className:"repos bi bi-github"})})})]})]})})]})}function k(){return c.registerPlugin(l,x),l(()=>{let t=c.timeline({scrollTrigger:{trigger:"#project",start:"top bottom",toggleActions:"play none none none"}});t.fromTo(".proAni",{opacity:0},{opacity:1,duration:1}),t.fromTo(".project-btn",{x:-200,opacity:0},{x:0,duration:1,opacity:1,stagger:1}),t.fromTo(".seemore",{y:50,opacity:0},{y:0,opacity:1,duration:1})},[]),e.jsxs("section",{id:"project",className:"closing-gap",children:[e.jsxs("fieldset",{className:"parttitle proAni",children:[e.jsx("legend",{children:e.jsxs("h2",{className:"border-gap",children:[e.jsx("span",{className:"titlenumber",children:"02."}),"Project"]})}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"20px"},children:[e.jsx(r,{imgSrc:".\\eeb-scr.png",projectTitle:"embarrassing-experience-blog",ytLink:"https://www.youtube.com/embed/UBgOFaKD5aM",projectDesc:"Embarrassing Experience Blog is an interactive blogging platform where users can share their embarrassing experiences. Built using Express for a robust server-side framework, EJS as the template engine for rendering dynamic pages, Node.js to efficiently handle server-side operations, and Axios to create a custom API, this project demonstrates seamless integration of backend technologies to manage and display user-generated content.",reposLink:"https://github.com/RoyceAndrew/embarrassing-experience-blog"}),e.jsx(r,{imgSrc:".\\mml-scr.png",projectTitle:"MyMangaList",ytLink:"https://www.youtube.com/embed/tbVMda6BoGc",projectDesc:"MyMangaList is a web application built to help users manage and track their manga collections. It leverages the MyAnimeList API to fetch detailed information about various manga, including titles, descriptions, and cover images. The application also uses PostgreSQL as the database to store user data, such as their manga lists, ratings, and preferences. By combining real-time data from MyAnimeList and the power of a PostgreSQL database, MyMangaList provides users with a seamless experience to organize, update, and explore their manga collection.",reposLink:"https://github.com/RoyceAndrew/MyMangaList"}),e.jsx(r,{imgSrc:".\\cc-scr.png",projectTitle:"currency-converter",ytLink:"https://www.youtube.com/embed/UmoW2MrSKkQ",projectDesc:"Currency Converter is a website designed to help users convert currencies from one to another in real-time. It utilizes the Frankfurter API to fetch up-to-date exchange rate data, ensuring accuracy and reliability for all conversions. In this project, I also improved my skills in using Axios to work effectively with external APIs, enhancing my ability to integrate third-party services into web applications.",reposLink:"https://github.com/RoyceAndrew/CurrencyConverter"})]})]}),e.jsx("a",{href:"https://github.com/RoyceAndrew?tab=repositories",className:"seemore",target:"_blank",children:"See More"})]})}export{k as default};
