import React from 'react'
// import ShinyText from '../blocks/TextAnimations/ShinyText'

function Hero() {
  return (
    <>

<section className=" relative w-full h-full text-center py-20 px-6  text-white">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
        <a href="#" className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full className:bg-blue-900 className:text-blue-300 hover:bg-blue-200 className:hover:bg-blue-800">
            <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 me-3">New</span> <span className="text-sm font-medium">Our new feature was launched! See what's new</span> 
            <svg className="w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
        </a>

        {/* <ShinyText text="Just some shiny text!" disabled={false} speed={3} className='custom-class' /> */}


        <h1 className="mb-4 text-3xl font-bold tracking-tight  md:text-5xl lg:text-5xl className:text-white leading-15 text-white ">Supercharge your business with AI—boost efficiency, cut costs, and scale smarter with <span className='bg-linear-[149deg,#f0c4fc_5%,#c0c0ff_60%,#c0f8f2_90%,teal]  bg-clip-text text-transparent'>MYBIZAI</span></h1>
        <p className="mb-8 text-md font-normal  lg:text-xl sm:px-16 lg:px-48 text-gray-700">Automate your marketing, engage customers, and grow sales effortlessly and drive economic growth.</p>
        <form className="w-full max-w-md mx-auto">   
            <label htmlFor="default-email" className="mb-2 text-sm font-medium text-gray-900 sr-only className:text-white">Email sign-up</label>
            <div className="relative">
                <div className="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 className:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                    </svg>
                </div>
                <input type="email" id="default-email" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 className:bg-gray-800 className:border-gray-700 className:placeholder-gray-400 className:text-white className:focus:ring-blue-500 className:focus:border-blue-500" placeholder="Enter your email here..." required />
                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 className:bg-blue-600 className:hover:bg-blue-700 className:focus:ring-blue-800">Sign up</button>
            </div>
        </form>
    </div>
    <div className="bg-gradient-to-b from-black via-blue-500 to-black  w-full h-full absolute top-0 left-0 z-0"></div>
</section>



      </>
  )
}

export default Hero