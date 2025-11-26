import React from 'react';
import { 
  ScanLine, 
  BarChart3, 
  Smartphone, 
  Globe, 
  Users, 
  ShieldCheck,
  Zap,
  Printer
} from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-accent-50 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">কেন আমরা অনন্য?</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            একটি প্ল্যাটফর্ম,<br/>অসংখ্য সম্ভাবনা
          </h3>
          <p className="text-xl text-gray-600 leading-relaxed">
            সনাতন পদ্ধতির খাতা-কলম বা জটিল সফটওয়্যার বাদ দিন। POSPH আপনাকে দিচ্ছে এমন এক অভিজ্ঞতা যা আপনার ব্যবসার ধরন বদলে দেবে।
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-auto gap-6">
          
          {/* Feature 1: Large Card - Inventory */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-primary-100 hover:shadow-xl transition-all duration-300 group overflow-hidden relative">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">স্মার্ট ইনভেন্টরি</h4>
              <p className="text-gray-600 mb-8 max-w-sm">স্টকের রিয়েল-টাইম আপডেট। কোন পণ্য শেষ হয়ে যাচ্ছে তার অটোমেটিক অ্যালার্ট পান এবং লস কমান।</p>
            </div>
            {/* Abstract UI representation */}
            <div className="absolute bottom-0 right-0 w-3/4 translate-x-12 translate-y-12 bg-white rounded-tl-2xl shadow-2xl p-6 border border-gray-100">
               <div className="space-y-3">
                 <div className="flex justify-between items-center pb-2 border-b border-gray-50">
                    <div className="h-2 w-24 bg-gray-200 rounded"></div>
                    <div className="h-2 w-8 bg-green-200 rounded"></div>
                 </div>
                 <div className="flex justify-between items-center pb-2 border-b border-gray-50">
                    <div className="h-2 w-20 bg-gray-200 rounded"></div>
                    <div className="h-2 w-8 bg-red-200 rounded"></div>
                 </div>
                 <div className="flex justify-between items-center">
                    <div className="h-2 w-28 bg-gray-200 rounded"></div>
                    <div className="h-2 w-8 bg-green-200 rounded"></div>
                 </div>
               </div>
            </div>
          </div>

          {/* Feature 2: Tall Card - Mobile App */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 row-span-2 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3">মোবাইল অ্যাপ</h4>
              <p className="text-gray-300 text-sm">দোকানে না থেকেও ব্যবসার খোঁজ রাখুন। সেলস মনিটর করুন যেকোনো জায়গা থেকে।</p>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-64 bg-gray-800 rounded-t-3xl border-t-4 border-x-4 border-gray-700 shadow-2xl transform translate-y-12 transition-transform duration-500 group-hover:translate-y-8">
               <div className="p-4 space-y-2">
                  <div className="w-full h-24 bg-gray-700 rounded-lg opacity-50"></div>
                  <div className="w-full h-8 bg-gray-700 rounded-lg opacity-50"></div>
               </div>
            </div>
          </div>

          {/* Feature 3: Standard Card - POS */}
          <div className="col-span-1 bg-primary-50 rounded-3xl p-8 border border-primary-100 hover:shadow-lg transition-all duration-300">
            <ScanLine className="w-8 h-8 text-primary-600 mb-4" />
            <h4 className="text-lg font-bold text-gray-900 mb-2">দ্রুত ইনভয়েসিং</h4>
            <p className="text-sm text-gray-600">বারকোড স্ক্যানার সাপোর্ট সহ মাত্র কয়েক ক্লিকেই ইনভয়েস।</p>
          </div>

          {/* Feature 4: Standard Card - E-commerce */}
          <div className="col-span-1 bg-accent-50 rounded-3xl p-8 border border-accent-100 hover:shadow-lg transition-all duration-300">
            <Globe className="w-8 h-8 text-accent-600 mb-4" />
            <h4 className="text-lg font-bold text-gray-900 mb-2">ফ্রি ওয়েবসাইট</h4>
            <p className="text-sm text-gray-600">আপনার পণ্যের জন্য অটোমেটিক একটি অনলাইন স্টোর।</p>
          </div>

          {/* Feature 5: Wide Card - Reporting */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6 items-center">
             <div className="flex-1">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6 text-orange-600">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">টিম ম্যানেজমেন্ট</h4>
                <p className="text-gray-600 text-sm">কর্মচারীদের জন্য আলাদা এক্সেস লেভেল তৈরি করুন এবং তাদের পারফরম্যান্স ও হাজিরা ট্র্যাক করুন।</p>
             </div>
             <div className="flex-1 w-full bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3 mb-3 pb-3 border-b border-gray-200">
                   <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                   <div className="flex-1">
                      <div className="h-2 w-24 bg-gray-300 rounded mb-1"></div>
                      <div className="h-2 w-16 bg-gray-200 rounded"></div>
                   </div>
                   <div className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">Active</div>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                   <div className="flex-1">
                      <div className="h-2 w-24 bg-gray-300 rounded mb-1"></div>
                      <div className="h-2 w-16 bg-gray-200 rounded"></div>
                   </div>
                   <div className="text-xs font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded">Offline</div>
                </div>
             </div>
          </div>

          {/* Feature 6: Small Card */}
          <div className="col-span-1 bg-white rounded-3xl p-8 border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300">
            <ShieldCheck className="w-8 h-8 text-green-600 mb-4" />
            <h4 className="text-lg font-bold text-gray-900 mb-2">১০০% নিরাপদ</h4>
            <p className="text-sm text-gray-600">ক্লাউড ব্যাকআপ, তাই ডিভাইস হারালেও ডাটা হারাবে না।</p>
          </div>
          
           {/* Feature 7: Small Card */}
           <div className="col-span-1 bg-white rounded-3xl p-8 border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300">
            <Printer className="w-8 h-8 text-blue-600 mb-4" />
            <h4 className="text-lg font-bold text-gray-900 mb-2">POS প্রিন্টার</h4>
            <p className="text-sm text-gray-600">যেকোনো থার্মাল প্রিন্টার বা সাধারণ প্রিন্টারে রসিদ দিন।</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;