'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import bg from '@/public/assets/logo.png'
export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" w-full bg-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex justify-center items-center space-x-3">
          <Image src={bg} height={120} width={120} className="w-[50px] h-[50px] rounded-lg" alt="BizzAI Logo" />
          {/* <span className="self-center text-2xl font-semibold">MyBizzAI</span> */}
          <div className="flex flex-col items-start">
            <span className=' font-bold text-white font-roboto'>
                MYBIZAI
            </span>
            <span className='text-xs font-light text-blue-500 font-roboto'>
                AI Business Tools
            </span>
          </div>
        </Link>
        
        <div className="flex md:order-2 space-x-3">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Get started</button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 w-10 h-10 text-gray-500 rounded-lg focus:ring-2 focus:ring-gray-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${menuOpen ? 'block bg-black shadow-md ' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row md:space-x-2 text-white  p-4 md:p-0 mt-4 md:mt-0 border border-gray-100 rounded-lg md:border-0">
            <li>
              <Link href="/" className="block py-2 px-3  hover:text-blue-600">Home</Link>
            </li>
            <li>
              <Link href="/blogs" className="block py-2 px-3  hover:text-blue-600">Blogs</Link>
            </li>
            <li>
              <button onMouseEnter={() => setDropdown(true)} className="flex items-center py-2 px-3  hover:text-blue-600">
                Company
                <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 10 6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M1 1l4 4 4-4" />
                </svg>
              </button>
            </li>
            <li><Link href="/about" className="block py-2 px-3  hover:text-blue-600">About Us</Link></li>
            {/* <li><Link href="/contact" className="block py-2 px-3  hover:text-blue-600">Contact</Link></li> */}
            <li><Link href="/Products" className="block py-2 px-3  hover:text-blue-600">Products</Link></li>
          </ul>
        </div>
      </div>
      
      {dropdown && (
        <div onMouseLeave={() => setDropdown(false)} className=" bg-white  shadow-md mt-1 w-full md:w-auto">
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 :text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
          <ul aria-labelledby="mega-menu-full-dropdown-button">
  <li>
    <Link href="#" className="block p-3 rounded-lg hover:bg-purple-100 :hover:bg-gray-700">
      <div className="font-semibold">AI-Powered WhatsApp Store</div>
      <span className="text-sm text-gray-500 :text-gray-400">
        Sell products directly through WhatsApp with an intelligent AI-driven storefront.
      </span>
    </Link>
  </li>
  <li>
    <Link href="#" className="block p-3 rounded-lg hover:bg-purple-100 :hover:bg-gray-700">
      <div className="font-semibold">Smart Inventory Management</div>
      <span className="text-sm text-gray-500 :text-gray-400">
        Automate stock updates, track product availability, and get low-stock alerts.
      </span>
    </Link>
  </li>
  <li>
    <Link href="#" className="block p-3 rounded-lg hover:bg-purple-100 :hover:bg-gray-700">
      <div className="font-semibold">AI-Driven Marketing</div>
      <span className="text-sm text-gray-500 :text-gray-400">
        Run automated ad campaigns on WhatsApp, Facebook, and Instagram with AI-optimized targeting.
      </span>
    </Link>
  </li>
</ul>

<ul>
  <li>
    <Link href="#" className="block p-3 rounded-lg hover:bg-purple-100 :hover:bg-gray-700">
      <div className="font-semibold">Smart Order & Invoice Management</div>
      <span className="text-sm text-gray-500 :text-gray-400">
        Generate invoices, track payments, and manage orders effortlessly.
      </span>
    </Link>
  </li>
  <li>
    <Link href="#" className="block p-3 rounded-lg hover:bg-purple-100 :hover:bg-gray-700">
      <div className="font-semibold">Automated Customer Engagement</div>
      <span className="text-sm text-gray-500 :text-gray-400">
        AI-powered follow-ups, feedback collection, and personalized messages for customers.
      </span>
    </Link>
  </li>
  <li>
    <Link href="#" className="block p-3 rounded-lg hover:bg-purple-100 :hover:bg-gray-700">
      <div className="font-semibold">Loyalty & Retargeting System</div>
      <span className="text-sm text-gray-500 :text-gray-400">
        Reward returning customers and retarget past buyers with exclusive deals.
      </span>
    </Link>
  </li>
</ul>

<ul className="hidden md:block">
  <li>
    <Link href="#" className="block p-3 rounded-lg hover:bg-purple-100 :hover:bg-gray-700">
      <div className="font-semibold">AI-Based Customer Insights</div>
      <span className="text-sm text-gray-500 :text-gray-400">
        Get deep insights into customer behavior and purchasing trends.
      </span>
    </Link>
  </li>
  <li>
    <Link href="#" className="block p-3 rounded-lg hover:bg-purple-100 :hover:bg-gray-700">
      <div className="font-semibold">Multi-Platform Integration</div>
      <span className="text-sm text-gray-500 :text-gray-400">
        Seamlessly connect with Shopify, WooCommerce, and social media platforms.
      </span>
    </Link>
  </li>
  <li>
    <Link href="#" className="block p-3 rounded-lg hover:bg-purple-100 :hover:bg-gray-700">
      <div className="font-semibold">Business Growth Analytics</div>
      <span className="text-sm text-gray-500 :text-gray-400">
        Track your business performance with real-time AI-powered analytics.
      </span>
    </Link>
  </li>
</ul>

          </div>
        </div>
      )}
    </nav>
  );
}
