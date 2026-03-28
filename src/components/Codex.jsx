import React from 'react';
import { Terminal } from 'lucide-react';

const Codex = () => {
  return (
    <section className="py-24 relative z-10 bg-[#131825]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="min-w-0">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#00E1FF] to-[#B446FF] mb-6 shadow-lg">
              <Terminal className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              ChatGPT <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-purple">Codex</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Integrate advanced AI capabilities directly into your own applications with our robust API. Get access to the same powerful models that drive our core platform.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-lg font-medium text-white bg-white/10 hover:bg-white/20 border border-white/10 transition-colors">
                View Documentation
              </button>
            </div>
          </div>

          <div className="relative min-w-0 w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-[80px] rounded-full" />
            <div className="relative rounded-2xl border border-white/10 bg-[#0B0F19] overflow-hidden shadow-2xl w-full">
              <div className="flex items-center px-4 py-3 bg-[#1A2133] border-b border-white/5">
                <span className="text-xs font-mono text-slate-400">bash</span>
              </div>
              <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm overflow-x-auto w-full">
                <pre className="text-slate-300">
<span className="text-emerald-400">curl</span> https://api.chatgpt.com/v1/completions \
  -H <span className="text-orange-300">"Authorization: Bearer YOUR_API_KEY"</span> \
  -H <span className="text-orange-300">"Content-Type: application/json"</span> \
  -d <span className="text-yellow-200">'{'{'}
    "model": "neural-codex-v2",
    "prompt": "Write a function to connect to Postgres",
    "max_tokens": 150
  {'}'}'</span>
                </pre>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Codex;
