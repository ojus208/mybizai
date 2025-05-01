'use client'
import dynamic from 'next/dynamic'
import animationData from "../animations/blog.json"

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Blogheroanimate() {
  return <Lottie animationData={animationData} loop={true} />;
}

