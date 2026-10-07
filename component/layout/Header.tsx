import FontRandomizer from "../text/FontRandomizer";
import Button from "@/component/button/Button";
import { useEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger)

export default function Header() {
  const header = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: header.current,
        start: "top top",
        end: "center",
        scrub: true,
      }
    })

    tl.to(header.current, {
      autoAlpha: 0,
    })

    return () => {
      tl.scrollTrigger?.kill()
      tl.kill()
    }
  }, [])

  return (
    <header ref={header} id={"header"} className="relative w-full h-dvh overflow-hidden pointer-events-none">
      <div className="fixed inset-0 z-10 flex items-center justify-center text-center text-white">
        <div className="p-4 flex flex-col items-center">
          <FontRandomizer
            text={"ROYCE ANDREW"}
            className="text-4xl sm:text-6xl md:text-8xl"
          />
          <p className="mt-4 text-sm md:text-base uppercase tracking-[0.3em] text-white/60">
            Fullstack Developer
          </p>
          <div className="mt-10 flex gap-1.5 justify-center pointer-events-auto">
            <Button title="Explore Work" href="#selected-work" />
            <span>/</span>
            <Button title="Download CV" href="/docs/Royce_Andrew_Wijaya_CV.pdf" download={true} />
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-xs uppercase tracking-[0.3em] text-white/50">Scroll</span>
          <span className="block h-12 w-px bg-white/60 animate-scroll-line motion-reduce:animate-none" />
        </div>
      </div>
    </header>
  );
}
