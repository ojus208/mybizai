'use client'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Dynamically import Lottie with no SSR
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

// Import animations
import analyzerAnimation from '../animations/analyzer.json'
import blogAnimation from '../animations/blog.json'
import boostbizAnimation from '../animations/boostbiz.json'
import customersupportAnimation from '../animations/customersupport.json'
import scalebizAnimation from '../animations/scalebiz.json'

const animations = {
  analyzer: analyzerAnimation,
  blog: blogAnimation,
  boostbiz: boostbizAnimation,
  customersupport: customersupportAnimation,
  scalebiz: scalebizAnimation,
}

// Loading fallback component
const LoadingFallback = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="animate-pulse bg-gray-200 rounded-lg w-full h-full"></div>
  </div>
)

export default function Animation({ type, className = '', loop = true }) {
  const animationData = animations[type]

  if (!animationData) {
    console.warn(`Animation type "${type}" not found`)
    return null
  }

  return (
    <div className={className}>
      <Suspense fallback={<LoadingFallback />}>
        <Lottie
          animationData={animationData}
          loop={loop}
          style={{ width: '100%', height: '100%' }}
        />
      </Suspense>
    </div>
  )
} 