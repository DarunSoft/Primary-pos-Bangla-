import React, { useState, useRef } from 'react';
import { Pill, Monitor, ShoppingCart, Shirt, Store, Check, ArrowRight, ChevronRight } from 'lucide-react';

const industries = [
  {
    id: 'pharmacy',
    name: 'ফার্মেসী',
    icon: Pill,
    gradient: 'from-teal-500 to-cyan-600',
    bg: 'bg-teal-50',
    text: 'text-teal-600',
    border: 'border-teal-200',
    activeBorder: 'border-l-teal-500',
    shadow: 'shadow-teal-100',
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
    gradient: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50',
    text: 'text-violet-600',
    border: 'border-violet-200',
    activeBorder: 'border-l-violet-500',
    shadow: 'shadow-violet-100',
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
    gradient: 'from-green-500 to-emerald-600',
    bg: 'bg-green-50',
    text: 'text-green-600',
    border: 'border-green-200',
    activeBorder: 'border-l-green-500',
    shadow: 'shadow-green-100',
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
    gradient: 'from-pink-500 to-rose-500',
    bg: 'bg-pink-50',
    text: 'text-pink-600',
    border: 'border-pink-200',
    activeBorder: 'border-l-pink-500',
    shadow: 'shadow-pink-100',
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
    gradient: 'from-blue-500 to-indigo-600',
    bg: 'bg-blue-50',
    text: 'text-blue-600',
    border: 'border-blue-200',
    activeBorder: 'border-l-blue-500',
    shadow: 'shadow-blue-100',
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    
    // Modern smooth scroll implementation for mobile
    if (tabRefs.current[index]) {
      tabRefs.current[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  };

  return (
    <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-gray-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-50 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-2">ব্যবহার ক্ষেত্র</h2>
          <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            প্রতিটি ব্যবসার জন্য <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">আলাদা সমাধান</span>
          </h3>
          <p className="text-lg text-gray-600">
            আপনার ব্যবসার ধরণ অনুযায়ী কাস্টমাইজড ফিচার।
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          {/* Navigation Tabs */}
          <div 
            ref={scrollContainerRef}
            className="lg:w-1/3 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-2 lg:pb-0 scrollbar-hide snap-x px-1"
          >
            {industries.map((item, index) => (
              <button
                key={item.id}
                ref={el => tabRefs.current[index] = el}
                onClick={() => handleTabClick(index)}
                className={`snap-center flex-shrink-0 flex items-center gap-3 p-3 md:p-4 rounded-xl transition-all duration-300 ease-out min-w-[200px] lg:min-w-0 text-left border group relative overflow-hidden ${
                  activeTab === index
                    ? `bg-white shadow-md ${item.shadow} ${item.border} border-l-4 ${item.activeBorder} transform scale-[1.01] z-10`
                    : 'bg-gray-50/80 border-transparent hover:bg-gray-100 text-gray-600'
                }`}
              >
                {/* Active Indicator Background */}
                {activeTab === index && (
                  <div className={`absolute inset-0 opacity-10 ${item.bg} transition-opacity duration-300`}></div>
                )}

                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 relative z-10 ${
                  activeTab === index ? `${item.bg} ${item.text}` : 'bg-gray-200 text-gray-500 group-hover:bg-gray-300'
                }`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="relative z-10 flex-1">
                  <h4 className={`font-bold text-sm md:text-base transition-colors ${activeTab === index ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'}`}>
                    {item.name}
                  </h4>
                  {activeTab === index && (
                    <span className="text-[10px] text-gray-500 hidden lg:block animate-fade-in mt-0.5">ক্লিক করে বিস্তারিত দেখুন</span>
                  )}
                </div>
                {activeTab === index && (
                   <ChevronRight className={`ml-auto w-4 h-4 ${item.text} hidden lg:block animate-slide-in-right`} />
                )}
              </button>
            ))}
          </div>

          {/* Active Content Display */}
          <div className="lg:w-2/3">
            <div className="relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-100 shadow-xl overflow-hidden min-h-[400px]">
              {/* Dynamic Background Gradient */}
              <div 
                key={`bg-${activeTab}`}
                className={`absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br ${industries[activeTab].gradient} opacity-5 blur-[80px] rounded-full -mr-10 -mt-10 transition-all duration-500 animate-pulse-slow`}
              ></div>
              
              <div key={`content-${activeTab}`} className="relative z-10 animate-slide-up">
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${industries[activeTab].bg} ${industries[activeTab].text} font-medium text-xs mb-4 shadow-sm border border-transparent`}>
                   {React.createElement(industries[activeTab].icon, { className: "w-3.5 h-3.5" })}
                   {industries[activeTab].name} স্পেশাল
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
                  {industries[activeTab].title}
                </h3>
                
                <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                  {industries[activeTab].description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-8">
                  {industries[activeTab].features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-2.5 group p-2.5 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
                      style={{ animationDelay: `${idx * 75}ms` }}
                    >
                      <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full ${industries[activeTab].bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Check className={`w-3 h-3 ${industries[activeTab].text}`} />
                      </div>
                      <span className="text-sm md:text-base text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                  <button className={`flex items-center justify-center gap-2 bg-gradient-to-r ${industries[activeTab].gradient} text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md shadow-gray-200 hover:shadow-lg hover:opacity-95 transition-all transform hover:-translate-y-0.5`}>
                    ডেমো দেখুন
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-gray-50 hover:border-gray-300 transition-all">
                    ফিচার লিস্ট
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