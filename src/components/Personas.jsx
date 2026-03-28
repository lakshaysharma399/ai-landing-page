import React, { useState } from 'react';
import { Code2, BrainCircuit, Palette, CheckCircle2 } from 'lucide-react';

const Personas = () => {
  const [activeTab, setActiveTab] = useState('Developers');

  const tabs = ['Developers', 'Students', 'Creators'];

  const contentMap = {
    Developers: {
      icon: <Code2 className="w-7 h-7 text-[#00E1FF]" />,
      iconBg: 'bg-[#00E1FF]/10 border-[#00E1FF]/20',
      title: 'For Developers',
      desc: 'Write code faster, debug smarter, and ship better products. Get instant help with syntax, architecture decisions, and best practices across all major programming languages.',
      points: [
        'Code completion and generation',
        'Bug detection and fixing',
        'Documentation generation'
      ],
      rightSide: (
        <div className="rounded-2xl border border-white/10 bg-[#0B0F19] overflow-hidden shadow-2xl relative">
          <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-xs font-mono text-slate-500 pr-4">main.py</div>
          </div>
          <div className="p-6 font-mono text-xs sm:text-sm overflow-x-auto text-left">
            <pre className="text-slate-300">
<span className="text-purple-400">def</span> <span className="text-blue-400">quicksort</span>(arr):
    <span className="text-purple-400">if</span> <span className="text-[#00E1FF]">len</span>(arr) {'<='} <span className="text-orange-400">1</span>:
        <span className="text-purple-400">return</span> arr
    pivot = arr[<span className="text-[#00E1FF]">len</span>(arr) // <span className="text-orange-400">2</span>]
    left = [x <span className="text-purple-400">for</span> x <span className="text-purple-400">in</span> arr <span className="text-purple-400">if</span> x {'<'} pivot]
    middle = [x <span className="text-purple-400">for</span> x <span className="text-purple-400">in</span> arr <span className="text-purple-400">if</span> x {'=='} pivot]
    right = [x <span className="text-purple-400">for</span> x <span className="text-purple-400">in</span> arr <span className="text-purple-400">if</span> x {'>'} pivot]
    <span className="text-purple-400">return</span> quicksort(left) + middle + quicksort(right)
            </pre>
          </div>
        </div>
      )
    },
    Students: {
      icon: <BrainCircuit className="w-7 h-7 text-blue-400" />,
      iconBg: 'bg-blue-400/10 border-blue-400/20',
      title: 'For Students',
      desc: 'Ace your studies with AI-powered tutoring, essay assistance, and research help. Get explanations in your learning style and master any subject faster.',
      points: [
        'Homework help and explanations',
        'Essay writing and editing',
        'Research and summarization'
      ],
      rightSide: (
        <div className="rounded-2xl border border-white/10 bg-[#1A2133] overflow-hidden shadow-2xl relative p-6 sm:p-8 text-left">
          <div className="space-y-6">
            <div>
              <h4 className="text-primary-purple font-semibold mb-2">Question:</h4>
              <p className="text-slate-200">Explain quantum entanglement in simple terms</p>
            </div>
            <div>
              <h4 className="text-[#00E1FF] font-semibold mb-2">Answer:</h4>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                Imagine two magic coins that are linked. When you flip one and it lands on heads, the other instantly becomes tails, no matter how far apart they are. This hidden connection is quantum entanglement...
              </p>
            </div>
          </div>
        </div>
      )
    },
    Creators: {
      icon: <Palette className="w-7 h-7 text-[#00E1FF]" />,
      iconBg: 'bg-[#00E1FF]/10 border-[#00E1FF]/20',
      title: 'For Creators',
      desc: 'Unlock your creativity with AI that helps you brainstorm, write, and design. From social media posts to full blog articles, create content that resonates.',
      points: [
        'Content ideation and outlines',
        'Social media copy generation',
        'Video scripts and storyboards'
      ],
      rightSide: (
        <div className="flex flex-col gap-4 text-left font-medium text-sm sm:text-base h-full justify-center">
          <div className="w-full rounded-2xl border border-white/10 bg-gradient-to-r from-purple-900/40 to-pink-900/20 shadow-xl p-5 sm:p-6 text-slate-300">
            "Just launched my new product! 🚀 After months of hard work, I'm excited to share this game-changing tool with you all. Link in bio!"
          </div>
          <div className="w-full rounded-2xl border border-white/10 bg-gradient-to-r from-blue-900/40 to-cyan-900/20 shadow-xl p-5 sm:p-6 text-slate-300">
            "5 Tips for Better Productivity: 1) Start with your most important task 2) Time-block your calendar 3) Eliminate distractions..."
          </div>
        </div>
      )
    }
  };

  const current = contentMap[activeTab];

  return (
    <section className="py-24 relative z-10 bg-background text-center md:text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            Built for Everyone
          </h2>
          <p className="text-lg text-slate-400">
            Powerful AI assistance for every profession
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-primary-purple to-primary-blue text-white shadow-[0_0_20px_rgba(180,70,255,0.4)]'
                  : 'bg-[#131825] border border-white/5 text-slate-400 hover:text-white hover:border-white/20 hover:bg-[#1a2133]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Box */}
        <div className="bg-[#131825] border border-white/10 rounded-3xl p-8 lg:p-16 relative overflow-hidden text-left">
          {/* Background Glow */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-blue/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-purple/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Wrapper to trigger simple fade animation on tab switch */}
          <div key={activeTab} className="grid lg:grid-cols-2 gap-12 lg:gap-24 relative z-10 items-center animate-in fade-in slide-in-from-bottom-2 duration-500">
            
            {/* Text Side */}
            <div>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border ${current.iconBg}`}>
                {current.icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-6 animate-in slide-in-from-bottom-2 delay-100">{current.title}</h3>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed animate-in slide-in-from-bottom-2 delay-150">
                {current.desc}
              </p>
              <ul className="space-y-4 animate-in slide-in-from-bottom-2 delay-200">
                {current.points.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side Visual Mockup */}
            <div className="min-w-0 w-full h-full flex flex-col justify-center animate-in zoom-in-95 delay-150">
              {current.rightSide}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personas;
