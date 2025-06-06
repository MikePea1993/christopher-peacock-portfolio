import React, { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("about-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

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

  const techStack = [
    {
      name: "Vue.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      color: "#4FC08D",
    },
    {
      name: "Laravel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
      color: "#FF2D20",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "#F7DF1E",
    },
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      color: "#777BB4",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "#3776AB",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "#4479A1",
    },
    {
      name: "Tailwind",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      color: "#06B6D4",
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      color: "#FF9900",
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "#E34F26",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "#1572B6",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "#F05032",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      color: "#007ACC",
    },
  ];

  return (
    <section
      id="about-section"
      className="lg:min-h-screen bg-black relative overflow-hidden lg:flex lg:items-center py-8 md:py-12 isolate"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-20 transition-all duration-1000 ease-out"
          style={{
            background: `
              radial-gradient(
                circle at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(220, 38, 38, 0.15) 0%, 
                rgba(127, 29, 29, 0.1) 50%, 
                transparent 70%
              )
            `,
          }}
        />

        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(220, 38, 38, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(220, 38, 38, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="absolute inset-0 hidden md:block">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent animate-pulse" />
          <div
            className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-red-500/30 to-transparent animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-red-600/20 to-transparent animate-pulse"
            style={{ animationDelay: "3s" }}
          />
        </div>

        <div
          className="absolute top-10 left-10 md:top-20 md:left-20 w-16 h-16 md:w-32 md:h-32 border border-red-900/20 rounded-full animate-spin"
          style={{ animationDuration: "30s" }}
        />
        <div
          className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-24 h-24 md:w-48 md:h-48 border border-red-800/10 rounded-full animate-spin"
          style={{ animationDuration: "45s", animationDirection: "reverse" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full">
        {/* Section Header */}
        <div
          className={`text-center mb-6 md:mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-red-400 text-xs md:text-sm uppercase tracking-[0.2em] font-medium mb-2 md:mb-3 block">
            Get To Know Me
          </span>
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-3 md:mb-6"
            style={{ fontFamily: "Rajdhani, sans-serif" }}
          >
            ABOUT
          </h2>
          <div className="flex justify-center items-center gap-2 md:gap-4">
            <div className="w-8 md:w-16 h-0.5 bg-red-500" />
            <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rotate-45" />
            <div className="w-8 md:w-16 h-0.5 bg-red-500" />
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-16 items-center">
          {/* Personal Info */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="mb-6 md:mb-12">
              <h2
                className="text-3xl md:text-7xl lg:text-8xl font-black text-white mb-3 md:mb-6 leading-none"
                style={{ fontFamily: "Rajdhani, sans-serif" }}
              >
                <span className="block">ABOUT</span>
                <span className="block text-red-500 transform -translate-y-1 md:-translate-y-4">
                  ME
                </span>
              </h2>
              <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-8">
                <div className="w-12 md:w-20 h-0.5 md:h-1 bg-red-500" />
                <div className="w-2 h-2 md:w-4 md:h-4 bg-red-500 rotate-45" />
              </div>
            </div>

            <div className="space-y-3 md:space-y-6 text-sm md:text-xl lg:text-xl text-gray-300 leading-relaxed mb-6 md:mb-12">
              <p className="text-base md:text-2xl">
                I'm{" "}
                <span className="text-red-400 font-bold">
                  Christopher Peacock
                </span>
                , a self-taught developer turned entrepreneur who went from{" "}
                <span className="text-white font-semibold">
                  zero to SaaS founder in just 9 months
                </span>
                .
              </p>
              <p className="text-sm md:text-lg">
                Starting my coding journey in{" "}
                <span className="text-red-400 font-bold">January 2024</span>, I
                founded Opti Compliance by October - a SaaS platform
                revolutionizing the fire risk assessment industry across the UK.
              </p>
              <p className="text-sm md:text-lg">
                I secured a position in the prestigious{" "}
                <span className="text-red-400 font-bold">Alacrity Program</span>{" "}
                against university graduates and earned Microsoft Security
                certification while ranking in the{" "}
                <span className="text-red-400 font-bold">
                  top 6% on TryHackMe
                </span>
                .
              </p>
              <div className="flex items-center gap-2 md:gap-4 pt-2 md:pt-4">
                <div className="w-8 md:w-12 h-0.5 md:h-1 bg-gradient-to-r from-red-500 to-red-600" />
                <span className="text-red-400 text-xs md:text-sm uppercase tracking-widest font-semibold">
                  Self-Taught Excellence
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 md:gap-8 mb-6 md:mb-8">
              {[
                { number: "9", label: "Months to SaaS" },
                { number: "Top 6%", label: "TryHackMe" },
                { number: "MS", label: "Certified" },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div
                    className="text-lg md:text-4xl font-black text-red-400 mb-1 md:mb-2 group-hover:scale-110 transition-transform"
                    style={{ fontFamily: "Rajdhani, sans-serif" }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-6 mb-6 md:mb-8">
              <div className="flex items-center gap-2 text-gray-400 text-sm md:text-base">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-red-400" />
                <span>United Kingdom</span>
              </div>
              <div className="flex gap-3 md:gap-4">
                <Github className="w-5 h-5 md:w-6 md:h-6 text-gray-400 hover:text-red-400 transition-colors cursor-pointer" />
                <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-gray-400 hover:text-red-400 transition-colors cursor-pointer" />
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-gray-400 hover:text-red-400 transition-colors cursor-pointer" />
              </div>
            </div>

            <button className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-4 md:px-10 py-3 md:py-5 font-bold uppercase tracking-wider hover:scale-105 transition-all duration-300 flex items-center gap-2 md:gap-4 text-sm md:text-base w-full sm:w-auto justify-center">
              <span>Let's Work Together</span>
              <ArrowRight className="w-4 h-4 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* Tech Stack */}
          <div
            className={`transition-all duration-1000 delay-500 mt-6 lg:mt-0 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="mb-6 md:mb-12 text-center lg:text-left">
              <h3
                className="text-xl md:text-4xl font-black text-white mb-2 md:mb-4"
                style={{ fontFamily: "Rajdhani, sans-serif" }}
              >
                TECH ARSENAL
              </h3>
              <p className="text-gray-400 text-sm md:text-lg">
                The tools I use
              </p>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-6">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className={`group relative bg-gray-900/40 backdrop-blur-sm p-3 md:p-5 rounded-xl border border-gray-700/50 hover:border-red-500/70 transition-all duration-500 hover:scale-110 hover:-translate-y-2`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl"
                    style={{ backgroundColor: tech.color }}
                  />

                  <div className="relative z-10 text-center">
                    <div className="mb-2 md:mb-3 transform group-hover:scale-125 transition-transform duration-300">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-6 md:w-10 h-6 md:h-10 mx-auto"
                        style={{ filter: "brightness(0.9) contrast(1.1)" }}
                      />
                    </div>
                    <div className="text-xs text-gray-400 group-hover:text-white transition-colors font-medium tracking-wider">
                      {tech.name}
                    </div>

                    <div
                      className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:animate-pulse"
                      style={{ borderColor: `${tech.color}30` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 md:mt-16 flex justify-center">
              <div className="relative flex items-center gap-3 md:gap-4 bg-gray-900/30 backdrop-blur-sm px-4 md:px-8 py-3 md:py-4 rounded-full border border-gray-700/50">
                <div className="w-6 md:w-8 h-0.5 bg-gradient-to-r from-transparent to-red-500" />
                <div className="text-red-400 text-xs md:text-sm uppercase tracking-widest font-semibold">
                  Self-Taught
                </div>
                <div className="w-6 md:w-8 h-0.5 bg-gradient-to-l from-transparent to-red-500" />
                <div className="absolute inset-0 bg-red-500/5 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 w-8 h-8 md:w-16 md:h-16 border-l-2 border-t-2 border-red-500/30 z-10" />
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-8 h-8 md:w-16 md:h-16 border-r-2 border-b-2 border-red-500/30 z-10" />
    </section>
  );
};

export default About;
