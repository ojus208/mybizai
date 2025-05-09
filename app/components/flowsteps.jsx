"use client";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Store, Megaphone, MessageCircle, LineChart, UserPlus } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Sign Up",
    // icon: <UserPlus className="h-4 bg-slate-200 w-4 sm:h-14 sm:w-14 rounded-full" />,
    description: "Create your free MyBizAI account in seconds. No credit card needed.",
  },
  {
    id: 2,
    title: "Set Up Store",
    // icon: <Store className="h-4 w-4 bg-slate-200 sm:h-14 sm:w-14 rounded-full" />,
    description: "Easily add your products or services — no technical skills required.",
  },
  {
    id: 3,
    title: "Marketing Automation",
    // icon: <Megaphone className="h-4 w-4 bg-slate-200 sm:h-14 sm:w-14 rounded-full" />,
    description: "Run campaigns across WhatsApp, Instagram, and more — on autopilot.",
  },
  {
    id: 4,
    title: "Customer Support",
    // icon: <MessageCircle className="h-4 w-4 bg-slate-200 sm:h-14 sm:w-14 rounded-full" />,
    description: "AI answers your customer queries 24/7, saving time and effort.",
  },
  {
    id: 5,
    title: "Smart Insights",
    // icon: <LineChart className="h-4 w-4 bg-slate-200 sm:h-14 sm:w-14 rounded-full" />,
    description: "Track what's working and optimize with real-time AI-powered data.",
  },
];

export default function FlowSteps() {
  const [active, setActive] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const nextStep = useCallback(() => {
    setActive((current) => (current >= steps.length ? 1 : current + 1));
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, 3000);
    return () => clearInterval(interval);
  }, [isPaused, nextStep]);

  return (
    <div className="w-full bg-black mx-auto px-4 py-12 sm:py-16 md:py-20">
      <h2 className="text-2xl sm:text-3xl font-semibold text-white text-center mb-8 sm:mb-10 px-4">
        <span className="hidden sm:inline">See How MyBizAI Transforms Your Business — Step by Step</span>
        <span className="sm:hidden">How MyBizAI Works</span>
      </h2>
      
      <div className="relative max-w-5xl mx-auto">
        {/* Steps Container */}
        <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-4">
          {/* Base Progress Line */}
          <div className="absolute sm:hidden left-[2.5rem] top-[3.5rem] h-[calc(100%-4rem)] w-0.5 bg-gray-800" />
          <div className="hidden sm:block absolute left-[7%] top-1/2 w-[86%] h-1 bg-gray-800 -translate-y-1/2" />
          
          {/* Active Progress Line */}
          <div 
            className="absolute sm:hidden left-[2.5rem] top-[3.5rem] w-0.5 bg-linear-[149deg,#f0c4fc,#c0c0ff_30%,#c0f8f2_100%] transition-all duration-500"
            style={{
              height: `${((active - 1) / (steps.length - 1)) * (100 - (100 / steps.length))}%`
            }}
          />
          <div 
            className="hidden sm:block absolute left-[7%] top-1/2 h-1 bg-linear-[149deg,#f0c4fc,#c0c0ff_30%,#c0f8f2_100%] -translate-y-1/2 transition-all duration-500"
            style={{
              width: `${((active - 1) / (steps.length - 1)) * 86}%`
            }}
          />
          
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className="relative flex sm:flex-col items-center sm:flex-1 w-full"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Step Button with Number Circle */}
              <button
                className="z-10 flex items-center gap-3 sm:flex-col sm:gap-2 group relative"
                onClick={() => {
                  setActive(step.id);
                  setIsPaused(true);
                }}
              >
                {/* Number Circle with Icon and Progress Indicator */}
                <div className={`relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full transition-all duration-300 ${
                  active >= step.id
                    ? "bg-linear-[149deg,#f0c4fc,#c0c0ff_30%,#c0f8f2_100%] text-black"
                    : "bg-gray-800 text-gray-400"
                }`}>
                  {/* Progress Circle - Only shows on active step */}
                  {active === step.id && !isPaused && (
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                      <circle
                        className="animate-progress-circle"
                        stroke="rgba(192, 192, 255, 0.2)"
                        strokeWidth="2"
                        fill="none"
                        r="23"
                        cx="24"
                        cy="24"
                      />
                    </svg>
                  )}
                  <span className="absolute text-sm sm:text-base font-bold">{step.id}</span>
                  <div className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    {step.icon}
                  </div>
                </div>
                
                {/* Title - Different layout for mobile and desktop */}
                <span className={`text-sm sm:text-center font-medium transition-colors duration-300 ${
                  active === step.id ? "text-white" : "text-gray-400"
                }`}>
                  {step.title}
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Description Card */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8 sm:mt-10"
        >
          <div className="bg-linear-[149deg,#f0c4fc,#c0c0ff_30%,#c0f8f2_100%] p-[1px] rounded-lg mx-auto max-w-2xl">
            <div className="bg-gray-900 p-4 sm:p-6 rounded-lg text-gray-200 text-sm sm:text-base text-center">
              {steps.find((step) => step.id === active)?.description}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
