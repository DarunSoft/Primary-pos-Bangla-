import React, { useState } from 'react';
import { Pill, Monitor, ShoppingCart, Shirt, Store, Check, ArrowRight, ChevronRight } from 'lucide-react';

const industries = [
  {
    id: 'pharmacy',
    name: 'ফার্মেসী',
    icon: Pill,
    color: 'from-teal-500 to-cyan-600',
    bg: 'bg-teal-50',
    text: 'text-teal-600',
    border: 'border-teal-200',
    title: 'ফার্মেসী ম্যানেজমেন্ট',
    description: 'ওষুধের ব্যবসা এখন হবে আরও নিরাপদ ও স্মার্ট। জেনেরিক নাম ও মেয়াদ ট্র্যাকিং সহ পূর্ণাঙ্গ ফার্মেসী সলিউশন।',
    features: [
      'জেনেরিক নাম দিয়ে ওষুধ সার্চ',
      'মেয়াদোত্তীর্ণ ওষুধের অটো অ্যালার্ট',
      'ব্যাচ ওয়াইজ স্টক ম্যানেজমেন্ট',
      'পেশেন্ট ও প্রেসক্রিপশন রেকর্ড'
    ]
  },
  {
    id: 'electronics',
    name: 'ইলেকট্রনিক্স',
    icon: Monitor,
    color: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50',
    text: 'text-violet-600',
    border: 'border-violet-200',
    title: 'ইলেকট্রনিক্স ও মোবাইল শপ',
    description: 'আইএমইআই (IMEI) ও সিরিয়াল নাম্বার ট্র্যাকিং সহ ওয়ারেন্টি ম্যানেজমেন্ট এখন পানির মতো সহজ। সার্ভিসিং ও রিপেয়ারিং এর হিসাব রাখুন এক অ্যাপে।',
    features: [
      'সিরিয়াল/IMEI নাম্বার স্ক্যানিং',
      'ওয়ারেন্টি ও গ্যারান্টি ম্যানেজমেন্ট',
      'মোবাইল অ্যাপ দিয়ে সেলস মনিটরিং',
      'কিস্তি বা ইএমআই (EMI) কালেকশন'
    ]
  },
  {
    id: 'supershop',
    name: 'সুপার শপ',
    icon: ShoppingCart,
    color: 'from-green-500 to-emerald-600',
    bg: 'bg-green-50',
    text: 'text-green-600',
    border: 'border-green-200',
    title: 'সুপার শপ ও গ্রোসারি',
    description: 'হাজার হাজার পণ্যের ইনভেন্টরি সামলান স্মার্টলি। ফাস্ট চেকআউট ও বারকোড স্ক্যানিং এর মাধ্যমে কাস্টমার লাইন ছোট রাখুন।',
    features: [
      'সুপার ফাস্ট বারকোড বিলিং',
      'শেলফ ও র‍্যাক ম্যানেজমেন্ট',
      'মেয়াদোত্তীর্ণ পণ্যের অ্যালার্ট',
      'মাল্টি-কাউন্টার সাপোর্ট'
    ]
  },
  {
    id: 'boutique',
    name: 'বুটিক',
    icon: Shirt,
    color: 'from-pink-500 to-rose-500',
    bg: 'bg-pink-50',
    text: 'text-pink-600',
    border: 'border-pink-200',
    title: 'ফ্যাশন ও বুটিক',
    description: 'ট্রেন্ডি কালেকশন ম্যানেজ করুন সহজে। কালার, সাইজ ও ভেরিয়েন্ট অনুযায়ী স্টক মেইনটেইন করুন নির্ভুলভাবে।',
    features: [
      'কালার-সাইজ ম্যাট্রিক্স ইনভেন্টরি',
      'কাস্টম বারকোড ও ট্যাগ প্রিন্টিং',
      'কাস্টমার লয়্যালটি ও মেম্বারশিপ',
      'এক্সচেঞ্জ ও রিটার্ন পলিসি'
    ]
  },
  {
    id: 'retail',
    name: 'রিটেইল স্টোর',
    icon: Store,
    color: 'from-blue-500 to-indigo-600',
    bg: 'bg-blue-50',
    text: 'text-blue-600',
    border: 'border-blue-200',
    title: 'জেনারেল রিটেইল স্টোর',
    description: 'ছোট বা মাঝারি যেকোনো দোকানের প্রতিদিনের বেচা-কেনা ও লাভের হিসাব রাখার সবচেয়ে সহজ সমাধান।',
    features: [
      'এক ক্লিকে দৈনিক লাভ-ক্ষতির রিপোর্ট',
      'মোবাইল অ্যাপ দিয়ে ব্যবসা নিয়ন্ত্রণ',
      'সহজ ক্যাশ কাউন্টার ম্যানেজমেন্ট',
      'কাস্টমার ও সাপ্লায়ার বাকি খাতা'
    ]
  }
];

const Industries: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gray-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary-50 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">ব্যবহার ক্ষেত্র</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            প্রতিটি ব্যবসার জন্য <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">আলাদা সমাধান</span>
          </h3>
          <p className="text-xl text-gray-600">
            আপনার ব্যবসার ধরণ অনুযায়ী কাস্টমাইজড ফিচার। বেছে নিন আপনার ক্যাটাগরি।
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Navigation Tabs */}
          <div className="lg:w-1/3 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-3 pb-4 lg:pb-0 scrollbar-hide">
            {industries.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 min-w-[200px] lg:min-w-0 text-left border ${
                  activeTab === index
                    ? `bg-white shadow-lg ${item.border} border-l-4 border-l-${item.text.split('-')[1]}-500`
                    : 'bg-gray-50 border-transparent hover:bg-gray-100 text-gray-600'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                  activeTab === index ? `${item.bg} ${item.text}` : 'bg-gray-200 text-gray-500'
                }`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`font-bold ${activeTab === index ? 'text-gray-900' : 'text-gray-600'}`}>
                    {item.name}
                  </h4>
                  {activeTab === index && (
                    <span className="text-xs text-gray-500 hidden lg:block">ক্লিক করে বিস্তারিত দেখুন</span>
                  )}
                </div>
                {activeTab === index && (
                   <ChevronRight className={`ml-auto w-5 h-5 ${item.text} hidden lg:block`} />
                )}
              </button>
            ))}
          </div>

          {/* Active Content Display */}
          <div className="lg:w-2/3">
            <div className="relative bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl overflow-hidden h-full">
              {/* Dynamic Background Gradient */}
              <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${industries[activeTab].color} opacity-5 blur-[100px] rounded-full -mr-20 -mt-20`}></div>
              
              <div className="relative z-10 animate-fade-in">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${industries[activeTab].bg} ${industries[activeTab].text} font-medium text-sm mb-6`}>
                   {React.createElement(industries[activeTab].icon, { className: "w-4 h-4" })}
                   {industries[activeTab].name} স্পেশাল এডিশন
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {industries[activeTab].title}
                </h3>
                
                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                  {industries[activeTab].description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {industries[activeTab].features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 group">
                      <div className={`mt-1 flex-shrink-0 w-6 h-6 rounded-full ${industries[activeTab].bg} flex items-center justify-center`}>
                        <Check className={`w-3.5 h-3.5 ${industries[activeTab].text}`} />
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
                  <button className={`flex items-center justify-center gap-2 bg-gradient-to-r ${industries[activeTab].color} text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-gray-200 hover:shadow-xl hover:opacity-90 transition-all transform hover:-translate-y-1`}>
                    ডেমো দেখুন
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors">
                    ফিচার লিস্ট ডাউনলোড করুন
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;