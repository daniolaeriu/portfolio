import { useEffect, useRef, type PropsWithChildren } from "react";
import { CustomCursor } from "@/components/custom-cursor";

import Prism from "./Prism";
import Galaxy from "./Galaxy";

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
      <div className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full">
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          speed={0.4}
          density={0.2}
          glowIntensity={0.2}
          saturation={0.5}
          hueShift={200}
        />
      </div>
      <CustomCursor className="hidden md:block" />

      {children}
    </section>
  );
}

function BackgroundEffects() {
  return (
    <>
      <div className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full">
        <Prism
          animationType="rotate"
          timeScale={0.2}
          height={4}
          baseWidth={3}
          scale={2}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={1}
        />
      </div>
    </>
  );
}
