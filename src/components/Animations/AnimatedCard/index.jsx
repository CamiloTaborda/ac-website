"use client";
import { motion } from "framer-motion";

const AnimatedCard = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      whileHover={{
        rotateX: 4,
        rotateY: -4,
        transition: { duration: 0.4, ease: "easeOut" },
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
