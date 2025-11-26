import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    name: 'আব্দুর রহমান',
    role: 'মালিক',
    company: 'রহমান স্টোর',
    content: 'আগে খাতা-কলমে হিসাব রাখতে অনেক ঝামেলা হতো। POSPH ব্যবহার করার পর থেকে আমার সময় বাঁচছে।',
    avatar: 'https://picsum.photos/100/100?random=10'
  },
  {
    name: 'ফারজানা ইসলাম',
    role: 'ম্যানেজার',
    company: 'ক্যাফে ঢাকা',
    content: 'রেস্টুরেন্ট ম্যানেজ করার জন্য এর চেয়ে ভালো সফটওয়্যার আর হয় না। ইনভেন্টরি ট্র্যাকিং ফিচারটি অসাধারণ।',
    avatar: 'https://picsum.photos/100/100?random=11'
  },
  {
    name: 'কামরুল হাসান',
    role: 'সিইও',
    company: 'ফ্যাশন কর্নার',
    content: 'POSPH এর কারণে আমি এখন আমার দোকানের সেলস রিপোর্ট বাসায় বসেই দেখতে পারি। সাপোর্ট টিম খুবই হেল্পফুল।',
    avatar: 'https://picsum.photos/100/100?random=12'
  },
  {
    name: 'শিমুল আহমেদ',
    role: 'স্বত্বাধিকারী',
    company: 'শিমুল ইলেকট্রনিক্স',
    content: 'আমার ৩টি শোরুম এখন এক জায়গা থেকে কন্ট্রোল করি। স্টক মেলানো এখন পানির মতো সহজ।',
    avatar: 'https://picsum.photos/100/100?random=13'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="text-left">
            <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">টেস্টিমোনিয়াল</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              আমাদের গ্রাহকরা <br/>যা বলছেন
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              বাংলাদেশের ৫০০০+ সফল উদ্যোক্তা তাদের ব্যবসার দৈনন্দিন কাজের জন্য POSPH এর উপর আস্থা রেখেছেন।
            </p>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 font-display">৪.৯</div>
                <div className="flex text-yellow-400 text-sm">
                   <Star className="w-4 h-4 fill-current" />
                   <Star className="w-4 h-4 fill-current" />
                   <Star className="w-4 h-4 fill-current" />
                   <Star className="w-4 h-4 fill-current" />
                   <Star className="w-4 h-4 fill-current" />
                </div>
                <div className="text-xs text-gray-500 mt-1">প্লে স্টোর রেটিং</div>
              </div>
              <div className="w-px bg-gray-200"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 font-display">২০+</div>
                <div className="text-sm text-gray-500">অ্যাওয়ার্ড</div>
                <div className="text-xs text-gray-500 mt-1">বিজনেস সলিউশন</div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-6">
               {testimonials.slice(0, 2).map((item, idx) => (
                 <TestimonialCard key={idx} item={item} />
               ))}
            </div>
            <div className="space-y-6 md:mt-12">
               {testimonials.slice(2, 4).map((item, idx) => (
                 <TestimonialCard key={idx} item={item} />
               ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const TestimonialCard: React.FC<{item: Testimonial}> = ({ item }) => (
  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
    <Quote className="w-8 h-8 text-primary-200 mb-4" />
    <p className="text-gray-700 leading-relaxed mb-6">"{item.content}"</p>
    <div className="flex items-center gap-3">
      <img 
        src={item.avatar} 
        alt={item.name} 
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
        <p className="text-xs text-gray-500">{item.company}</p>
      </div>
    </div>
  </div>
);

export default Testimonials;