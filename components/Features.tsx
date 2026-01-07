import React from 'react';
import { Moon, Sun, Heart, BookOpen, Calendar, Quote, Hash } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs text-brand font-bold tracking-[0.2em] uppercase mb-3">What We Offer</h2>
          <p className="text-3xl leading-tight font-bold tracking-tight text-slate-900 sm:text-4xl font-serif">
            Designed for the modern believer
          </p>
          <p className="mt-4 max-w-2xl text-lg text-slate-500 mx-auto leading-relaxed">
            In the hustle of daily life, we often forget to pause. Spiritual Growth: Muslim Ref helps you reconnect with your inner self and your Creator through mindful design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Daily Reflections */}
          <div className="col-span-1 md:col-span-2 bg-slate-50 rounded-[2rem] p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-100 rounded-2xl text-blue-600 group-hover:scale-110 transition-transform">
                <Quote size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-serif">Daily Reflections</h3>
            </div>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              Gentle reminders throughout the day—reflections on tawakkul (trust), sabr (patience), and shukr (gratitude). Words to bring peace to your heart.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
               <div className="flex-1 bg-white p-5 rounded-2xl border border-slate-200 flex items-center gap-4 shadow-sm">
                  <div className="bg-orange-100 p-2 rounded-full"><Sun className="text-orange-500" size={20} /></div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Morning</div>
                    <div className="text-sm font-semibold text-slate-800">Motivation & Action</div>
                  </div>
               </div>
               <div className="flex-1 bg-slate-900 p-5 rounded-2xl border border-slate-800 flex items-center gap-4 shadow-lg shadow-slate-900/20">
                  <div className="bg-indigo-500/20 p-2 rounded-full"><Moon className="text-indigo-300" size={20} /></div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Evening</div>
                    <div className="text-sm font-semibold text-white">Peace & Reflection</div>
                  </div>
               </div>
            </div>
          </div>

          {/* Card 2: Tasbih */}
          <div className="col-span-1 bg-brand-50 rounded-[2rem] p-8 md:p-10 border border-brand/10 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-brand-100 rounded-2xl text-brand group-hover:scale-110 transition-transform">
                <Hash size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-serif">Guided Tasbih</h3>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed">
              A digital companion for your Dhikr. Track your SubhanAllah, Alhamdulillah, and Allahu Akbar counts with a beautiful, haptic-enhanced interface.
            </p>
          </div>

          {/* Card 3: Quranic Verses */}
          <div className="col-span-1 bg-slate-50 rounded-[2rem] p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-purple-100 rounded-2xl text-purple-600 group-hover:scale-110 transition-transform">
                <BookOpen size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-serif">Verses & Duas</h3>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed">
              Curated Quranic verses with meanings and beautiful duas for various occasions. Save your favorites to revisit them anytime.
            </p>
          </div>

          {/* Card 4: Widgets */}
          <div className="col-span-1 md:col-span-2 bg-white rounded-[2rem] p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-80 h-80 bg-brand-50 rounded-full blur-3xl -z-10 group-hover:bg-brand-100 transition-colors opacity-70"></div>
             <div className="flex flex-col h-full justify-between relative z-10">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-rose-100 rounded-2xl text-rose-600 group-hover:scale-110 transition-transform">
                      <Heart size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 font-serif">Widget Ecosystem</h3>
                  </div>
                  <p className="text-slate-600 max-w-md text-lg leading-relaxed">
                    Keep your reminders close. Beautiful, theme-aware widgets for both your Lock Screen and Home Screen, so your faith is always just a glance away.
                  </p>
                </div>
                
                {/* Visual Representation of Widgets */}
                <div className="flex gap-6 mt-10 opacity-100">
                   <div className="w-40 h-40 bg-slate-900 rounded-3xl p-5 flex flex-col justify-between text-white shadow-2xl transform rotate-3 transition-transform group-hover:rotate-0 hover:scale-105 duration-300 border border-slate-800">
                      <div className="text-[10px] uppercase text-brand-light font-bold tracking-widest">Jumu'ah</div>
                      <div className="text-base font-serif italic leading-snug">"Read Surah Al-Kahf to illuminate your week."</div>
                   </div>
                   <div className="w-40 h-20 bg-white border border-slate-200 rounded-3xl p-4 flex items-center gap-3 shadow-xl transform -rotate-2 transition-transform group-hover:rotate-0 hover:scale-105 duration-300 self-end">
                      <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand text-lg">🤲</div>
                      <div className="text-xs font-bold text-slate-800">Morning<br/>Dhikr</div>
                   </div>
                </div>
             </div>
          </div>
          
          {/* Card 5: Smart Reminders */}
          <div className="col-span-1 md:col-span-3 bg-gradient-to-r from-slate-900 to-slate-800 rounded-[2rem] p-8 md:p-10 shadow-xl text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800">
             <div className="max-w-xl">
               <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-white/10 rounded-xl text-brand-light backdrop-blur-sm">
                    <Calendar size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Smart Jumu'ah & Dhikr Reminders</h3>
               </div>
               <p className="text-slate-300 text-lg">
                 Special content prioritization for Fridays and specific themes like Rizq and Tawakkul. Never miss a moment of reflection.
               </p>
             </div>
             <div className="flex flex-wrap gap-3">
                <span className="px-5 py-2.5 rounded-full bg-white/5 text-sm font-medium border border-white/10 hover:bg-white/10 transition cursor-default">Ishraq</span>
                <span className="px-5 py-2.5 rounded-full bg-brand/20 text-brand-light text-sm font-medium border border-brand/30 shadow-[0_0_15px_-3px_rgba(124,127,255,0.3)]">Jumu'ah</span>
                <span className="px-5 py-2.5 rounded-full bg-white/5 text-sm font-medium border border-white/10 hover:bg-white/10 transition cursor-default">Maghrib</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;