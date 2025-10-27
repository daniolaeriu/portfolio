import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Terminal } from "./terminal";
import { Container } from "./container";

import TextType from "./type-text";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const randomNames = ["Visitor", "Stranger", "Recruiter", "Developer"];
  const [displayName] = useState(() => {
    const randomIndex = Math.floor(Math.random() * randomNames.length);
    return randomNames[randomIndex];
  });

  const heroRef = useRef(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const nameRef = useRef(null);
  const paragraph2Ref = useRef(null);
  const cubeRef = useRef(null);
  const terminalRef = useRef(null);
  const terminal2Ref = useRef(null);

  const svgLineRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      const xPos = (e.clientX / window.innerWidth - 0.5) * 200;
      const yPos = (e.clientY / window.innerHeight - 0.5) * 200;

      gsap.to(cubeRef.current, {
        x: xPos,
        y: yPos,
        duration: 1,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const gsapCtx = gsap.context(() => {
      gsap.set(
        [
          titleRef.current,
          nameRef.current,
          paragraph2Ref.current,
          terminalRef.current,
          terminal2Ref.current,
        ],
        { opacity: 0, y: 30 }
      );

      gsap.set(cubeRef.current, {
        opacity: 0,
        scale: 0.8,
        rotation: -45,
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

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
      )
        .to(titleRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.6)
        .to(nameRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.8)
        .to(terminalRef.current, { opacity: 1, y: 0, duration: 0.8 }, 1.0)
        .to(paragraph2Ref.current, { opacity: 1, y: 0, duration: 0.8 }, 1.2)
        .to(terminal2Ref.current, { opacity: 1, y: 0, duration: 0.8 }, 1.4);

      if (svgLineRef.current) {
        // @ts-ignore

        const path = svgLineRef.current.querySelector("path");
        if (path) {
          const length = path.getTotalLength();
          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });

          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: "power2.inOut",
            delay: 1.0,
          });
        }
      }

      gsap.to(cubeRef.current, {
        rotation: "+=360",
        duration: 30,
        repeat: -1,
        ease: "none",
      });

      gsap.to(cubeRef.current, {
        y: "-=20",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, heroRef);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      gsap.to(containerRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: "power2.in",
      });

      gsapCtx.revert();
    };
  }, []);

  return (
    <Container>
      <div ref={heroRef}>
        <div className="absolute top-[10%] -right-[20%] w-2/4 z-10">
          <div className="absolute inset-0 rounded-full blur-xl bg-cyan-400 opacity-0 scale-50" />
          <div
            ref={cubeRef}
            className="relative w-1/2 h-96 shadow-cyan-500 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-3xl shadow-2xl"
            style={{ transform: "rotate(45deg)" }}
          />
        </div>

        <div className="relative z-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold  md:text-6xl lg:text-7xl font-mono text-left leading-tight text-white">
              <span ref={titleRef} className="inline-block">
                Hey there,
              </span>
              <br />
              <div className="relative inline-block">
                <span
                  ref={nameRef}
                  className="inline-block font-bold text-main-400"
                >
                  {displayName}
                </span>
                <span ref={nameRef} className="inline-block">
                  .
                </span>

                <svg
                  ref={svgLineRef}
                  className="absolute left-1 -bottom-4 w-full"
                  height="12"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 6 Q50 2, 100 6 T200 6"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "#22d3ee", stopOpacity: 1 }}
                      />
                      <stop
                        offset="50%"
                        style={{ stopColor: "#a855f7", stopOpacity: 1 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "#ec4899", stopOpacity: 1 }}
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </h1>

            <TextType
              className="text-xl mt-12 font-semibold"
              text={[
                "Frontend Developer with 4 years of experience crafting scalable web applications.",
                "Specialized in building performant, accessible, and user-centric interfaces.",
                "Architect of clean, maintainable code following industry best practices.",
                "Transforming complex requirements into intuitive digital experiences.",
                "Continuously evolving expertise in modern frontend technologies and methodologies.",
              ]}
              typingSpeed={40}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />

            <div ref={terminalRef}>
              <Terminal>
                <div className="text-green-400">
                  <span className="text-cyan-400">$</span> npm run
                  build-awesome-project
                </div>
                <div className="text-gray-400 ml-2">
                  <span className="text-blue-400">&gt;</span>{" "}
                  <span style={{ perspective: "1000px" }}>building</span>{" "}
                  <span style={{ perspective: "1000px" }}>
                    amazing things...
                  </span>
                </div>
                <div className="text-green-400 ml-2">
                  <span className="text-blue-400">✓</span> Build completed
                  successfully!
                </div>
              </Terminal>
            </div>

            <div ref={terminal2Ref}>
              <Terminal>
                <div className="text-green-400">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-400">user@portfolio</span>
                    <span className="text-cyan-400">$</span>
                    <span>cd ../</span>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-400">user@portfolio</span>
                    <span className="text-cyan-400">$</span>
                    <span>ls</span>
                  </div>
                  <div className="text-gray-300 ml-4 mb-3">
                    projects/ skills/ experience.txt README.md
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-400">user@portfolio</span>
                    <span className="text-cyan-400">$</span>
                    <span>cat README.md</span>
                  </div>

                  <div className="text-gray-300 ml-4 mt-3">
                    <div className="text-purple-400 font-bold mb-2">
                      # About Me
                    </div>
                    <div className="mb-2">
                      Hey there! 👋 I'm a 24 years old{" "}
                      <span className="text-blue-400">Front End Developer</span>{" "}
                      passionate about
                    </div>
                    <div className="mb-2">
                      crafting beautiful, performant web experiences. I love
                      bringing ideas
                    </div>
                    <div className="mb-2">
                      to life through clean code and intuitive user interfaces.
                    </div>

                    <div className="text-purple-400 font-bold mt-4 mb-2">
                      ## What I Do
                    </div>
                    <div className="mb-2">
                      <span className="text-yellow-400">•</span> Build
                      responsive, modern web applications
                    </div>
                    <div className="mb-2">
                      <span className="text-yellow-400">•</span> Transform
                      designs into pixel-perfect reality
                    </div>
                    <div className="mb-2">
                      <span className="text-yellow-400">•</span> Optimize
                      performance and user experience
                    </div>
                    <div className="mb-2">
                      <span className="text-yellow-400">•</span> Collaborate
                      with teams to deliver quality solutions
                    </div>

                    <div className="text-purple-400 font-bold mt-4 mb-2">
                      ## Let's Connect
                    </div>
                    <div className="mb-2">
                      Always excited to work on interesting projects and
                      collaborate with
                    </div>
                    <div className="mb-2">
                      fellow developers. Let's build something amazing together!
                      🚀
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-4">
                    <span className="text-green-400">user@portfolio</span>
                    <span className="text-cyan-400">$</span>
                    <span className="animate-pulse">_</span>
                  </div>
                </div>
              </Terminal>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
