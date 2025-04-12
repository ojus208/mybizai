"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Store, Megaphone, MessageCircle, LineChart, UserPlus } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Sign Up",
    icon: <UserPlus className="h-5 w-5" />,
    description: "Create your free MyBizAI account in seconds. No credit card needed.",
  },
  {
    id: 2,
    title: "Set Up Store",
    icon: <Store className="h-5 w-5" />,
    description: "Easily add your products or services — no technical skills required.",
  },
  {
    id: 3,
    title: "Marketing Automation",
    icon: <Megaphone className="h-5 w-5" />,
    description: "Run campaigns across WhatsApp, Instagram, and more — on autopilot.",
  },
  {
    id: 4,
    title: "Customer Support",
    icon: <MessageCircle className="h-5 w-5" />,
    description: "AI answers your customer queries 24/7, saving time and effort.",
  },
  {
    id: 5,
    title: "Smart Insights",
    icon: <LineChart className="h-5 w-5" />,
    description: "Track what’s working and optimize with real-time AI-powered data.",
  },
];

export default function FlowSteps() {
  const [active, setActive] = useState(1);

  return (
    <div className="w-full bg-black mx-auto px-4 py-20">
      <h2 className="text-3xl font-semibold text-white text-center mb-10">
        See How MyBizAI Transforms Your Business — Step by Step
      </h2>
      
      <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {steps.map((step, index) => (
          <div key={step.id} className="relative flex flex-col items-center md:flex-1">
            {/* Connector Line */}
            {index !== 0 && (
              <div className="hidden md:block absolute -left-[50%] top-5 w-[100%] h-1 bg-linear-[149deg,#f0c4fc,#c0c0ff_30%,#c0f8f2_100%] z-0" />
            )}

            {/* Step Circle */}
            <button
              className={`z-10 flex items-center gap-2 px-4 py-2 rounded-full transition-all  hover:bg-linear-[149deg,#f0c4fc,#c0c0ff_30%,#c0f8f2_100%] hover:text-black  duration-300 ease-in-out ${
                active === step.id
                  ? "bg-linear-[149deg,#f0c4fc,#c0c0ff_30%,#c0f8f2_100%] text-black font-bold  "
                  : "bg-gray-800 text-gray-300 "
              }`}
              onClick={() => setActive(step.id)}
            >
              {step.icon}
              <span className="text-sm font-semibold">{step.title}</span>
            </button>
          </div>
        ))}
      </div>

      {/* Active Content */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-10 bg-linear-[149deg,#f0c4fc,#c0c0ff_30%,#c0f8f2_100%] w-fit mx-auto p-[1px] rounded-md "

      >
        <div className="bg-gray-900 p-6 rounded-md text-gray-200 max-w-3xl mx-auto text-center inset-4">
        {steps.find((step) => step.id === active)?.description}
        </div>
       
      </motion.div>
    </div>
  );
}
