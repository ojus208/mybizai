'use client'
import React, { useState } from "react";
import { Loader2, Send, Sparkles, Bot, LineChart, MessageSquare } from "lucide-react";
import { motion } from 'framer-motion';
import Features from './businessAnalyzer/Features';
import Animation from './Animation';

const industries = [
  "Retail", "E-commerce", "Healthcare", "Education", "Logistics", "Finance", "Hospitality"
];

const focusAreas = [
  "Customer Support", "Inventory Management", "Sales & Marketing", "Social Media", "Operations", "Finance Automation"
];

export default function AiAnalyzerForm() {
  const [form, setForm] = useState({
    website: "",
    industry: "",
    focus: [],
  });
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const chatHistory = [
    {
      role: 'ai',
      content: "Hi there! I've analyzed your business site and here are some insights to help you scale efficiently.",
    },
    {
      role: 'ai',
      content: "⚙️ You can automate your customer support with an AI chatbot, saving around 25% of time spent on queries.",
    },
    {
      role: 'ai',
      content: "📦 Implementing smart inventory tracking could reduce wastage by up to 15%.",
    },
    {
      role: 'user',
      content: "How can I automate customer support?",
    },
    {
      role: 'ai',
      content: "You can use our AI Support Bot tool to handle FAQs, live chat, and ticket generation seamlessly. Want me to show a demo?",
    },
    {
      role: 'user',
      content: "Yes, show me the demo.",
    },
    {
      role: 'ai',
      content: "Here's a quick link to our support bot demo: [View Demo](#). You'll see how it handles common customer queries in real time.",
    },
  ];

  const handleFocusChange = (value) => {
    setForm((prev) => {
      const isSelected = prev.focus.includes(value);
      return {
        ...prev,
        focus: isSelected
          ? prev.focus.filter((f) => f !== value)
          : [...prev.focus, value],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setResults(null);
    // Simulate AI processing
    setTimeout(() => {
      setLoading(false);
      setResults({
        summary: "AI found multiple areas to optimize your operations and cut costs effectively.",
        savings: "Estimated cost reduction: 22-35%",
        improvements: [
          "Automate customer support with AI chatbots",
          "Use AI for inventory prediction to reduce waste",
          "Automate repetitive marketing tasks and boost engagement"
        ]
      });
    }, 2500);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">AI Business Analyzer</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform your business with AI-powered analytics and insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Smart Business Analysis</h3>
            <p className="text-gray-600 mb-6">
              Our AI-powered business analyzer helps you understand your business better,
              make data-driven decisions, and optimize your operations for maximum efficiency.
            </p>
            <ul className="space-y-4">
              {[
                "Real-time performance tracking",
                "Predictive analytics",
                "Automated reporting",
                "Custom insights and recommendations"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center text-gray-600"
                >
                  <span className="mr-2">✓</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <Animation type="analyzer" className="w-full h-full" />
          </motion.div>
        </div>

        <Features />
      </div>
    </div>
  );
}
