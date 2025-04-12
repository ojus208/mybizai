'use client'
import { useState } from 'react';
import { BotIcon, DollarSign, Zap, Smile, Send } from 'lucide-react';
import { motion } from 'framer-motion';


const ChatBubble = ({ message, type = 'bot' }) => {
  const baseStyles =
    'p-4 rounded-2xl max-w-xl mb-2 text-sm';
  const alignment =
    type === 'user' ? 'ml-auto bg-blue-600 text-white' : 'bg-gray-800 text-white';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`${baseStyles} ${alignment}`}
    >
      {message}
    </motion.div>
  );
};

const ImpactCard = () => (
  <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md mt-4 flex gap-6 items-center justify-between text-sm">
    <div className="flex items-center gap-2">
      <DollarSign className="text-green-500" />
      Save 25+ hrs/month
    </div>
    <div className="flex items-center gap-2">
      <Zap className="text-yellow-400" />
      2x faster responses
    </div>
    <div className="flex items-center gap-2">
      <Smile className="text-pink-400" />
      +35% customer satisfaction
    </div>
  </div>
);

export default function AIInsightChat() {
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hey! Here's what I found based on your business info." },
    { type: 'bot', text: "You're likely spending a lot of time manually responding to customer queries." },
    { type: 'bot', text: "By using our AI chatbot, you can automate up to 70% of those queries." },
  ]);

  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { type: 'user', text: input };
    const botReply = { type: 'bot', text: "That's a great question! Here's how we can help..." }; // Replace with real AI logic

    setMessages((prev) => [...prev, userMsg]);
    setTimeout(() => setMessages((prev) => [...prev, botReply]), 1000);
    setInput('');
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-100 dark:bg-gray-950 rounded-xl shadow-lg">
      <div className="text-lg font-semibold mb-4 flex items-center gap-2">
        <BotIcon className="text-blue-500" />
        <span>AI Business Insights</span>
      </div>
      <div className="mb-4 max-h-[400px] overflow-y-auto pr-2">
        {messages.map((msg, idx) => (
          <ChatBubble key={idx} message={msg.text} type={msg.type} />
        ))}
        <ImpactCard />
      </div>
      <div className="flex gap-2 mt-4">
        <input
          type="text"
          className="flex-1 p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm"
          placeholder="Ask the AI something about your business..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend} className="bg-blue-600 text-white">
          <Send size={16} />
        </button>
      </div>
    </div>
  );
}
