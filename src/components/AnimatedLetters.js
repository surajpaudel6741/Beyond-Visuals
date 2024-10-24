import React from 'react';
import { motion } from 'framer-motion';

// Function to split text into individual letters for animation, preserving spaces
const AnimatedLetters = ({ text, delay, fontSize = '2rem', color = '#000' }) => {
  const letters = text.split(''); // Splitting the text into characters

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.04, // Delay between each letter animation
            delay: delay || 0,
          },
        },
      }}
      style={{ fontSize, color }} // Dynamically apply fontSize and color props
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block" // Keep letters inline
          variants={{
            hidden: { y: 50, opacity: 0 }, // Slide in from below with fade
            visible: { y: 0, opacity: 1 },
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        >
          {letter === ' ' ? '\u00A0' : letter} {/* Preserve spaces using Unicode */}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedLetters;
