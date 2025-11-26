import React from 'react';
import { ArrowRight, Play, ShieldCheck, Zap, BarChart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-50">
      {/* Abstract Background Patterns */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-primary-100/40 to-transparent rounded-[100%] blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-accent-100/40 rounded-full blur-3xl mix-blend-multiply opacity-50 animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-100/40 rounded-full blur-3xl mix-blend-multiply opacity-50"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm text-sm font-medium text-gray-600 mb-8 hover:border-primary-300 transition-colors cursor-default">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            ভার্সন ২.০ এখন লাইভ - নতুন ফিচার দেখুন
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-8 leading-[1.1]">
            আপনার ব্যবসার <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">ডিজিটাল পার্টনার</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            ইনভেন্টরি, সেলস এবং অ্যাকাউন্টিং - সব এক জায়গায়। ছোট দোকান থেকে শুরু করে বড় শোরুম, POSPH আপনার ব্যবসার গতি বাড়ায় ১০ গুণ।
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-gray-900/20 hover:shadow-gray-900/30 transform hover:-translate-y-1">
              বিনামূল্যে শুরু করুন
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:border-gray-300 shadow-sm hover:shadow-md">
              <Play className="w-4 h-4 fill-current" />
              কীভাবে কাজ করে
            </button>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6 text-sm font-medium text-gray-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary-600" /> নিরাপদ ডেটা
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary-600" /> দ্রুত সেটআপ
            </div>
            <div className="flex items-center gap-2">
              <BarChart className="w-4 h-4 text-primary-600" /> নির্ভুল হিসাব
            </div>
          </div>
        </div>

        {/* 3D Perspective Dashboard Mockup */}
        <div className="relative mx-auto max-w-6xl mt-12 perspective-1000 group">
          <div className="relative rounded-2xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-3xl lg:p-4 transform transition-all duration-700 hover:scale-[1.01] hover:rotate-x-2">
            <div className="rounded-xl lg:rounded-2xl bg-white shadow-2xl ring-1 ring-gray-900/10 overflow-hidden">
               {/* Header of Mockup */}
               <div className="h-8 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-2">
                 <div className="w-3 h-3 rounded-full bg-red-400"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                 <div className="w-3 h-3 rounded-full bg-green-400"></div>
               </div>
               
               {/* Body of Mockup Image */}
               <div className="relative bg-gray-50 aspect-[16/9] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50">
                    {/* Simulated Dashboard UI */}
                    <div className="p-8 grid grid-cols-12 gap-6 h-full opacity-90">
                      {/* Sidebar */}
                      <div className="col-span-2 hidden md:block space-y-4">
                        <div className="h-8 w-24 bg-gray-200 rounded animate-pulse"></div>
                        <div className="space-y-2 mt-8">
                          {[1,2,3,4,5].map(i => (
                            <div key={i} className="h-4 w-full bg-gray-100 rounded"></div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Main Content */}
                      <div className="col-span-12 md:col-span-10 grid grid-cols-3 gap-6">
                        {/* Stats Cards */}
                        {[1,2,3].map(i => (
                          <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 h-32">
                            <div className="h-8 w-8 bg-primary-100 rounded-lg mb-3"></div>
                            <div className="h-4 w-20 bg-gray-100 rounded mb-2"></div>
                            <div className="h-6 w-32 bg-gray-200 rounded"></div>
                          </div>
                        ))}
                        
                        {/* Chart Area */}
                        <div className="col-span-3 md:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-64 flex items-end justify-between gap-2">
                           {[40, 60, 45, 70, 50, 80, 65, 85, 90, 75].map((h, i) => (
                             <div key={i} style={{height: `${h}%`}} className="w-full bg-primary-200 rounded-t-sm hover:bg-primary-500 transition-colors"></div>
                           ))}
                        </div>
                        
                        {/* Right Panel */}
                        <div className="col-span-3 md:col-span-1 bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-64">
                          <div className="h-4 w-24 bg-gray-100 rounded mb-4"></div>
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                               <div className="w-8 h-8 rounded-full bg-gray-100"></div>
                               <div className="h-3 w-20 bg-gray-100 rounded"></div>
                            </div>
                            <div className="flex items-center gap-3">
                               <div className="w-8 h-8 rounded-full bg-gray-100"></div>
                               <div className="h-3 w-20 bg-gray-100 rounded"></div>
                            </div>
                            <div className="flex items-center gap-3">
                               <div className="w-8 h-8 rounded-full bg-gray-100"></div>
                               <div className="h-3 w-20 bg-gray-100 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements on top of mockup */}
                  <div className="absolute top-10 right-10 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-white/50 animate-bounce duration-[3000ms]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <BarChart className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium">আজকের প্রফিট</p>
                        <p className="text-lg font-bold text-gray-900 font-display">৳ ৪,৫০০.০০</p>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;