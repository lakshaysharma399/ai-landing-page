import React from 'react';

const Interface = () => {
  return (
    <section className="py-24 pb-32 relative z-10 w-full overflow-hidden flex justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            Experience the Interface
          </h2>
          <p className="text-lg text-slate-400">
            Clean, intuitive, and powerful
          </p>
        </div>

        {/* Browser Mockup */}
        <div className="relative mx-auto max-w-5xl">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-purple/20 to-primary-blue/20 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative rounded-2xl md:rounded-[32px] border border-white/10 bg-[#131825]/90 backdrop-blur-xl shadow-2xl overflow-hidden shine-effect">
            
            {/* Browser Header */}
            <div className="flex items-center px-4 md:px-6 py-4 bg-[#1A2133] border-b border-white/5">
              <div className="flex gap-2 mr-6 shrink-0">
                <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              
              {/* Address bar */}
              <div className="flex-1 max-w-2xl mx-auto">
                <div className="bg-[#0B0F19] rounded-lg px-4 py-1.5 text-xs text-slate-400 font-mono text-center border border-white/5">
                  chatgpt.com/chat
                </div>
              </div>
              <div className="w-16 shrink-0"></div> {/* Spacer to keep address centered */}
            </div>

            {/* App Content Area */}
            <div className="p-6 md:p-10">
              <div className="flex flex-col lg:flex-row gap-6">
                
                {/* Main Chat Area */}
                <div className="flex-1 flex flex-col gap-6">
                  {/* Message Blocks */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-purple to-primary-blue shrink-0 shadow-lg shadow-primary-purple/20"></div>
                    <div className="flex-1 space-y-3 pt-2">
                      <div className="h-3 bg-white/10 rounded-full w-3/4"></div>
                      <div className="h-3 bg-white/10 rounded-full w-full"></div>
                      <div className="h-3 bg-white/10 rounded-full w-5/6"></div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-white/5 flex gap-4">
                    <div className="flex-1 space-y-3">
                      <div className="h-3 bg-white/5 rounded-full w-full"></div>
                      <div className="h-3 bg-white/5 rounded-full w-4/5"></div>
                    </div>
                  </div>
                </div>

                {/* Right Sidebar Mockup */}
                <div className="w-full lg:w-72 shrink-0 space-y-4">
                  <div className="h-16 w-full rounded-xl bg-gradient-to-r from-primary-purple/20 to-transparent border border-primary-purple/10"></div>
                  <div className="h-12 w-full rounded-xl bg-white/5"></div>
                  <div className="h-12 w-full rounded-xl bg-white/5"></div>
                </div>
              </div>

              {/* Bottom Prompts */}
              <div className="mt-12 flex flex-col md:flex-row gap-4">
                <div className="flex-1 h-14 rounded-xl bg-white/5 flex items-center px-4 border border-white/5">
                  <div className="h-2 bg-white/10 rounded-full w-1/3"></div>
                </div>
                <div className="flex-1 h-14 rounded-xl bg-white/5 flex items-center px-4 border border-white/5">
                  <div className="h-2 bg-white/10 rounded-full w-1/4"></div>
                </div>
                <div className="flex-1 h-14 rounded-xl bg-white/5 flex items-center px-4 border border-white/5">
                  <div className="h-2 bg-white/10 rounded-full w-2/5"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interface;
