import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const TiltWrapper = ({ children, style, ...props }) => {
  const ref = useRef(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const x = useSpring(rawX, springConfig);
  const y = useSpring(rawY, springConfig);

  const rotateX = useTransform(y, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);
  const glareX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
        position: "relative",
        overflow: "hidden",
        borderRadius: "inherit",
        ...style,
      }}
      {...props}
    >
      {children}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          pointerEvents: "none",
          background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.15) 0%, transparent 65%)`,
        }}
      />
    </motion.div>
  );
};

export { TiltWrapper };
