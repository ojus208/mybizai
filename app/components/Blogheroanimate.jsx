// components/HeroAnimation.js
import Lottie from "lottie-react";
import animationData from "../animations/blog.json"

export default function Blogheroanimate() {
  return <Lottie animationData={animationData} loop={true} />;
}

