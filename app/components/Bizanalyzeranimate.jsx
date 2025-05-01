"use client";
import dynamic from 'next/dynamic';
import bizanalyzer from "../animations/analyzer.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Bizanalyzeranimate() {
  return (
    <div className="w-full h-full max-w-[400px] md:max-w-[500px]">
      <Lottie animationData={bizanalyzer} loop={true} />
    </div>
  );
}