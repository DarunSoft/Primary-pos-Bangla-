import React from 'react';
import { UserPlus, Download, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'অ্যাকাউন্ট খুলুন',
    description: 'মাত্র ১ মিনিটে আপনার ফোন নাম্বার দিয়ে রেজিস্ট্রেশন সম্পন্ন করুন।'
  },
  {
    icon: Download,
    title: 'পণ্য যোগ করুন',
    description: 'আপনার দোকানের পণ্যের তালিকা এক্সেল থেকে আপলোড করুন বা ম্যানুয়ালি যোগ করুন।'
  },
  {
    icon: CheckCircle,
    title: 'বিক্রয় শুরু করুন',
    description: 'এখন আপনি প্রস্তুত! ইনভয়েস তৈরি করুন এবং ব্যবসার হিসাব রাখুন।'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">শুরু করা খুবই সহজ</h2>
          <p className="text-xl text-gray-600">কোনো টেকনিক্যাল নলেজ ছাড়াই ব্যবহার করা যায়</p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mb-6 border-4 border-gray-50 z-10">
                <step.icon className="w-10 h-10 text-primary-600" />
              </div>
              <div className="absolute top-0 right-0 -mr-4 -mt-4 bg-primary-100 text-primary-700 w-8 h-8 rounded-full flex items-center justify-center font-bold font-display">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;