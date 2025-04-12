'use client'

const Page = () => {
    const scrollToForm = () => {
        const formSection = document.getElementById("ai-form-section");
        if (formSection) {
          formSection.scrollIntoView({ behavior: "smooth" });
        }
      };
  return (
    <>
   <section className="w-full bg-gradient-to-b from-black via-teal-500  to-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="max-w-2xl">
          <div className="text-sm bg-[#1F1F1F] border border-gray-700 rounded-full px-4 py-1 inline-block mb-4">
            🚀 Explore AI Tool for Businesses
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Discover AI Tools Tailored for Your Business
          </h1>
          <p className="text-gray-300 text-lg mb-8">
          Browse our powerful AI tools designed to reduce costs, automate tasks, and scale smarter — by industry and need.
          </p>
          <button
            onClick={scrollToForm}
            className="bg-white text-black font-semibold px-6 py-3 rounded-xl transition duration-300"
          >
            Explore Products
          </button>
        </div>

        {/* Optional Image/Visual */}
        <div className="hidden md:block w-full max-w-md">
          <img
            src="/images/ai-analyzer-hero.png" // Replace with your illustration path
            alt="AI Analyzing Illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
    <section id="ai-form-section" className=" bg-black mx-auto p-6  w-full h-screen rounded-2xl shadow-xl ">
    <section className="bg-[#111] rounded-xl px-6 py-8 text-white">
  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4">
    <div>
      <label className="block mb-1 text-sm text-gray-400">Select Industry</label>
      <select className="w-full bg-[#1a1a1a] px-4 py-4  rounded-md">
        <option value="">All Industries</option>
        <option value="ecommerce">E-commerce</option>
        <option value="services">Services</option>
        <option value="logistics">Logistics</option>
        <option value="retail">Retail</option>
        {/* Add more */}
      </select>
    </div>

    <div>
      <label className="block mb-1 text-sm text-gray-400">Business Operation</label>
      <select className="w-full bg-[#1a1a1a] px-4 py-4  rounded-md">
        <option value="">All Operations</option>
        <option value="marketing">Marketing</option>
        <option value="support">Customer Support</option>
        <option value="inventory">Inventory Management</option>
        <option value="sales">Sales Automation</option>
        {/* Add more */}
      </select>
    </div>
  </div>
</section>
<section className="bg-black px-6 py-10 text-white">
  <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Example product card */}
    <div className="bg-[#1a1a1a] p-5 rounded-xl border border-gray-800 hover:border-teal-500 transition">
      <h3 className="text-xl font-bold mb-2">AI Support Bot</h3>
      <p className="text-sm text-gray-400 mb-4">
        Automate customer support using AI chatbots and reduce manual efforts by 30%.
      </p>
      <ul className="text-xs text-gray-300 list-disc ml-5 mb-4 space-y-1">
        <li>Handles FAQs and ticketing</li>
        <li>Multilingual support</li>
        <li>Live chat integration</li>
      </ul>
      <button className="mt-auto bg-teal-600 hover:bg-teal-700 text-white text-sm px-4 py-2 rounded">
        View Tool
      </button>
    </div>

    {/* Duplicate this div for other products */}
  </div>
</section>

    </section>

    </>
  )
}

export default Page