import { useState, useEffect } from "react";
import "../assets/spin.css";
import "../assets/stars.css";
import { Container } from "./container";

export function Hero() {
  const randomNames = ["Visitor", "Stranger", "Recruiter", "Developer"];

  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * randomNames.length);
    setDisplayName(randomNames[randomIndex]);
  }, []);

  return (
    <div className="relative h-screen w-full flex items-center overflow-hidden">
      <div className="stars-container h-80 absolute inset-0 z-0">
        {[...Array(400)].map((_, i) => (
          <div
            key={i}
            className="star absolute bg-white rounded-full opacity-80"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute -top-[10%] right-[0%] w-2/4 z-10">
        <div className="absolute inset-0 rounded-full blur-xl bg-main-100 opacity-50 scale-50" />

        <img
          className="relative w-full spin-animation"
          src="cube.png"
          alt="Spinning planet"
        />
      </div>

      <Container>
        <div className="col-span-ful z-20 max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-mono text-left leading-tight text-gray-900">
            Hey there, <br />
            <span className="font-bold text-main-400">
              {displayName || "friend"}
            </span>
            .
          </h1>
          <p className="text-xl md:text-2xl mt-8 text-gray-700 leading-relaxed font-light">
            I'm <span className="font-bold text-main-400">Dani Olaeriu</span>, a
            software developer who turns ideas into elegant digital experiences.
            I specialize in{" "}
            <span className="font-bold">frontend development</span> with the
            backend skills to bring the full picture together.
          </p>
          <p className="text-lg md:text-xl mt-4 text-gray-600 leading-relaxed">
            With{" "}
            <span className="font-bold text-main-400">
              4 years of professional experience
            </span>
            , I build web applications that don't just work—they delight. Every
            pixel, every interaction, every line of code is crafted with
            purpose.
          </p>
        </div>
      </Container>
    </div>
  );
}
