import React from 'react';
import Image from 'next/image';
import bg from '@/public/assets/logo.png';

export const metadata = {
  title: 'Privacy Policy - MyBizzAI',
  description: 'Privacy Policy for MyBizzAI Solutions LLP - Learn how we protect your data and privacy.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <Image src={bg} height={50} width={50} className="rounded-full" alt="MyBizzAI Logo" />
            <h1 className="text-3xl font-bold text-blue-500">Privacy Policy</h1>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">1. Introduction</h2>
              <p className="text-gray-300">
                MyBizzAI Solutions LLP ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI business tools and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">2. Information We Collect</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-blue-300">2.1 Personal Information</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Name and contact information</li>
                  <li>Email address</li>
                  <li>Business information</li>
                  <li>Payment details</li>
                  <li>Usage data and analytics</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-300 mb-4">
                We use the collected information for various purposes:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>To provide and maintain our services</li>
                <li>To improve and personalize user experience</li>
                <li>To process payments and prevent fraud</li>
                <li>To communicate with you about our services</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">4. Data Security</h2>
              <p className="text-gray-300">
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">5. Your Rights</h2>
              <p className="text-gray-300 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">6. Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 text-gray-300">
                <p>MyBizzAI Solutions LLP</p>
                <p>Email: contact@mybizai.in</p>
                <p>Phone: +91 9165130008</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">7. Updates to This Policy</h2>
              <p className="text-gray-300">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 