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
      className="h-screen bg-black relative overflow-hidden flex items-center"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Hero-style animated gradient */}
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

        {/* Geometric grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(220, 38, 38, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(220, 38, 38, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Animated accent lines */}
        <div className="absolute inset-0">
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

        {/* Corner accent circles */}
        <div
          className="absolute top-20 left-20 w-32 h-32 border border-red-900/20 rounded-full animate-spin"
          style={{ animationDuration: "30s" }}
        />
        <div
          className="absolute bottom-20 right-20 w-48 h-48 border border-red-800/10 rounded-full animate-spin"
          style={{ animationDuration: "45s", animationDirection: "reverse" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-red-400 text-sm uppercase tracking-[0.2em] font-medium mb-3 block">
            Get To Know Me
          </span>
          <h2
            className="text-5xl md:text-6xl font-black text-white mb-6"
            style={{ fontFamily: "Rajdhani, sans-serif" }}
          >
            ABOUT
          </h2>
          <div className="flex justify-center items-center gap-4">
            <div className="w-16 h-0.5 bg-red-500" />
            <div className="w-3 h-3 bg-red-500 rotate-45" />
            <div className="w-16 h-0.5 bg-red-500" />
          </div>
        </div>

        {/* Main Split Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center h-full">
          {/* Left Side - Bold Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Main Title */}
            <div className="mb-12">
              <h2
                className="text-7xl md:text-8xl font-black text-white mb-6 leading-none"
                style={{ fontFamily: "Rajdhani, sans-serif" }}
              >
                <span className="block">ABOUT</span>
                <span className="block text-red-500 transform -translate-y-4">
                  ME
                </span>
              </h2>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-20 h-1 bg-red-500" />
                <div className="w-4 h-4 bg-red-500 rotate-45" />
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-8 text-xl text-gray-300 leading-relaxed mb-16">
              <p className="text-2xl">
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
              <p className="text-lg">
                Starting my coding journey in{" "}
                <span className="text-red-400 font-bold">January 2024</span>, I
                founded Opti Compliance by October - a SaaS platform
                revolutionizing the fire risk assessment industry across the UK.
              </p>
              <p className="text-lg">
                I secured a position in the prestigious{" "}
                <span className="text-red-400 font-bold">Alacrity Program</span>{" "}
                against university graduates and earned Microsoft Security
                certification while ranking in the{" "}
                <span className="text-red-400 font-bold">
                  top 6% on TryHackMe
                </span>
                .
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-red-600" />
                <span className="text-red-400 text-sm uppercase tracking-widest font-semibold">
                  Self-Taught Excellence
                </span>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-8 mb-12">
              {[
                { number: "9", label: "Months to SaaS" },
                { number: "Top 6%", label: "TryHackMe" },
                { number: "MS", label: "Certified" },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div
                    className="text-4xl font-black text-red-400 mb-2 group-hover:scale-110 transition-transform"
                    style={{ fontFamily: "Rajdhani, sans-serif" }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="flex items-center gap-6 mb-12">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-5 h-5 text-red-400" />
                <span>United Kingdom</span>
              </div>
              <div className="flex gap-4">
                <Github className="w-6 h-6 text-gray-400 hover:text-red-400 transition-colors cursor-pointer" />
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-red-400 transition-colors cursor-pointer" />
                <Mail className="w-6 h-6 text-gray-400 hover:text-red-400 transition-colors cursor-pointer" />
              </div>
            </div>

            {/* CTA */}
            <button className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-5 font-bold uppercase tracking-wider hover:scale-105 transition-all duration-300 flex items-center gap-4">
              <span>Let's Work Together</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* Right Side - Tech Stack Showcase */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {/* Tech Stack Header */}
            <div className="mb-12">
              <h3
                className="text-4xl font-black text-white mb-4"
                style={{ fontFamily: "Rajdhani, sans-serif" }}
              >
                TECH ARSENAL
              </h3>
              <p className="text-gray-400 text-lg">
                The tools I mastered in record time
              </p>
            </div>

            {/* Animated Tech Grid */}
            <div className="grid grid-cols-4 gap-6">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className={`group relative bg-gray-900/40 backdrop-blur-sm p-5 rounded-xl border border-gray-700/50 hover:border-red-500/70 transition-all duration-500 hover:scale-110 hover:-translate-y-2 delay-${
                    index * 50
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {/* Single outer glow effect */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl"
                    style={{ backgroundColor: tech.color }}
                  />

                  <div className="relative z-10 text-center">
                    <div className="mb-3 transform group-hover:scale-125 transition-transform duration-300">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-10 h-10 mx-auto"
                        style={{ filter: "brightness(0.9) contrast(1.1)" }}
                      />
                    </div>
                    <div className="text-xs text-gray-400 group-hover:text-white transition-colors font-medium tracking-wider">
                      {tech.name}
                    </div>

                    {/* Clean animated border */}
                    <div
                      className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:animate-pulse"
                      style={{ borderColor: `${tech.color}30` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced bottom accent */}
            <div className="mt-16 flex justify-center">
              <div className="relative flex items-center gap-4 bg-gray-900/30 backdrop-blur-sm px-8 py-4 rounded-full border border-gray-700/50">
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-red-500" />
                <div className="text-red-400 text-sm uppercase tracking-widest font-semibold">
                  Self-Taught Master
                </div>
                <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-red-500" />
                <div className="absolute inset-0 bg-red-500/5 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-red-500/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-red-500/30" />
    </section>
  );
};

export default About;
