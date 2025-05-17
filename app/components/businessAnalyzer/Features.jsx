import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "AI-Powered Analysis",
    description: "Get deep insights into your business performance with advanced AI algorithms.",
    icon: "📊"
  },
  {
    title: "Real-time Monitoring",
    description: "Track your business metrics in real-time with automated reporting.",
    icon: "📈"
  },
  {
    title: "Smart Recommendations",
    description: "Receive actionable recommendations to improve your business operations.",
    icon: "💡"
  },
  {
    title: "Custom Reports",
    description: "Generate customized reports tailored to your business needs.",
    icon: "📑"
  }
];

export default function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="text-4xl mb-4">{feature.icon}</div>
          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
} 