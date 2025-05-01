'use client';

import { motion } from 'framer-motion';

export const Logo = () => {
  return (
    <motion.svg
      width="200"
      height="200"
      viewBox="0 0 100 100"
      initial="hidden"
      animate="visible"
      className="text-[#9DC45F]"
    >
      <motion.g
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
          staggerChildren: 0.2
        }}
      >
        {/* Left leaf */}
        <motion.path
          d="M30 45 C30 35, 35 30, 40 45 C45 60, 35 60, 30 45"
          fill="currentColor"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Center leaf */}
        <motion.path
          d="M45 35 C45 25, 50 20, 55 35 C60 50, 50 50, 45 35"
          fill="currentColor"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
        />

        {/* Right leaf */}
        <motion.path
          d="M60 45 C60 35, 65 30, 70 45 C75 60, 65 60, 60 45"
          fill="currentColor"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
        />

        {/* Stem */}
        <motion.rect
          x="45"
          y="45"
          width="10"
          height="25"
          fill="currentColor"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
        />
      </motion.g>
    </motion.svg>
  );
};

export default Logo; 