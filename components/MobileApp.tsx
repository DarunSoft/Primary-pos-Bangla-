import React from 'react';
import { Smartphone, Bell, BarChart2, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react';

const MobileApp: React.FC = () => {
  return (
    <section className="py-24 bg-gray-900 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-900/20 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-sm font-medium text-primary-400 mb-6">
              <Smartphone className="w-4 h-4" />
              অ্যান্ড্রয়েড অ্যাপ
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              দোকান এখন আপনার <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">পকেটের ভেতর</span>
            </h2>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              দোকানে না থেকেও ব্যবসার খোঁজ রাখুন। POSPH মোবাইল অ্যাপ দিয়ে বিশ্বের যেকোনো প্রান্ত থেকে সেলস, স্টক এবং লাভ-ক্ষতির রিপোর্ট দেখুন। বিশেষ করে রিটেইল এবং ইলেকট্রনিক্স শপ মালিকদের জন্য এটি অপরিহার্য।
            </p>

            <div className="space-y-6 mb-10">
              <FeatureRow 
                icon={Bell} 
                title="রিয়েল-টাইম নোটিফিকেশন" 
                desc="প্রতিটি সেল এবং রিটার্ন এর নোটিফিকেশন সাথে সাথে ফোনে পান।" 
              />
              <FeatureRow 
                icon={BarChart2} 
                title="স্মার্ট অ্যানালিটিক্স" 
                desc="মাসিক বিক্রয় ট্রেন্ড এবং সেরা বিক্রিত পণ্যের তালিকা এক নজরে দেখুন।" 
              />
              <FeatureRow 
                icon={CheckCircle} 
                title="স্টক চেক" 
                desc="কোন প্রোডাক্ট স্টকে আছে আর কোনটা শেষ, তা অ্যাপ থেকেই চেক করুন।" 
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-3 bg-white text-gray-900 px-6 py-3.5 rounded-xl font-bold hover:bg-gray-100 transition-all">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-8" />
              </button>
              <button className="flex items-center justify-center gap-2 bg-gray-800 border border-gray-700 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-gray-700 transition-all">
                ফিচারগুলো দেখুন
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="lg:w-1/2 relative">
             <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[640px] w-[320px] shadow-2xl flex flex-col overflow-hidden">
                <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                
                {/* Screen Content */}
                <div className="rounded-[2rem] overflow-hidden w-full h-full bg-gray-50 flex flex-col relative">
                   {/* Status Bar */}
                   <div className="h-8 bg-primary-600 w-full flex justify-between px-6 items-center text-[10px] text-white font-medium z-20">
                     <span>9:41</span>
                     <div className="flex gap-1">
                       <span>Cell</span>
                       <span>Wifi</span>
                       <span>100%</span>
                     </div>
                   </div>

                   {/* App Header */}
                   <div className="bg-primary-600 px-5 pt-2 pb-6 rounded-b-[2rem] shadow-lg z-10 flex-shrink-0">
                      <div className="flex justify-between items-center mb-6">
                        <div className="text-white">
                          <div className="text-xs opacity-80">স্বাগতম,</div>
                          <div className="font-bold text-lg">মাহাবুব কম্পিউটার</div>
                        </div>
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm relative">
                          <Bell className="w-5 h-5 text-white" />
                          <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></div>
                        </div>
                      </div>
                      
                      {/* Total Sales Card */}
                      <div className="bg-white rounded-2xl p-4 shadow-lg text-center">
                        <div className="text-xs text-gray-500 font-medium mb-1">আজকের মোট বিক্রি</div>
                        <div className="text-3xl font-bold text-gray-900 font-display">৳২৫,৪৫০</div>
                        <div className="text-xs text-green-500 mt-1 flex justify-center items-center gap-1">
                          <span className="bg-green-100 px-1 rounded">▲ ১২%</span> গতকালের চেয়ে বেশি
                        </div>
                      </div>
                   </div>

                   {/* Body */}
                   <div className="flex-1 overflow-y-auto hide-scrollbar p-5 space-y-4 pb-20">
                      {/* Quick Stats Grid */}
                      <div className="grid grid-cols-2 gap-3">
                         <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-2">
                              <BarChart2 className="w-4 h-4" />
                            </div>
                            <div className="text-gray-500 text-xs">মোট লাভ</div>
                            <div className="font-bold text-gray-900">৳৪,২০০</div>
                         </div>
                         <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-2">
                              <CheckCircle className="w-4 h-4" />
                            </div>
                            <div className="text-gray-500 text-xs">অর্ডার</div>
                            <div className="font-bold text-gray-900">৪২টি</div>
                         </div>
                      </div>

                      {/* Monthly Sales Trend Chart */}
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex justify-between items-center mb-4">
                           <div className="flex items-center gap-1.5">
                             <TrendingUp className="w-3 h-3 text-primary-600" />
                             <h4 className="font-bold text-gray-800 text-xs">মাসিক বিক্রয় ট্রেন্ড</h4>
                           </div>
                           <span className="text-[10px] text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full font-medium">+১৫%</span>
                        </div>
                        <div className="flex items-end justify-between gap-2 h-16 px-1">
                           {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                              <div key={i} className="flex-1 flex flex-col justify-end group cursor-pointer">
                                 <div 
                                  style={{height: `${h}%`}} 
                                  className={`w-full rounded-t-sm transition-all duration-300 ${i === 5 ? 'bg-primary-500' : 'bg-primary-100 group-hover:bg-primary-200'}`}
                                 ></div>
                              </div>
                           ))}
                        </div>
                        <div className="flex justify-between text-[8px] text-gray-400 mt-1 uppercase px-1">
                          <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                        </div>
                      </div>

                      {/* Top Selling Products */}
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        <h4 className="font-bold text-gray-800 text-xs mb-3">সেরা বিক্রিত পণ্য</h4>
                        <div className="space-y-3">
                          {[
                            { name: 'Wireless Mouse', count: '85%', color: 'bg-purple-500' },
                            { name: 'Gaming Keyboard', count: '62%', color: 'bg-blue-500' },
                            { name: 'USB Hub 3.0', count: '45%', color: 'bg-orange-500' }
                          ].map((product, i) => (
                            <div key={i}>
                              <div className="flex justify-between text-[10px] mb-1">
                                <span className="font-medium text-gray-700">{product.name}</span>
                              </div>
                              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                <div style={{width: product.count}} className={`h-full ${product.color} rounded-full`}></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Recent Transactions List */}
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm mb-3">সাম্প্রতিক বিক্রয়</h4>
                        <div className="space-y-3">
                          {[1, 2].map((i) => (
                            <div key={i} className="bg-white p-3 rounded-xl border border-gray-100 flex justify-between items-center">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-xs font-bold text-gray-400">#{i}</div>
                                <div>
                                  <div className="font-bold text-xs text-gray-900">ইনভয়েস #102{i}</div>
                                  <div className="text-[10px] text-gray-500">ওয়াক-ইন কাস্টমার</div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="font-bold text-xs text-primary-600">৳১,২০০</div>
                                <div className="text-[10px] text-gray-400">১০:৩০ AM</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                   </div>

                   {/* Bottom Nav */}
                   <div className="absolute bottom-0 w-full bg-white border-t border-gray-100 h-16 flex justify-around items-center px-2 z-20">
                      <div className="flex flex-col items-center gap-1 text-primary-600">
                        <div className="w-1 h-1 bg-primary-600 rounded-full mb-1"></div>
                        <div className="w-6 h-6 bg-primary-50 rounded-lg"></div>
                      </div>
                      <div className="w-6 h-6 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"></div>
                      <div className="w-12 h-12 bg-primary-600 rounded-full -mt-6 border-4 border-gray-50 flex items-center justify-center text-white shadow-lg shadow-primary-500/30 transform active:scale-95 transition-transform cursor-pointer">+</div>
                      <div className="w-6 h-6 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"></div>
                      <div className="w-6 h-6 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"></div>
                   </div>
                </div>
             </div>

             {/* Floating Notification */}
             <div className="absolute top-24 -right-8 bg-white p-3 rounded-xl shadow-xl animate-bounce duration-[3000ms] border border-gray-100">
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                   <span className="text-xs font-bold text-gray-800">New Sale: ৳4,500</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const FeatureRow: React.FC<{icon: any, title: string, desc: string}> = ({ icon: Icon, title, desc }) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700 group hover:border-primary-500 transition-colors">
      <Icon className="w-6 h-6 text-primary-400 group-hover:text-primary-300 transition-colors" />
    </div>
    <div>
      <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  </div>
);

export default MobileApp;