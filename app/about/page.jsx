import React from 'react'
import AboutContactCTA from './components/contactcta'
import AboutWhatWeDo from './components/wedo'
import AboutWhyMyBizAI from './components/whymybizai'
import { Metadata } from 'next'
import AboutHero from './components/abouthero'
import AboutMission from './components/ourmission'
const Page = () => {
  return (
    <div>
        <AboutHero />
        <AboutMission />
        <AboutWhatWeDo />
        <AboutWhyMyBizAI />
        <AboutContactCTA />
    </div>
  )
}

export default Page