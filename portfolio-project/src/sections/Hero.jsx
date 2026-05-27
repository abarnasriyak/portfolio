import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Twitter, Code2, Database, Compass, Edit3, Heart, ChevronDown } from "lucide-react";
import abarnaImg from "../assets/abarna.png";

const TYPED_TITLES = [
  "Full Stack Developer",
  "Data Science Student",
  "Creative Coder",
  "UI/UX Designer"
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentWord = TYPED_TITLES[titleIndex];
    const typingSpeed = isDeleting ? 40 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setCharIndex((prev) => prev + 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        // Wait before deleting
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex((prev) => prev - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % TYPED_TITLES.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex]);

  const socialLinks = [
    { icon: Github, href: "https://github.com" },
    { icon: Linkedin, href: "https://linkedin.com" },
    { icon: Twitter, href: "https://twitter.com" },
    { icon: Mail, href: "mailto:abarnasriyak@gmail.com" }
  ];

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative w-full flex items-center justify-center pt-24 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden bg-cyber-light dark:bg-cyber-dark bg-cyber-grid select-none"
    >
      {/* Ambient background glows */}
      <div className="absolute top-[20%] left-[10%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-cyber-accent/5 dark:bg-cyber-accent/10 filter blur-[80px] md:blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-[10%] right-[5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-cyber-purple/5 dark:bg-cyber-purple/8 filter blur-[80px] md:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Info Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Status Chip */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyber-accent/30 bg-cyber-accent/10 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyber-accent animate-ping" />
            <span className="font-outfit text-[10px] md:text-xs font-bold tracking-widest text-cyber-accent uppercase">
              Ready for Work & Collaborations
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-playfair font-black text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-slate-800 dark:text-slate-100 tracking-tight">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-cyber-accent via-cyber-purple to-cyber-coral bg-clip-text text-transparent text-glow-cyber font-playfair font-black italic">
              Abarna
            </span>
          </h1>

          {/* Typewriter Carousel */}
          <div className="h-12 md:h-16 flex items-center mt-3 mb-6">
            <span className="font-sora text-xl md:text-3xl lg:text-4xl font-semibold text-slate-600 dark:text-slate-300">
              I am a{" "}
              <span className="text-cyber-coral font-extrabold dark:text-cyber-accent">
                {TYPED_TITLES[titleIndex].substring(0, charIndex)}
              </span>
              <span className="typed-cursor text-cyber-coral dark:text-cyber-accent font-bold">|</span>
            </span>
          </div>

          {/* Description */}
          <p className="font-poppins text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg mb-8 font-medium">
            3rd-year <strong className="text-cyber-purple dark:text-cyber-purple font-semibold">Data Science student</strong> at American College, Chatrapatti. I build responsive, robust web solutions and analyze large datasets. I love writing, traveling, and trying out delicious food!
          </p>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 items-center mb-8">
            <button
              onClick={() => scrollTo("projects")}
              className="flex items-center gap-2 px-6 md:px-8 py-3.5 md:py-4 rounded-full font-outfit font-extrabold text-sm tracking-wider uppercase bg-gradient-to-r from-cyber-accent via-cyber-purple to-cyber-coral text-cyber-dark shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
            >
              Explore Projects <ArrowRight size={16} />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="flex items-center gap-2 px-6 md:px-8 py-3.5 md:py-4 rounded-full font-outfit font-extrabold text-sm tracking-wider uppercase border border-slate-300 dark:border-slate-800 bg-white/5 hover:bg-white/10 dark:hover:bg-slate-800/30 text-slate-800 dark:text-slate-200 transition-all duration-200"
            >
              Get In Touch <Mail size={16} />
            </button>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest font-outfit font-bold mr-2">
              Connect
            </span>
            {socialLinks.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl glass-panel border border-slate-200 dark:border-slate-800/40 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-cyber-accent dark:hover:text-cyber-accent hover:border-cyber-accent/40 hover:-translate-y-1 transition-all duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Graphic Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 flex items-center justify-center relative select-none mt-8 lg:mt-0"
        >
          {/* Floating tech & lifestyle badges representing Abarna's passions */}
          <div className="absolute top-[5%] -left-[10%] p-3 bg-cyber-darkSurface border border-cyber-darkBorder/40 rounded-2xl glass-panel flex items-center gap-2.5 shadow-xl animate-float-slow z-20">
            <div className="w-8 h-8 rounded-lg bg-cyber-accent/15 flex items-center justify-center text-cyber-accent">
              <Code2 size={16} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Stack</span>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">React & MERN</span>
            </div>
          </div>

          <div className="absolute top-[45%] -right-[8%] p-3 bg-cyber-darkSurface border border-cyber-darkBorder/40 rounded-2xl glass-panel flex items-center gap-2.5 shadow-xl animate-float-medium z-20">
            <div className="w-8 h-8 rounded-lg bg-cyber-purple/15 flex items-center justify-center text-cyber-purple">
              <Database size={16} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Major</span>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Data Analytics</span>
            </div>
          </div>

          <div className="absolute bottom-[10%] -left-[8%] p-3 bg-cyber-darkSurface border border-cyber-darkBorder/40 rounded-2xl glass-panel flex items-center gap-2.5 shadow-xl animate-float-fast z-20">
            <div className="w-8 h-8 rounded-lg bg-cyber-coral/15 flex items-center justify-center text-cyber-coral">
              <Compass size={16} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Hobby</span>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Travelling</span>
            </div>
          </div>

          <div className="absolute bottom-[2%] right-[10%] p-2.5 bg-cyber-darkSurface border border-cyber-darkBorder/40 rounded-xl glass-panel flex items-center gap-2 shadow-md animate-float-slow z-20">
            <Edit3 size={13} className="text-cyber-accent" />
            <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">Writer & Foodie</span>
            <Heart size={10} className="text-cyber-coral fill-cyber-coral" />
          </div>

          {/* Conic rotating rings container */}
          <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] flex items-center justify-center rounded-full">
            {/* Outer halo gradient ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyber-accent via-cyber-purple to-cyber-coral p-1.5 animate-spin-slow shadow-2xl" />
            
            {/* Inner counter-rotating halo ring */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-bl from-cyber-accent/40 via-cyber-purple/40 to-cyber-coral/40 p-1 animate-spin-reverse" />
            
            {/* Solid mask circle */}
            <div className="absolute inset-4 rounded-full bg-cyber-dark dark:bg-slate-900 overflow-hidden shadow-inner border border-cyber-darkBorder/30">
              <img
                src={abarnaImg}
                alt="Abarna Portrait"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer text-slate-400 hover:text-cyber-accent transition-colors z-20"
      >
        <span className="font-outfit text-[9px] tracking-[4px] uppercase font-bold text-slate-400">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
}
