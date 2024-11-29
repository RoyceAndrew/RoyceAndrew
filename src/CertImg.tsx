type Certif = {
   certiLink: string,
   imgLink: string,
   desc: string,
   courseLink: string,
   courseName: string,
   leftSide: boolean
};

function CertImg({certiLink, imgLink, desc, courseLink, courseName, leftSide}: Certif) {
   let leftAni:string = ""
   let boxLeft:string = ""
   
   if (!leftSide) {
      leftAni = "right"
      boxLeft = "right-box"
   } else {
      leftAni = "left"
      boxLeft = "left-box"
   }

   return <div style={{paddingTop: "20px", marginBottom: "30px", display: "flex", alignItems: "center", flexDirection: leftSide ? "row" : "row-reverse"}} className="certi">
      <a href={certiLink} className={leftAni} target="_blank"><div className="img-wrapper"></div><img className="certimg" src={imgLink}/></a>
      <div className={"desc-box " + boxLeft}><a href={courseLink} target="_blank"><h1 style={{textAlign: leftSide ? "start" : "end"}}>{courseName}</h1></a><div style={{marginLeft: leftSide ? "-100px" : "0px", marginRight: leftSide ? "0px" : "-100px" }} className="certi-desc"><p>{desc}</p></div></div></div>
}

export default CertImg