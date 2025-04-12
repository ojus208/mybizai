// AboutWhatWeDo.jsx
import { Bot, Package, Megaphone, BarChart2, ScanSearch } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: "AI Customer Support",
    desc: "Automate 24/7 customer query handling across WhatsApp, Instagram, and web chat.",
  },
  {
    icon: Package,
    title: "Smart Inventory Management",
    desc: "Track stock levels in real-time, predict demand, and reduce overstock/wastage.",
  },
  {
    icon: Megaphone,
    title: "AI-Powered Marketing",
    desc: "Create and launch campaigns with AI-generated content tailored to your audience.",
  },
  {
    icon: BarChart2,
    title: "Sales & Performance Analytics",
    desc: "Get actionable insights to understand what’s working and scale what matters.",
  },
  {
    icon: ScanSearch,
    title: "AI Business Analyzer",
    desc: "Enter your business info and let our AI recommend ways to save time & cost instantly.",
  },
];

export default function AboutWhatWeDo() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">What We Do</h2>
        <p className="text-lg text-gray-400">
          We build modular AI tools to simplify, automate, and scale business operations.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-[#1a1a1a] border border-gray-800 p-6 rounded-xl hover:border-purple-500 transition"
          >
            <div className="mb-4 text-purple-500">{<feature.icon size={28} />}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-400">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
