// AboutContactCTA.jsx
export default function AboutContactCTA() {
    return (
      <section className="bg-black text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to See MyBizAI in Action?</h2>
          <p className="text-lg text-gray-400 mb-8">
            Let us walk you through how our AI tools can help your business save time, cut costs, and grow faster.
          </p>
          <a href="/book-demo">
            <button className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 text-white text-sm font-semibold rounded-xl">
              Book a Demo Now
            </button>
          </a>
        </div>
      </section>
    );
  }
  