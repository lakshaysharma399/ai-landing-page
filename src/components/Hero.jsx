import React from 'react';
import { ArrowRight, Play, Sparkles, Star } from 'lucide-react';
import Typewriter from './Typewriter';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-24 lg:pt-32 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-purple/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-blue/10 rounded-full blur-[100px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700/50 bg-slate-800/30 mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary-purple" />
              <span className="text-sm font-medium text-slate-300">Powered by GPT-4 Technology</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight min-h-[140px] md:min-h-0">
              Your AI Copilot to <br className="hidden lg:block" />
              <Typewriter words={['Write code', 'Fix bugs', 'Build faster', 'Create content', 'Automate tasks']} />
            </h1>
            
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Transform your productivity with advanced AI that understands context, generates content, and helps you work smarter, not harder.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12">
              <button onClick={() => window.open('https://chatgpt.com', '_blank')} className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-lg font-medium text-white bg-gradient-to-r from-[#B446FF] to-[#00E1FF] hover:opacity-90 transition-opacity">
                Try Now
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-lg font-medium text-white border border-slate-700 hover:bg-slate-800/50 transition-colors">
                <Play className="w-4 h-4" />
                Watch Demo
              </button>
            </div>
            
            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start gap-6">
              <div className="flex -space-x-3">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-[#0B0F19] object-cover" />
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-[#0B0F19] object-cover" />
                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-[#0B0F19] object-cover" />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-sm font-medium text-slate-300">2M+ users</span>
                <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-600"></div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                  <span className="text-sm font-medium text-slate-300 ml-1">4.9/5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Chat Mockup */}
          <div className="flex-1 w-full max-w-2xl lg:max-w-none">
            <div className="rounded-2xl border border-white/10 bg-[#131825]/80 backdrop-blur-xl shadow-2xl overflow-hidden shine-effect">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs font-medium text-slate-400">Chat with AI</div>
                <div className="w-10"></div> {/* Spacer for centering */}
              </div>
              
              {/* Chat Area */}
              <div className="p-6 space-y-6">
                {/* User Message */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shrink-0"></div>
                  <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-slate-300 max-w-[85%]">
                    Help me write a product description for my new app
                  </div>
                </div>
                
                {/* AI Message */}
                <div className="flex items-start gap-4 flex-row-reverse">
                  <div className="w-8 h-8 rounded-full bg-primary-blue flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-primary-purple/10 border border-primary-purple/20 rounded-2xl rounded-tr-sm px-4 py-4 text-sm text-slate-200 max-w-[85%]">
                    <p className="mb-3">I'd be happy to help! Here's a compelling product description:</p>
                    <p className="text-primary-blue/90 italic">
                      "Revolutionary productivity tool that combines AI-powered insights with intuitive design. Perfect for teams looking to streamline their workflow..."
                    </p>
                  </div>
                </div>
                
                {/* User Message */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shrink-0"></div>
                  <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-slate-300 max-w-[85%]">
                    Can you make it more professional?
                  </div>
                </div>
                
                {/* Typing Indicator */}
                <div className="flex items-start gap-4 flex-row-reverse">
                  <div className="w-8 h-8 rounded-full bg-primary-blue flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex gap-1 items-center px-4 py-3 h-[42px]">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-purple animate-bounce"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-blue animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-blue animate-bounce" style={{ animationDelay: '0.4s' }}></div>
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
