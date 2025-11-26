import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Industries from './components/Industries';
import HowItWorks from './components/HowItWorks';
import Tutorials from './components/Tutorials';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Industries />
        <HowItWorks />
        <Tutorials />
        <Pricing />
        <Testimonials />
        <FAQ />
        
        {/* Modern CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary-900">
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/30 rounded-full blur-[120px]"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              আপনার ব্যবসার ভবিষ্যৎ <br/>
              <span className="text-primary-300">আজই পরিবর্তন করুন</span>
            </h2>
            <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              ১৪ দিনের ফ্রি ট্রায়াল শুরু করুন। কোনো ক্রেডিট কার্ড লাগবে না। পছন্দ না হলে যেকোনো সময় ক্যান্সেল করুন।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2">
                এখনই শুরু করুন
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <p className="mt-8 text-primary-200/60 text-sm">
              ৫০০০+ হ্যাপি কাস্টমারের সাথে যোগ দিন
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;