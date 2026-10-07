"use client";

import Header from "@/component/layout/Header";
import Background from "@/component/background/Background";
import Navbar from "@/component/layout/Navbar";
import SelectedWork from "@/component/layout/SelectedWork";
import Experience from "@/component/layout/Experience";
import About from "@/component/layout/About";
import Certifications from "@/component/layout/Certifications";
import LocomotiveScroll from "locomotive-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      scrollCallback: ScrollTrigger.update,
      lenisOptions: {
        wrapper: window,
        content: document.documentElement,
        lerp: 0.1,
        duration: 1.2,
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        anchors: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      },
    });
    return () => scroll.destroy();
  }, []);

  return (
    <>
      <Navbar />
      <Background />
      <Header />
      <SelectedWork />
      <Experience />
      <Certifications />
      <About />
    </>
  );
}
