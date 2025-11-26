import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 font-display group-hover:text-primary-600 transition-colors">৫০০০+</div>
            <div className="text-gray-500 font-medium">সক্রিয় দোকান</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 font-display group-hover:text-primary-600 transition-colors">১০ লক্ষ+</div>
            <div className="text-gray-500 font-medium">দৈনিক ইনভয়েস</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 font-display group-hover:text-primary-600 transition-colors">৬৪</div>
            <div className="text-gray-500 font-medium">জেলায় সেবা</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 font-display group-hover:text-primary-600 transition-colors">২৪/৭</div>
            <div className="text-gray-500 font-medium">কাস্টমার সাপোর্ট</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;