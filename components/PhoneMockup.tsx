import React from 'react';
import { 
  Share2, Heart, Search, Flame, 
  Wind, CloudRain, RotateCcw, 
  Copy, Settings, Leaf, CircleDot, Check,
  ChevronRight
} from 'lucide-react';

export type ScreenType = 'home' | 'tasbih' | 'favorites' | 'settings';

interface PhoneMockupProps {
  screen?: ScreenType;
  theme?: 'light' | 'dark';
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ screen = 'home', theme = 'dark' }) => {
  const isDark = theme === 'dark';
  const bgColor = isDark ? 'bg-[#000000]' : 'bg-[#FDFBF7]'; // Black vs Cream
  const textColor = isDark ? 'text-white' : 'text-slate-900';
  const subTextColor = isDark ? 'text-slate-400' : 'text-slate-500';
  const cardBg = isDark ? 'bg-[#1C1C1E]' : 'bg-white';
  const navBg = isDark ? 'bg-[#1C1C1E]/90' : 'bg-white/90';
  const borderColor = isDark ? 'border-white/10' : 'border-black/5';

  const BottomNav = () => (
    <div className={`h-[85px] w-full ${navBg} backdrop-blur-2xl absolute bottom-0 flex justify-around items-start pt-4 border-t ${borderColor} z-20 pb-8`}>
       <div className={`flex flex-col items-center gap-1 ${screen === 'home' ? 'text-white' : 'text-gray-500'}`}>
          <Leaf size={22} fill={screen === 'home' ? "currentColor" : "none"} />
          <span className="text-[10px] font-medium tracking-wide">Today</span>
       </div>
       <div className={`flex flex-col items-center gap-1 ${screen === 'favorites' ? 'text-white' : 'text-gray-500'}`}>
          <Heart size={22} fill={screen === 'favorites' ? "currentColor" : "none"} />
          <span className="text-[10px] font-medium tracking-wide">Favorites</span>
       </div>
       <div className={`flex flex-col items-center gap-1 ${screen === 'tasbih' ? 'text-white' : 'text-gray-500'}`}>
          <CircleDot size={22} />
          <span className="text-[10px] font-medium tracking-wide">Tasbih</span>
       </div>
       <div className={`flex flex-col items-center gap-1 ${screen === 'settings' ? 'text-white' : 'text-gray-500'}`}>
          <Settings size={22} fill={screen === 'settings' ? "currentColor" : "none"} />
          <span className="text-[10px] font-medium tracking-wide">Settings</span>
       </div>
       {/* Home Indicator */}
       <div className={`absolute bottom-2 left-1/2 -translate-x-1/2 w-[130px] h-[5px] rounded-full ${isDark ? 'bg-white' : 'bg-black'}`}></div>
    </div>
  );

  return (
    // Outer Container (Shadows & Positioning)
    <div className="relative mx-auto h-[820px] w-[390px] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)] z-10 select-none">
      
      {/* Titanium Frame Chassis - Black Titanium Finish */}
      {/* Removed lighter gray gradient, now using deep rich black/gunmetal */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a2a2a] via-[#111111] to-[#1a1a1a] rounded-[4rem] shadow-2xl p-[1px] ring-1 ring-white/5 ring-inset">
        
        {/* Inner Black Bezel */}
        <div className="h-full w-full bg-black rounded-[3.9rem] border-[5px] border-black overflow-hidden relative shadow-inner">
          
          {/* Dynamic Island */}
          <div className="absolute top-[11px] left-1/2 -translate-x-1/2 h-[35px] w-[120px] bg-black rounded-[20px] z-50 flex items-center justify-between px-3 transition-all duration-300 shadow-[0_0_1px_1px_rgba(255,255,255,0.05)]">
             {/* Simulating camera/sensor reflection */}
             <div className="w-16 h-full relative">
                <div className="absolute top-1/2 -translate-y-1/2 right-1 w-3 h-3 rounded-full bg-[#0f0f10] shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]"></div>
             </div>
          </div>
          
          {/* Main Screen Area */}
          <div className={`w-full h-full ${bgColor} overflow-hidden flex flex-col relative font-sans rounded-[3.6rem]`}>
            
            {/* Status Bar */}
            <div className="flex justify-between items-center px-8 pt-[14px] w-full z-40 h-[54px] absolute top-0 left-0">
              <div className={`text-[15px] font-semibold ${textColor} tracking-tight pl-2`}>9:41</div>
              <div className="flex gap-1.5 items-center pr-2">
                 <div className="h-3 w-4">
                    <svg viewBox="0 0 24 24" fill="currentColor" className={textColor}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                 </div>
                 <div className="h-3 w-4">
                    <svg viewBox="0 0 24 24" fill="currentColor" className={textColor}><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
                 </div>
                 <div className="h-2.5 w-6 border border-gray-400 rounded-[4px] relative opacity-90">
                   <div className={`absolute inset-0.5 w-[90%] ${textColor} bg-current rounded-[2px]`}></div>
                 </div>
              </div>
            </div>

            {/* --- HOME SCREEN --- */}
            {screen === 'home' && (
              <div className="flex-1 flex flex-col px-6 pt-16 pb-28 overflow-y-auto no-scrollbar">
                {/* Header */}
                <div className="flex justify-between items-center mb-8 mt-2">
                  <h1 className={`text-xl font-bold font-serif ${textColor}`}>Spiritual Growth</h1>
                  <div className="flex gap-3">
                    <div className={`w-10 h-10 rounded-full ${isDark ? 'bg-white/10' : 'bg-gray-100'} flex items-center justify-center backdrop-blur-md`}>
                      <Search size={20} className={textColor} />
                    </div>
                    <div className={`h-10 px-3.5 rounded-full ${isDark ? 'bg-white/10' : 'bg-gray-100'} flex items-center gap-1.5 backdrop-blur-md`}>
                      <Flame size={18} className="text-orange-500" fill="currentColor" />
                      <span className={`text-base font-semibold ${textColor}`}>1</span>
                    </div>
                  </div>
                </div>

                {/* Mood Selector */}
                <div className="mb-10">
                  <h2 className={`text-sm font-medium ${subTextColor} mb-5`}>How are you feeling today?</h2>
                  <div className="flex justify-between gap-3 overflow-x-auto pb-2 no-scrollbar">
                    {[
                      { icon: Wind, label: 'Anxious' },
                      { icon: CloudRain, label: 'Sad' },
                      { icon: Heart, label: 'Grateful' },
                      { icon: Flame, label: 'Angry' },
                    ].map((mood, i) => (
                      <button key={i} className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-2xl ${isDark ? 'bg-[#1C1C1E] border border-white/5 active:bg-[#2C2C2E]' : 'bg-white border border-gray-100 active:bg-gray-50'} transition-colors whitespace-nowrap min-w-[100px]`}>
                        <mood.icon size={16} className={isDark ? 'text-gray-400' : 'text-gray-500'} />
                        <span className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{mood.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Reflection Card */}
                <div className={`flex-1 min-h-[300px] ${cardBg} rounded-[2rem] p-8 relative flex flex-col justify-center items-center text-center shadow-lg border ${borderColor}`}>
                   <div className="absolute top-8 left-1/2 -translate-x-1/2 px-5 py-2 bg-[#5856D6]/20 rounded-full backdrop-blur-sm">
                     <span className="text-xs font-bold tracking-widest text-[#7C7FFF] uppercase">Reflection</span>
                   </div>
                   
                   <p className={`text-2xl leading-relaxed font-serif ${textColor} mb-6 mt-4`}>
                     Night is a special time when prayers are accepted. Pray from your heart.
                   </p>
                </div>

                {/* Bottom Actions */}
                <div className="mt-8 flex justify-center gap-5">
                  <button className={`w-14 h-14 rounded-full ${cardBg} border ${borderColor} flex items-center justify-center hover:scale-105 transition-transform`}>
                    <Heart size={22} className={isDark ? 'text-gray-400' : 'text-gray-500'} />
                  </button>
                  <button className={`w-14 h-14 rounded-full ${cardBg} border ${borderColor} flex items-center justify-center hover:scale-105 transition-transform`}>
                    <Share2 size={22} className={isDark ? 'text-gray-400' : 'text-gray-500'} />
                  </button>
                  <button className={`w-14 h-14 rounded-full ${cardBg} border ${borderColor} flex items-center justify-center hover:scale-105 transition-transform`}>
                    <Copy size={22} className={isDark ? 'text-gray-400' : 'text-gray-500'} />
                  </button>
                  <button className={`h-14 px-8 rounded-full ${cardBg} border ${borderColor} flex items-center gap-3 hover:scale-105 transition-transform`}>
                    <RotateCcw size={18} className={isDark ? 'text-gray-400' : 'text-gray-500'} />
                    <span className={`text-sm font-semibold ${textColor}`}>Next</span>
                  </button>
                </div>
              </div>
            )}

            {/* --- TASBIH SCREEN --- */}
            {screen === 'tasbih' && (
              <div className="flex-1 flex flex-col px-6 pt-16 pb-32">
                 {/* Header */}
                 <div className="flex justify-center mb-12 mt-2">
                    <div className="bg-[#5856D6] px-6 py-2.5 rounded-full flex items-center gap-3 shadow-lg shadow-[#5856D6]/20">
                       <div className="w-px h-3 bg-white/40"></div>
                       <span className="text-white text-sm font-bold uppercase tracking-wider">Guided Mode</span>
                       <div className="w-px h-3 bg-white/40"></div>
                    </div>
                 </div>

                 {/* Main Content */}
                 <div className={`${cardBg} rounded-[2.5rem] p-10 flex-1 flex flex-col items-center justify-between border ${borderColor} mb-8 relative overflow-hidden`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                    
                    <div className="text-center mt-6 z-10">
                      <h2 className="text-5xl text-white font-serif mb-6 leading-relaxed font-medium">سُبْحَانَ الله</h2>
                      <h3 className="text-[#5856D6] text-2xl font-semibold mb-2">SubhanAllah</h3>
                      <p className="text-gray-500 text-base">Glory be to Allah</p>
                      
                      <div className="flex justify-center gap-1.5 mt-8">
                         <div className="w-2 h-2 rounded-full bg-[#5856D6]"></div>
                         <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                         <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                         <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                      </div>
                    </div>

                    <div className="text-center w-full z-10">
                      <div className={`text-7xl font-light ${textColor} mb-3 tabular-nums`}>
                         0<span className="text-3xl text-gray-600 font-normal">/33</span>
                      </div>
                      <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-6">Total: 0/100</div>
                      <div className="w-48 h-1.5 bg-gray-800 rounded-full mx-auto overflow-hidden">
                         <div className="w-0 h-full bg-[#5856D6]"></div>
                      </div>
                    </div>
                 </div>

                 {/* Tapper */}
                 <div className="flex justify-center">
                    <button className="w-24 h-24 rounded-full bg-[#5856D6] shadow-[0_0_50px_-10px_rgba(88,86,214,0.6)] flex items-center justify-center active:scale-90 transition-all duration-200 group">
                       <CircleDot size={40} className="text-white opacity-90 group-hover:scale-110 transition-transform" />
                    </button>
                 </div>
              </div>
            )}

            {/* --- FAVORITES SCREEN --- */}
            {screen === 'favorites' && (
               <div className="flex-1 flex flex-col px-6 pt-16 pb-28 overflow-y-auto no-scrollbar">
                  <h1 className={`text-4xl font-bold font-serif ${textColor} mb-8 mt-2`}>Favorites</h1>
                  
                  <div className={`relative mb-8`}>
                     <Search size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500" />
                     <div className={`w-full ${isDark ? 'bg-[#1C1C1E]' : 'bg-gray-100'} rounded-2xl py-4 pl-14 pr-5 text-base ${textColor}`}>Search favorites...</div>
                  </div>

                  <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar mb-6 -mx-6 px-6">
                     {['All', 'Verse', 'Hadith', 'Dua', 'Reflection'].map((f, i) => (
                        <button key={f} className={`px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${i === 1 ? 'bg-[#5856D6] text-white shadow-lg shadow-[#5856D6]/20' : (isDark ? 'bg-[#1C1C1E] text-gray-400 border border-white/5' : 'bg-gray-100 text-gray-600')}`}>
                           {f}
                        </button>
                     ))}
                  </div>

                  <div className="space-y-5">
                     {[
                        { type: 'VERSE', text: 'And whoever relies upon Allah - then He is sufficient for him.', src: "Qur'an, At-Talaq 65:3" },
                        { type: 'VERSE', text: 'Allah does not burden a soul beyond that it can bear.', src: "Qur'an, Al-Baqarah 2:286" },
                        { type: 'AYET', text: 'O, gökleri ve yeri hak ile yarattı. Geceyi gündüzün üzerine ör...', src: "Kur'an, Zümer 39:5" },
                        { type: 'HADITH', text: 'Richness is not having many possessions, but richness is being content with oneself.', src: "Sahih al-Bukhari" }
                     ].map((card, i) => (
                        <div key={i} className={`${cardBg} p-6 rounded-3xl border ${borderColor}`}>
                           <div className="flex justify-between items-start mb-4">
                              <span className="px-3 py-1 rounded-lg bg-[#5856D6]/20 text-[#7C7FFF] text-[11px] font-bold uppercase tracking-wider">{card.type}</span>
                              <button className={isDark ? 'text-gray-500 hover:text-white' : 'text-gray-400 hover:text-black'}><BookmarkIcon /></button>
                           </div>
                           <p className={`${textColor} text-lg leading-relaxed font-medium mb-5`}>{card.text}</p>
                           <p className={`text-sm ${subTextColor} font-medium`}>{card.src}</p>
                        </div>
                     ))}
                  </div>
               </div>
            )}

            {/* --- SETTINGS SCREEN --- */}
            {screen === 'settings' && (
               <div className="flex-1 flex flex-col px-6 pt-16 pb-28 overflow-y-auto no-scrollbar">
                  <h1 className={`text-4xl font-bold font-serif ${textColor} mb-8 mt-2`}>Settings</h1>

                  {/* Premium Banner */}
                  <div className={`p-5 rounded-[1.5rem] ${isDark ? 'bg-[#1C1C1E]' : 'bg-white'} border ${borderColor} mb-8 shadow-sm`}>
                     <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                           <div className="text-amber-400 p-2 bg-amber-400/10 rounded-full"><StarIcon /></div>
                           <div>
                              <div className={`font-bold text-base ${textColor}`}>Premium Active</div>
                              <div className="text-xs text-gray-500 font-medium mt-0.5">All features unlocked</div>
                           </div>
                        </div>
                        <div className="bg-green-500 rounded-full p-1"><Check size={10} className="text-black" strokeWidth={4} /></div>
                     </div>
                     <div className={`w-full py-3 px-4 rounded-xl ${isDark ? 'bg-[#2C2C2E]' : 'bg-gray-100'} flex justify-between items-center group cursor-pointer`}>
                        <span className="text-[#7C7FFF] text-sm font-semibold">Manage Subscription</span>
                        <ExternalIcon />
                     </div>
                  </div>

                  {/* Language Section */}
                  <div className="mb-3 px-3 text-xs font-bold text-gray-500 uppercase tracking-widest">Language & Content</div>
                  <div className={`${cardBg} rounded-3xl overflow-hidden mb-8 border ${borderColor}`}>
                     <SettingItem icon={<GlobeIcon />} label="Language" value="English" isDark={isDark} textColor={textColor} />
                     <div className={`h-px w-full ${isDark ? 'bg-gray-800' : 'bg-gray-100'} ml-[60px]`}></div>
                     <SettingItem icon={<HistoryIcon />} label="Refresh Interval" value="Every hour" isDark={isDark} textColor={textColor} />
                  </div>

                  {/* Appearance Section */}
                  <div className="mb-3 px-3 text-xs font-bold text-gray-500 uppercase tracking-widest">Appearance</div>
                  <div className={`${cardBg} rounded-3xl p-5 mb-8 border ${borderColor}`}>
                     <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-4">
                           <PaletteIcon />
                           <div>
                              <div className={`text-base font-semibold ${textColor}`}>Theme</div>
                              <div className="text-sm text-gray-500">Midnight</div>
                           </div>
                        </div>
                        <ChevronRight size={18} className="text-gray-500" />
                     </div>
                     <div className="grid grid-cols-3 gap-4">
                        <ThemeOption name="Cream" color="bg-[#FDFBF7]" dot="bg-[#D4B695]" isDark={isDark} />
                        <ThemeOption name="Mint" color="bg-[#F0FDF4]" dot="bg-[#34D399]" isDark={isDark} />
                        <ThemeOption name="Night" color="bg-[#2C2C2E]" dot="bg-[#7C7FFF]" selected isDark={isDark} />
                     </div>
                  </div>
               </div>
            )}

            <BottomNav />
            
            {/* Screen Reflection (Glass Effect) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none rounded-[3.6rem] z-30 mix-blend-overlay"></div>
          </div>
        </div>
      </div>
      
      {/* Hardware Buttons - Titanium Finish matches frame */}
      {/* Action Button */}
      <div className="absolute -left-[2px] top-[180px] h-[26px] w-[3px] bg-[#2a2a2a] rounded-l-md border-r border-[#111]"></div>
      {/* Volume Up */}
      <div className="absolute -left-[2px] top-[230px] h-[48px] w-[3px] bg-[#2a2a2a] rounded-l-md border-r border-[#111]"></div>
      {/* Volume Down */}
      <div className="absolute -left-[2px] top-[290px] h-[48px] w-[3px] bg-[#2a2a2a] rounded-l-md border-r border-[#111]"></div>
      {/* Power */}
      <div className="absolute -right-[2px] top-[250px] h-[80px] w-[3px] bg-[#2a2a2a] rounded-r-md border-l border-[#111]"></div>

    </div>
  );
};

// Helper Components (Unchanged)
const BookmarkIcon = () => (
  <svg width="18" height="20" viewBox="0 0 12 14" fill="currentColor"><path d="M10.6 14L6 10.4L1.4 14V1.4C1.4 1.0287 1.5475 0.672601 1.81005 0.41005C2.0726 0.1475 2.4287 0 2.8 0H9.2C9.5713 0 9.9274 0.1475 10.1899 0.41005C10.4525 0.672601 10.6 1.0287 10.6 1.4V14Z" opacity="0.8"/></svg>
)

const StarIcon = () => (
   <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
)

const ExternalIcon = () => (
   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C7FFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
)

const GlobeIcon = () => (
   <div className="w-9 h-9 rounded-full bg-[#5856D6] flex items-center justify-center text-white"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"></path></svg></div>
)

const HistoryIcon = () => (
   <div className="w-9 h-9 rounded-full bg-[#5856D6] flex items-center justify-center text-white"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20v-6M6 20V10M18 20V4"/></svg></div>
)

const PaletteIcon = () => (
   <div className="w-9 h-9 rounded-full bg-[#5856D6] flex items-center justify-center text-white"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.55 0 1-.45 1-1 0-.25-.1-.5-.25-.75-.25-.5-.15-1.15.15-1.55l1.5-2c.35-.45.95-.65 1.5-.45.85.35 1.85-.35 1.85-1.3V12c0-5.5-4.5-10-10-10z"></path></svg></div>
)

const SettingItem = ({ icon, label, value, isDark, textColor }: any) => (
   <div className={`p-4 flex items-center justify-between cursor-pointer ${isDark ? 'hover:bg-white/5' : 'hover:bg-gray-50'} transition-colors`}>
      <div className="flex items-center gap-4">
         {icon}
         <span className={`text-base font-medium ${textColor}`}>{label}</span>
      </div>
      <div className="flex items-center gap-2">
         <span className="text-sm text-gray-500 font-medium">{value}</span>
         <ChevronRight size={18} className="text-gray-600" />
      </div>
   </div>
)

const ThemeOption = ({ name, color, dot, selected, isDark }: any) => (
   <div className="flex flex-col items-center gap-3 cursor-pointer group">
      <div className={`w-full aspect-[4/3] rounded-2xl ${color} relative flex items-center justify-center border-2 ${selected ? 'border-[#5856D6]' : 'border-transparent'} shadow-sm group-hover:scale-105 transition-all`}>
         <div className={`w-8 h-8 rounded-full ${dot} shadow-sm`}></div>
         {selected && <div className="absolute -bottom-2 -right-2 bg-[#5856D6] rounded-full p-1"><Check size={12} className="text-white" strokeWidth={3} /></div>}
      </div>
      <span className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{name}</span>
   </div>
)

export default PhoneMockup;