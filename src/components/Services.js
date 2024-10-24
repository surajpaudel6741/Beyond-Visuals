import React from 'react';
import { motion } from 'framer-motion';
import { FaVideo, FaPhotoVideo, FaBullhorn, FaInstagram } from 'react-icons/fa';
import styles from './Services.module.css';

// Define your services and corresponding icons
const services = [
  { 
    name: 'Video Editing', 
    description: 'Professional editing for commercials, short films, and corporate videos.', 
    icon: <FaVideo style={{ color: '#343a40' }} />  // Dark gray color for simplicity
  },
  { 
    name: 'Graphic Design', 
    description: 'Creating stunning visuals for branding, social media, and marketing.', 
    icon: <FaPhotoVideo style={{ color: '#343a40' }} /> 
  },
  { 
    name: 'Branding', 
    description: 'Building strong and consistent brand identity across all platforms.', 
    icon: <FaBullhorn style={{ color: '#343a40' }} /> 
  },
  { 
    name: 'Reels Editing', 
    description: 'High-quality, engaging reels for Instagram and TikTok to boost your social media presence.', 
    icon: <FaInstagram style={{ color: '#343a40' }} /> 
  }
];

const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.servicesTitle}>My Services</h2>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={styles.serviceCard}
            whileHover={{ scale: 1.05 }}  // Simple scale effect on hover
            whileTap={{ scale: 0.95 }}    // Slight scale-down on tap
            transition={{ duration: 0.3 }}
          >
            <div className={styles.serviceIcon}>{service.icon}</div>
            <h3 className={styles.serviceName}>{service.name}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
