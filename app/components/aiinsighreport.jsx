// AiInsightReport.jsx
import React from "react";
import { MessageCircle, PackageSearch, BarChart3 } from "lucide-react";

const insights = [
  {
    icon: <MessageCircle size={22} className="text-purple-400" />,
    title: "Automate Customer Support",
    desc: "Implement AI chatbots to handle FAQs and reduce workload.",
    savings: "Save up to 25% time",
    efficiency: "+18% efficiency"
  },
  {
    icon: <PackageSearch size={22} className="text-green-400" />,
    title: "Smarter Inventory Management",
    desc: "Use AI to predict demand and reduce overstock/wastage.",
    savings: "Reduce waste by 15%",
    efficiency: "+20% forecasting accuracy"
  },
  {
    icon: <BarChart3 size={22} className="text-blue-400" />,
    title: "Automated Marketing Campaigns",
    desc: "Leverage AI to send targeted messages and posts.",
    savings: "Cut manual effort by 30%",
    efficiency: "+25% reach improvement"
  }
];

export default function AiInsightReport() {
  return (
    <div className="mt-10 max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">📊 Your AI-Powered Business Insights</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {insights.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#1b1b1b] p-5 rounded-xl border border-gray-700 hover:border-purple-500 transition shadow-sm"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-[#111] p-2 rounded-md">{item.icon}</div>
              <h3 className="text-white text-lg font-semibold">{item.title}</h3>
            </div>
            <p className="text-sm text-gray-400 mb-4">{item.desc}</p>
            <div className="text-sm">
              <p className="text-green-400 font-medium">{item.savings}</p>
              <p className="text-purple-400">{item.efficiency}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
