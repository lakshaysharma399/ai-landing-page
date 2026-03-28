import React from 'react';
import { Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#0B0F19]/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="flex items-center justify-center w-8 h-8 rounded bg-gradient-to-br from-primary-purple to-primary-blue">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-white tracking-wide">ChatGPT</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-sm text-slate-300 hover:text-white transition-colors">Pricing</a>
            <a href="#docs" className="text-sm text-slate-300 hover:text-white transition-colors">Docs</a>
            <a href="#login" className="text-sm text-slate-300 hover:text-white transition-colors">Login</a>
            <button onClick={() => window.open('https://chatgpt.com', '_blank')} className="px-6 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-[#B446FF] to-[#00E1FF] hover:opacity-90 transition-opacity">
              Try Now
            </button>
          </nav>

          {/* Mobile menu button (omitted for brevity, keeping it simple as per design) */}
        </div>
      </div>
    </header>
  );
};

export default Header;
