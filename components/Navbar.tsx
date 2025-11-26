import React, { useState, useEffect } from 'react';
import { Menu, X, Command } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ফিচারস', href: '#features' },
    { name: 'কিভাবে কাজ করে', href: '#how-it-works' },
    { name: 'মূল্য তালিকা', href: '#pricing' },
    { name: 'প্রশ্নোত্তর', href: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mx-auto transition-all duration-300 ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg shadow-gray-200/50 rounded-full px-6' 
            : 'bg-transparent px-0'
        }`}>
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 p-2 rounded-xl group-hover:shadow-lg group-hover:shadow-primary-500/30 transition-all duration-300">
                <Command className="h-5 w-5 text-white" />
              </div>
              <span className={`font-bold text-2xl tracking-tight ${scrolled ? 'text-gray-900' : 'text-gray-900'}`}>
                POSPH
              </span>
            </div>
            
            <div className="hidden md:flex space-x-1 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-gray-600 hover:text-primary-600 font-medium transition-colors duration-200 rounded-full hover:bg-gray-50/50"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-3">
              <button className="text-gray-600 font-medium px-4 py-2 hover:text-gray-900 transition-colors">
                লগ ইন
              </button>
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-gray-900/20 hover:shadow-gray-900/30 transform hover:-translate-y-0.5">
                ফ্রি ট্রায়াল
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-xl border border-gray-100 shadow-2xl rounded-2xl p-4 transform transition-all duration-200 origin-top">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 grid grid-cols-2 gap-3">
              <button className="w-full bg-gray-100 text-gray-900 px-4 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
                লগ ইন
              </button>
              <button className="w-full bg-primary-600 text-white px-4 py-3 rounded-xl font-semibold shadow-lg shadow-primary-500/30">
                ফ্রি ট্রায়াল
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;