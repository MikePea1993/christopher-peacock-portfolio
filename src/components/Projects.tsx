import React, { useEffect, useState } from "react";
import {
  Github,
  ExternalLink,
  Code,
  Zap,
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // set minimum swipe distance
  const minSwipeDistance = 50; // px

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById("projects-section");
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

    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024); // Changed from 768 to 1024 to include tablets
    };

    checkIsMobile();

    // event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  // Touch handlers for swipe functionality on mobile
  const onTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return;
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isMobile) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!isMobile || !touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Tech icon mapping
  const techIcons: { [key: string]: string } = {
    "Vue.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    Laravel:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    Tailwind:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    MySQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    JavaScript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    Python:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  };

  const projects = [
    {
      id: 1,
      title: "Opti Compliance",
      subtitle: "SaaS Platform for Fire Risk Assessment",
      description:
        "Revolutionary SaaS platform serving fire consultancies across the UK. Features no-code PDF document generator for non-technical users and AI-powered compliance regulation monitoring. Built from concept to production in months.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      tech: ["Vue.js", "Laravel", "Tailwind", "PHP", "MySQL", "AWS"],
      github: "#",
      live: "#",
      stats: { clients: "UK Wide", launch: "Oct 2024", role: "CIO & Founder" },
      featured: true,
    },
    {
      id: 2,
      title: "Wales & West Utilities Calculator",
      subtitle: "Smart Productivity Tool for Gas Network",
      description:
        "Performance calculator for gas network operations, calculating team efficiency metrics for 40-hour work weeks. Real-world application still in active use by Wales & West Utilities team.",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "#",
      live: "#",
      stats: {
        status: "Active Use",
        impact: "Team Efficiency",
        type: "Enterprise",
      },
      featured: true,
    },
    {
      id: 3,
      title: "Alacrity Program Project",
      subtitle: "Entrepreneurship Excellence",
      description:
        "Selected for prestigious Alacrity Foundation program over university graduates. 6-week intensive bootcamp focusing on real-world project development and entrepreneurship skills.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      tech: ["Vue.js", "Laravel", "Python", "AWS"],
      github: "#",
      live: "#",
      stats: {
        program: "Alacrity",
        achievement: "Graduate",
        selection: "vs Uni Grads",
      },
      featured: true,
    },
    {
      id: 4,
      title: "Cybersecurity Dashboard",
      subtitle: "Security Monitoring & Analytics",
      description:
        "Advanced security monitoring dashboard built during my cybersecurity certification journey. Features real-time threat detection and compliance tracking, showcasing my top 6% TryHackMe ranking.",
      image:
        "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=600&fit=crop",
      tech: ["Python", "JavaScript", "MySQL", "AWS"],
      github: "#",
      live: "#",
      stats: { cert: "MS SC-900", rank: "Top 6%", platform: "TryHackMe" },
      featured: false,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section
      id="projects-section"
      className="lg:h-screen bg-black relative overflow-hidden lg:flex lg:items-center py-8 md:py-4 isolate"
    >
      {/* Background Layer - Fixed z-index */}
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

        {/* Animated tech pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-pulse opacity-30" />
          <div
            className="absolute top-3/4 right-1/4 w-1 h-1 bg-red-400 rounded-full animate-pulse opacity-20"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse opacity-25"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Flowing lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-1/2 -left-1/2 w-full h-full border border-red-900/10 rounded-full animate-spin"
            style={{ animationDuration: "50s" }}
          />
          <div
            className="absolute -bottom-1/2 -right-1/2 w-3/4 h-3/4 border border-red-800/8 rounded-full animate-spin"
            style={{ animationDuration: "35s", animationDirection: "reverse" }}
          />
        </div>
      </div>

      {/* Content Layer */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full lg:h-full lg:flex lg:flex-col lg:justify-center">
        {/* Section Header */}
        <div
          className={`text-center mb-6 md:mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-red-400 text-sm uppercase tracking-[0.2em] font-medium mb-2 md:mb-4 block">
            Featured Work
          </span>
          <h2
            className="text-3xl md:text-6xl lg:text-7xl font-black text-white mb-3 md:mb-6 leading-none"
            style={{ fontFamily: "Rajdhani, sans-serif" }}
          >
            <span className="block">MY</span>
            <span className="block text-red-500 transform -translate-y-1 md:-translate-y-4">
              PROJECTS
            </span>
          </h2>
          <div className="flex justify-center items-center gap-4 mb-3 md:mb-6">
            <div className="w-12 md:w-16 h-1 bg-red-500" />
            <Star className="w-4 md:w-5 h-4 md:h-5 text-red-500" />
            <div className="w-12 md:w-16 h-1 bg-red-500" />
          </div>
          <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto px-4">
            From zero to SaaS founder in 9 months - here's my journey in code
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative lg:flex-1 lg:flex lg:flex-col lg:items-center">
          {/* Main Carousel Content */}
          <div className="relative w-full">
            {/* Navigation Buttons - Hidden on Mobile */}
            {!isMobile && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-gray-900/80 backdrop-blur-sm p-3 rounded-full border border-gray-600 hover:border-red-500 hover:bg-red-500/20 transition-all duration-300 -translate-x-4"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gray-900/80 backdrop-blur-sm p-3 rounded-full border border-gray-600 hover:border-red-500 hover:bg-red-500/20 transition-all duration-300 translate-x-4"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}

            {/* Carousel Track */}
            <div className="overflow-hidden w-full">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    className="w-full flex-shrink-0 px-2 md:px-4"
                  >
                    <div className="grid lg:grid-cols-2 gap-4 md:gap-12 items-center max-w-6xl mx-auto">
                      {/* Project Image */}
                      <div
                        className={`relative group ${
                          index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                        } order-1`}
                      >
                        <div className="relative overflow-hidden rounded-xl md:rounded-2xl">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-40 md:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                          {/* Overlay Actions */}
                          <div className="absolute inset-0 flex items-center justify-center gap-4 md:gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a
                              href={project.github}
                              className="bg-gray-900/80 backdrop-blur-sm p-2 md:p-4 rounded-full border border-gray-600 hover:border-red-500 hover:bg-red-500/20 transition-all duration-300"
                            >
                              <Github className="w-4 md:w-6 h-4 md:h-6 text-white" />
                            </a>
                            <a
                              href={project.live}
                              className="bg-red-600/80 backdrop-blur-sm p-2 md:p-4 rounded-full border border-red-500 hover:bg-red-500 transition-all duration-300"
                            >
                              <ExternalLink className="w-4 md:w-6 h-4 md:h-6 text-white" />
                            </a>
                          </div>

                          {/* Project Number */}
                          <div className="absolute top-3 md:top-6 right-3 md:right-6 w-8 md:w-12 h-8 md:h-12 bg-red-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-xs md:text-lg">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>

                          {/* Timeline Badge */}
                          {project.id === 1 && (
                            <div className="absolute top-3 md:top-6 left-3 md:left-6 bg-red-500/90 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full">
                              <span className="text-white text-xs font-bold uppercase tracking-wider">
                                Founded 2024
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Project Content */}
                      <div
                        className={`${
                          index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                        } order-2`}
                      >
                        <div className="mb-2 md:mb-4">
                          <span className="text-red-400 text-xs md:text-sm uppercase tracking-wider font-semibold">
                            {project.subtitle}
                          </span>
                        </div>

                        <h3
                          className="text-xl md:text-4xl lg:text-5xl font-black text-white mb-3 md:mb-6 leading-tight"
                          style={{ fontFamily: "Rajdhani, sans-serif" }}
                        >
                          {project.title}
                        </h3>

                        <p className="text-gray-300 text-sm md:text-lg leading-relaxed mb-4 md:mb-8">
                          {project.description}
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-2 md:gap-6 mb-4 md:mb-8">
                          {Object.entries(project.stats).map(
                            ([key, value], statIndex) => (
                              <div
                                key={statIndex}
                                className="text-center bg-gray-900/30 backdrop-blur-sm p-2 md:p-4 rounded-lg border border-gray-700/50"
                              >
                                <div
                                  className="text-red-400 font-bold text-xs md:text-lg mb-1"
                                  style={{ fontFamily: "Rajdhani, sans-serif" }}
                                >
                                  {value}
                                </div>
                                <div className="text-gray-400 text-xs uppercase tracking-wider">
                                  {key}
                                </div>
                              </div>
                            )
                          )}
                        </div>

                        {/* Tech Stack with Icons */}
                        <div className="mb-4 md:mb-8">
                          <h4 className="text-red-400 font-semibold mb-2 md:mb-4 uppercase tracking-wider text-xs md:text-sm">
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2 md:gap-4">
                            {project.tech.map((tech, techIndex) => (
                              <div
                                key={techIndex}
                                className="group bg-gray-900/40 backdrop-blur-sm p-1.5 md:p-3 rounded-lg border border-gray-700/50 hover:border-red-500/70 transition-all duration-300 hover:scale-110"
                              >
                                <img
                                  src={techIcons[tech]}
                                  alt={tech}
                                  className="w-5 md:w-8 h-5 md:h-8 mx-auto mb-1 md:mb-2 group-hover:scale-125 transition-transform duration-300"
                                />
                                <div className="text-xs text-gray-400 group-hover:text-white transition-colors text-center font-medium">
                                  {tech}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                          <a
                            href={project.github}
                            className="flex items-center justify-center gap-3 bg-gray-800/50 hover:bg-gray-700 text-gray-300 hover:text-white px-4 md:px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 border border-gray-600 hover:border-red-500"
                          >
                            <Code className="w-4 md:w-5 h-4 md:h-5" />
                            <span>View Details</span>
                          </a>
                          <a
                            href={project.live}
                            className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-500 text-white px-4 md:px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 group/btn"
                          >
                            <Zap className="w-4 md:w-5 h-4 md:h-5" />
                            <span>Learn More</span>
                            <ArrowRight className="w-4 md:w-5 h-4 md:h-5 group-hover/btn:translate-x-1 transition-transform" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Carousel Indicators - Fixed positioning */}
          <div className="flex justify-center gap-2 md:gap-3 mt-4 md:mt-8 relative z-20">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-red-500 w-6 md:w-8"
                    : "bg-gray-600 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-4 md:top-8 left-4 md:left-8 w-12 md:w-16 h-12 md:h-16 border-l-2 border-t-2 border-red-500/30 z-10" />
      <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 w-12 md:w-16 h-12 md:h-16 border-r-2 border-b-2 border-red-500/30 z-10" />
    </section>
  );
};

export default Projects;
