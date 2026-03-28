import React from 'react';
import { Code2, Hash, Layout, PenTool, Database, Zap, FileText, Globe } from 'lucide-react';

const Integrations = () => {
  const integrations = [
    { name: 'GitHub', icon: <Code2 className="w-8 h-8" /> },
    { name: 'Slack', icon: <Hash className="w-8 h-8" /> },
    { name: 'Figma', icon: <PenTool className="w-8 h-8" /> },
    { name: 'Trello', icon: <Layout className="w-8 h-8" /> },
    { name: 'Database', icon: <Database className="w-8 h-8" /> },
    { name: 'Zapier', icon: <Zap className="w-8 h-8" /> },
    { name: 'Notion', icon: <FileText className="w-8 h-8" /> },
    { name: 'Webflows', icon: <Globe className="w-8 h-8" /> },
  ];

  return (
    <section className="py-24 relative z-10 border-t border-white/5 bg-[#0B0F19]">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary-blue/5 rounded-full blur-[80px] pointer-events-none" />

        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
          Works with your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E1FF] to-[#B446FF]">favorite tools</span>
        </h2>
        <p className="text-lg text-slate-400 mb-16 max-w-xl mx-auto">
          Seamlessly connect our AI engine with the platforms you already use every day.
        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
          {integrations.map((item, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#131825] border border-white/5 hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,225,255,0.15)] transition-all duration-300 text-slate-400 hover:text-[#00E1FF] group"
            >
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-6 text-slate-300 whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
