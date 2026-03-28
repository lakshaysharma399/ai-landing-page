import React from 'react';
import { Sparkles, MessageCircle, Code2, Users } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0B0F19] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center justify-center w-8 h-8 rounded bg-gradient-to-br from-primary-purple to-primary-blue">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-white tracking-wide">ChatGPT</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              Empowering next-generation teams with intelligent, context-aware AI solutions.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
                <Code2 className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
                <Users className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Templates</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} ChatGPT Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
