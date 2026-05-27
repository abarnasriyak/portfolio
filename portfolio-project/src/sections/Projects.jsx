import { motion } from "framer-motion";
import Card3D from "../components/Card3D";
import { ExternalLink, Github, Database, Code, BarChart3, Globe } from "lucide-react";

const PROJECTS_DATA = [
  {
    title: "Aether Analytics Engine",
    description: "A real-time predictive analytics dashboard compiling sales data and forecasting trends using linear regression and exponential smoothing models. Offers interactive charts and anomaly notifications.",
    tags: ["React", "FastAPI", "Python", "Chart.js", "Scikit-Learn"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    icon: BarChart3,
    colorClass: "border-cyber-accent/20 group-hover:border-cyber-accent/40",
    glowColor: "bg-cyber-accent/5",
    themeColor: "#22d3ee",
    visualHeader: (
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-accent/20 to-slate-900/40 flex flex-col justify-end p-4 font-mono select-none overflow-hidden border-b border-cyber-accent/10">
        {/* Mock Data Grid */}
        <div className="space-y-1 opacity-60 text-[9px] mb-2">
          <div>$ python forecast.py</div>
          <div className="text-cyber-accent">[{">"} ] training ridge regression model... done.</div>
          <div className="text-emerald-400">Mean Abs Error: 0.0435 | R-Squared: 0.942</div>
        </div>
        {/* Waveform graphic */}
        <div className="h-10 flex items-end gap-1 mb-1">
          {[30, 45, 35, 60, 50, 75, 65, 90, 80, 70, 85, 100, 95].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-cyber-accent/30 rounded-t"
              animate={{ height: `${h}%` }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5, delay: i * 0.1 }}
            />
          ))}
        </div>
      </div>
    )
  },
  {
    title: "Voyage Smart Travel Planner",
    description: "A location-aware travels orchestrator. Leverages geolocation APIs and recommendation trees to generate personalized itineraries, travel route optimization, and budget trackers.",
    tags: ["React", "Tailwind CSS", "Firebase", "Leaflet Maps", "Node.js"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    icon: Globe,
    colorClass: "border-cyber-purple/20 group-hover:border-cyber-purple/40",
    glowColor: "bg-cyber-purple/5",
    themeColor: "#a78bfa",
    visualHeader: (
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/20 to-slate-900/40 flex items-center justify-center p-4 select-none overflow-hidden border-b border-cyber-purple/10">
        {/* Mock map interface */}
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 border border-dashed border-cyber-purple/20 rounded-full animate-spin-slow" />
          <div className="absolute w-[80%] h-[80%] border border-dashed border-cyber-purple/35 rounded-full animate-spin-reverse" />
          <div className="w-10 h-10 rounded-full bg-cyber-purple/25 flex items-center justify-center text-cyber-purple animate-pulse">
            <Globe size={18} />
          </div>
          {/* Mock markers */}
          <div className="absolute top-[20%] left-[30%] w-2.5 h-2.5 rounded-full bg-cyber-coral shadow-[0_0_8px_#fb7185]" />
          <div className="absolute bottom-[30%] right-[25%] w-2.5 h-2.5 rounded-full bg-cyber-accent shadow-[0_0_8px_#22d3ee]" />
        </div>
      </div>
    )
  },
  {
    title: "SQL DataInsight Bot",
    description: "An AI-powered interface translating natural language prompts into executable SQL queries, scanning databases, and returning summaries. Designed for non-technical analytics.",
    tags: ["React", "Express", "PostgreSQL", "OpenAI API", "SQLAlchemy"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    icon: Database,
    colorClass: "border-cyber-coral/20 group-hover:border-cyber-coral/40",
    glowColor: "bg-cyber-coral/5",
    themeColor: "#fb7185",
    visualHeader: (
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-coral/20 to-slate-900/40 flex flex-col justify-center p-4 font-mono select-none overflow-hidden border-b border-cyber-coral/10">
        {/* Mock SQL Query Console */}
        <div className="p-3 bg-slate-950/70 border border-cyber-coral/20 rounded-xl space-y-1.5 text-[9px] text-left">
          <div className="text-slate-400"># Query translation console</div>
          <div>
            <span className="text-purple-400">SELECT</span> name, count(orders)
          </div>
          <div>
            <span className="text-purple-400">FROM</span> users <span className="text-purple-400">JOIN</span> orders
          </div>
          <div>
            <span className="text-purple-400">GROUP BY</span> users.id;
          </div>
          <div className="text-cyber-coral font-bold">[!] SQL generation complete.</div>
        </div>
      </div>
    )
  },
  {
    title: "Pulse Retail E-Commerce",
    description: "A production-grade retail store featuring catalog filtration, secure credit processing, and an interactive business portal showing catalog counts and live user logs.",
    tags: ["React.js", "Redux Toolkit", "MongoDB", "Node.js", "Stripe API"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    icon: Code,
    colorClass: "border-cyber-accent/20 group-hover:border-cyber-accent/40",
    glowColor: "bg-cyber-accent/5",
    themeColor: "#22d3ee",
    visualHeader: (
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-accent/20 to-slate-900/40 flex items-center justify-center p-4 select-none overflow-hidden border-b border-cyber-accent/10">
        {/* Mock UI wireframe card */}
        <div className="w-40 bg-slate-950/60 border border-cyber-accent/20 rounded-xl p-3 shadow-2xl relative">
          <div className="h-12 w-full bg-slate-900 rounded-lg flex items-center justify-center text-slate-500 font-bold text-[9px]">
            Product Image Mock
          </div>
          <div className="w-16 h-2 bg-slate-800 rounded mt-2" />
          <div className="w-10 h-2.5 bg-cyber-accent/30 rounded mt-1.5" />
          <div className="absolute bottom-3 right-3 w-8 h-4 rounded bg-cyber-accent flex items-center justify-center text-[7px] text-slate-900 font-extrabold">
            BUY
          </div>
        </div>
      </div>
    )
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 lg:px-24 bg-cyber-light dark:bg-cyber-dark relative z-10 select-none overflow-hidden"
    >
      {/* Background radial soft colors */}
      <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-cyber-purple/5 filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-cyber-accent/5 filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <span className="w-6 h-[2px] bg-cyber-accent rounded" />
            <span className="font-outfit text-xs md:text-sm font-bold tracking-widest text-cyber-accent uppercase">
              Portfolio
            </span>
            <span className="w-6 h-[2px] bg-cyber-accent rounded" />
          </div>

          <h2 className="font-playfair font-black text-3xl md:text-5xl text-slate-800 dark:text-slate-100 leading-tight">
            Featured <span className="bg-gradient-to-r from-cyber-accent via-cyber-purple to-cyber-coral bg-clip-text text-transparent italic font-playfair font-black">Projects</span>
          </h2>
          <p className="font-poppins text-sm md:text-base text-slate-500 dark:text-slate-400 mt-4 max-w-xl">
            A curated collection of full-stack web applications and data modeling scripts detailing coding execution and technical scope.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {PROJECTS_DATA.map((proj, idx) => {
            const ProjIcon = proj.icon;
            
            return (
              <div key={idx} className="h-full">
                <Card3D className="group h-full">
                  <div className={`glass-panel border rounded-3xl h-full flex flex-col justify-between overflow-hidden shadow-xl transition-all duration-300 relative ${proj.colorClass}`}>
                    
                    {/* Glow backdrop */}
                    <div className={`absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-50 group-hover:opacity-100 ${proj.glowColor}`} />

                    {/* Card Header visual mock */}
                    <div className="relative h-44 w-full bg-slate-900/60 overflow-hidden">
                      {proj.visualHeader}
                      <div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-slate-900/80 border border-slate-700/50 flex items-center justify-center text-white backdrop-blur-md">
                        <ProjIcon size={16} style={{ color: proj.themeColor }} />
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-6 flex-1 flex flex-col justify-between text-left relative z-10">
                      <div>
                        <h3 className="font-sora font-bold text-lg md:text-xl text-slate-800 dark:text-slate-100 group-hover:text-cyber-accent transition-colors duration-200">
                          {proj.title}
                        </h3>
                        <p className="font-poppins text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mt-3 mb-6">
                          {proj.description}
                        </p>
                      </div>

                      <div>
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {proj.tags.map((t, i) => (
                            <span
                              key={i}
                              style={{ borderColor: `${proj.themeColor}20`, color: proj.themeColor }}
                              className="font-outfit text-[10px] font-bold px-2 py-0.5 rounded border bg-slate-100/40 dark:bg-slate-900/40 select-none"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-3 border-t border-slate-200/50 dark:border-slate-800/40 pt-4">
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-1.5 flex-1 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-bold font-outfit text-slate-600 hover:text-cyber-accent dark:text-slate-400 dark:hover:text-cyber-accent hover:border-cyber-accent/40 bg-white/5 transition-all"
                          >
                            <Github size={13} /> Repository
                          </a>
                          <a
                            href={proj.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ backgroundColor: `${proj.themeColor}12`, borderColor: `${proj.themeColor}30`, color: proj.themeColor }}
                            className="flex items-center justify-center gap-1.5 flex-1 py-2 rounded-xl border text-xs font-bold font-outfit hover:scale-[1.03] active:scale-[0.98] transition-all"
                          >
                            <ExternalLink size={13} /> Live Preview
                          </a>
                        </div>
                      </div>

                    </div>

                  </div>
                </Card3D>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
