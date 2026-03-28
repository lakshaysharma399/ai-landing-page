import React from 'react';
import { ArrowRight } from 'lucide-react';

const Cta = () => {
  return (
    <section className="py-24 relative z-10 border-t border-white/5 bg-[#131825] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-blue/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-primary-purple/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
          Start Using AI Today
        </h2>
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join millions of users who are already working smarter with AI. No credit card required. Get started in seconds.
        </p>
        
        <div className="flex flex-col items-center">
          <button onClick={() => window.open('https://chatgpt.com', '_blank')} className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-medium text-white bg-gradient-to-r from-[#B446FF] to-[#00E1FF] hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(0,225,255,0.3)] hover:shadow-[0_0_30px_rgba(0,225,255,0.5)] mb-4">
            Get Started Free
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-sm text-slate-500">
            Free forever. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cta;
