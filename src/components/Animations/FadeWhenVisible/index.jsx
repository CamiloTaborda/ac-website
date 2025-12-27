"use client";

import { motion } from "framer-motion";

export default function FadeInWhenVisible({ children, delay = 0, y = 30, className = "", initial = false }) {
  // Si es initial (primera vista), usa animate en lugar de whileInView
  if (initial) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, y }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
          delay,
        }}
      >
        {children}
      </motion.div>
    );
  }

  // Para el resto usa whileInView normal
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}