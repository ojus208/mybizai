
import { CheckCircle2 } from "lucide-react";

export default function ProductCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-linear-[149deg,#f0c4fc_5%,#c0c0ff_60%,#c0f8f2_90%,teal] p-[2px] rounded-2xl" >
    <div className="bg-black border flex flex-col items-start  rounded-2xl p-3 w-full max-w-sm transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="bg-[#2a2a2a] p-3 rounded-xl text-white">
            <Icon size={24} />
          </div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
      </div>
      <p className="text-sm text-gray-400 text-start mb-6">{description}</p>
      <button className="bg-white rounded-md" >
        <span className="flex items-center gap-2 px-4 py-2 text-black rounded-md font-semibold transition-all duration-300 hover:bg-gradient-to-r from-[#f0c4fc] to-[#c0f8f2]">
            Try it Now
        </span>
      </button>
    </div>
    </div>
  );
}
