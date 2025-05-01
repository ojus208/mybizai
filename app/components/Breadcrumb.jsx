'use client'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

const Breadcrumb = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="w-full max-w-screen-xl mx-auto px-4 py-3">
      <ol className="flex items-center space-x-2 text-gray-400" itemScope itemType="https://schema.org/BreadcrumbList">
        <li className="inline-flex items-center" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-white">
            <Home className="w-4 h-4 mr-2" />
            Home
          </Link>
          <meta itemProp="position" content="1" />
        </li>
        
        {items.map((item, index) => (
          <li key={item.path} className="inline-flex items-center" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <ChevronRight className="w-5 h-5 text-gray-500" />
            {index === items.length - 1 ? (
              <span className="ml-2 text-sm font-medium text-gray-200" itemProp="name">
                {item.label}
              </span>
            ) : (
              <Link 
                href={item.path}
                className="ml-2 text-sm font-medium text-gray-300 hover:text-white"
                itemProp="item"
              >
                <span itemProp="name">{item.label}</span>
              </Link>
            )}
            <meta itemProp="position" content={index + 2} />
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumb 