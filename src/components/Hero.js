import React from 'react';
import { motion } from 'framer-motion';
import AnimatedLetters from './AnimatedLetters';

const Hero = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white relative overflow-hidden">
      {/* Company Logo Animation */}
      <motion.img
        src="https://pbs.twimg.com/profile_images/1824267299412496384/SxmpjlJq_400x400.jpg"
        alt="Beyond Visual Logo"
        className="w-40 h-40 rounded-full mb-6 shadow-lg"
        initial={{ scale: 0, rotate: 360 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1.5, type: 'spring', bounce: 0.5 }}
        whileHover={{ scale: 1.2, rotate: 10 }}
      />

      {/* Staggered Company Name Animation */}
      <h1 className="text-6xl font-extrabold mb-4 text-gray-900">
        <AnimatedLetters text="Beyond Visuals" />
      </h1>

      {/* Staggered Tagline Animation */}
      <p className="text-2xl text-gray-700 mb-8">
        <AnimatedLetters text="More Than Editing—A Creative Partner" delay={0.5} />
      </p>

      {/* Animated Button with 3D Hover Effect */}
      <motion.a
        href="#projects"
        className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-2xl transition-transform"
        whileHover={{ scale: 1.2, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)" }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 300 }}
        style={{
          perspective: "1000px", // 3D perspective for hover effect
        }}
      >
        Explore My Work
      </motion.a>

      {/* Optional Subtle Background Animation */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-20 blur-xl"
        animate={{ backgroundPosition: ['0% 50%', '100% 50%'] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />

      {/* Moving Particle Animation */}
      <motion.div
        className="absolute top-0 right-0 w-32 h-32 bg-blue-300 rounded-full opacity-20 blur-lg"
        animate={{ x: [-50, 50], y: [0, 100] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-40 h-40 bg-purple-400 rounded-full opacity-20 blur-lg"
        animate={{ x: [50, -50], y: [0, -100] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Animated Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 text-gray-700 text-sm cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Scroll Down
        <motion.span className="block text-center text-xl">↓</motion.span>
      </motion.div>
    </div>
  );
};

export default Hero;
