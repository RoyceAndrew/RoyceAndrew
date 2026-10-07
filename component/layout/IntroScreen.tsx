"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import  gsap  from "gsap";

export default function IntroScreen() {
    const intro = useRef<HTMLDivElement>(null)
    const name = useRef(null)
    const portfolio = useRef(null)

    useGSAP(() => {
        const tl: gsap.core.Timeline = gsap.timeline()

        tl.to(name.current, {
            opacity: 0,
            duration: 0.8,
            delay: 1
        }, )
        tl.to(portfolio.current, {
            opacity: 0,
            duration: 0.8
        }, "-=0.5")
        tl.to(intro.current, {
            opacity: 0,
            duration: 0.6,
            onComplete: () => {
                intro.current?.style.setProperty("display", "none");
            }
        })
    }, [])

    return (
        <div ref={intro} className="flex fixed top-0 bg-black left-0 h-screen w-full justify-center items-center p-6 z-9999">
            <p className="font-light text-2xl md:text-4xl mr-2" ref={name}>Royce Andrew</p>
            <p className="font-thin text-2xl md:text-4xl" ref={portfolio}>Portfolio</p>
        </div>
    );
}