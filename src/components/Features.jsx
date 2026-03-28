import React from 'react';
import { Zap, Shield, Code, MessageSquare, Palette, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: 'Lightning Fast',
      description: 'Get instant responses powered by the latest AI models. No waiting, just results.',
      icon: <Zap className="w-5 h-5 text-white" />,
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level encryption and privacy controls to keep your data safe and secure.',
      icon: <Shield className="w-5 h-5 text-white" />,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Code Generation',
      description: 'Write, debug, and optimize code in any programming language with AI assistance.',
      icon: <Code className="w-5 h-5 text-white" />,
      gradient: 'from-emerald-400 to-teal-500'
    },
    {
      title: 'Natural Conversations',
      description: 'Chat naturally with AI that understands context and remembers your preferences.',
      icon: <MessageSquare className="w-5 h-5 text-white" />,
      gradient: 'from-fuchsia-500 to-purple-500'
    },
    {
      title: 'Creative Content',
      description: 'Generate images, copy, and creative content that matches your brand voice.',
      icon: <Palette className="w-5 h-5 text-white" />,
      gradient: 'from-orange-400 to-rose-400'
    },
    {
      title: 'Team Collaboration',
      description: 'Share conversations, templates, and insights with your entire team.',
      icon: <Users className="w-5 h-5 text-white" />,
      gradient: 'from-cyan-400 to-blue-500'
    }
  ];

  return (
    <section id="features" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Powerful Features for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-primary-blue">Modern Teams</span>
          </h2>
          <p className="text-lg text-slate-400">
            Everything you need to supercharge your workflow with AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-3xl bg-[#131825] border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(0,225,255,0.1)] hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${feature.gradient} shadow-lg`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm lg:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
