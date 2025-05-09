import React from 'react';
import Image from 'next/image';
import bg from '@/public/assets/logo.png';

export const metadata = {
  title: 'Fraud Alert - MyBizzAI',
  description: 'Learn about fraud prevention and how to report suspicious activities related to MyBizzAI services.',
};

export default function FraudAlert() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <Image src={bg} height={50} width={50} className="rounded-full" alt="MyBizzAI Logo" />
            <h1 className="text-3xl font-bold text-blue-500">Fraud Alert</h1>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">Important Notice</h2>
              <p className="text-gray-300">
                MyBizzAI Solutions LLP is committed to protecting our users from fraudulent activities. This page provides information about common fraud schemes and how to report suspicious activities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">Common Fraud Schemes</h2>
              <div className="space-y-4">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-medium text-blue-300 mb-3">1. Phishing Attempts</h3>
                  <p className="text-gray-300 mb-2">Be aware of:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Emails pretending to be from MyBizzAI asking for sensitive information</li>
                    <li>Fake websites mimicking our official site</li>
                    <li>Unsolicited requests for login credentials</li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-medium text-blue-300 mb-3">2. Payment Fraud</h3>
                  <p className="text-gray-300 mb-2">Warning signs:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Requests for payment through unofficial channels</li>
                    <li>Offers of services at unusually low prices</li>
                    <li>Requests for advance payments for services</li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-medium text-blue-300 mb-3">3. Account Takeover</h3>
                  <p className="text-gray-300 mb-2">Protect yourself by:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Using strong, unique passwords</li>
                    <li>Enabling two-factor authentication</li>
                    <li>Regularly monitoring account activity</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">How to Report Fraud</h2>
              <div className="bg-gray-800 p-6 rounded-lg">
                <p className="text-gray-300 mb-4">
                  If you suspect fraudulent activity or have been a victim of fraud, please:
                </p>
                <ol className="list-decimal list-inside text-gray-300 space-y-2">
                  <li>Immediately contact our support team</li>
                  <li>Provide all relevant details and evidence</li>
                  <li>Do not delete any suspicious communications</li>
                  <li>Change your account password if compromised</li>
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">Contact Information</h2>
              <div className="bg-gray-800 p-6 rounded-lg">
                <p className="text-gray-300 mb-4">For immediate assistance, contact us through our official channels:</p>
                <div className="space-y-2 text-gray-300">
                  <p>Email: security@mybizai.in</p>
                  <p>Phone: +91 9165130008</p>
                  <p>Business Hours: Monday to Friday, 9:00 AM to 6:00 PM IST</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">Prevention Tips</h2>
              <div className="bg-gray-800 p-6 rounded-lg">
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Always verify the sender's email address</li>
                  <li>Never share your login credentials</li>
                  <li>Use official MyBizzAI channels for communication</li>
                  <li>Keep your software and security tools updated</li>
                  <li>Regularly review your account activity</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">Legal Action</h2>
              <p className="text-gray-300">
                MyBizzAI Solutions LLP takes fraud seriously and will take appropriate legal action against perpetrators. We cooperate with law enforcement agencies to investigate and prosecute fraud cases.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 