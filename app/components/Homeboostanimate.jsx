"use client";
import dynamic from 'next/dynamic';
import boostbiz from "../animations/boostbiz.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Homeboostanimate() {
  return (
    <div className="w-full h-full max-w-[400px] md:max-w-[500px]">
      <Lottie animationData={boostbiz} loop={true} />
    </div>
  );
}