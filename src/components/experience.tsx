import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Terminal } from "./terminal";
import { Container } from "./container";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const titleRef = useRef(null);
  const underlineRef = useRef(null);
  const contentRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(underlineRef.current, {
        scaleX: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        transformOrigin: "left center",
      });

      gsap.from(contentRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.5,
        ease: "power2.out",
      });

      gsap.from(itemsRef.current, {
        opacity: 0,
        y: 30,
        scale: 0.95,
        duration: 0.6,
        stagger: 0.2,
        delay: 0.8,
        ease: "back.out(1.2)",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Container>
      <div>
        <h1 ref={titleRef} className="text-5xl font-bold tracking-tight">
          Crafting Code, Building Dreams: My Journey as a Developer
        </h1>
        <div
          ref={underlineRef}
          className="h-1 bg-gradient-to-r mt-8 from-main-600 to-transparent"
        />
      </div>

      <div ref={contentRef}>
        <Terminal>
          <div className="text-gray-400">
            <span className="text-green-400">user@portfolio</span>
            <span className="text-gray-500">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-gray-500">$</span> bash
          </div>

          <div className="text-green-400">
            <span className="text-cyan-400">$</span> ls
          </div>
          <div className="text-gray-300 ml-2">
            projects/ skills/ experience/ contact/
          </div>

          <div className="text-green-400 mt-2">
            <span className="text-cyan-400">$</span> cd experience/
          </div>

          <div className="text-green-400">
            <span className="text-cyan-400">~/experience$</span> cat
            current.json
          </div>
          <div className="text-gray-300 ml-2">
            <span className="text-yellow-400">&#123;</span>
          </div>

          <div className="ml-4 space-y-1">
            <div className="flex items-center gap-3">
              <img src="/webamboos.webp" className="w-14 h-14" alt="" />
              <div className="flex-1">
                <div className="text-purple-400">
                  "company"<span className="text-gray-400">:</span>{" "}
                  <span className="text-green-300">"Webamboos"</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="text-purple-400">
                  "position"<span className="text-gray-400">:</span>{" "}
                  <span className="text-green-300">"Frontend Developer"</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="text-purple-400">
                  "period"<span className="text-gray-400">:</span>{" "}
                  <span className="text-green-300">"April 2022 - Present"</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="text-purple-400">
                  "stack"<span className="text-gray-400">:</span>{" "}
                  <span className="text-yellow-400">[</span>
                  <span className="text-green-300">
                    "React", "Vue", "TypeScript", "Tailwind", "PostgreSQL",
                    "Drizzle", "Docker"
                  </span>
                  <span className="text-yellow-400">]</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-gray-300 ml-2">
            <span className="text-yellow-400">&#125;</span>
          </div>
        </Terminal>

        <Terminal>
          <div className="text-green-400">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-cyan-400">$</span>
              <span>ls</span>
            </div>
            <div className="text-gray-300 ml-4 mb-3">
              projects/ skills/ experience.txt README.md
            </div>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-cyan-400">$</span>
              <span>cd skills</span>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-cyan-400">$</span>
              <span>cat skills.json</span>
            </div>
            <div className="text-gray-300 ml-4">
              <div className="text-yellow-400">{"{"}</div>
              <div className="ml-4">
                <span className="text-blue-400">"languages"</span>: [
                <span className="text-green-300">"JavaScript"</span>,{" "}
                <span className="text-green-300">"TypeScript"</span>],
              </div>
              <div className="ml-4">
                <span className="text-blue-400">"frontend"</span>: {"{"}
              </div>
              <div className="ml-8">
                <span className="text-blue-400">"frameworks"</span>: [
                <span className="text-green-300">"React"</span>,{" "}
                <span className="text-green-300">"Next.js"</span>,{" "}
                <span className="text-green-300">"Vue"</span> ,
                <span className="text-green-300">"Nuxt.js"</span>],
              </div>
              <div className="ml-8">
                <span className="text-blue-400">"styling"</span>: [
                <span className="text-green-300">"Tailwind CSS"</span>,{" "}
                <span className="text-green-300">"SCSS"</span>],
              </div>
              <div className="ml-8">
                <span className="text-blue-400">"animation"</span>: [
                <span className="text-green-300">"GSAP"</span>,{" "}
                <span className="text-green-300">"Framer Motion"</span>]
              </div>
              <div className="ml-4">{"}"},</div>
              <div className="ml-4">
                <span className="text-blue-400">"backend"</span>: {"{"}
              </div>
              <div className="ml-8">
                <span className="text-blue-400">"runtime"</span>: [
                <span className="text-green-300">"Node.js"</span>,{" "}
                <span className="text-green-300">"Drizzle"</span>],
              </div>
              <div className="ml-8">
                <span className="text-blue-400">"databases"</span>: [
                <span className="text-green-300">"PostgreSQL"</span>]
              </div>
              <div className="ml-4">{"}"},</div>
              <div className="ml-4">
                <span className="text-blue-400">"devops"</span>: [
                <span className="text-green-300">"Docker"</span>,{" "}
                <span className="text-green-300">"Git"</span>],
              </div>
              <div className="ml-4">
                <span className="text-blue-400">"specialties"</span>: [
                <span className="text-green-300">
                  "Web Applications Development"
                </span>
                ]
              </div>
              <div className="text-yellow-400">{"}"}</div>
            </div>
          </div>
        </Terminal>

        <h3 className="text-xl">
          Versatile and{" "}
          <span className="text-main-600 font-bold">passionate</span> about
          technology. I easily adapt to new tools and languages, always eager to
          learn and constantly striving to improve.
        </h3>
      </div>
    </Container>
  );
}
