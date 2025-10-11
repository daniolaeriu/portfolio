import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomCursor } from "./custom-cursor";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const randomNames = ["Visitor", "Stranger", "Recruiter", "Developer"];
  const [displayName] = useState(() => {
    const randomIndex = Math.floor(Math.random() * randomNames.length);
    return randomNames[randomIndex];
  });

  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const nameRef = useRef(null);
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);
  const cubeRef = useRef(null);
  const starsRef = useRef<HTMLCanvasElement>(null);
  const terminalRef = useRef(null);

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
      // Regenerate star positions on resize
      stars.forEach((star) => {
        star.x = Math.random() * canvas.width;
        star.y = Math.random() * canvas.height;
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const xPos = (e.clientX / window.innerWidth - 0.5) * 20;
      const yPos = (e.clientY / window.innerHeight - 0.5) * 20;

      gsap.to(cubeRef.current, {
        x: xPos,
        y: yPos,
        duration: 1,
        ease: "power2.out",
      });
    };

    // GSAP animations
    const gsapCtx = gsap.context(() => {
      gsap.set(
        [
          titleRef.current,
          nameRef.current,
          paragraph1Ref.current,
          paragraph2Ref.current,
          terminalRef.current,
        ],
        { opacity: 0, y: 30 }
      );

      gsap.set(cubeRef.current, {
        opacity: 0,
        scale: 0.8,
        rotation: -45,
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(starsRef.current, { opacity: 1, duration: 1 }, 0)
        .to(
          cubeRef.current,
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1.5,
            ease: "back.out(1.2)",
          },
          0.3
        )
        .to(titleRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.6)
        .to(nameRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.8)
        .to(paragraph1Ref.current, { opacity: 1, y: 0, duration: 0.8 }, 1.0)
        .to(paragraph2Ref.current, { opacity: 1, y: 0, duration: 0.8 }, 1.2)
        .to(terminalRef.current, { opacity: 1, y: 0, duration: 0.8 }, 1.4);

      gsap.to(cubeRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });

      gsap.to(cubeRef.current, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(cubeRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: 100,
        scale: 0.9,
        opacity: 0.3,
      });

      gsap.to(starsRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: -150,
      });
    }, heroRef);

    animate();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      gsapCtx.revert();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <div
        ref={heroRef}
        className="relative h-screen w-full flex items-center overflow-hidden"
      >
        <canvas ref={starsRef} className="absolute inset-0 z-0 opacity-0" />

        <div className="absolute top-[10%] -right-[20%] w-2/4 z-10">
          <div className="absolute inset-0 rounded-full blur-xl bg-cyan-400 opacity-0 scale-50" />
          <div
            ref={cubeRef}
            className="relative w-1/2 h-96 shadow-cyan-500 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-3xl shadow-2xl"
            style={{ transform: "rotate(45deg)" }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-thin md:text-6xl lg:text-7xl font-mono text-left leading-tight text-white">
              <span ref={titleRef} className="inline-block">
                Hey there,
              </span>
              <br />
              <span
                ref={nameRef}
                className="inline-block font-bold text-cyan-400"
              >
                {displayName}
              </span>
              <span ref={nameRef} className="inline-block">
                .
              </span>
            </h1>

            <p
              ref={paragraph1Ref}
              className="text-xl md:text-xl max-w-3xl mt-8 leading-relaxed font-light text-gray-200"
            >
              I'm <span className="font-bold text-cyan-400">Dani Olaeriu</span>,
              a 24 years old software developer who turns ideas into elegant
              digital experiences. I specialize in{" "}
              <span className="font-bold">frontend development</span> with the
              backend skills to bring the full picture together.
            </p>

            <p
              ref={paragraph2Ref}
              className="text-lg md:text-xl mt-4 leading-relaxed text-gray-300"
            >
              With{" "}
              <span className="font-bold text-cyan-400">
                4 years of professional experience
              </span>
              , I build web applications that don't just work, they delight.
              Every pixel, every interaction, every line of code is crafted with
              purpose.
            </p>

            <div ref={terminalRef} className="mt-12">
              <div className="bg-slate-800 rounded-lg p-6 border border-cyan-500/30 shadow-lg shadow-cyan-500/20 interactive">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="font-mono text-sm text-green-400">
                  <span className="text-cyan-400">$</span> npm run
                  build-amazing-apps
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          * {
            cursor: none !important;
          }
        `}</style>
      </div>
    </>
  );
}
