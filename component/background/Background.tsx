"use client";

import Particles from "@/component/background/Particles";

export default function Background() {
  return (
    <div className="w-full h-dvh fixed inset-0">
      <Particles
        particleCount={400}
        particleSpread={5}
        speed={0.1}
        particleColors={["#ffffff", "#ffffff", "#ffffff"]}
        moveParticlesOnHover
        particleHoverFactor={1}
        alphaParticles={false}
        particleBaseSize={40}
        sizeRandomness={1}
        cameraDistance={20}
      />
    </div>
  );
}
