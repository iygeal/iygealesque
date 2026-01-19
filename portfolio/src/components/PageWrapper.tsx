"use client";

import { motion } from "framer-motion";

/**
 * A wrapper component that provides a fade-in animation for its children.
 *
 * The animation is a simple fade-in from opacity 0 to 1, with a translate-y
 * of 12px to create a slight slide-in effect. The animation is triggered
 * on mount and takes 400ms to complete.
 *
 * @param {React.ReactNode} children - The content to be wrapped and animated.
 */
export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
