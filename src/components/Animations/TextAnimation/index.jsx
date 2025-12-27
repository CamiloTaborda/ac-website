"use client";

import { motion } from "framer-motion";

export const TextAnimation = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
  >
    {children}
  </motion.div>
)