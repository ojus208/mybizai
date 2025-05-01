"use client";
import dynamic from 'next/dynamic';
import scalebiz from "../animations/scalebiz.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Scalebizanimate() {
  return (
    <div className="w-full h-full max-w-[400px] md:max-w-[500px]">
      <Lottie animationData={scalebiz} loop={true} />
    </div>
  );
}