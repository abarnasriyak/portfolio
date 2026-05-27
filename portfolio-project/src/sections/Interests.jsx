import { motion } from "framer-motion";
import { Compass, Coffee, Feather, Sparkles } from "lucide-react";

export default function Interests() {
  const interests = [
    {
      title: "Writing & Documenting",
      subtitle: "Creative & Technical",
      desc: "Structuring complex thoughts into simple sentences. I enjoy writing technical tutorials, coding blogs, and occasional poetry about data structures.",
      icon: Feather,
      colorClass: "border-cyber-accent/20 hover:border-cyber-accent/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]",
      iconColor: "text-cyber-accent",
      bgColor: "bg-cyber-accent/5",
      specialContent: (
        <div className="mt-6 p-4 rounded-2xl bg-slate-950/70 border border-slate-800 font-mono text-[10px] text-left text-slate-300 relative overflow-hidden select-none">
          <Feather className="absolute right-3 bottom-3 text-slate-800/40 w-16 h-16 pointer-events-none" />
          <div className="text-cyber-accent mb-2">{"// Poem of a Data Coder"}</div>
          <div className="italic">"A flow of nodes, a stream of thoughts,</div>
          <div className="italic">Connecting details, binding dots.</div>
          <div className="italic">In code we seek what data tells,</div>
          <div className="italic">A simple truth in cyber shells."</div>
        </div>
      )
    },
    {
      title: "Travelling & Exploring",
      subtitle: "New Horizons & Empathy",
      desc: "Visiting historic sites, natural vistas, and cities. Travelling challenges my worldview, exposing me to diverse cultural layouts and human factors.",
      icon: Compass,
      colorClass: "border-cyber-purple/20 hover:border-cyber-purple/40 hover:shadow-[0_0_20px_rgba(167,139,250,0.15)]",
      iconColor: "text-cyber-purple",
      bgColor: "bg-cyber-purple/5",
      specialContent: (
        <div className="mt-6 p-4 rounded-2xl bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/40 flex flex-col gap-3 relative select-none">
          <div className="flex justify-between items-center text-xs font-bold text-slate-600 dark:text-slate-400">
            <span>Route Tracker</span>
            <span className="text-cyber-purple">Active Path</span>
          </div>
          <div className="flex justify-between items-center gap-2 mt-1">
            <div className="flex flex-col items-center">
              <div className="w-5 h-5 rounded-full bg-cyber-purple/20 border border-cyber-purple flex items-center justify-center text-[9px] font-bold text-cyber-purple">A</div>
              <span className="text-[9px] text-slate-400 font-medium mt-1">Madurai</span>
            </div>
            <div className="flex-1 h-[2px] border-t-2 border-dashed border-cyber-purple/40 relative">
              <Compass className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-cyber-coral animate-bounce w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col items-center">
              <div className="w-5 h-5 rounded-full bg-cyber-coral/20 border border-cyber-coral flex items-center justify-center text-[9px] font-bold text-cyber-coral">B</div>
              <span className="text-[9px] text-slate-400 font-medium mt-1">Chatrapatti</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Eating & Culinary Art",
      subtitle: "Sensory Design & Harmony",
      desc: "Sampling local foods and culinary specialties. Eating and understanding recipes mirrors assembly: balancing visual layout, taste, and order.",
      icon: Coffee,
      colorClass: "border-cyber-coral/20 hover:border-cyber-coral/40 hover:shadow-[0_0_20px_rgba(251,113,133,0.15)]",
      iconColor: "text-cyber-coral",
      bgColor: "bg-cyber-coral/5",
      specialContent: (
        <div className="mt-6 p-4 rounded-2xl bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/40 flex flex-col gap-2 relative select-none">
          <div className="text-xs font-bold text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
            <Sparkles size={12} className="text-cyber-coral" /> Balanced Composition
          </div>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex-1 h-3 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
              <div className="h-full bg-cyber-accent w-[35%]" />
            </div>
            <span className="text-[10px] font-bold text-slate-500">Spice</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-3 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
              <div className="h-full bg-cyber-purple w-[45%]" />
            </div>
            <span className="text-[10px] font-bold text-slate-500">Texture</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-3 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
              <div className="h-full bg-cyber-coral w-[20%]" />
            </div>
            <span className="text-[10px] font-bold text-slate-500">Style</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section
      id="interests"
      className="py-24 px-6 md:px-12 lg:px-24 bg-cyber-light dark:bg-cyber-darkSurface border-y border-slate-200 dark:border-slate-800/40 relative z-10 overflow-hidden select-none"
    >
      {/* Background glow orbs */}
      <div className="absolute top-[30%] left-[-10%] w-[380px] h-[380px] rounded-full bg-cyber-accent/5 filter blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[10%] right-[-10%] w-[350px] h-[350px] rounded-full bg-cyber-coral/5 filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <span className="w-6 h-[2px] bg-cyber-accent rounded" />
            <span className="font-outfit text-xs md:text-sm font-bold tracking-widest text-cyber-accent uppercase">
              Creative Lifestyle
            </span>
            <span className="w-6 h-[2px] bg-cyber-accent rounded" />
          </div>

          <h2 className="font-playfair font-black text-3xl md:text-5xl text-slate-800 dark:text-slate-100 leading-tight">
            Interests & <span className="bg-gradient-to-r from-cyber-accent via-cyber-purple to-cyber-coral bg-clip-text text-transparent italic font-playfair font-black">Passions</span>
          </h2>
          <p className="font-poppins text-sm md:text-base text-slate-500 dark:text-slate-400 mt-4 max-w-xl">
            How my personal hobbies fuel my logic, design perspective, and creative problem solving.
          </p>
        </div>

        {/* Interests Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {interests.map((item, idx) => {
            const CardIcon = item.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`glass-panel border rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-xl transition-all duration-300 relative group overflow-hidden ${item.colorClass}`}
              >
                {/* Visual back glow */}
                <div className={`absolute -right-10 -top-10 w-24 h-24 rounded-full pointer-events-none transition-opacity duration-300 opacity-20 group-hover:opacity-40 filter blur-xl ${item.bgColor}`} />

                <div className="text-left">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-inner ${item.bgColor} ${item.iconColor}`}>
                    <CardIcon size={22} className="group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <h3 className="font-sora font-bold text-lg text-slate-800 dark:text-slate-100 mb-1 group-hover:text-cyber-accent transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="font-outfit text-[10px] font-bold text-cyber-purple uppercase tracking-widest mb-4">
                    {item.subtitle}
                  </p>
                  <p className="font-poppins text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Specific graphical interactives */}
                {item.specialContent}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
