"use client";
import dynamic from 'next/dynamic';
import customersupport from "../animations/customersupport.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Customersupanimate() {
  return (
    <div className="w-full h-full max-w-[400px] md:max-w-[500px]">
      <Lottie animationData={customersupport} loop={true} />
    </div>
  );
}