// About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaHandshake, FaGlobe } from 'react-icons/fa';

const About = () => {
  return (
    <motion.div 
      className="px-6 py-12 bg-base-200 text-base-content"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Our Marketplace</h2>
        <p className="text-lg mb-10 text-gray-500">
          We connect talented freelancers with businesses across the globe. Whether you're a developer, designer, or digital marketer, our platform is built to help you grow and thrive.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-base-100 shadow-md rounded-2xl p-6">
            <FaUsers className="text-4xl text-primary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
            <p className="text-gray-500">
              Join a vibrant community of skilled professionals and clients working together to create value.
            </p>
          </div>

          <div className="bg-base-100 shadow-md rounded-2xl p-6">
            <FaHandshake className="text-4xl text-primary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Trusted Collaboration</h3>
            <p className="text-gray-500">
              We ensure a transparent, secure, and seamless experience for both freelancers and clients.
            </p>
          </div>

          <div className="bg-base-100 shadow-md rounded-2xl p-6">
            <FaGlobe className="text-4xl text-primary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
            <p className="text-gray-500">
              Work from anywhere, connect with clients and freelancers worldwide, and expand your opportunities.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
