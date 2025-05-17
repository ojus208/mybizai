import Lottie from 'lottie-react';
import analyzerAnimation from '../animations/analyzer.json';
import blogAnimation from '../animations/blog.json';
import boostbizAnimation from '../animations/boostbiz.json';
import customersupportAnimation from '../animations/customersupport.json';
import scalebizAnimation from '../animations/scalebiz.json';

const animations = {
  analyzer: analyzerAnimation,
  blog: blogAnimation,
  boostbiz: boostbizAnimation,
  customersupport: customersupportAnimation,
  scalebiz: scalebizAnimation,
};

export default function Animation({ type, className = '', loop = true }) {
  const animationData = animations[type];

  if (!animationData) {
    console.warn(`Animation type "${type}" not found`);
    return null;
  }

  return (
    <div className={className}>
      <Lottie
        animationData={animationData}
        loop={loop}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
} 