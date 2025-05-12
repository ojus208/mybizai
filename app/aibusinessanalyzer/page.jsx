'use client'
import React from 'react'
import AiAnalyzerForm from '../components/businessAnalyzer'
import AiInsightReport from '../components/aiinsighreport'
import AIInsightChat from '../components/Aichatagent'
import HeroAnalyzer from '../components/hero_analyzer'

const Page = () => {
  return (
    <div className='bg-black'>
        <HeroAnalyzer />
        <AiAnalyzerForm />
        <AiInsightReport />
        <AIInsightChat />
    </div>
  )
}

export default Page