"use strict"

import KUTE from "kute.js";

import { useEffect, useRef } from 'react';

function BlackWave() {
    
  const path1 = useRef(null)
  const path2 = useRef(null)
  useEffect(() => {
  KUTE.fromTo(path1.current, {path:path1.current},{path:path2.current}, {repeat: Infinity, yoyo: true, duration: 3000}).start()
}, [])

    return <svg width="1920" preserveAspectRatio="none" height="300" style={{width: "100%", backgroundColor: "#393E46"}} viewBox="0 20 1920 200" xmlns="http://www.w3.org/2000/svg"><path ref={path1} d="m0 102 40 8.8c40 8.9 120 26.5 200 41.4 80 14.8 160 26.8 240 31.1 80 4.4 160 1 240-5.6 80-6.7 160-16.7 240-41.2C1040 112 1120 73 1200 55s160-15 240-7 160 21 240 42.5 160 51.5 200 66.5l40 15V0H0Z" fill="#222831"/><path ref={path2} d="m0 40 53.3 10.5C106.7 61 213.3 82 320 80.7c106.7-1.4 213.3-25 320-19.2 106.7 5.8 213.3 41.2 320 59.2 106.7 18 213.3 18.6 320 16.5 106.7-2.2 213.3-7.2 320-17 106.7-9.9 213.3-24.5 266.7-31.9L1920 81V0H0Z" style={{visibility: "hidden"}}/></svg>

};

export default BlackWave;