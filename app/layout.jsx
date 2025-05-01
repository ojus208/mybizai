import './globals.css'
import Footer from './components/footer'
import Navbar from './components/navbar'
import { Inter } from 'next/font/google'

// import favicon from '@/public/favicon.ico'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    metadataBase: new URL('https://mybizai.com'),
    title: 'BizAI - AI Solutions for Business Growth',
    description: 'Transform your business with AI-powered solutions. Get insights, automation tools, and expert guidance to scale your business efficiently.',
    keywords: 'AI business solutions, business automation, AI tools, business growth, digital transformation',
    openGraph: {
        title: 'BizAI - AI Solutions for Business Growth',
        description: 'Transform your business with AI-powered solutions. Get insights, automation tools, and expert guidance.',
        url: '/',
        siteName: 'BizAI',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'BizAI - AI Solutions for Business',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'BizAI - AI Solutions for Business Growth',
        description: 'Transform your business with AI-powered solutions.',
        images: ['/twitter-image.jpg'],
        creator: '@bizai',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code',
    },
    alternates: {
        canonical: '/',
        languages: {
            'en-US': '/en-US',
        },
    },
}

const Layout = ({children}) => {
  return (
    <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="UTF-8" />
            <link rel="icon" href="/icon.ico" />
        </head>
        <body className={inter.className}>
            <Navbar />
            
                {children}
            
            <Footer />
        </body>
    </html>
  )
}

export default Layout