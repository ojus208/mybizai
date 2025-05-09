import React from 'react';
import Image from 'next/image';
import bg from '@/public/assets/logo.png';

export const metadata = {
  title: 'Terms & Conditions - MyBizzAI',
  description: 'Terms and Conditions for MyBizzAI Solutions LLP - Learn about our service terms and user agreements.',
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <Image src={bg} height={50} width={50} className="rounded-full" alt="MyBizzAI Logo" />
            <h1 className="text-3xl font-bold text-blue-500">Terms & Conditions</h1>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-300">
                By accessing and using MyBizzAI's services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">2. Services Description</h2>
              <p className="text-gray-300 mb-4">
                MyBizzAI Solutions LLP provides AI-powered business tools and services, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Business analysis tools</li>
                <li>AI-powered insights</li>
                <li>Data analytics services</li>
                <li>Business optimization solutions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">3. User Responsibilities</h2>
              <p className="text-gray-300 mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account</li>
                <li>Use the services in compliance with applicable laws</li>
                <li>Not misuse or abuse the services</li>
                <li>Not attempt to reverse engineer our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">4. Payment Terms</h2>
              <p className="text-gray-300 mb-4">
                Our payment terms include:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>All fees are non-refundable unless otherwise specified</li>
                <li>Subscription fees are billed in advance</li>
                <li>We reserve the right to modify our pricing with notice</li>
                <li>Payment is due immediately upon receipt of invoice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-300">
                All content, features, and functionality of our services are owned by MyBizzAI Solutions LLP and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-300">
                MyBizzAI Solutions LLP shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">7. Termination</h2>
              <p className="text-gray-300">
                We may terminate or suspend your access to our services immediately, without prior notice, for any breach of these Terms and Conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">8. Governing Law</h2>
              <p className="text-gray-300">
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">9. Contact Information</h2>
              <div className="text-gray-300">
                <p>MyBizzAI Solutions LLP</p>
                <p>Email: contact@mybizai.in</p>
                <p>Phone: +91 9165130008</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">10. Changes to Terms</h2>
              <p className="text-gray-300">
                We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms and Conditions on this page.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 