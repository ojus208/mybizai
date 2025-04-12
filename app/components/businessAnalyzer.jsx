'use client'
import React, { useState } from "react";
import { Loader2 } from "lucide-react";

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
      content: "Hi there! I’ve analyzed your business site and here are some insights to help you scale efficiently.",
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
      content: "Here’s a quick link to our support bot demo: [View Demo](#). You’ll see how it handles common customer queries in real time.",
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
    <div className=" bg-black mx-auto p-6 lg:max-w-5xl rounded-2xl shadow-xl ">
      <h2 className="text-3xl font-semibold text-white my-10 text-center">Analyze Your Business with AI Analyzer</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-gray-300 text-sm">Website URL (optional)</label>
          <input
            type="text"
            placeholder="https://example.com"
            className="w-full mt-1 px-4 py-2 bg-[#1a1a1a] text-white rounded-md "
            value={form.website}
            onChange={(e) => setForm({ ...form, website: e.target.value })}
          />
        </div>

        <div>
          <label className="text-gray-300 text-sm">Select Industry</label>
          <select
            className="w-full mt-1 px-4 py-2 bg-[#1a1a1a] text-white rounded-md "
            value={form.industry}
            onChange={(e) => setForm({ ...form, industry: e.target.value })}
          >
            <option value="">-- Choose Industry --</option>
            {industries.map((ind) => (
              <option key={ind} value={ind}>{ind}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-gray-300 text-sm mb-1 block">Operational Focus Areas</label>
          <div className="grid grid-cols-2 gap-2">
            {focusAreas.map((area) => (
              <label key={area} className="flex items-center text-white gap-2 bg-[#1f1f1f] px-3 py-2 rounded-md cursor-pointer  hover:border-white transition">
                <input
                  type="checkbox"
                  className="accent-purple-600"
                  checked={form.focus.includes(area)}
                  onChange={() => handleFocusChange(area)}
                />
                {area}
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-4 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          {loading ? (
            <span className="flex justify-center items-center gap-2">
              <Loader2 className="animate-spin" size={18} /> Analyzing...
            </span>
          ) : (
            "Get My AI Report"
          )}
        </button>
      </form>

      {/* Output Section */}
      {results && (
  <div className="mt-6 bg-[#1a1a1a] text-white rounded-lg p-4 h-screen   shadow-lg">
    <div className="mb-4">
      <h3 className="text-lg font-bold mb-2">AI Assistant 🤖</h3>
      <div className="space-y-3">
        <div className="bg-[#262626] p-3 rounded-md">
          <p className="text-sm text-purple-300 font-semibold">Here's what I found based on your business:</p>
          <p className="text-sm mt-2">{results.summary}</p>
          <p className="text-sm mt-2 text-green-400 font-semibold">{results.savings}</p>
          <ul className="list-disc ml-5 mt-2 text-sm text-gray-300">
            {results.improvements.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    <div className="  p-3 rounded-md mt-4">
      <div className="mb-3">
        <p className="text-sm text-purple-400 font-semibold">Ask me anything about your business 🔍</p>
        <div className="mt-4 space-y-3 overflow-y-scroll max-h-[300px] pr-2">
  {chatHistory.map((msg, index) => (
    <div
      key={index}
      className={`p-3 rounded-md max-w-[80%] ${
        msg.role === 'user' ? 'bg-purple-800 text-white self-end ml-auto' : 'bg-[#262626] text-gray-300'
      }`}
    >
      <p className="text-sm">{msg.content}</p>
    </div>
  ))}
</div>

        <input
          type="text"
          placeholder="Type your question..."
          className="w-full mt-2 p-2 rounded-md bg-[#1e1e1e]  text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <button className="bg-purple-600 hover:bg-purple-700 transition text-white py-1.5 px-4 rounded-md text-sm">
        Ask AI
      </button>
    </div>
  </div>
)}

    </div>
  );
}
