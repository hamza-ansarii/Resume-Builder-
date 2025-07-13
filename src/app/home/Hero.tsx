// Hero.tsx
import Link from "next/link";
import { AutoTypingResume } from "home/AutoTypingResume";

export const Hero = () => {
  return (
    <section className="lg:flex lg:h-[825px] lg:justify-center bg-[#0a0a0f] text-[#f2f2f2]">
      {/* Hero text area */}
      <div className="mx-auto max-w-xl pt-8 text-center lg:mx-0 lg:grow lg:pt-32 lg:text-left px-4">
        <h1
          className="text-4xl lg:text-6xl font-bold leading-tight mb-4"
          style={{
            fontFamily: "Orbitron, sans-serif",
            background: "linear-gradient(90deg, #4feeff, #8a4fff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Build Your Future <br />
          with <span className="text-white">NextOra.Ai</span>
        </h1>

        <p
          className="mt-4 text-lg lg:text-xl text-[#e0e0e0]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          NextOra.Ai is your intelligent career companion — an AI-powered resume builder crafted to help you create professional, modern, and ATS-friendly CVs in just minutes. With smart suggestions, optimized formatting, and real-time content guidance, we make it easy for you to present your skills and experience in the best possible light. Step confidently into your future — because your journey starts with the right resume.
        </p>

        <Link
          href="/resume-import"
          className="inline-block mt-8 px-6 py-3 rounded-xl text-black font-semibold transition duration-300 ease-in-out"
          style={{
            background: "linear-gradient(135deg, #4feeff, #8a4fff)",
            fontFamily: "Orbitron, sans-serif",
          }}
        >
          Start Building →
        </Link>
      </div>

      {/* Auto resume typing animation block */}
      <div
        className="mt-8 flex justify-center lg:mt-4 lg:block lg:grow"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(12px)",
          borderRadius: "16px",
          padding: "16px",
          maxHeight: "400px",
        }}
      >
        <AutoTypingResume />
      </div>
    </section>
  );
};
