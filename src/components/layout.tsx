import { useEffect, useRef, type PropsWithChildren } from "react";
import { CustomCursor } from "@/components/custom-cursor";

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
    <section className="min-h-screen cursor-none flex w-full bg-gradient-to-tl from-slate-900/90 via-slate-900 to-slate-950 relative">
      <canvas ref={starsRef} className="fixed inset-0 z-0" />
      <CustomCursor />
      {children}
    </section>
  );
}
