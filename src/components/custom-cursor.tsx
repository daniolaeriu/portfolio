import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cx } from "class-variance-authority";

gsap.registerPlugin(ScrollTrigger);

export function CustomCursor({ className }: { className?: string }) {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const moveCursor = (e: { clientX: any; clientY: any }) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseEnter = (e: { target: any }) => {
      const target = e.target;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.classList.contains("interactive")
      ) {
        gsap.to(follower, {
          scale: 1.5,
          borderColor: "#22d3ee",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(cursor, {
          scale: 0.5,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleMouseLeave = (e: { target: any }) => {
      const target = e.target;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.classList.contains("interactive")
      ) {
        gsap.to(follower, {
          scale: 1,
          borderColor: "#ffffff",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(cursor, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={cx(
          className,
          "fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        )}
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        ref={followerRef}
        className={cx(
          className,
          "fixed top-0 left-0 w-8 h-8 border-2 border-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        )}
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
}
