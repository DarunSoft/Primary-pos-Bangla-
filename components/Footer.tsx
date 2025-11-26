import React from 'react';
import { Command, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Command className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-2xl text-gray-900">POSPH</span>
            </div>
            <p className="text-gray-500 mb-8 leading-relaxed pr-4">
              বাংলাদেশের সবচেয়ে আধুনিক POS সফটওয়্যার। আমরা বিশ্বাস করি প্রযুক্তির ছোঁয়ায় প্রতিটি ব্যবসা হবে স্মার্ট ও লাভজনক।
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={Facebook} />
              <SocialIcon icon={Twitter} />
              <SocialIcon icon={Instagram} />
              <SocialIcon icon={Linkedin} />
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">প্রোডাক্ট</h4>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#" className="hover:text-primary-600 transition-colors">ফিচারসমূহ</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">প্রাইসিং</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">ই-কমার্স</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">হার্ডওয়্যার</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">কোম্পানি</h4>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#" className="hover:text-primary-600 transition-colors">আমাদের সম্পর্কে</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">ক্যারিয়ার</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">ব্লগ</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">যোগাযোগ</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-gray-900 mb-6">নিউজলেটার</h4>
            <p className="text-gray-500 mb-4">ব্যবসার টিপস এবং অফার পেতে সাবস্ক্রাইব করুন।</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="আপনার ইমেইল দিন" 
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              />
              <button className="bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-xl transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; ২০২৪ POSPH ল্যাবস। সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gray-900">প্রাইভেসি</a>
            <a href="#" className="hover:text-gray-900">টার্মস</a>
            <a href="#" className="hover:text-gray-900">কুকিজ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{icon: any}> = ({ icon: Icon }) => (
  <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-primary-50 hover:text-primary-600 transition-all">
    <Icon className="w-5 h-5" />
  </a>
);

export default Footer;