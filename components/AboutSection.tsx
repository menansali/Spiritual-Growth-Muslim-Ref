import React from 'react';
import { Moon } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-black text-white py-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="flex justify-center mb-12">
            <div className="w-20 h-20 bg-[#1C1C1E] rounded-3xl flex items-center justify-center border border-white/10 shadow-2xl">
                <Moon className="text-[#7C7FFF]" size={32} fill="currentColor" />
            </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">Spiritual Growth</h2>
        <p className="text-center text-gray-500 mb-16">Muslim Ref • Version 1.0 (1)</p>

        <div className="space-y-12">
            <div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                    Spiritual Growth: Muslim Ref is designed to be your daily companion for spiritual reflection and mindfulness. In the hustle of daily life, we often forget to pause and connect with our inner selves and our Creator.
                </p>
                <br />
                <p className="text-gray-300 leading-relaxed text-lg">
                    This app offers gentle reminders throughout the day — reflections on tawakkul (trust in Allah), sabr (patience), shukr (gratitude), and other timeless Islamic values. Whether it's morning or night, we hope these words bring peace to your heart and light to your path.
                </p>
            </div>

            <div>
                <h3 className="text-2xl font-bold mb-6">What We Offer</h3>
                <ul className="space-y-4">
                    {[
                        "Daily spiritual reflections",
                        "Quranic verses with meanings",
                        "Beautiful duas for various occasions",
                        "Tasbih counter for dhikr",
                        "Widgets for your home screen"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#7C7FFF]"></div>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;