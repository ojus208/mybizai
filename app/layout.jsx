import './globals.css'
import Footer from './components/footer'
import Navbar from './components/navbar'

// import favicon from '@/public/favicon.ico'
import Link from 'next/link'


export const metadata = {
    title: 'MyBizAI Homepage',
    keywords: 'MyBizAI, homepage, layout',
    description: ' MyBizAI- AI powered business solutions',
    authors: [{ name: 'MyBizAI', url: 'https://mybizai.in' }],
}

const Layout = ({children}) => {
  return (
    <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="UTF-8" />
            <link rel="icon" href="/icon.ico" />
        </head>
        <body >
            <Navbar />
            
                {children}
            
            <Footer />
        </body>
    </html>
  )
}

export default Layout