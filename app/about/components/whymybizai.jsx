// AboutWhyMyBizAI.jsx
import { Settings, DollarSign, Zap, ShieldCheck, Smile } from 'lucide-react';

const benefits = [
  {
    icon: Settings,
    title: "Built for Indian SMBs",
    desc: "We understand local business challenges and build tools tailored to your day-to-day needs.",
  },
  {
    icon: DollarSign,
    title: "Pay Only for What You Use",
    desc: "No bloated subscriptions — choose only the tools you need and scale on your terms.",
  },
  {
    icon: Zap,
    title: "No Tech Team Required",
    desc: "Our AI tools work out-of-the-box. Anyone can set them up — no coding, no hassle.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Privacy-First",
    desc: "We keep your business data safe and never compromise on trust or compliance.",
  },
  {
    icon: Smile,
    title: "Designed for Simplicity",
    desc: "Our interfaces are clean, intuitive, and made for business people — not engineers.",
  },
];

export default function AboutWhyMyBizAI() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Why MyBizAI?</h2>
        <p className="text-lg text-gray-400">
          MyBizAI isn’t just another AI platform. We're building a suite of tools that feel simple,
          solve real problems, and grow with your business.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {benefits.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#1a1a1a] border border-gray-800 p-6 rounded-xl hover:border-purple-500 transition"
          >
            <div className="mb-4 text-purple-500">{<item.icon size={28} />}</div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
