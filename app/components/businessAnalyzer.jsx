'use client'
import React, { useState } from "react";
import { Loader2, Send, Sparkles, Bot, LineChart, MessageSquare } from "lucide-react";

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
    <div className="relative min-h-screen bg-black">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />
      
      <div className="relative max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Analyze Your Business with <span className="text-transparent bg-clip-text bg-linear-[149deg,#f0c4fc_5%,#c0c0ff_30%,#c0f8f2_100%]">AI Analyzer</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Get personalized insights and automation recommendations for your business using our advanced AI analysis tools.</p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {/* Form Section */}
          <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Website URL <span className="text-gray-500">(optional)</span></label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="https://example.com"
                    className="w-full px-4 py-2.5 bg-gray-800/50 text-white rounded-xl border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    value={form.website}
                    onChange={(e) => setForm({ ...form, website: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Select Industry</label>
                <select
                  className="w-full px-4 py-2.5 bg-gray-800/50 text-white rounded-xl border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
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
                <label className="block text-gray-300 text-sm font-medium mb-3">Operational Focus Areas</label>
                <div className="grid grid-cols-2 gap-3">
                  {focusAreas.map((area) => (
                    <label
                      key={area}
                      className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                        form.focus.includes(area)
                          ? 'bg-purple-500/20 border-purple-500'
                          : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                      } border`}
                    >
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={form.focus.includes(area)}
                        onChange={() => handleFocusChange(area)}
                      />
                      <div className={`w-4 h-4 rounded border transition-all flex items-center justify-center ${
                        form.focus.includes(area)
                          ? 'bg-purple-500 border-purple-500'
                          : 'border-gray-500'
                      }`}>
                        {form.focus.includes(area) && <Sparkles className="w-3 h-3 text-white" />}
                      </div>
                      <span className="text-sm text-white">{area}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-linear-[149deg,#f0c4fc_5%,#c0c0ff_30%,#c0f8f2_100%] text-black font-semibold rounded-xl hover:opacity-90 transition-all"
              >
                {loading ? (
                  <span className="flex justify-center items-center gap-2">
                    <Loader2 className="animate-spin" size={20} /> Analyzing...
                  </span>
                ) : (
                  <span className="flex justify-center items-center gap-2">
                    <Bot size={20} /> Get My AI Report
                  </span>
                )}
              </button>
            </form>
          </div>

          {/* Results Section */}
          <div className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 transition-all ${
            results ? 'opacity-100' : 'opacity-0'
          }`}>
            {results && (
              <div className="h-full flex flex-col">
                {/* Results Header */}
                <div className="p-6 border-b border-gray-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">AI Analysis Results</h3>
                      <p className="text-gray-400 text-sm">Based on your business profile</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-800/50 p-4 rounded-xl">
                      <p className="text-gray-300">{results.summary}</p>
                      <p className="text-emerald-400 font-medium mt-2">{results.savings}</p>
                    </div>
                    
                    <div className="space-y-2">
                      {results.improvements.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-gray-300">
                          <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            {idx === 0 ? <MessageSquare className="w-3 h-3 text-purple-400" /> :
                             idx === 1 ? <LineChart className="w-3 h-3 text-purple-400" /> :
                             <Sparkles className="w-3 h-3 text-purple-400" />}
                          </div>
                          <p className="text-sm">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Chat Section */}
                <div className="flex-1 flex flex-col p-6">
                  <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                    {chatHistory.map((msg, index) => (
                      <div
                        key={index}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                          msg.role === 'user'
                            ? 'bg-purple-500 text-white'
                            : 'bg-gray-800/50 text-gray-300'
                        }`}>
                          <p className="text-sm">{msg.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Ask me anything about the analysis..."
                      className="w-full px-4 py-3 bg-gray-800/50 text-white rounded-xl border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 pr-12"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-lg bg-purple-500 hover:bg-purple-600 transition-all">
                      <Send className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
