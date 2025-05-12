import React from 'react';
import { motion } from 'framer-motion';
import Animation from '../Animation';

export default function Section({ title, description, animationType, isReversed = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8`}>
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600">{description}</p>
          </motion.div>
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: isReversed ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Animation type={animationType} className="w-full h-full" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
} 