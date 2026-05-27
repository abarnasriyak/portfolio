import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, Menu, X, ArrowRight, Zap } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Education", id: "education" },
  { label: "Projects", id: "projects" },
  { label: "Interests", id: "interests" },
  { label: "Experience", id: "experience" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const { dark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll height to add darker glass shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -60% 0px", // triggers when section takes up main viewport area
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe sections
    const sections = ["hero", ...NAV_ITEMS.map((item) => item.id)];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // navbar offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 h-20 z-50 transition-all duration-300 px-6 md:px-12 flex items-center justify-between ${
          scrolled
            ? "glass-panel bg-cyber-glassBgDark/80 dark:bg-cyber-glassBgDark/85 border-b border-cyber-darkBorder/40 shadow-xl"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        {/* Logo */}
        <div
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-1.5 cursor-pointer font-outfit text-2xl font-extrabold tracking-tight select-none"
        >
          <span className="bg-gradient-to-r from-cyber-accent via-cyber-purple to-cyber-coral bg-clip-text text-transparent">
            Abarna
          </span>
          <span className="text-slate-800 dark:text-slate-200">.dev</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`font-outfit text-sm font-semibold transition-all duration-200 relative py-1 ${
                activeSection === item.id
                  ? "text-cyber-accent text-glow-cyber"
                  : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyber-accent rounded shadow-[0_0_8px_#22d3ee]" />
              )}
            </button>
          ))}
        </div>

        {/* Actions (Toggle Theme & Hire Me button) */}
        <div className="flex items-center gap-4">
          {/* Light/Dark Toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-cyber-accent dark:hover:text-cyber-accent transition-colors shadow-inner"
            aria-label="Toggle Theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Hire Me CTA */}
          <button
            onClick={() => scrollTo("contact")}
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full font-outfit font-bold text-xs tracking-wider uppercase bg-gradient-to-r from-cyber-accent to-cyber-purple text-cyber-dark shadow-lg neon-glow-cyan hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Hire Me <ArrowRight size={13} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-700 dark:text-slate-300"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Navigation */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-cyber-dark/95 backdrop-blur-2xl lg:hidden flex flex-col items-center justify-center gap-8">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 w-12 h-12 rounded-xl bg-slate-800/40 border border-slate-700/50 flex items-center justify-center text-slate-200"
          >
            <X size={24} />
          </button>
          
          <div className="flex items-center gap-2 mb-4 font-outfit text-3xl font-extrabold">
            <Zap size={24} className="text-cyber-accent" />
            <span className="bg-gradient-to-r from-cyber-accent via-cyber-purple to-cyber-coral bg-clip-text text-transparent">
              ABARNA
            </span>
          </div>

          <div className="flex flex-col items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`font-outfit text-2xl font-bold tracking-wide uppercase transition-colors ${
                  activeSection === item.id
                    ? "text-cyber-accent"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTo("contact")}
            className="mt-6 px-8 py-3 rounded-full font-outfit font-bold text-sm tracking-wider uppercase bg-gradient-to-r from-cyber-accent to-cyber-purple text-cyber-dark shadow-xl"
          >
            Hire Me
          </button>
        </div>
      )}
    </>
  );
}
