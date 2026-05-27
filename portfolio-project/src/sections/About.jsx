import { motion } from "framer-motion";
import { BookOpen, Map, Coffee, Award } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Award, number: "3+", label: "Years Coding", color: "text-cyber-accent bg-cyber-accent/10 border-cyber-accent/20" },
    { icon: BookOpen, number: "25+", label: "Articles & Poems", color: "text-cyber-purple bg-cyber-purple/10 border-cyber-purple/20" },
    { icon: Map, number: "15+", label: "Cities Explored", color: "text-cyber-coral bg-cyber-coral/10 border-cyber-coral/20" },
    { icon: Coffee, number: "50+", label: "Cafes Audited", color: "text-cyber-accent bg-cyber-accent/10 border-cyber-accent/20" }
  ];

  const tags = [
    "Full Stack Development",
    "Data Science",
    "Machine Learning",
    "React Ecosystems",
    "Python scripting",
    "Technical Writing",
    "UI/UX Craftsmanship",
    "Database Systems"
  ];

  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 lg:px-24 bg-cyber-light dark:bg-cyber-darkSurface border-y border-slate-200 dark:border-slate-800/40 relative z-10 overflow-hidden"
    >
      {/* Visual background details */}
      <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] rounded-full bg-cyber-purple/5 filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Bio Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 text-left"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[2px] bg-cyber-accent rounded" />
            <span className="font-outfit text-xs md:text-sm font-bold tracking-widest text-cyber-accent uppercase">
              About Me
            </span>
          </div>

          <h2 className="font-playfair font-black text-3xl md:text-5xl text-slate-800 dark:text-slate-100 mb-6 leading-tight">
            Bridging the gap between <br />
            <span className="bg-gradient-to-r from-cyber-accent via-cyber-purple to-cyber-coral bg-clip-text text-transparent italic font-playfair font-black">
              Data Insights
            </span>{" "}
            & visual experiences.
          </h2>

          <div className="font-poppins space-y-4 text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed">
            <p>
              I am a 3rd-year <strong>Data Science student at American College</strong>, Chatrapatti. My academic journey focuses on training machine learning algorithms, uncovering statistics, and building data pipelines. But my curiosity drove me further, turning me into a passionate <strong>Full Stack Developer</strong>.
            </p>
            <p>
              Outside of technical domains, I draw immense inspiration from my personal hobbies:
            </p>
            
            {/* Hobbies list */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
              <div className="p-4 rounded-2xl bg-slate-100/50 dark:bg-slate-950/40 border border-slate-200/50 dark:border-slate-800/40">
                <h4 className="font-sora font-semibold text-slate-800 dark:text-slate-200 text-sm mb-1 text-cyber-accent">📝 Writing</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">Helps me structure my thoughts, document technical concepts, and appreciate syntax clarity.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-100/50 dark:bg-slate-950/40 border border-slate-200/50 dark:border-slate-800/40">
                <h4 className="font-sora font-semibold text-slate-800 dark:text-slate-200 text-sm mb-1 text-cyber-purple">✈️ Travelling</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">Exposes me to different cultures, expanding my perspective and capacity for empathetic UI/UX.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-100/50 dark:bg-slate-950/40 border border-slate-200/50 dark:border-slate-800/40">
                <h4 className="font-sora font-semibold text-slate-800 dark:text-slate-200 text-sm mb-1 text-cyber-coral">🍕 Eating</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">Exploring culinary recipes mimics full-stack engineering: balancing flavor, order, and styling.</p>
              </div>
            </div>

            <p>
              I thrive on taking complex user problems and structural data and refining them into clean, robust, and interactive applications that run efficiently.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 mt-8">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-outfit text-xs font-bold px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800/50 bg-slate-100/50 dark:bg-slate-900/30 text-slate-600 dark:text-slate-400 select-none hover:border-cyber-accent/30 hover:text-cyber-accent transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 grid grid-cols-2 gap-4"
        >
          {stats.map(({ icon: Icon, number, label, color }, i) => (
            <div
              key={i}
              className="glass-panel border border-slate-200 dark:border-slate-800/40 rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-lg hover:border-cyber-accent/20 transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-4 ${color}`}>
                <Icon size={20} />
              </div>
              <div className="font-sora text-3xl font-extrabold text-slate-800 dark:text-slate-100">
                {number}
              </div>
              <div className="font-outfit text-xs font-bold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">
                {label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
