import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Terminal } from "./terminal";
import { Container } from "./container";
import { Bot, Box, Bubbles, Hospital } from "lucide-react";

interface Experince {
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
  borderColor: string;
}

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const titleRef = useRef(null);
  const underlineRef = useRef(null);
  const contentRef = useRef(null);
  const itemsRef = useRef([]);

  const experiences: Experince[] = [
    {
      title: "Startup Ideas",
      description:
        "Built and prototyped innovative solutions from concept to deployment",
      icon: <Bubbles />,
      color: "from-main-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/50",
    },
    {
      title: "MedTech",
      description:
        "Developed healthcare technology solutions with focus on reliability and compliance",
      icon: <Hospital />,
      color: "from-main-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/50",
    },
    {
      title: "Courier Services",
      description: "Created logistics and delivery management systems",
      icon: <Box />,
      color: "from-main-500/20 to-pink-500/20",
      borderColor: "border-purple-500/50",
    },
    {
      title: "Internal Products",
      description:
        "Designed and developed numerous internal tools and platforms to improve operational efficiency",
      icon: <Bot />,
      color: "from-main-500/20 to-emerald-500/20",
      borderColor: "border-green-500/50",
    },
  ];

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
      <div className="mb-8">
        <h1
          ref={titleRef}
          className="text-6xl text-main-600 font-bold font-mono inline-block"
        >
          Experience
        </h1>
        <div
          ref={underlineRef}
          className="h-1 bg-main-600 mt-2"
          style={{ width: "200px" }}
        />
      </div>
      <div className="space-y-8">
        <div ref={contentRef} className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-main-600 via-main-400 to-transparent"></div>
          <div className="pl-8">
            <div className="inline-block bg-main-600/10 backdrop-blur-sm px-6 py-4 rounded-lg border border-main-600/30">
              <h2 className="text-3xl font-bold mb-2 text-main-600">
                Frontend Developer
              </h2>
              <p className="text-lg opacity-80">4 Years • Various Projects</p>
            </div>

            <p className="mt-6 text-lg leading-relaxed max-w-3xl">
              Over four years of diverse software development experience,
              working across multiple domains and project types:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative group overflow-hidden rounded-xl border-2 ${exp.borderColor} bg-gradient-to-br ${exp.color} backdrop-blur-sm p-6 transition-all`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    <div className="text-4xl mb-3">{exp.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-main-600">
                      {exp.title}
                    </h3>
                    <p className="text-sm leading-relaxed opacity-90">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
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
        <span className="text-main-600  font-bold ">passionate</span> about
        technology. I easily adapt to new tools and languages, always eager to
        learn and constantly striving to improve.
      </h3>
      typescriptreact
      <Terminal>
        <div className="text-gray-400 mb-3">
          <span className="text-green-400">user@portfolio</span>
          <span className="text-gray-500">:</span>
          <span className="text-blue-400">~</span>
          <span className="text-gray-500">$</span> bash
        </div>

        <div className="text-green-400">
          <span className="text-cyan-400">$</span> ls
        </div>
        <div className="text-blue-400 ml-2">
          projects/ skills/ experience/ contact/
        </div>

        <div className="text-green-400 mt-2">
          <span className="text-cyan-400">$</span> cd experience/
        </div>

        <div className="text-green-400">
          <span className="text-cyan-400">~/experience$</span> cat current.json
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
    </Container>
  );
}
