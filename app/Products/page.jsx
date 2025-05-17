'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useMemo, useEffect, useCallback } from 'react';

const Page = () => {
    const [selectedIndustry, setSelectedIndustry] = useState('');
    const [selectedOperation, setSelectedOperation] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const scrollToForm = useCallback(() => {
        if (typeof window !== 'undefined') {
            const formSection = document.getElementById("ai-form-section");
            if (formSection) {
                formSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, []);

    useEffect(() => {
        // Client-side initialization
        if (typeof window !== 'undefined') {
            // Any client-side setup can go here
        }
    }, []);

    const products = [
        {
            id: 1,
            title: "AI Business Analyzer",
            description: "Get deep insights into your business performance with AI-powered analytics.",
            features: [
                "Real-time business metrics",
                "Predictive analytics",
                "Custom reporting",
                "Competitor analysis"
            ],
            icon: "📊",
            category: "analytics",
            featured: true,
            image: "/images/ai-analyzer-hero.png",
            industry: ["ecommerce", "services", "retail"],
            operation: ["analytics", "reporting"]
        },
        {
            id: 2,
            title: "AI Support Bot",
            description: "Automate customer support using AI chatbots and reduce manual efforts by 30%.",
            features: [
                "24/7 customer support",
                "Multilingual support",
                "Live chat integration",
                "Ticket management"
            ],
            icon: "🤖",
            category: "support",
            industry: ["ecommerce", "services"],
            operation: ["support", "automation"]
        },
        {
            id: 3,
            title: "AI Marketing Assistant",
            description: "Optimize your marketing campaigns with AI-driven insights and automation.",
            features: [
                "Campaign optimization",
                "Content generation",
                "Social media management",
                "Performance tracking"
            ],
            icon: "📈",
            category: "marketing",
            industry: ["ecommerce", "retail"],
            operation: ["marketing", "automation"]
        },
        {
            id: 4,
            title: "AI Inventory Manager",
            description: "Smart inventory management with predictive stock level optimization.",
            features: [
                "Stock prediction",
                "Automated reordering",
                "Inventory analytics",
                "Supplier management"
            ],
            icon: "📦",
            category: "inventory",
            industry: ["ecommerce", "retail", "logistics"],
            operation: ["inventory", "analytics"]
        },
        {
            id: 5,
            title: "AI Sales Predictor",
            description: "Forecast sales and optimize your revenue with AI-powered predictions.",
            features: [
                "Sales forecasting",
                "Lead scoring",
                "Customer segmentation",
                "Revenue optimization"
            ],
            icon: "💰",
            category: "sales",
            industry: ["ecommerce", "retail", "services"],
            operation: ["sales", "analytics"]
        },
        {
            id: 6,
            title: "AI Document Processor",
            description: "Automate document processing and data extraction with AI.",
            features: [
                "Document classification",
                "Data extraction",
                "Form processing",
                "Compliance checking"
            ],
            icon: "📄",
            category: "operations",
            industry: ["services", "logistics"],
            operation: ["operations", "automation"]
        }
    ];

    const categories = [
        { id: 'all', name: 'All Products' },
        { id: 'analytics', name: 'Analytics' },
        { id: 'support', name: 'Support' },
        { id: 'marketing', name: 'Marketing' },
        { id: 'inventory', name: 'Inventory' },
        { id: 'sales', name: 'Sales' },
        { id: 'operations', name: 'Operations' }
    ];

    // Filter products based on search query, category, industry, and operation
    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            // Search query filter
            const matchesSearch = searchQuery === '' || 
                product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.features.some(feature => feature.toLowerCase().includes(searchQuery.toLowerCase()));

            // Category filter
            const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;

            // Industry filter
            const matchesIndustry = selectedIndustry === '' || product.industry.includes(selectedIndustry);

            // Operation filter
            const matchesOperation = selectedOperation === '' || product.operation.includes(selectedOperation);

            return matchesSearch && matchesCategory && matchesIndustry && matchesOperation;
        });
    }, [searchQuery, selectedCategory, selectedIndustry, selectedOperation]);

    const featuredProduct = useMemo(() => {
        return filteredProducts.find(p => p.featured) || products.find(p => p.featured);
    }, [filteredProducts]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className="min-h-screen bg-black">
            {/* Hero Section */}
            <section className="w-full py-20 px-6 bg-gradient-to-b from-black via-red-500 to-black md:px-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 animate-gradient"></div>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-2xl"
                    >
                        <div className="text-sm bg-[#1F1F1F] border border-gray-700 rounded-full px-4 py-1 inline-block mb-4">
                            🚀 Explore AI Tools for Businesses
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
                            Discover AI Tools Tailored for Your Business
                        </h1>
                        <p className="text-gray-300 text-lg mb-8">
                            Browse our powerful AI tools designed to reduce costs, automate tasks, and scale smarter — by industry and need.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Featured Product */}
            {featuredProduct && (
                <section className="w-full px-6 md:px-12 mb-16">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            {/* Highlight Badge */}
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="bg-gradient-to-r from-blue-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg"
                                >
                                    Featured Product
                                </motion.div>
                            </div>

                            {/* Glowing Border Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-red-500 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
                            
                            <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border-2 border-transparent relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-red-500/20 rounded-2xl"></div>
                                <div className="grid md:grid-cols-2 gap-8 p-8 relative">
                                    <div className="flex flex-col justify-center">
                                        <motion.div 
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.3 }}
                                            className="text-5xl mb-6"
                                        >
                                            {featuredProduct.icon}
                                        </motion.div>
                                        <motion.h2 
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 }}
                                            className="text-3xl font-bold mb-4 text-white"
                                        >
                                            {featuredProduct.title}
                                        </motion.h2>
                                        <motion.p 
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 }}
                                            className="text-gray-300 mb-6"
                                        >
                                            {featuredProduct.description}
                                        </motion.p>
                                        <motion.ul 
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.6 }}
                                            className="space-y-3 mb-8"
                                        >
                                            {featuredProduct.features.map((feature, index) => (
                                                <li key={index} className="text-gray-300 flex items-center">
                                                    <span className="text-blue-500 mr-2">•</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </motion.ul>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.7 }}
                                        >
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="bg-gradient-to-r from-blue-500 to-red-500 text-white font-medium px-8 py-4 rounded-xl w-fit transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                                            >
                                                Get Started
                                            </motion.button>
                                        </motion.div>
                                    </div>
                                    <motion.div 
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.8 }}
                                        className="relative h-[400px] rounded-xl overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-red-500/10"></div>
                                        {/* <Image
                                            src={featuredProduct.image}
                                            alt={featuredProduct.title}
                                            fill
                                            className="object-cover"
                                            priority
                                        /> */}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Products Section */}
            <section id="ai-form-section" className="w-full py-16 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    {/* Search and Filter Bar */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-12"
                    >
                        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                            <div className="relative w-full md:w-96">
                                <svg
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-[#1a1a1a] border border-gray-700 text-gray-300 rounded-lg pl-12 pr-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                />
                            </div>
                            <div className="flex gap-4">
                                <select 
                                    value={selectedIndustry}
                                    onChange={(e) => setSelectedIndustry(e.target.value)}
                                    className="bg-[#1a1a1a] border border-gray-700 text-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                >
                                    <option value="">All Industries</option>
                                    <option value="ecommerce">E-commerce</option>
                                    <option value="services">Services</option>
                                    <option value="logistics">Logistics</option>
                                    <option value="retail">Retail</option>
                                </select>
                                <select 
                                    value={selectedOperation}
                                    onChange={(e) => setSelectedOperation(e.target.value)}
                                    className="bg-[#1a1a1a] border border-gray-700 text-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                >
                                    <option value="">All Operations</option>
                                    <option value="marketing">Marketing</option>
                                    <option value="support">Customer Support</option>
                                    <option value="inventory">Inventory Management</option>
                                    <option value="sales">Sales Automation</option>
                                </select>
                            </div>
                        </div>
                    </motion.div>

                    {/* Categories */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex flex-wrap gap-4 mb-12"
                    >
                        {categories.map((category) => (
                            <motion.button
                                key={category.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-2 rounded-full bg-[#1a1a1a] border ${
                                    selectedCategory === category.id 
                                        ? 'border-blue-500 text-blue-400' 
                                        : 'border-gray-700 text-gray-300 hover:border-blue-500 hover:text-blue-400'
                                } transition-all`}
                            >
                                {category.name}
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Product Cards */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProducts.filter(p => !p.featured).map((product) => (
                            <motion.div
                                key={product.id}
                                variants={itemVariants}
                                className="bg-[#1a1a1a] rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300 overflow-hidden group"
                            >
                                <div className="p-6">
                                    <div className="text-4xl mb-4">{product.icon}</div>
                                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                                        {product.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4">
                                        {product.description}
                                    </p>
                                    <ul className="space-y-2 mb-6">
                                        {product.features.map((feature, index) => (
                                            <li key={index} className="text-sm text-gray-300 flex items-center">
                                                <span className="text-blue-500 mr-2">•</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full bg-gradient-to-r from-blue-500 to-red-500 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                                    >
                                        Learn More
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* No Results Message */}
                    {filteredProducts.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-12"
                        >
                            <p className="text-gray-400 text-lg">
                                No products found matching your criteria. Try adjusting your filters.
                            </p>
                        </motion.div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Page;