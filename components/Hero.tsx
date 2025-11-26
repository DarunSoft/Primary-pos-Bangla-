import React from 'react';
import { ArrowRight, Play, ShieldCheck, Zap, BarChart, TrendingUp, ShoppingCart, DollarSign, Wallet } from 'lucide-react';

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
            POSPH ভার্সন ২.০ এখন লাইভ
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-8 leading-[1.1]">
            আপনার ব্যবসার <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">ডিজিটাল ম্যানেজার</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            সেলস, পারচেজ, স্টক ম্যানেজমেন্ট থেকে শুরু করে লাভ-ক্ষতির হিসাব—সব এখন এক ড্যাশবোর্ডে। বাকি খাতা ও ওয়্যারহাউস ম্যানেজ করুন খুব সহজেই।
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-gray-900/20 hover:shadow-gray-900/30 transform hover:-translate-y-1">
              বিনামূল্যে শুরু করুন
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:border-gray-300 shadow-sm hover:shadow-md">
              <Play className="w-4 h-4 fill-current" />
              লাইভ ডেমো দেখুন
            </button>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6 text-sm font-medium text-gray-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary-600" /> নিরাপদ ডেটা
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary-600" /> অফলাইন সাপোর্ট
            </div>
            <div className="flex items-center gap-2">
              <BarChart className="w-4 h-4 text-primary-600" /> নির্ভুল রিপোর্ট
            </div>
          </div>
        </div>

        {/* 3D Perspective Dashboard Mockup matching POSpro screenshot */}
        <div className="relative mx-auto max-w-6xl mt-12 perspective-1000 group">
          <div className="relative rounded-2xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-3xl lg:p-4 transform transition-all duration-700 hover:scale-[1.01] hover:rotate-x-1">
            <div className="rounded-xl lg:rounded-2xl bg-gray-50 shadow-2xl ring-1 ring-gray-900/10 overflow-hidden border border-gray-200">
               
               {/* Browser Header */}
               <div className="h-10 bg-white border-b border-gray-200 flex items-center px-4 gap-2 justify-between">
                 <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-400"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                   <div className="w-3 h-3 rounded-full bg-green-400"></div>
                 </div>
                 <div className="bg-gray-100 px-3 py-1 rounded text-xs text-gray-500 font-mono">posph.trydarun.xyz/dashboard</div>
                 <div className="w-4"></div>
               </div>
               
               {/* Dashboard Body */}
               <div className="flex h-[500px] md:h-[600px] relative overflow-hidden bg-gray-50">
                  
                  {/* Sidebar - Dark Red/Brown as per screenshot */}
                  <div className="w-16 md:w-64 bg-[#2c0b0e] hidden md:flex flex-col text-white/80 py-4 flex-shrink-0">
                    <div className="px-6 mb-8 flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold">P</div>
                      <span className="font-bold text-xl text-white">POSpro</span>
                    </div>
                    <div className="space-y-1 px-3">
                      {['Dashboard', 'Sales', 'Purchases', 'Products', 'Warehouse', 'Transfer', 'Customers', 'Suppliers', 'Incomes', 'Expenses'].map((item, i) => (
                        <div key={item} className={`px-4 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between group cursor-pointer ${i === 0 ? 'bg-red-600 text-white' : 'hover:bg-white/5'}`}>
                          <span>{item}</span>
                          {['Sales', 'Purchases', 'Products'].includes(item) && <span className="text-xs opacity-50">›</span>}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Main Content Area */}
                  <div className="flex-1 p-4 md:p-8 overflow-y-auto">
                    {/* Top Header */}
                    <div className="flex justify-between items-center mb-8">
                      <div className="hidden md:block">
                        <button className="bg-white border border-red-500 text-red-500 px-4 py-2 rounded font-medium text-sm hover:bg-red-50 transition-colors">
                          View Website
                        </button>
                      </div>
                      <div className="flex items-center gap-4 ml-auto">
                        <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded border border-gray-200">
                          <img src="https://flagcdn.com/w20/us.png" className="w-5" alt="EN" />
                          <span className="text-sm">English</span>
                        </div>
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 border border-blue-200">
                          <span className="font-bold">M</span>
                        </div>
                      </div>
                    </div>

                    {/* Stats Grid - 4 Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                      {/* Total Sales */}
                      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative overflow-hidden">
                         <div className="flex justify-between items-start mb-4">
                           <div>
                             <h3 className="text-gray-500 font-medium text-sm mb-1">Total Sales</h3>
                             <p className="text-2xl font-bold text-gray-900">$124,500</p>
                           </div>
                           <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                             <TrendingUp className="w-5 h-5" />
                           </div>
                         </div>
                         <div className="text-xs font-medium text-green-500 flex items-center gap-1">
                           <span className="bg-green-100 px-1.5 py-0.5 rounded">+12%</span>
                           <span className="text-gray-400">This Month</span>
                         </div>
                      </div>

                      {/* Total Purchase */}
                      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative overflow-hidden">
                         <div className="flex justify-between items-start mb-4">
                           <div>
                             <h3 className="text-gray-500 font-medium text-sm mb-1">Total Purchase</h3>
                             <p className="text-2xl font-bold text-gray-900">$82,000</p>
                           </div>
                           <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                             <ShoppingCart className="w-5 h-5" />
                           </div>
                         </div>
                         <div className="text-xs font-medium text-green-500 flex items-center gap-1">
                           <span className="bg-green-100 px-1.5 py-0.5 rounded">+8%</span>
                           <span className="text-gray-400">This Month</span>
                         </div>
                      </div>

                      {/* Total Income */}
                      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative overflow-hidden">
                         <div className="flex justify-between items-start mb-4">
                           <div>
                             <h3 className="text-gray-500 font-medium text-sm mb-1">Total Income</h3>
                             <p className="text-2xl font-bold text-gray-900">$42,500</p>
                           </div>
                           <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                             <DollarSign className="w-5 h-5" />
                           </div>
                         </div>
                         <div className="text-xs font-medium text-red-500 flex items-center gap-1">
                           <span className="bg-red-100 px-1.5 py-0.5 rounded">-2%</span>
                           <span className="text-gray-400">This Month</span>
                         </div>
                      </div>

                      {/* Total Expense */}
                      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative overflow-hidden">
                         <div className="flex justify-between items-start mb-4">
                           <div>
                             <h3 className="text-gray-500 font-medium text-sm mb-1">Total Expense</h3>
                             <p className="text-2xl font-bold text-gray-900">$12,200</p>
                           </div>
                           <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                             <Wallet className="w-5 h-5" />
                           </div>
                         </div>
                         <div className="text-xs font-medium text-green-500 flex items-center gap-1">
                           <span className="bg-green-100 px-1.5 py-0.5 rounded">+5%</span>
                           <span className="text-gray-400">This Month</span>
                         </div>
                      </div>
                    </div>

                    {/* Chart Section */}
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                       <div className="flex justify-between items-center mb-6">
                         <h3 className="font-bold text-gray-800">Revenue Statistic</h3>
                         <div className="bg-gray-50 border border-gray-200 rounded-md px-3 py-1 text-sm text-gray-600">2025 ▼</div>
                       </div>
                       <div className="h-48 flex items-end gap-4 px-2">
                          {[35, 60, 45, 80, 55, 70, 40, 65, 50, 75, 60, 90].map((h, i) => (
                             <div key={i} className="flex-1 flex gap-1 h-full items-end group">
                                <div style={{height: `${h}%`}} className="w-full bg-purple-500 opacity-80 rounded-t-sm group-hover:opacity-100 transition-opacity"></div>
                                <div style={{height: `${h * 0.6}%`}} className="w-full bg-red-500 opacity-80 rounded-t-sm group-hover:opacity-100 transition-opacity"></div>
                             </div>
                          ))}
                       </div>
                       <div className="flex justify-center gap-6 mt-4 text-xs font-medium text-gray-500">
                         <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-500"></div> Profit</div>
                         <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-500"></div> Loss</div>
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