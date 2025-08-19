"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface SectionWrapperProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className = "",
  ...rest
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.05 }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default SectionWrapper;
