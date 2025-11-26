import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "POSPH ব্যবহার করতে কি ইন্টারনেট প্রয়োজন?",
    answer: "না, আমাদের অফলাইন মোড আছে। ইন্টারনেট ছাড়াও আপনি বেচা-কেনা চালিয়ে যেতে পারবেন। ইন্টারনেট সংযোগ পেলে ডাটা অটোমেটিক সিঙ্ক হবে।"
  },
  {
    question: "আমার ডেটা কি নিরাপদ?",
    answer: "হ্যাঁ, আপনার সকল ডেটা এনক্রিপ্ট করে ক্লাউডে সেভ করা থাকে। ডিভাইস হারিয়ে গেলেও আপনার ব্যবসার কোনো তথ্য হারাবে না।"
  },
  {
    question: "আমি কি প্রিন্টার ব্যবহার করতে পারবো?",
    answer: "অবশ্যই। যেকোনো ব্লুটুথ বা ইউএসবি থার্মাল প্রিন্টার আমাদের অ্যাপের সাথে সাপোর্ট করে।"
  },
  {
    question: "ফ্রি ট্রায়াল শেষ হলে কি হবে?",
    answer: "১৪ দিন পর আপনি যেকোনো প্যাকেজ বেছে নিতে পারেন। অথবা ফ্রি প্ল্যানে সীমিত ফিচার নিয়ে চালিয়ে যেতে পারেন।"
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">সচরাচর জিজ্ঞাসিত প্রশ্ন</h2>
          <p className="text-gray-600">আপনার মনে কোনো প্রশ্ন আছে? এখানে উত্তর খুঁজুন।</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-200"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-primary-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;