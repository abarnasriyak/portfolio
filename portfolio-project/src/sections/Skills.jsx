import { motion } from "framer-motion";
import SkillBar from "../components/SkillBar";
import { Database, Code2, Cpu } from "lucide-react";

const DATA_SCIENCE_SKILLS = [
  { name: "Python Programming", level: 92, color: "from-cyber-accent to-cyber-purple" },
  { name: "Pandas, NumPy & Matplotlib", level: 88, color: "from-cyber-accent to-cyber-purple" },
  { name: "Machine Learning (Scikit-Learn)", level: 80, color: "from-cyber-accent to-cyber-purple" },
  { name: "SQL & Relational Databases", level: 85, color: "from-cyber-accent to-cyber-purple" },
  { name: "Statistical Data Analysis", level: 78, color: "from-cyber-accent to-cyber-purple" }
];

const FRONTEND_SKILLS = [
  { name: "React.js / Next.js", level: 90, color: "from-cyber-purple to-cyber-coral" },
  { name: "Tailwind CSS", level: 94, color: "from-cyber-purple to-cyber-coral" },
  { name: "JavaScript (ES6+)", level: 86, color: "from-cyber-purple to-cyber-coral" },
  { name: "HTML5 & Vanilla CSS", level: 92, color: "from-cyber-purple to-cyber-coral" }
];

const BACKEND_SKILLS = [
  { name: "Node.js & Express.js", level: 85, color: "from-cyber-coral to-cyber-accent" },
  { name: "MongoDB & PostgreSQL", level: 82, color: "from-cyber-coral to-cyber-accent" },
  { name: "RESTful API Integration", level: 88, color: "from-cyber-coral to-cyber-accent" },
  { name: "Git & GitHub Version Control", level: 85, color: "from-cyber-coral to-cyber-accent" }
];

export default function Skills() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-12 lg:px-24 bg-cyber-light dark:bg-cyber-dark relative z-10 select-none overflow-hidden"
    >
      {/* Background ambient light */}
      <div className="absolute top-[10%] left-[20%] w-[450px] h-[450px] rounded-full bg-cyber-accent/5 filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <span className="w-6 h-[2px] bg-cyber-accent rounded" />
            <span className="font-outfit text-xs md:text-sm font-bold tracking-widest text-cyber-accent uppercase">
              Technical Skillset
            </span>
            <span className="w-6 h-[2px] bg-cyber-accent rounded" />
          </div>

          <h2 className="font-playfair font-black text-3xl md:text-5xl text-slate-800 dark:text-slate-100 leading-tight">
            My <span className="bg-gradient-to-r from-cyber-accent via-cyber-purple to-cyber-coral bg-clip-text text-transparent italic font-playfair font-black">Tech Stacks</span>
          </h2>
          <p className="font-poppins text-sm md:text-base text-slate-500 dark:text-slate-400 mt-4 max-w-xl">
            A comprehensive overview of the programming languages, libraries, and frameworks I use to bring algorithms and web designs to life.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          
          {/* Card 1: Data Science */}
          <motion.div
            variants={itemVariants}
            className="glass-panel border border-slate-200 dark:border-slate-800/40 rounded-3xl p-8 shadow-xl hover:border-cyber-accent/20 transition-all duration-300"
          >
            <div className="flex items-center gap-3.5 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-cyber-accent/15 border border-cyber-accent/30 flex items-center justify-center text-cyber-accent shadow-inner">
                <Cpu size={22} />
              </div>
              <div>
                <h3 className="font-sora font-bold text-lg text-slate-800 dark:text-slate-100">
                  Data Science & AI
                </h3>
                <p className="font-outfit text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                  Algorithms & Scripting
                </p>
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              {DATA_SCIENCE_SKILLS.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  colorClass={skill.color}
                />
              ))}
            </div>
          </motion.div>

          {/* Card 2: Frontend */}
          <motion.div
            variants={itemVariants}
            className="glass-panel border border-slate-200 dark:border-slate-800/40 rounded-3xl p-8 shadow-xl hover:border-cyber-purple/20 transition-all duration-300"
          >
            <div className="flex items-center gap-3.5 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-cyber-purple/15 border border-cyber-purple/30 flex items-center justify-center text-cyber-purple shadow-inner">
                <Code2 size={22} />
              </div>
              <div>
                <h3 className="font-sora font-bold text-lg text-slate-800 dark:text-slate-100">
                  Frontend Development
                </h3>
                <p className="font-outfit text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                  Web & UI Design
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {FRONTEND_SKILLS.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  colorClass={skill.color}
                />
              ))}
            </div>
          </motion.div>

          {/* Card 3: Backend & Database */}
          <motion.div
            variants={itemVariants}
            className="glass-panel border border-slate-200 dark:border-slate-800/40 rounded-3xl p-8 shadow-xl hover:border-cyber-coral/20 transition-all duration-300 md:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3.5 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-cyber-coral/15 border border-cyber-coral/30 flex items-center justify-center text-cyber-coral shadow-inner">
                <Database size={22} />
              </div>
              <div>
                <h3 className="font-sora font-bold text-lg text-slate-800 dark:text-slate-100">
                  Backend & Database
                </h3>
                <p className="font-outfit text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                  Server & Architecture
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {BACKEND_SKILLS.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  colorClass={skill.color}
                />
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
