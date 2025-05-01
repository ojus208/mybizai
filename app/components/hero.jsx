import React from 'react'
// import ShinyText from '../blocks/TextAnimations/ShinyText'
import Useremailresgister from './Useremailresgister'

function Hero() {
  return (
    <>

<section className=" relative w-full h-full text-center py-20 px-6  text-white">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-10 z-10 relative">
        <a href="#" className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full className:bg-blue-900 className:text-blue-300 hover:bg-blue-200 className:hover:bg-blue-800">
            <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 me-3">New</span> <span className="text-sm font-medium">Our new feature was launched! See what's new</span> 
            <svg className="w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
        </a>

        {/* <ShinyText text="Just some shiny text!" disabled={false} speed={3} className='custom-class' /> */}


        <h1 className="mb-4 text-xl font-bold tracking-tight  md:text-5xl lg:text-5xl className:text-white sm:leading-15 text-white ">Supercharge your business with AI—boost efficiency, cut costs, and scale smarter with <span className='bg-linear-[149deg,#f0c4fc_5%,#c0c0ff_60%,#c0f8f2_90%,teal]  bg-clip-text text-transparent'>MYBIZAI</span></h1>
        <p className="mb-8 text-md font-normal text-slate-450 lg:text-xl sm:px-16 lg:px-48 text-gray-700">Automate your marketing, engage customers, and grow sales effortlessly and drive economic growth.</p>
       
        <Useremailresgister />
    </div>
    <div className="bg-gradient-to-b from-black via-blue-500 to-black  w-full h-full absolute top-0 left-0 z-0"></div>
</section>



      </>
  )
}

export default Hero