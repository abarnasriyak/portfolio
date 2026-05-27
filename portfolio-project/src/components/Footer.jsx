import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com", color: "hover:text-cyber-accent hover:border-cyber-accent/40" },
    { icon: Linkedin, href: "https://linkedin.com", color: "hover:text-cyber-purple hover:border-cyber-purple/40" },
    { icon: Twitter, href: "https://twitter.com", color: "hover:text-cyber-accent hover:border-cyber-accent/40" },
    { icon: Mail, href: "mailto:abarnasriyak@gmail.com", color: "hover:text-cyber-coral hover:border-cyber-coral/40" },
  ];

  return (
    <footer className="relative z-10 w-full glass-panel border-t border-cyber-darkBorder/40 dark:bg-cyber-dark/40 py-12 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
      {/* Decorative blurred background shapes */}
      <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-cyber-accent/5 filter blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-cyber-purple/5 filter blur-3xl pointer-events-none" />

      {/* Info Section */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2 select-none">
        <div className="font-grotesk text-lg font-bold tracking-wider text-slate-800 dark:text-slate-200">
          <span className="bg-gradient-to-r from-cyber-accent via-cyber-purple to-cyber-coral bg-clip-text text-transparent">
            ABARNA SRIYAK
          </span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
          3rd Year Data Science Student & Full Stack Developer
        </p>
        <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
          &copy; {new Date().getFullYear()} Abarna. All rights reserved.
        </p>
      </div>

      {/* Social Icons & Back to Top */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          {socialLinks.map(({ icon: Icon, href, color }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800/40 transition-all duration-300 hover:-translate-y-1 ${color}`}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyber-accent/10 to-cyber-purple/10 border border-cyber-accent/20 flex items-center justify-center text-cyber-accent hover:text-cyber-coral dark:hover:text-cyber-coral hover:border-cyber-coral/30 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} className="animate-bounce" />
        </button>
      </div>
    </footer>
  );
}
