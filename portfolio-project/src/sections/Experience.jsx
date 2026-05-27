import { motion } from "framer-motion";
import { Calendar, CheckCircle2, ChevronRight } from "lucide-react";

const EXPERIENCE_DATA = [
  {
    role: "Full-Stack Developer Intern",
    company: "TechLab Solutions",
    period: "Dec 2024 - Present",
    desc: "Assisting in modular React application design, building API paths with Node.js/Express, and optimizing styling with Tailwind CSS. Collaborated with a team of 4 to refactor an e-commerce platform.",
    points: [
      "Assisted in refactoring 15+ frontend mock pages to use Tailwind utility patterns",
      "Designed and integrated REST endpoints with MongoDB databases",
      "Participated in agile code-review processes and daily standups"
    ]
  },
  {
    role: "Freelance React Developer",
    company: "Upwork & Local Clients",
    period: "Jun 2023 - Nov 2024",
    desc: "Created responsive landing pages and custom admin panels for local retail shops and service clients. Addressed technical SEO, asset optimizations, and light/dark theme toggle additions.",
    points: [
      "Completed 8+ responsive web designs using React + Vite",
      "Optimized assets and script bundles to achieve 90+ Lighthouse SEO scores",
      "Setup EmailJS and contact API forms on static developer portfolios"
    ]
  },
  {
    role: "Data Analytics Student Assistant",
    company: "American College (Research Project)",
    period: "Jan 2024 - Oct 2024",
    desc: "Worked alongside academic instructors to clean statistical research datasets and compile prediction charts. Programmed data wrangling scripts in Python.",
    points: [
      "Cleaned and merged academic performance records using Pandas",
      "Created regression models to forecast student retention indices",
      "Plotted matplotlib data visualizers for local research symposiums"
    ]
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-12 lg:px-24 bg-cyber-light dark:bg-cyber-dark relative z-10 overflow-hidden select-none"
    >
      {/* Background soft glow */}
      <div className="absolute top-[30%] left-[-15%] w-[480px] h-[480px] rounded-full bg-cyber-accent/5 filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Side Header and Skills summary */}
        <div className="lg:col-span-5 text-left sticky top-28">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[2px] bg-cyber-accent rounded" />
            <span className="font-outfit text-xs md:text-sm font-bold tracking-widest text-cyber-accent uppercase">
              Employment History
            </span>
          </div>

          <h2 className="font-playfair font-black text-3xl md:text-5xl text-slate-800 dark:text-slate-100 leading-tight">
            My <span className="bg-gradient-to-r from-cyber-accent via-cyber-purple to-cyber-coral bg-clip-text text-transparent font-black italic">Journey</span>
          </h2>
          <p className="font-poppins text-sm md:text-base text-slate-500 dark:text-slate-400 mt-4 leading-relaxed">
            Acquiring practical engineering skills through local internships, freelance client requests, and academic statistics assistantships.
          </p>

          {/* Quick core metrics */}
          <div className="mt-8 space-y-4">
            {[
              "Strong logical thinking & bug resolution capabilities",
              "Passionate about writing clean, reusable CSS and React",
              "Skilled in wringing statistics out of raw datasets"
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-cyber-accent mt-1 flex-shrink-0" />
                <span className="font-poppins text-sm font-medium text-slate-500 dark:text-slate-400">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Timeline nodes */}
        <div className="lg:col-span-7 border-l border-slate-200 dark:border-slate-800/40 pl-6 md:pl-10 relative">
          
          <div className="flex flex-col gap-12">
            {EXPERIENCE_DATA.map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative group text-left"
              >
                {/* Active indicator dot on timeline */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4.5 h-4.5 rounded-full bg-slate-900 border-4 border-cyber-purple dark:border-cyber-purple flex items-center justify-center shadow-[0_0_8px_#a78bfa] dark:bg-cyber-dark group-hover:border-cyber-accent group-hover:shadow-[0_0_12px_#22d3ee] transition-all duration-300" />
                
                <div className="flex items-center gap-2 text-xs font-bold text-cyber-accent uppercase tracking-widest mb-1.5 font-outfit">
                  <Calendar size={13} />
                  {job.period}
                </div>

                <h3 className="font-sora font-bold text-lg md:text-xl text-slate-800 dark:text-slate-100 group-hover:text-cyber-accent transition-colors duration-200">
                  {job.role}
                </h3>
                <h4 className="font-outfit text-sm font-bold text-cyber-purple/95 dark:text-cyber-purple mt-0.5">
                  {job.company}
                </h4>

                <p className="font-poppins text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mt-3 mb-4 font-medium">
                  {job.desc}
                </p>

                {/* Subpoints */}
                <ul className="space-y-2">
                  {job.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs font-poppins text-slate-500 dark:text-slate-400 font-medium">
                      <ChevronRight size={13} className="text-cyber-coral mt-0.5 flex-shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
