import React, { useState } from 'react';
import { SiLinkedin, SiBehance, SiInstagram } from 'react-icons/si'; // Importing social media icons
import { MdEmail } from 'react-icons/md'; // Email icon
import { FaWhatsapp } from 'react-icons/fa'; // WhatsApp icon

const Contact = () => {
  const [showEmailTooltip, setShowEmailTooltip] = useState(false); // State for email tooltip
  const [showTooltipIndia, setShowTooltipIndia] = useState(false); // State for India tooltip
  const [showTooltipNepal, setShowTooltipNepal] = useState(false); // State for Nepal tooltip

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Contact Me</h2>
      
      <div className="text-center">
        <p className="text-lg text-gray-600 mb-4">
          Let's collaborate! Reach out for any inquiries or project discussions.
        </p>
        
        <div className="flex justify-center space-x-4">
          {/* Email Me button with tooltip */}
          <div className="relative">
            <a
              href="mailto:contact@beyondvisual.com"
              className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105 no-underline"
              onMouseEnter={() => setShowEmailTooltip(true)}
              onMouseLeave={() => setShowEmailTooltip(false)}
            >
              <MdEmail className="mr-2" /> Email
            </a>
            {showEmailTooltip && (
              <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 bg-white text-black rounded-md shadow-lg p-2 z-10">
                beyondvisuals1017@gmail.com
              </div>
            )}
          </div>

          {/* Call Me button for India */}
          <div className="relative">
            <a
              href="tel:+918010298198"
              className="flex items-center px-6 py-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105 no-underline"
              onMouseEnter={() => setShowTooltipIndia(true)}
              onMouseLeave={() => setShowTooltipIndia(false)}
            >
              <FaWhatsapp className="mr-2" /> Call Me (India)
            </a>
            {showTooltipIndia && (
              <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 bg-white text-black rounded-md shadow-lg p-2 z-10">
                +918010298198
              </div>
            )}
          </div>

          {/* Call Me button for Nepal */}
          <div className="relative">
            <a
              href="tel:+9779840696741"
              className="flex items-center px-6 py-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105 no-underline"
              onMouseEnter={() => setShowTooltipNepal(true)}
              onMouseLeave={() => setShowTooltipNepal(false)}
            >
              <FaWhatsapp className="mr-2" /> Call Me (Nepal)
            </a>
            {showTooltipNepal && (
              <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 bg-white text-black rounded-md shadow-lg p-2 z-10">
                +9779840696741
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-8">
        <a
          href="https://www.linkedin.com/in/suraj-paudel-056368224/"
          className="text-gray-800 hover:text-blue-500 transition-transform transform hover:scale-110 no-underline"
          aria-label="LinkedIn"
        >
          <SiLinkedin size={40} />
        </a>
        <a
          href="https://www.behance.net/surajpaudel"
          className="text-gray-800 hover:text-blue-500 transition-transform transform hover:scale-110 no-underline"
          aria-label="Behance"
        >
          <SiBehance size={40} />
        </a>
        <a
          href="https://www.instagram.com/_beyond_visuals_/"
          className="text-gray-800 hover:text-pink-400 transition-transform transform hover:scale-110 no-underline"
          aria-label="Instagram"
        >
          <SiInstagram size={40} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
