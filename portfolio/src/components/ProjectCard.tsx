"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

type ProjectCardProps = {
  children: React.ReactNode;
};

/**
 * A card component for displaying project information.
 *
 * The component uses the `motion` library to animate the card
 * when it comes into view. The animation is a simple fade-in
 * from opacity 0 to 1, with a translate-y of 16px to create
 * a slight slide-in effect. The animation is triggered on the
 * `whileInView` prop and only runs once due to the `viewport`
 * prop being set to `{ once: true }`.
 *
 * The component also applies a subtle background color, a border,
 * and rounded corners to the card. The padding is set to 8px
 * and the space between elements is set to 6px.
 *
 * @param {React.ReactNode} children - The content to be rendered inside the card.
 * @returns {JSX.Element} - The rendered card component.
 */
export default function ProjectCard({ children }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div
        className={clsx(
          "bg-slate-900/60",
          "border border-slate-800",
          "rounded-xl",
          "p-8",
          "space-y-6",
          "transition",
        )}
      >
        {children}
      </div>
    </motion.div>
  );
}
