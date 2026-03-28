import React from 'react';
import { MessageSquare, BrainCircuit, Rocket } from 'lucide-react';

const Steps = () => {
  const steps = [
    {
      num: '01',
      title: 'Ask Anything',
      desc: 'Type your question or request in natural language. No special commands needed.',
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      gradient: 'from-[#B446FF] to-purple-600'
    },
    {
      num: '02',
      title: 'AI Processes',
      desc: 'Our advanced AI understands context and generates the perfect response instantly.',
      icon: <BrainCircuit className="w-6 h-6 text-white" />,
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      num: '03',
      title: 'Get Results',
      desc: 'Receive high-quality outputs you can use right away. Iterate and refine as needed.',
      icon: <Rocket className="w-6 h-6 text-white" />,
      gradient: 'from-[#00E1FF] to-blue-500'
    }
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            How It Works
          </h2>
          <p className="text-lg text-slate-400">
            Get started in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Only visible on md+ screens) */}
          <div className="hidden md:block absolute top-[28px] left-[16%] right-[16%] h-[1px] bg-gradient-to-r from-transparent via-[#B446FF]/50 to-transparent z-0"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br ${step.gradient} shadow-[0_0_30px_rgba(180,70,255,0.2)]`}>
                {step.icon}
              </div>
              
              <div className="text-4xl font-light text-slate-600 mb-4 tracking-wider">
                {step.num}
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-4">
                {step.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed max-w-xs mx-auto text-base">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
