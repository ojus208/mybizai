import { Bot, Store, BarChart, Megaphone } from "lucide-react";
import ProductCard from "./productcard";

export default function TopProductsSection() {
  const products = [
    {
      icon: Store,
      title: "Smart Store Manager",
      description: "Automate your listings, track inventory, and view analytics in real-time.",
    },
    {
      icon: Bot,
      title: "AI Customer Support",
      description: "Instantly respond to 80% of queries on WhatsApp, Instagram, and more.",
    },
    {
      icon: Megaphone,
      title: "Marketing Assistant",
      description: "Launch targeted campaigns with AI-generated ad copy & media.",
    },
    {
      icon: BarChart,
      title: "Sales Analytics",
      description: "Discover trends and performance insights with AI-powered reports.",
    },
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-10">
          Choose the AI Tools Your Business Needs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              icon={product.icon}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
