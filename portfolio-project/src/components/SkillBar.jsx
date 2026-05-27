import { motion } from "framer-motion";

export default function SkillBar({ name, level, colorClass = "from-cyber-accent to-cyber-purple" }) {
  return (
    <div className="w-full flex flex-col gap-2 select-none">
      <div className="flex justify-between items-center text-sm font-bold font-outfit">
        <span className="text-slate-800 dark:text-slate-200">{name}</span>
        <span className="text-slate-500 dark:text-slate-400">{level}%</span>
      </div>
      
      {/* Track */}
      <div className="h-2 w-full bg-slate-200 dark:bg-slate-800/60 rounded-full overflow-hidden">
        {/* Fill */}
        <motion.div
          className={`h-full bg-gradient-to-r ${colorClass} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}
