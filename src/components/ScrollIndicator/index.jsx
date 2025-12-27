"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const ScrollIndicator = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <motion.div
      style={{ opacity }}
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center select-none z-50"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <FaChevronDown className="relative w-6 h-6 text-white" />
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;
