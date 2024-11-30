"use strict"

import KUTE from "kute.js";

import { useEffect, useRef } from 'react';

function GreyWave() {
    
  const path1 = useRef(null)
  const path2 = useRef(null)
  useEffect(() => {
  KUTE.fromTo(path1.current, {path:path1.current},{path:path2.current}, {repeat: Infinity, yoyo: true, duration: 3000}).start()
}, [])

    return <svg width="1920" preserveAspectRatio="none" height="300" style={{width: "100%", backgroundColor: "#222831"}} viewBox="0 20 1920 200" xmlns="http://www.w3.org/2000/svg"><path ref={path1} d="m0 73 40-4.8c40-4.9 120-14.5 200-2.4C320 78 400 112 480 135s160 35 240 33.3c80-1.6 160-17 240-38.8 80-21.8 160-50.2 240-51.3 80-1.2 160 24.8 240 37.1 80 12.4 160 11 240 8.4 80-2.7 160-6.7 200-8.7l40-2V0H0Z" fill="#393E46"/><path ref={path2}d="m0 106 40 13.3c40 13.4 120 40 200 30.5S400 94.7 480 69c80-25.7 160-31.3 240-16s160 51.7 240 76c80 24.3 160 36.7 240 24.7 80-12 160-48.4 240-55.5 80-7.2 160 14.8 240 14.1 80-.6 160-24 200-35.6l40-11.7V0H0Z" fill="#393E46" style={{visibility: "hidden"}}/></svg>

};


export default GreyWave;