import React from 'react';
import { Check, Star, Palette, Search, BarChart3 } from 'lucide-react';
import AppStoreButton from './AppStoreButton';

const ProSection: React.FC = () => {
  return (
    <section id="pro" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Left: Copy */}
          <div className="flex-1">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-6">
                <Star size={12} fill="currentColor" />
                Premium
             </div>
             <h2 className="text-3xl md:text-5xl font-bold font-serif text-slate-900 mb-6 leading-tight">
               Go Deeper with <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500">Spiritual Growth Pro</span>
             </h2>
             <p className="text-lg text-slate-600 mb-8 leading-relaxed">
               Unlock the full potential of your spiritual companion. Access the entire archive, analyze your growth, and customize your experience with premium themes.
             </p>
             
             <div className="space-y-8 mb-10">
                <div className="flex gap-4 group">
                  <div className="mt-1 bg-white p-3 rounded-2xl border border-slate-100 text-brand shadow-sm group-hover:scale-105 transition-transform"><Palette size={22}/></div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Premium Themes</h4>
                    <p className="text-slate-600 text-sm mt-1">Unlock Midnight, Forest, Sunset, and Night Blue aesthetics to match your mood.</p>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <div className="mt-1 bg-white p-3 rounded-2xl border border-slate-100 text-brand shadow-sm group-hover:scale-105 transition-transform"><BarChart3 size={22}/></div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Advanced Analytics</h4>
                    <p className="text-slate-600 text-sm mt-1">Detailed charts tracking your engagement, streaks, and tasbih counts over time.</p>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <div className="mt-1 bg-white p-3 rounded-2xl border border-slate-100 text-brand shadow-sm group-hover:scale-105 transition-transform"><Search size={22}/></div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Archive Search</h4>
                    <p className="text-slate-600 text-sm mt-1">Browse and filter hundreds of past reflections, Hadiths, and verses instantly.</p>
                  </div>
                </div>
             </div>
             
             <AppStoreButton className="w-full md:w-auto justify-center" />
          </div>

          {/* Right: Pricing Cards */}
          <div className="flex-1 w-full max-w-md">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-slate-100 relative overflow-hidden ring-4 ring-slate-100">
               <div className="absolute top-0 right-0 bg-amber-500 text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-widest">Best Value</div>
               
               <h3 className="text-brand font-bold text-sm uppercase tracking-wide">Lifetime Access</h3>
               <div className="mt-4 flex items-baseline gap-2">
                 <span className="text-5xl font-bold text-slate-900 tracking-tight">$39.99</span>
                 <span className="text-slate-500 font-medium">/ one-time</span>
               </div>
               <p className="text-slate-400 text-sm mt-3 font-medium">Pay once, own it forever. Support the developer directly.</p>
               
               <div className="my-8 border-t border-slate-100"></div>
               
               <ul className="space-y-4 mb-8">
                  {['All Themes Unlocked', 'Unlimited Search', 'Future Updates Included', 'Family Sharing Supported'].map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                       <div className="bg-brand-50 p-1 rounded-full"><Check size={12} className="text-brand" strokeWidth={3} /></div> 
                       {f}
                    </li>
                  ))}
               </ul>
               
               <button className="w-full py-4 rounded-2xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition shadow-lg hover:shadow-xl active:scale-[0.98]">
                 Get Lifetime Access
               </button>
               
               <div className="mt-6 flex justify-center gap-4 text-xs font-medium text-slate-400">
                  <span>Monthly: $1.99</span>
                  <span className="text-slate-200">•</span>
                  <span>Yearly: $9.99 (7-Day Trial)</span>
               </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ProSection;