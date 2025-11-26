import React from 'react';
import { 
  ScanLine, 
  BarChart3, 
  Smartphone, 
  Globe, 
  Users, 
  ShieldCheck,
  Calculator,
  Warehouse,
  ArrowRightLeft,
  FileText
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
            ব্যবসার সব হিসাব<br/>এখন এক জায়গায়
          </h3>
          <p className="text-xl text-gray-600 leading-relaxed">
            শুধু বেচা-কেনা নয়, POSPH আপনার পুরো ব্যবসার অপারেটিং সিস্টেম। ইনভেন্টরি, হিসাব, ওয়্যারহাউস এবং বাকি খাতা ম্যানেজ করুন স্মার্টলি।
          </p>
        </div>

        {/* Bento Grid Layout - Updated for POSpro Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-auto gap-6">
          
          {/* Feature 1: Large Card - Accounting & P/L */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-primary-100 hover:shadow-xl transition-all duration-300 group overflow-hidden relative">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <Calculator className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">হিসাব ও লাভ-ক্ষতি</h4>
              <p className="text-gray-600 mb-8 max-w-sm">
                দিনশেষে কত টাকা লাভ হলো তা আর ক্যালকুলেটরে হিসাব করতে হবে না। ইনকাম, এক্সপেন্স এবং প্রফিট-লস রিপোর্ট দেখুন এক ক্লিকে।
              </p>
            </div>
            {/* Abstract UI representation of Profit/Loss Chart */}
            <div className="absolute bottom-0 right-0 w-3/4 translate-x-12 translate-y-8 bg-white rounded-tl-2xl shadow-2xl p-6 border border-gray-100">
               <div className="flex items-end justify-between gap-4 h-32 px-4 pb-4 border-b border-gray-50">
                  <div className="w-full bg-green-100 rounded-t h-[60%] relative group-hover:bg-green-200 transition-colors">
                    <div className="absolute bottom-0 w-full bg-green-500 h-[40%] rounded-t opacity-80"></div>
                  </div>
                  <div className="w-full bg-red-100 rounded-t h-[40%] relative group-hover:bg-red-200 transition-colors">
                    <div className="absolute bottom-0 w-full bg-red-500 h-[60%] rounded-t opacity-80"></div>
                  </div>
                  <div className="w-full bg-purple-100 rounded-t h-[80%] relative group-hover:bg-purple-200 transition-colors">
                     <div className="absolute bottom-0 w-full bg-purple-500 h-[50%] rounded-t opacity-80"></div>
                  </div>
               </div>
               <div className="flex justify-between pt-4 text-xs font-bold text-gray-400">
                 <span>Income</span>
                 <span>Expense</span>
                 <span>Profit</span>
               </div>
            </div>
          </div>

          {/* Feature 2: Tall Card - Mobile & Due Management */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 row-span-2 bg-gradient-to-br from-red-900 to-red-800 rounded-3xl p-8 text-white relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3">বাকি খাতা</h4>
              <p className="text-gray-300 text-sm mb-6">কাস্টমার এবং সাপ্লায়ারদের বকেয়া টাকার হিসাব রাখুন।</p>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-red-100">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div> Customer Due
                </li>
                <li className="flex items-center gap-2 text-sm text-red-100">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div> Supplier Due
                </li>
                <li className="flex items-center gap-2 text-sm text-red-100">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div> Due Reminders
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 3: Standard Card - Warehouse */}
          <div className="col-span-1 bg-blue-50 rounded-3xl p-8 border border-blue-100 hover:shadow-lg transition-all duration-300">
            <Warehouse className="w-8 h-8 text-blue-600 mb-4" />
            <h4 className="text-lg font-bold text-gray-900 mb-2">গুদাম ও ট্রান্সফার</h4>
            <p className="text-sm text-gray-600">একাধিক ওয়্যারহাউস ম্যানেজ করুন এবং প্রোডাক্ট ট্রান্সফার করুন সহজে।</p>
          </div>

          {/* Feature 4: Standard Card - Purchases & Returns */}
          <div className="col-span-1 bg-orange-50 rounded-3xl p-8 border border-orange-100 hover:shadow-lg transition-all duration-300">
            <ArrowRightLeft className="w-8 h-8 text-orange-600 mb-4" />
            <h4 className="text-lg font-bold text-gray-900 mb-2">ক্রয় ও রিটার্ন</h4>
            <p className="text-sm text-gray-600">সাপ্লায়ার থেকে পণ্য কেনা এবং রিটার্ন এর সম্পূর্ণ ট্র্যাকিং।</p>
          </div>

          {/* Feature 5: Wide Card - POS & Sales */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6 items-center">
             <div className="flex-1">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 text-purple-600">
                  <ScanLine className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">ফাস্ট সেলস (POS)</h4>
                <p className="text-gray-600 text-sm">বারকোড স্ক্যানার সাপোর্ট সহ সুপার ফাস্ট ইনভয়েসিং। মাউস ছাড়াই সম্পূর্ণ কি-বোর্ড শর্টকাট ব্যবহার করে বিল করুন।</p>
             </div>
             <div className="flex-1 w-full bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div className="flex justify-between items-center mb-2">
                   <div className="text-xs font-bold text-gray-500">Cart Items</div>
                   <div className="text-xs font-bold text-purple-600">Total: ৳5,400</div>
                </div>
                <div className="space-y-2">
                  <div className="bg-white p-2 rounded border border-gray-100 flex justify-between">
                     <span className="text-xs font-medium">Wireless Mouse</span>
                     <span className="text-xs text-gray-500">x2</span>
                  </div>
                  <div className="bg-white p-2 rounded border border-gray-100 flex justify-between">
                     <span className="text-xs font-medium">Mechanical Keyboard</span>
                     <span className="text-xs text-gray-500">x1</span>
                  </div>
                  <div className="bg-purple-600 text-white p-2 rounded text-center text-xs font-bold mt-2">
                    PAY NOW
                  </div>
                </div>
             </div>
          </div>

          {/* Feature 6: Small Card */}
          <div className="col-span-1 bg-white rounded-3xl p-8 border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300">
            <BarChart3 className="w-8 h-8 text-primary-600 mb-4" />
            <h4 className="text-lg font-bold text-gray-900 mb-2">সেলস টার্গেট</h4>
            <p className="text-sm text-gray-600">মাসিক সেলস টার্গেট সেট করুন এবং গ্রোথ মনিটর করুন।</p>
          </div>
          
           {/* Feature 7: Small Card */}
           <div className="col-span-1 bg-white rounded-3xl p-8 border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300">
            <Users className="w-8 h-8 text-teal-600 mb-4" />
            <h4 className="text-lg font-bold text-gray-900 mb-2">কাস্টমার ডাটাবেস</h4>
            <p className="text-sm text-gray-600">সব কাস্টমারের ফোন নাম্বার ও ক্রয়ের ইতিহাস সেভ থাকে।</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;