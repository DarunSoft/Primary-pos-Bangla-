import React from 'react';
import { Play, Clock } from 'lucide-react';

const tutorials = [
  {
    title: "অ্যাকাউন্ট সেটআপ গাইড",
    duration: "২:৩০ মি.",
    category: "শুরু করুন",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "ইনভেন্টরি ম্যানেজমেন্ট",
    duration: "৪:১৫ মি.",
    category: "ফিচারস",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "দ্রুত সেলস ও ইনভয়েস",
    duration: "৩:৪৫ মি.",
    category: "টিউটোরিয়াল",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const Tutorials: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">টিউটোরিয়াল</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              দেখে নিন কিভাবে কাজ করে
            </h3>
            <p className="text-xl text-gray-600">
              POSPH এর ব্যবহার শেখা খুবই সহজ। আমাদের ছোট ভিডিওগুলো দেখে এখনই মাস্টার হয়ে উঠুন।
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors">
            সব ভিডিও দেখুন <span className="text-xl">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tutorials.map((video, index) => (
            <div 
              key={index} 
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image Background */}
              <div className="aspect-video w-full relative">
                <img 
                  src={video.image} 
                  alt={video.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gray-900/30 group-hover:bg-gray-900/50 transition-colors duration-300"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-5 h-5 text-primary-600 ml-1 fill-current" />
                    </div>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {video.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 bg-white border-x border-b border-gray-100 rounded-b-2xl">
                <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded-full mb-3 inline-block">
                  {video.category}
                </span>
                <h4 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {video.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <button className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors">
             সব ভিডিও দেখুন <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tutorials;