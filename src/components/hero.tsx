import "../assets/spin.css";
import "../assets/stars.css";
import { Container } from "./container";

export function Hero() {
  return (
    <div className="relative h-screen w-full flex items-center overflow-hidden bg-gradient-to-tr from-main-50 via-main-100 to-main-400">
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

      <div className="absolute -top-[60%] left-1/2 -translate-x-1/2 w-2/3 z-10">
        <div className="absolute inset-0 rounded-full blur-xl bg-main-100 opacity-50 scale-100" />

        <img
          className="relative w-full spin-animation"
          src="planet.png"
          alt="Spinning planet"
        />
      </div>

      <Container>
        <h1 className="text-5xl md:text-6xl lg:text-7xl mt-72 font-bold font-mono text-left leading-tight text-gray-900">
          Hey there, <span className="font-bold text-main-400">curious</span>.
        </h1>
        <p className="text-xl md:text-2xl mt-8 text-gray-700 leading-relaxed font-light">
          I'm <span className="font-bold text-main-400">Dani Olaeriu</span>, a
          software developer specializing in{" "}
          <span className="font-bold text-main-400">frontend development</span>{" "}
          with backend capabilities.
        </p>
        <p className="text-lg md:text-xl mt-4 text-gray-600 leading-relaxed">
          With nearly{" "}
          <span className="font-bold text-main-400">
            4 years of industry experience
          </span>
          , I craft beautiful, performant web experiences that users love.
        </p>
      </Container>
    </div>
  );
}
