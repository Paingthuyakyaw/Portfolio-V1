"use client";

import { motion } from "motion/react";

const pathVariants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut" as const,
    },
  },
};

export function AnimatedLogo() {
  return (
    <motion.svg
      width="80"
      height="40"
      viewBox="0 0 80 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
      aria-hidden="true"
    >
      <motion.path
        d="M 5 8 L 5 32 M 5 8 L 15 8 Q 20 8 20 13 Q 20 18 15 18 L 5 18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
        className="text-brand"
      />
      <motion.path
        d="M 27 8 L 39 8 M 33 8 L 33 32"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
        className="text-brand"
      />
      <motion.path
        d="M 46 8 L 46 32 M 46 20 L 56 8 M 46 20 L 56 32"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
        className="text-brand"
      />
      <motion.circle
        cx="62"
        cy="30"
        r="3"
        className="fill-brand"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 0.5, delay: 2 }}
      />
    </motion.svg>
  );
}
