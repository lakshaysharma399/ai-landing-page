import React from 'react';
import { Star } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Sarah Chen',
      role: 'Software Engineer',
      text: "ChatGPT has completely transformed how I code. It's like having a senior developer by my side 24/7. The code suggestions are incredibly accurate and save me hours every day.",
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Content Creator',
      text: "As a full-time creator, I need to produce content fast. This AI helps me brainstorm, write, and edit in a fraction of the time. It's an absolute game-changer for my workflow.",
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Emily Watson',
      role: 'Medical Student',
      text: "Studying medicine is intense, but ChatGPT makes it manageable. It explains complex topics clearly and helps me prepare for exams. I honestly don't know how I'd manage without it.",
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
    }
  ];

  return (
    <section className="py-24 relative z-10 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            Loved by Millions
          </h2>
          <p className="text-lg text-slate-400">
            See what our users are saying
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-[#131825] border border-white/5 hover:border-white/10 transition-colors flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover border border-white/10" />
                <div>
                  <h4 className="text-white font-medium">{review.name}</h4>
                  <p className="text-sm text-slate-400">{review.role}</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed mb-8 flex-grow">
                {review.text}
              </p>
              <div className="flex items-center gap-1 mt-auto">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
