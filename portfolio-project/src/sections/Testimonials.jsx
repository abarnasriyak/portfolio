import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS_DATA = [
  {
    name: "Dr. R. Kannan",
    role: "Professor of Data Science, American College",
    quote: "Abarna shows exceptional academic focus in her Data Science coursework. Her capability to translate statistical forecasting models into interactive React application widgets is outstanding.",
    avatar: "RK",
    color: "from-cyber-accent to-cyber-purple"
  },
  {
    name: "Subashini Devi",
    role: "Lead Developer, TechLab Solutions",
    quote: "As an intern, Abarna was a quick learner. She converted our complex Figma designs into responsive Tailwind layouts in record time and showed robust troubleshooting skills on our server route scripts.",
    avatar: "SD",
    color: "from-cyber-purple to-cyber-coral"
  },
  {
    name: "Ramesh Kumar",
    role: "Retail Shop Client, Freelance",
    quote: "Abarna built our shop's product catalog dashboard. Her attention to mobile-first rendering and local SEO audits resulted in a fast, beautiful application. Very professional to work with.",
    avatar: "RK",
    color: "from-cyber-coral to-cyber-accent"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5500);
    return () => clearInterval(timer);
  }, [index]);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.45, ease: "easeOut" }
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeIn" }
    })
  };

  return (
    <section
      id="testimonials"
      className="py-24 px-6 md:px-12 lg:px-24 bg-cyber-light dark:bg-cyber-darkSurface border-y border-slate-200 dark:border-slate-800/40 relative z-10 overflow-hidden select-none"
    >
      {/* Glow backgrounds */}
      <div className="absolute top-[20%] left-[-10%] w-[380px] h-[380px] rounded-full bg-cyber-purple/5 filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-cyber-accent/5 filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <span className="w-6 h-[2px] bg-cyber-accent rounded" />
            <span className="font-outfit text-xs md:text-sm font-bold tracking-widest text-cyber-accent uppercase">
              Endorsements
            </span>
            <span className="w-6 h-[2px] bg-cyber-accent rounded" />
          </div>

          <h2 className="font-playfair font-black text-3xl md:text-5xl text-slate-800 dark:text-slate-100 leading-tight">
            What <span className="bg-gradient-to-r from-cyber-accent via-cyber-purple to-cyber-coral bg-clip-text text-transparent italic font-playfair font-black">People Say</span>
          </h2>
          <p className="font-poppins text-sm md:text-base text-slate-500 dark:text-slate-400 mt-4 max-w-xl">
            Feedback and commendations from professors, internship coordinators, and freelance clients.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-3xl mx-auto relative px-4 md:px-12 min-h-[380px] sm:min-h-[320px] flex flex-col justify-center">
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="glass-panel border border-slate-200 dark:border-slate-800/40 rounded-3xl p-8 md:p-10 shadow-2xl relative flex flex-col justify-between text-left h-full"
            >
              {/* Quote Graphic Overlay */}
              <Quote size={52} className="absolute left-6 top-6 text-slate-200 dark:text-slate-800/40 pointer-events-none" />

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-6 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="text-amber-500 fill-amber-500" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="font-poppins text-sm md:text-base italic leading-relaxed text-slate-500 dark:text-slate-300 font-medium">
                  "{TESTIMONIALS_DATA[index].quote}"
                </p>
              </div>

              {/* Author info */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-200/50 dark:border-slate-800/40">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${TESTIMONIALS_DATA[index].color} flex items-center justify-center font-sora font-extrabold text-sm text-slate-900 shadow-lg`}>
                  {TESTIMONIALS_DATA[index].avatar}
                </div>
                <div>
                  <h4 className="font-sora font-bold text-slate-800 dark:text-slate-100 text-sm md:text-base">
                    {TESTIMONIALS_DATA[index].name}
                  </h4>
                  <p className="font-outfit text-xs text-slate-400 dark:text-slate-500 font-bold mt-0.5">
                    {TESTIMONIALS_DATA[index].role}
                  </p>
                </div>
              </div>

              {/* Corner accent light */}
              <div className="absolute bottom-0 right-0 w-12 h-12 rounded-br-3xl bg-cyber-accent/5 pointer-events-none" />
            </motion.div>
          </AnimatePresence>

          {/* Slider controls (Arrows) */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none px-0 md:-px-4 hidden md:flex">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-500 hover:text-cyber-accent pointer-events-auto border border-slate-200 dark:border-slate-800/40 hover:-translate-x-0.5 transition-all"
              aria-label="Previous slider item"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-500 hover:text-cyber-accent pointer-events-auto border border-slate-200 dark:border-slate-800/40 hover:translate-x-0.5 transition-all"
              aria-label="Next slider item"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Dot navigation */}
          <div className="flex justify-center gap-2 mt-8 z-10">
            {TESTIMONIALS_DATA.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-cyber-accent" : "w-2 bg-slate-300 dark:bg-slate-700/60"
                }`}
                aria-label={`Select testimonial slide ${i + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
