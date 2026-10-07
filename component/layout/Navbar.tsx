"use client";

import Button from "@/component/button/Button";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollProgress =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setProgress(scrollProgress);
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full border-b transition-colors duration-500 ${
        scrolled
          ? "bg-black/60 backdrop-blur-md border-white/10"
          : "bg-transparent border-transparent"
      }`}
    >
      <span
        className="block"
        style={{
          width: `${progress * 100}%`,
          height: "2px",
          background: "white",
        }}
      ></span>
      <div className="flex justify-between py-4 px-5 text-sm md:text-base">
        <Button
          title="Royce Andrew"
          href="#"
          onClick={() => window.location.reload()}
        />
        <div className="flex gap-3 md:gap-4">
          <Button
            title="Contact"
            href="mailto:royceandrew142@gmail.com"
            target="_blank"
          />
          <Button
            title="LinkedIn"
            target="_blank"
            href="https://www.linkedin.com/in/royceandrewwijaya/"
          />
          <Button
            title="Get CV"
            href="/docs/Royce_Andrew_Wijaya_CV.pdf" 
            download={true}
          />
        </div>
      </div>
    </nav>
  );
}