import { useEffect, useRef, type PropsWithChildren } from "react";
import { CustomCursor } from "@/components/custom-cursor";

import LiquidEther from "./LiquidEther";
import Prism from "./Prism";
import { StaggeredMenu } from "./StaggeredMenu";

export function Layout({ children }: PropsWithChildren) {
  const starsRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = starsRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    const stars = Array.from({ length: 400 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.8 + 0.2,
      twinkleSpeed: Math.random() * 0.02 + 0.01,
      twinkleOffset: Math.random() * Math.PI * 2,
    }));

    let frame = 0;
    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        const twinkle = Math.sin(
          frame * star.twinkleSpeed + star.twinkleOffset
        );
        const finalOpacity = star.opacity * (0.5 + twinkle * 0.5);

        ctx.fillStyle = `rgba(255, 255, 255, ${finalOpacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      frame++;
      animationId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      setCanvasSize();
      stars.forEach((star) => {
        star.x = Math.random() * canvas.width;
        star.y = Math.random() * canvas.height;
      });
    };

    animate();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative flex min-h-screen w-full min-w-lg cursor-none overflow-x-hidden bg-gradient-to-tl from-slate-900/90 via-slate-900 to-slate-950 text-white">
      <BackgroundEffects />

      <canvas ref={starsRef} className="fixed inset-0 z-0" />

      <CustomCursor className="hidden md:block" />

      {children}
    </section>
  );
}

function BackgroundEffects() {
  const liquidEtherConfig = {
    colors: ["#b3e5fc", "#4fc3f7", "#03a9f4"],
    mouseForce: 20,
    cursorSize: 100,
    iterationsViscous: 32,
    iterationsPoisson: 32,
    resolution: 0.2,
  };

  return (
    <>
      <div className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full">
        <Prism
          animationType="3drotate"
          timeScale={0.5}
          height={10}
          baseWidth={4.5}
          scale={1}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={2}
        />
      </div>
      <div className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full">
        <LiquidEther {...liquidEtherConfig} />
      </div>
    </>
  );
}
