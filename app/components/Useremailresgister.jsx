"use client";
import { useState, useEffect } from "react";
import { db } from "../api/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'success' 
    ? 'bg-green-500' 
    : type === 'error' 
    ? 'bg-red-500' 
    : 'bg-blue-500';

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in">
      <div className={`${bgColor} text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2`}>
        {type === 'success' && (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        )}
        {type === 'error' && (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
        {type === 'loading' && (
          <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        )}
        <p className="font-medium">{message}</p>
      </div>
    </div>
  );
};

export default function Useremailresgister() {
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState(null);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    
    if (newEmail.length > 0) {
      setIsValidEmail(validateEmail(newEmail));
    } else {
      setIsValidEmail(true); // Reset validation when empty
    }
  };

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      showToast("Please enter a valid email address", "error");
      setIsValidEmail(false);
      return;
    }

    // Check for common disposable email domains
    const disposableDomains = ['tempmail.com', 'throwaway.com', 'mailinator.com'];
    const emailDomain = email.split('@')[1];
    if (disposableDomains.some(domain => emailDomain.includes(domain))) {
      showToast("Please use a valid non-disposable email address", "error");
      return;
    }

    showToast("Submitting...", "loading");

    try {
      await addDoc(collection(db, "emails"), {
        email,
        createdAt: serverTimestamp(),
      });
      showToast("✨ Successfully subscribed!", "success");
      setEmail("");
      setIsValidEmail(true);
    } catch (err) {
      console.error("Error adding document:", err);
      if (err.code === "permission-denied") {
        showToast("Server configuration error. Please contact support.", "error");
      } else {
        showToast("Failed to submit email. Please try again later.", "error");
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">   
        <label htmlFor="default-email" className="mb-2 text-sm font-medium text-gray-900 sr-only className:text-white">Email sign-up</label>
        <div className="relative">
          <div className="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg className={`w-4 h-4 ${isValidEmail ? 'text-gray-500' : 'text-red-500'} className:text-gray-400`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
            </svg>
          </div>
          <input 
            type="email" 
            value={email}
            onChange={handleEmailChange}
            onBlur={() => email.length > 0 && setIsValidEmail(validateEmail(email))}
            id="default-email" 
            className={`block w-full p-4 ps-10 text-sm text-gray-900 border ${
              !isValidEmail 
                ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
            } rounded-lg bg-white className:bg-gray-800 className:border-gray-700 className:placeholder-gray-400 className:text-white`}
            placeholder="Enter your email...." 
            required 
          />
          <button 
            type="submit" 
            className={`text-white absolute end-2.5 bottom-2.5 ${
              isValidEmail 
                ? 'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300' 
                : 'bg-gray-400 cursor-not-allowed'
            } focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2`}
            disabled={!isValidEmail}
          >
            Get Started
          </button>
        </div>
        {!isValidEmail && email.length > 0 && (
          <p className="mt-2 text-sm text-red-500">Please enter a valid email address</p>
        )}
      </form>
      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast(null)} 
        />
      )}
    </>
  );
}
