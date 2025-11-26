import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  {
    name: 'ফ্রি',
    price: '৳০',
    period: '/আজীবন',
    features: [
      '১টি ব্রাঞ্চ',
      '১ জন ইউজার',
      '৫০টি পণ্য',
      'বেসিক রিপোর্টস',
    ],
    recommended: false
  },
  {
    name: 'স্টার্টার',
    price: '৳৫০০',
    period: '/মাস',
    features: [
      '১টি ব্রাঞ্চ',
      '২ জন ইউজার',
      'আনলিমিটেড পণ্য',
      'বেসিক রিপোর্টস',
      'এসএমএস ইনভয়েস'
    ],
    recommended: false
  },
  {
    name: 'প্রফেশনাল',
    price: '৳১,০০০',
    period: '/মাস',
    features: [
      '২টি ব্রাঞ্চ',
      '৫ জন ইউজার',
      'ইনভেন্টরি অ্যালার্ট',
      'ই-কমার্স ওয়েবসাইট',
      'অ্যাডভান্সড রিপোর্টস',
      'প্রায়োরিটি সাপোর্ট'
    ],
    recommended: true
  },
  {
    name: 'এন্টারপ্রাইজ',
    price: '৳২,৫০০',
    period: '/মাস',
    features: [
      'আনলিমিটেড ব্রাঞ্চ',
      'আনলিমিটেড ইউজার',
      'API অ্যাক্সেস',
      'ডেডিকেটেড ম্যানেজার',
      'কাস্টম ডোমেইন',
      '২৪/৭ ফোন সাপোর্ট'
    ],
    recommended: false
  }
];

const Pricing: React.FC = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-900/40 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-900/40 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">স্বচ্ছ মূল্য তালিকা</h2>
          <p className="text-xl text-gray-400 mb-8">লুকায়িত কোনো চার্জ নেই। যেকোনো সময় ক্যান্সেল করা যায়।</p>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm font-medium ${!annual ? 'text-white' : 'text-gray-500'}`}>মাসিক</span>
            <button 
              onClick={() => setAnnual(!annual)}
              className="relative w-14 h-8 bg-gray-700 rounded-full p-1 transition-colors duration-300 focus:outline-none"
            >
              <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${annual ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-sm font-medium ${annual ? 'text-white' : 'text-gray-500'}`}>
              বাৎসরিক <span className="text-primary-400 text-xs ml-1">(২ মাস ফ্রি)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl p-6 flex flex-col transition-all duration-300 ${
                plan.recommended 
                  ? 'bg-gradient-to-b from-gray-800 to-gray-900 border border-primary-500 shadow-2xl shadow-primary-900/20 transform scale-105 z-10' 
                  : 'bg-gray-800/50 border border-gray-700 hover:bg-gray-800'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold font-display tracking-tight">{plan.price}</span>
                  <span className="text-gray-400 ml-1 text-sm">{plan.period}</span>
                </div>
                <p className="mt-4 text-gray-400 text-sm h-10">
                  {plan.name === 'ফ্রি' ? 'ছোট ব্যবসার জন্য সেরা' : 
                   plan.name === 'এন্টারপ্রাইজ' ? 'বড় ব্যবসার সম্পূর্ণ সমাধান' : 'সবচেয়ে বেশি বিক্রিত প্যাকেজ'}
                </p>
              </div>

              <div className="w-full h-px bg-gray-700 mb-6"></div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-300">
                    <Check className="w-4 h-4 text-primary-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all ${
                  plan.recommended
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                }`}
              >
                বেছে নিন
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;