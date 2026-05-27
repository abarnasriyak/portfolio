import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

const EDUCATION_DATA = [
  {
    degree: "B.Sc. Data Science (3rd Year)",
    institution: "American College",
    location: "Chatrapatti, Tamil Nadu",
    period: "2023 - 2026 (Expected)",
    description: "An intensive undergraduate program specializing in statistical models, big data computing, and machine learning pipelines. Maintained top academic standing and participated in national-level technical symposiums.",
    highlights: [
      "Machine Learning & Deep Learning frameworks",
      "Database Systems (SQL & MongoDB)",
      "Python, R & Julia Programming",
      "Statistical Inference & Probability Models"
    ]
  },
  {
    degree: "Higher Secondary Certificate (HSC) - Computer Science",
    institution: "State Board Schooling",
    location: "Tamil Nadu, India",
    period: "2021 - 2023",
    description: "Completed secondary education with a specialized focus on Computer Science, Mathematics, Physics, and Chemistry. Built a solid logical and programming foundation.",
    highlights: [
      "C++ Programming & OOP fundamentals",
      "Calculus, Linear Algebra & Geometry",
      "Data structures introduction",
      "Graduated with distinction (90%+)"
    ]
  }
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 px-6 md:px-12 lg:px-24 bg-cyber-light dark:bg-cyber-darkSurface border-y border-slate-200 dark:border-slate-800/40 relative z-10 overflow-hidden select-none"
    >
      {/* Visual neon elements */}
      <div className="absolute top-[20%] right-[10%] w-[380px] h-[380px] rounded-full bg-cyber-coral/5 filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[350px] h-[350px] rounded-full bg-cyber-accent/5 filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <span className="w-6 h-[2px] bg-cyber-accent rounded" />
            <span className="font-outfit text-xs md:text-sm font-bold tracking-widest text-cyber-accent uppercase">
              Academic Roadmap
            </span>
            <span className="w-6 h-[2px] bg-cyber-accent rounded" />
          </div>

          <h2 className="font-playfair font-black text-3xl md:text-5xl text-slate-800 dark:text-slate-100 leading-tight">
            My <span className="bg-gradient-to-r from-cyber-accent via-cyber-purple to-cyber-coral bg-clip-text text-transparent italic font-playfair font-black">Education</span>
          </h2>
          <p className="font-poppins text-sm md:text-base text-slate-500 dark:text-slate-400 mt-4 max-w-xl">
            Tracing my learning journey from software engineering principles to statistical analytics and data architecture.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto pl-8 md:pl-0">
          
          {/* Vertical line through cards */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800/60 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800/60 md:hidden" />

          {/* Timeline Nodes */}
          <div className="flex flex-col gap-12 md:gap-16">
            {EDUCATION_DATA.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-center justify-between ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Outer glowing point */}
                  <div className="absolute left-[3px] md:left-1/2 w-6 h-6 rounded-full bg-slate-900 border-4 border-cyber-accent dark:border-cyber-accent flex items-center justify-center -translate-x-1/2 z-20 shadow-[0_0_12px_#22d3ee] dark:bg-cyber-dark" />

                  {/* Left Column Spacer for desktop */}
                  <div className="w-full md:w-[45%] hidden md:block" />

                  {/* Card Content Column */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full md:w-[45%] glass-panel border border-slate-200 dark:border-slate-800/40 rounded-3xl p-6 md:p-8 shadow-xl text-left hover:border-cyber-accent/20 transition-all duration-300 relative group"
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/50 dark:border-slate-800/40 pb-4 mb-4">
                      <div>
                        <h3 className="font-sora font-bold text-lg md:text-xl text-slate-800 dark:text-slate-100 group-hover:text-cyber-accent transition-colors duration-200">
                          {item.degree}
                        </h3>
                        <p className="font-outfit text-sm font-bold text-cyber-purple mt-1 flex items-center gap-1.5">
                          <GraduationCap size={15} /> {item.institution}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-xs font-bold font-outfit text-slate-500 dark:text-slate-400 mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} className="text-cyber-accent" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} className="text-cyber-coral" />
                        {item.location}
                      </span>
                    </div>

                    <p className="font-poppins text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    <div className="space-y-2">
                      <div className="font-outfit text-xs uppercase font-bold tracking-widest text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                        <BookOpen size={12} className="text-cyber-accent" /> Focus Areas
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                        {item.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs font-medium font-poppins text-slate-500 dark:text-slate-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyber-accent" />
                            {h}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Corner decorative light */}
                    <div className="absolute top-0 right-0 w-8 h-8 rounded-tr-3xl bg-cyber-accent/5 pointer-events-none" />
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
