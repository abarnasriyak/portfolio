import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Card3D({ children, className = "" }) {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  // Motion values to represent mouse offset ratios (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs for smooth interpolation
  const springConfig = { damping: 25, stiffness: 220 };
  const rotateXSpring = useSpring(x, springConfig);
  const rotateYSpring = useSpring(y, springConfig);

  // Map offset ratios to tilt degrees (e.g. -12 to 12 degrees)
  const rotateX = useTransform(rotateXSpring, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(rotateYSpring, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Mouse coords relative to card's boundaries
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Normalise to [-0.5, 0.5] range
    const relativeX = (mouseX / width) - 0.5;
    const relativeY = (mouseY / height) - 0.5;

    x.set(relativeY); // Rotation on X-axis is driven by Y coordinate displacement
    y.set(relativeX); // Rotation on Y-axis is driven by X coordinate displacement
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      style={{ perspective: 1000 }}
      className="w-full h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          scale: hovered ? 1.025 : 1,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className={`w-full h-full ${className}`}
      >
        <div style={{ transform: "translateZ(25px)", transformStyle: "preserve-3d" }} className="w-full h-full">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
