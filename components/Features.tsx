import React, { useState } from 'react';
import { 
  ScanLine, 
  BarChart3, 
  Users, 
  Calculator,
  Warehouse,
  ArrowRightLeft,
  FileText,
  ArrowRight,
  X,
  CheckCircle2,
  Zap
} from 'lucide-react';

// Feature Data for Modal Content
const featureDetails = {
  profit_loss: {
    title: "হিসাব ও লাভ-ক্ষতি",
    icon: Calculator,
    color: "text-green-600",
    bgColor: "bg-green-50",
    description: "ব্যবসার প্রকৃত অবস্থা জানুন রিয়েল-টাইমে। আমাদের অটোমেটেড অ্যাকাউন্টিং সিস্টেম আপনার প্রতিটি লেনদেন ট্র্যাক করে।",
    details: [
      "দৈনিক, সাপ্তাহিক এবং মাসিক লাভ-ক্ষতির রিপোর্ট",
      "ইনকাম স্টেটমেন্ট এবং ব্যালেন্স শিট",
      "খরচের বিভিন্ন খাত (Expense Categories) তৈরি ও ট্র্যাকিং",
      "দিন শেষে ক্যাশ ক্লোজিং রিপোর্ট (Day End Report)"
    ]
  },
  due_management: {
    title: "বাকি খাতা ম্যানেজমেন্ট",
    icon: FileText,
    color: "text-red-600",
    bgColor: "bg-red-50",
    description: "বাকির খাতা হারিয়ে যাওয়া বা হিসাব না মেলার দিন শেষ। কাস্টমার এবং সাপ্লায়ার—উভয়ের বকেয়া ম্যানেজ করুন।",
    details: [
      "কাস্টমার অনুযায়ী বাকির লিমিট সেট করা",
      "অটোমেটেড পেমেন্ট রিমাইন্ডার এসএমএস",
      "সাপ্লায়ার পেমেন্ট শিডিউল ও ট্র্যাকিং",
      "বাকির ডিটেইল লেজার (Ledger) রিপোর্ট"
    ]
  },
  warehouse: {
    title: "গুদাম ও ট্রান্সফার",
    icon: Warehouse,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    description: "আপনার কি একাধিক শোরুম বা গোডাউন আছে? এক জায়গা থেকে সবগুলোর স্টক কন্ট্রোল করুন।",
    details: [
      "মাল্টি-ওয়্যারহাউস ইনভেন্টরি সাপোর্ট",
      "এক ক্লিক স্টক ট্রান্সফার (Stock Transfer)",
      "স্টক অ্যাডজাস্টমেন্ট ও ড্যামেজ এন্ট্রি",
      "লো-স্টক অ্যালার্ট নোটিফিকেশন"
    ]
  },
  purchase: {
    title: "ক্রয় ও রিটার্ন",
    icon: ArrowRightLeft,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    description: "সঠিক দরে পণ্য কেনা এবং ডিফেক্টিভ পণ্য রিটার্ন করার সম্পূর্ণ প্রসেস এখন ডিজিটালাইজড।",
    details: [
      "পারচেজ অর্ডার (PO) তৈরি",
      "পণ্য রিসিভ ও কোয়ালিটি চেক এন্ট্রি",
      "সাপ্লায়ার ওয়াইজ পারচেজ হিস্ট্রি",
      "পারচেজ রিটার্ন ও রিফান্ড ট্র্যাকিং"
    ]
  },
  pos: {
    title: "ফাস্ট সেলস (POS)",
    icon: ScanLine,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    description: "রিটেইল কাউন্টারে কাস্টমার লাইন কমিয়ে আনুন সুপার ফাস্ট বিলিং সিস্টেমের মাধ্যমে।",
    details: [
      "বারকোড স্ক্যানার ও থার্মাল প্রিন্টার সাপোর্ট",
      "কীবোর্ড শর্টকাট (মাউস ছাড়াই বিল করুন)",
      "ইনভয়েস হোল্ড (Hold) ও ড্রাফট সিস্টেম",
      "মাল্টিপল পেমেন্ট মেথড (ক্যাশ, কার্ড, বিকাশ)"
    ]
  },
  target: {
    title: "সেলস টার্গেট",
    icon: BarChart3,
    color: "text-primary-600",
    bgColor: "bg-primary-50",
    description: "কর্মীদের কাজের গতি বাড়াতে মাসিক বা বাৎসরিক টার্গেট সেট করুন এবং তাদের পারফরম্যান্স মনিটর করুন।",
    details: [
      "এমপ্লয়ি ওয়াইজ সেলস টার্গেট",
      "টার্গেট বনাম অ্যাচিভমেন্ট রিপোর্ট",
      "সেরা পারফর্মার লিডারবোর্ড",
      "কমিশন ক্যালকুলেশন"
    ]
  },
  crm: {
    title: "কাস্টমার ডাটাবেস",
    icon: Users,
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    description: "আপনার রেগুলার কাস্টমারদের চিনুন এবং তাদের সাথে সুসম্পর্ক বজায় রাখুন।",
    details: [
      "কাস্টমার প্রোফাইল ও ক্রয়ের ইতিহাস",
      "লয়্যালটি পয়েন্ট ও রিওয়ার্ড সিস্টেম",
      "প্রমোশনাল বাল্ক এসএমএস",
      "কাস্টমার গ্রুপ তৈরি (যেমন: VIP, Regular)"
    ]
  }
};

type FeatureKey = keyof typeof featureDetails;

const Features: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureKey | null>(null);

  const openModal = (key: FeatureKey) => setSelectedFeature(key);
  const closeModal = () => setSelectedFeature(null);

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
            কার্ডগুলোতে ক্লিক করে বিস্তারিত ফিচার সম্পর্কে জানুন। POSPH আপনার পুরো ব্যবসার অপারেটিং সিস্টেম।
          </p>
        </div>

        {/* Bento Grid Layout - Interactive */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-auto gap-6">
          
          {/* Feature 1: Large Card - Accounting & P/L */}
          <div 
            onClick={() => openModal('profit_loss')}
            className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-green-200 hover:shadow-2xl transition-all duration-500 group cursor-pointer relative overflow-hidden"
          >
            <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                <Calculator className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">হিসাব ও লাভ-ক্ষতি</h4>
              <p className="text-gray-600 mb-8 max-w-sm">
                দিনশেষে কত টাকা লাভ হলো তা আর ক্যালকুলেটরে হিসাব করতে হবে না। ইনকাম, এক্সপেন্স এবং প্রফিট-লস রিপোর্ট দেখুন এক ক্লিকে।
              </p>
            </div>
            {/* Chart UI */}
            <div className="absolute bottom-0 right-0 w-3/4 translate-x-12 translate-y-8 bg-white rounded-tl-2xl shadow-xl p-6 border border-gray-100 transition-transform duration-500 group-hover:translate-x-10 group-hover:translate-y-6">
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
            </div>
            {/* Learn More Overlay Button */}
            <div className="absolute bottom-8 left-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75 z-20">
              <button className="flex items-center gap-2 text-green-700 font-bold text-sm bg-green-50 px-4 py-2 rounded-full shadow-sm hover:bg-green-100">
                বিস্তারিত দেখুন <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Feature 2: Tall Card - Due Management */}
          <div 
            onClick={() => openModal('due_management')}
            className="col-span-1 md:col-span-1 lg:col-span-1 row-span-2 bg-gradient-to-br from-red-900 to-red-800 rounded-3xl p-8 text-white relative overflow-hidden group cursor-pointer shadow-lg hover:shadow-red-900/30 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-32 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:opacity-10 transition-opacity"></div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3">বাকি খাতা</h4>
              <p className="text-gray-300 text-sm mb-6">কাস্টমার এবং সাপ্লায়ারদের বকেয়া টাকার হিসাব রাখুন।</p>
              
              <ul className="space-y-4 flex-1">
                <li className="flex items-center gap-3 text-sm text-red-100">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div> Customer Due
                </li>
                <li className="flex items-center gap-3 text-sm text-red-100">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div> Supplier Due
                </li>
                <li className="flex items-center gap-3 text-sm text-red-100">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div> Due Reminders
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span className="flex items-center gap-2 font-semibold text-sm">
                  ফিচারগুলো দেখুন <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>

          {/* Feature 3: Standard Card - Warehouse */}
          <div 
            onClick={() => openModal('warehouse')}
            className="col-span-1 bg-blue-50 rounded-3xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
            <Warehouse className="w-8 h-8 text-blue-600 mb-4 relative z-10" />
            <h4 className="text-lg font-bold text-gray-900 mb-2 relative z-10">গুদাম ও ট্রান্সফার</h4>
            <p className="text-sm text-gray-600 relative z-10 mb-4">একাধিক ওয়্যারহাউস ম্যানেজ করুন এবং প্রোডাক্ট ট্রান্সফার করুন সহজে।</p>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-6 right-6">
               <ArrowRight className="w-5 h-5 text-blue-600" />
            </div>
          </div>

          {/* Feature 4: Standard Card - Purchases & Returns */}
          <div 
            onClick={() => openModal('purchase')}
            className="col-span-1 bg-orange-50 rounded-3xl p-8 border border-orange-100 hover:border-orange-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-orange-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
            <ArrowRightLeft className="w-8 h-8 text-orange-600 mb-4 relative z-10" />
            <h4 className="text-lg font-bold text-gray-900 mb-2 relative z-10">ক্রয় ও রিটার্ন</h4>
            <p className="text-sm text-gray-600 relative z-10 mb-4">সাপ্লায়ার থেকে পণ্য কেনা এবং রিটার্ন এর সম্পূর্ণ ট্র্যাকিং।</p>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-6 right-6">
               <ArrowRight className="w-5 h-5 text-orange-600" />
            </div>
          </div>

          {/* Feature 5: Wide Card - POS & Sales */}
          <div 
            onClick={() => openModal('pos')}
            className="col-span-1 md:col-span-2 lg:col-span-2 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:border-purple-200 transition-all duration-500 flex flex-col md:flex-row gap-6 items-center group cursor-pointer"
          >
             <div className="flex-1 group-hover:translate-x-2 transition-transform duration-300">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <ScanLine className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">ফাস্ট সেলস (POS)</h4>
                <p className="text-gray-600 text-sm mb-4">বারকোড স্ক্যানার সাপোর্ট সহ সুপার ফাস্ট ইনভয়েসিং। মাউস ছাড়াই সম্পূর্ণ কি-বোর্ড শর্টকাট ব্যবহার করে বিল করুন।</p>
                <span className="text-purple-600 text-sm font-bold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  ডেমো দেখুন <ArrowRight className="w-4 h-4" />
                </span>
             </div>
             <div className="flex-1 w-full bg-gray-50 rounded-xl p-4 border border-gray-100 group-hover:shadow-lg transition-all duration-300">
                <div className="flex justify-between items-center mb-2">
                   <div className="text-xs font-bold text-gray-500">Cart Items</div>
                   <div className="text-xs font-bold text-purple-600">Total: ৳5,400</div>
                </div>
                <div className="space-y-2">
                  <div className="bg-white p-2 rounded border border-gray-100 flex justify-between group-hover:translate-x-1 transition-transform duration-300 delay-75">
                     <span className="text-xs font-medium">Wireless Mouse</span>
                     <span className="text-xs text-gray-500">x2</span>
                  </div>
                  <div className="bg-white p-2 rounded border border-gray-100 flex justify-between group-hover:translate-x-1 transition-transform duration-300 delay-100">
                     <span className="text-xs font-medium">Mechanical Keyboard</span>
                     <span className="text-xs text-gray-500">x1</span>
                  </div>
                  <div className="bg-purple-600 text-white p-2 rounded text-center text-xs font-bold mt-2 shadow-lg shadow-purple-200 group-hover:scale-105 transition-transform duration-300">
                    PAY NOW
                  </div>
                </div>
             </div>
          </div>

          {/* Feature 6: Small Card */}
          <div 
            onClick={() => openModal('target')}
            className="col-span-1 bg-white rounded-3xl p-8 border border-gray-100 hover:border-primary-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative"
          >
            <BarChart3 className="w-8 h-8 text-primary-600 mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-lg font-bold text-gray-900 mb-2">সেলস টার্গেট</h4>
            <p className="text-sm text-gray-600">মাসিক সেলস টার্গেট সেট করুন এবং গ্রোথ মনিটর করুন।</p>
             <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Zap className="w-5 h-5 text-yellow-400 fill-current" />
             </div>
          </div>
          
           {/* Feature 7: Small Card */}
           <div 
            onClick={() => openModal('crm')}
            className="col-span-1 bg-white rounded-3xl p-8 border border-gray-100 hover:border-teal-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
          >
            <Users className="w-8 h-8 text-teal-600 mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-lg font-bold text-gray-900 mb-2">কাস্টমার ডাটাবেস</h4>
            <p className="text-sm text-gray-600">সব কাস্টমারের ফোন নাম্বার ও ক্রয়ের ইতিহাস সেভ থাকে।</p>
            <div className="w-full h-1 bg-gray-100 mt-4 rounded-full overflow-hidden">
              <div className="h-full bg-teal-500 w-0 group-hover:w-3/4 transition-all duration-700 ease-out"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Details Modal */}
      {selectedFeature && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div 
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          ></div>
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden animate-slide-up">
            
            {/* Modal Header */}
            <div className={`p-8 pb-6 ${featureDetails[selectedFeature].bgColor}`}>
              <div className="flex justify-between items-start mb-6">
                <div className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm ${featureDetails[selectedFeature].color}`}>
                  {React.createElement(featureDetails[selectedFeature].icon, { className: "w-7 h-7" })}
                </div>
                <button 
                  onClick={closeModal}
                  className="p-2 bg-white/50 hover:bg-white rounded-full transition-colors text-gray-500 hover:text-gray-900"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {featureDetails[selectedFeature].title}
              </h3>
              <p className="text-gray-700 text-lg">
                {featureDetails[selectedFeature].description}
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-8">
              <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wide">ফিচার হাইলাইটস</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {featureDetails[selectedFeature].details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${featureDetails[selectedFeature].color}`} />
                    <span className="text-gray-700 font-medium text-sm">{detail}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end gap-3">
                <button 
                  onClick={closeModal}
                  className="px-6 py-2.5 rounded-xl text-gray-600 font-medium hover:bg-gray-50 transition-colors"
                >
                  বন্ধ করুন
                </button>
                <button className={`px-6 py-2.5 rounded-xl text-white font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2 bg-gray-900`}>
                  ট্রায়াল শুরু করুন <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Features;