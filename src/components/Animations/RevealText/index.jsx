"use client";

import { motion } from "framer-motion";

export default function RevealText({
  children,
  delay = 0,
  className = "",
  as = "span",
}) {
  const Component = as; // permite usar span, div, h2, p, etc.

  const parent = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  // Dividimos por líneas solo si hay saltos, pero mantenemos inline otherwise
  const lines = String(children).split("\n");

  return (
    <motion.div
      variants={parent}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className={`inline-block align-baseline ${className}`}
      style={{ overflow: "visible" }}
    >
      {lines.map((line, i) => (
        <motion.span
          key={i}
          variants={child}
          style={{
            display: "inline-block",
            whiteSpace: "pre-wrap",
            willChange: "transform, opacity",
          }}
        >
          {line}
          {i < lines.length - 1 && <br />} {/* mantiene los saltos */}
        </motion.span>
      ))}
    </motion.div>
  );
}
