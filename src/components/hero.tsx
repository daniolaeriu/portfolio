import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomCursor } from "./custom-cursor";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const randomNames = ["Visitor", "Stranger", "Recruiter", "Developer"];
  const [displayName, setDisplayName] = useState("");

  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const nameRef = useRef(null);
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);
  const cubeRef = useRef(null);
  const starsRef = useRef(null);
  const terminalRef = useRef(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * randomNames.length);
    setDisplayName(randomNames[randomIndex]);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          titleRef.current,
          nameRef.current,
          paragraph1Ref.current,
          paragraph2Ref.current,
          terminalRef.current,
        ],
        {
          opacity: 0,
          y: 30,
        }
      );

      gsap.set(cubeRef.current, {
        opacity: 0,
        scale: 0.8,
        rotation: -45,
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(
        starsRef.current,
        {
          opacity: 1,
          duration: 1,
        },
        0
      );

      tl.to(
        cubeRef.current,
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.5,
          ease: "back.out(1.2)",
        },
        0.3
      );

      tl.to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        0.6
      );

      tl.to(
        nameRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        0.8
      );

      tl.to(
        paragraph1Ref.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        1.0
      );

      tl.to(
        paragraph2Ref.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        1.2
      );

      tl.to(
        terminalRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        1.4
      );

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

    return () => ctx.revert();
  }, [displayName]);

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 20;
      const yPos = (clientY / window.innerHeight - 0.5) * 20;

      gsap.to(cubeRef.current, {
        x: xPos,
        y: yPos,
        duration: 1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <CustomCursor />
      <div
        ref={heroRef}
        className="relative h-screen w-full flex items-center overflow-hidden"
      >
        <div
          ref={starsRef}
          className="stars-container absolute inset-0 z-0 opacity-0"
        >
          {[...Array(400)].map((_, i) => (
            <div
              key={i}
              className="star absolute bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                opacity: Math.random() * 0.8 + 0.2,
                animation: `twinkle ${Math.random() * 3 + 2}s infinite ${
                  Math.random() * 3
                }s`,
              }}
            />
          ))}
        </div>

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
                {displayName || "friend"}
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
          @keyframes twinkle {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 1; }
          }
        `}</style>
      </div>
    </>
  );
}
