import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Mail, ChevronRight, Download } from 'lucide-react';
import PhoneMockup from './components/PhoneMockup';
import AppStoreButton from './components/AppStoreButton';
import Features from './components/Features';
import ProSection from './components/ProSection';
import AboutSection from './components/AboutSection';
import { PrivacyPolicy, TermsOfUse } from './components/LegalPages';

type View = 'LANDING' | 'PRIVACY' | 'TERMS';

// Custom Logo Component based on the image provided
const AppLogo: React.FC<{ className?: string, color?: string }> = ({ className = "w-8 h-8", color = "currentColor" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Crescent Moon */}
    <path d="M50 15C42 15 35 20 30 30C25 40 25 55 35 65C30 55 30 40 38 30C45 22 55 20 50 15Z" fill={color} />
    <path d="M50 15C55 15 65 20 70 30C75 40 70 55 65 60" stroke={color} strokeWidth="4" strokeLinecap="round" opacity="0.8"/>
    {/* Leaves/Open Book Base */}
    <path d="M25 65C25 65 35 75 50 75C65 75 75 65 75 65" stroke={color} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M50 75V80" stroke={color} strokeWidth="4" strokeLinecap="round"/>
    <path d="M35 65C35 65 40 70 50 70C60 70 65 65 65 65" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentView, setCurrentView] = useState<View>('PRIVACY'); // Default to PRIVACY as requested

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Hash Navigation (for initial load and back button)
  useEffect(() => {
    const handleHashChange = () => {
      try {
        const hash = window.location.hash;
        if (hash === '#privacy') setCurrentView('PRIVACY');
        else if (hash === '#terms') setCurrentView('TERMS');
        else if (hash === '#home' || !hash) setCurrentView('LANDING');
      } catch (e) {
        console.warn('Could not read location hash:', e);
      }
    };

    // Check on mount
    handleHashChange();
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Navigation Handler
  const navigateTo = (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, destination: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const safeSetHash = (hash: string) => {
      try {
        window.location.hash = hash;
      } catch (e) {
        // Ignore hash setting errors in restricted environments
      }
    };

    if (destination === 'home') {
      safeSetHash('home');
      setCurrentView('LANDING');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (destination === 'privacy') {
      safeSetHash('privacy');
      setCurrentView('PRIVACY');
    } else if (destination === 'terms') {
      safeSetHash('terms');
      setCurrentView('TERMS');
    } else if (destination.startsWith('#')) {
      // Internal anchor on landing page
      if (currentView !== 'LANDING') {
        setCurrentView('LANDING');
        // Wait for landing to render before scrolling
        setTimeout(() => {
          const element = document.querySelector(destination);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(destination);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleBackToHome = () => {
    setCurrentView('LANDING');
    try {
      window.location.hash = 'home';
    } catch (e) {
      // Ignore
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-slate-900 flex flex-col">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/50 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <a href="#home" onClick={(e) => navigateTo(e, 'home')} className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-brand flex items-center justify-center text-white shadow-lg shadow-brand/20 group-hover:scale-105 transition-transform">
              <AppLogo className="w-6 h-6" color="white" />
            </div>
            <div className="flex flex-col">
               <span className="font-serif font-bold text-lg leading-none tracking-tight group-hover:text-brand transition-colors">Spiritual Growth</span>
               <span className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">Muslim Ref</span>
            </div>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" onClick={(e) => navigateTo(e, '#features')} className="text-sm font-medium text-slate-600 hover:text-brand transition">Features</a>
            <a href="#pro" onClick={(e) => navigateTo(e, '#pro')} className="text-sm font-medium text-slate-600 hover:text-brand transition">Pro</a>
            <a href="#about" onClick={(e) => navigateTo(e, '#about')} className="text-sm font-medium text-slate-600 hover:text-brand transition">About</a>
            <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition shadow-md hover:shadow-lg flex items-center gap-2">
              <Download size={16} />
              Download
            </button>
          </div>

          <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl md:hidden p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
             <a href="#features" onClick={(e) => navigateTo(e, '#features')} className="text-lg font-medium p-3 text-slate-600 active:bg-slate-50 rounded-xl">Features</a>
             <a href="#pro" onClick={(e) => navigateTo(e, '#pro')} className="text-lg font-medium p-3 text-slate-600 active:bg-slate-50 rounded-xl">Pro</a>
             <a href="#about" onClick={(e) => navigateTo(e, '#about')} className="text-lg font-medium p-3 text-slate-600 active:bg-slate-50 rounded-xl">About</a>
             <a href="#" className="text-lg font-medium p-3 text-brand bg-brand-50 rounded-xl font-semibold">Download App</a>
          </div>
        )}
      </nav>

      {/* Main Content Router */}
      <main className="flex-grow">
        {currentView === 'LANDING' && (
          <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                  
                  {/* Hero Content */}
                  <div className="flex-1 text-center md:text-left z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand text-xs font-bold uppercase tracking-wider mb-6 animate-pulse border border-brand/10">
                      <span className="w-2 h-2 rounded-full bg-brand"></span>
                      Now Available on iOS
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold font-serif text-slate-900 leading-[1.1] mb-6">
                      Your daily dose of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">spiritual clarity.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
                      A digital sanctuary for the modern believer. Daily reflections, guided tasbih, and beautiful duas to help you pause and connect with your Creator.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                      <AppStoreButton />
                      <a href="#about" onClick={(e) => navigateTo(e, '#about')} className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-slate-200 hover:bg-white hover:border-slate-300 font-medium transition text-slate-700 bg-white/50 backdrop-blur-sm shadow-sm">
                        Read Manifesto <ChevronRight size={16} />
                      </a>
                    </div>
                    
                    <div className="mt-8 flex items-center justify-center md:justify-start gap-4 text-xs font-medium text-slate-400">
                       <span className="flex items-center gap-1"><span className="text-amber-400">★★★★★</span> 5.0 Rating</span>
                       <span>•</span>
                       <span>Privacy Focused</span>
                       <span>•</span>
                       <span>No Ads</span>
                    </div>
                  </div>

                  {/* Hero Visual */}
                  <div className="flex-1 relative w-full flex justify-center perspective-1000">
                     {/* Decorative Blobs */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/20 rounded-full blur-3xl -z-10 opacity-50"></div>
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-accent/30 rounded-full blur-3xl -z-10 ml-20 mt-20 opacity-40"></div>
                     
                     {/* Phones */}
                     <div className="relative z-10 transform md:rotate-y-12 md:rotate-z-2 hover:rotate-0 transition duration-1000 ease-out">
                        <PhoneMockup screen="home" theme="dark" />
                        <div className="hidden lg:block absolute -right-24 top-24 -z-10 scale-[0.85] opacity-80 shadow-2xl">
                           <PhoneMockup screen="tasbih" theme="dark" />
                        </div>
                     </div>
                  </div>

                </div>
              </div>
            </section>

            <Features />
            <ProSection />
            <AboutSection />
          </>
        )}

        {currentView === 'PRIVACY' && <PrivacyPolicy onBack={handleBackToHome} />}
        {currentView === 'TERMS' && <TermsOfUse onBack={handleBackToHome} />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 text-white mb-6">
               <div className="w-10 h-10 rounded-xl bg-brand flex items-center justify-center shadow-lg shadow-brand/20">
                  <AppLogo className="w-6 h-6" color="white" />
               </div>
               <div className="flex flex-col">
                   <span className="font-serif font-bold text-xl leading-none">Spiritual Growth</span>
                   <span className="text-[11px] text-slate-400 uppercase tracking-widest font-medium">Muslim Ref</span>
               </div>
            </div>
            <p className="text-sm max-w-sm mb-8 leading-relaxed text-slate-400">
              A mindful companion built to help you disconnect from the noise and reconnect with your faith. May this app bring peace to your heart.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:bg-brand/20 transition p-3 rounded-full bg-slate-800/50"><Instagram size={20}/></a>
              <a href="mailto:hello@muslimreflections.app" className="text-slate-400 hover:text-white hover:bg-brand/20 transition p-3 rounded-full bg-slate-800/50"><Mail size={20}/></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-brand-light transition-colors flex items-center gap-2">Download iOS <Download size={12}/></a></li>
              <li><a href="#features" onClick={(e) => navigateTo(e, '#features')} className="hover:text-brand-light transition-colors">Features</a></li>
              <li><a href="#pro" onClick={(e) => navigateTo(e, '#pro')} className="hover:text-brand-light transition-colors">Pricing</a></li>
              <li><a href="#about" onClick={(e) => navigateTo(e, '#about')} className="hover:text-brand-light transition-colors">Manifesto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#privacy" onClick={(e) => navigateTo(e, 'privacy')} className="hover:text-brand-light transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" onClick={(e) => navigateTo(e, 'terms')} className="hover:text-brand-light transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-brand-light transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-800 text-xs text-center md:text-left text-slate-600 flex flex-col md:flex-row justify-between items-center gap-4">
           <span>&copy; {new Date().getFullYear()} Menan Sali. All Rights Reserved.</span>
           <span className="flex items-center gap-2">Built with <span className="text-red-500">❤️</span> for the Ummah</span>
        </div>
      </footer>
      
      {/* Sticky Mobile Download Button */}
      {scrolled && (
        <div className="md:hidden fixed bottom-6 left-4 right-4 z-50 animate-in slide-in-from-bottom-6 fade-in duration-500">
           <div className="bg-slate-900/90 backdrop-blur-md text-white p-4 rounded-2xl shadow-2xl border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-xl bg-brand flex items-center justify-center font-serif font-bold text-lg">
                    <AppLogo className="w-6 h-6" color="white" />
                 </div>
                 <div>
                    <div className="text-sm font-bold">Spiritual Growth</div>
                    <div className="text-xs text-slate-400">Muslim Ref</div>
                 </div>
              </div>
              <button className="bg-white text-slate-900 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-gray-100 transition">
                 Get App
              </button>
           </div>
        </div>
      )}

    </div>
  );
};

export default App;