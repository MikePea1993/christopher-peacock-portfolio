import React, { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center overflow-hidden bg-black px-4 sm:px-6 lg:px-8">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Animated mesh gradient */}
        <div
          className="absolute inset-0 opacity-40 transition-all duration-1000 ease-out"
          style={{
            background: `
              radial-gradient(
                circle at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(220, 38, 38, 0.4) 0%, 
                rgba(153, 27, 27, 0.2) 35%, 
                transparent 70%),
              radial-gradient(
                circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, 
                rgba(127, 29, 29, 0.3) 0%, 
                transparent 50%),
              linear-gradient(135deg, rgba(220, 38, 38, 0.1) 0%, transparent 50%, rgba(185, 28, 28, 0.1) 100%)
            `,
          }}
        />

        {/* Animated geometric shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-2 h-2 bg-red-500 rounded-full animate-pulse opacity-60" />
          <div
            className="absolute top-20 sm:top-40 right-16 sm:right-32 w-1 h-1 bg-red-400 rounded-full animate-pulse opacity-40"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-16 sm:bottom-32 left-1/4 w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse opacity-50"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-1 h-1 bg-red-300 rounded-full animate-pulse opacity-30"
            style={{ animationDelay: "0.5s" }}
          />
        </div>

        {/* Flowing lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-1/2 -left-1/2 w-full h-full border border-red-900 rounded-full opacity-20 animate-spin"
            style={{ animationDuration: "60s" }}
          />
          <div
            className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4 border border-red-800 rounded-full opacity-15 animate-spin"
            style={{ animationDuration: "45s", animationDirection: "reverse" }}
          />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(220, 38, 38, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(220, 38, 38, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "25px 25px", // Smaller on mobile
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center w-full max-w-6xl mx-auto">
        {/* Animated intro text */}
        <div className="mb-3 sm:mb-4 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
          <span className="text-red-400 text-xs sm:text-sm uppercase tracking-widest font-medium px-2">
            Chief Innovation Officer & SaaS Founder
          </span>
        </div>

        {/* Main heading with dramatic effect */}
        <h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 sm:mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_0.4s_forwards] leading-none"
          style={{ fontFamily: "Rajdhani, sans-serif" }}
        >
          <span className="block text-white">CHRISTOPHER</span>
          <span className="block text-red-500 transform -translate-y-2 sm:-translate-y-4">
            PEACOCK
          </span>
        </h1>

        {/* Tagline*/}
        <div className="mb-8 sm:mb-12 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards] px-2">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Self-taught developer turned entrepreneur —{" "}
            <span className="text-red-400 font-semibold">
              from zero to SaaS founder in 9 months
            </span>
          </p>
          <p className="text-base sm:text-lg text-gray-400 mt-3 sm:mt-4 max-w-3xl mx-auto">
            Building technology solutions that streamline real-world industries
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-16 opacity-0 animate-[fadeInUp_0.8s_ease-out_1s_forwards] px-2">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-400">
              9
            </div>
            <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">
              Months to SaaS
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-400">
              Top 6%
            </div>
            <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">
              TryHackMe
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-400">
              2024
            </div>
            <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">
              Started Coding
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-400">
              CIO
            </div>
            <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">
              Opti Compliance
            </div>
          </div>
        </div>

        {/* CTA Buttons - mobile-friendly stacking */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center opacity-0 animate-[fadeInUp_0.8s_ease-out_1.2s_forwards] px-2">
          <button className="group relative px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-base sm:text-lg rounded-none uppercase tracking-wider transition-all duration-300 hover:scale-105 overflow-hidden w-full sm:w-auto">
            <span className="relative z-10 flex items-center justify-center gap-3">
              View My Work
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>

          <button className="group px-6 sm:px-10 py-4 sm:py-5 border-2 border-red-600 text-red-400 font-bold text-base sm:text-lg rounded-none uppercase tracking-wider transition-all duration-300 hover:bg-red-600 hover:text-white hover:scale-105 w-full sm:w-auto">
            <span className="flex items-center justify-center gap-3">
              Get In Touch
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-45 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center text-red-400 animate-bounce">
          <span className="text-xs uppercase tracking-widest mb-2 opacity-60">
            Scroll
          </span>
          <div className="w-0.5 h-6 sm:h-8 bg-gradient-to-b from-red-600 to-transparent" />
        </div>
      </div>

      {/* Side decorations - hidden on mobile for cleaner look */}
      <div className="hidden md:block absolute left-8 top-1/2 transform -translate-y-1/2 opacity-0 animate-[fadeIn_1s_ease-out_1.5s_forwards]">
        <div className="flex flex-col gap-4">
          <div className="w-12 h-0.5 bg-red-600" />
          <div className="w-8 h-0.5 bg-red-500" />
          <div className="w-4 h-0.5 bg-red-400" />
        </div>
      </div>

      <div className="hidden md:block absolute right-8 top-1/2 transform -translate-y-1/2 opacity-0 animate-[fadeIn_1s_ease-out_1.5s_forwards]">
        <div className="flex flex-col gap-4">
          <div className="w-4 h-0.5 bg-red-400" />
          <div className="w-8 h-0.5 bg-red-500" />
          <div className="w-12 h-0.5 bg-red-600" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
