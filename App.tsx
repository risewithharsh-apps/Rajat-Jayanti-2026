
import React, { useState } from 'react';
import { Calendar, MapPin, Phone, Info, GraduationCap, Users, Heart } from 'lucide-react';
import { GarlandDecoration, DAY_1_SCHEDULE, DAY_2_SCHEDULE } from './constants';
import { ScheduleTable } from './components/ScheduleTable';
import { SectionHeader } from './components/SectionHeader';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'day1' | 'day2'>('day1');

  return (
    <div className="min-h-screen selection:bg-orange-200">
      {/* Decorative Top Garland */}
      <GarlandDecoration />

      {/* Hero Section */}
      <header className="relative pt-8 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6 relative px-12 py-8">
            {/* Ornate Frame Border (SVG simulation) */}
            <div className="absolute inset-0 border-2 border-orange-300 rounded-[50%_20%] opacity-40"></div>
            
            <h2 className="text-xl md:text-2xl text-slate-600 font-medium mb-2">अभ्युदय संस्थान अछोटी का</h2>
            <h1 className="text-5xl md:text-7xl font-black text-red-600 mb-4 heading-font drop-shadow-sm">
              रजत जयंती उत्सव
            </h1>
            <p className="text-2xl md:text-3xl text-orange-600 font-bold mb-1">
              25 वर्षों की गौरवशाली यात्रा
            </p>
            <p className="text-xl text-slate-500 font-semibold tracking-widest">2000 - 2025</p>
          </div>

          <div className="mt-8 bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white inline-block shadow-lg">
            <p className="text-xl text-slate-800 mb-4 font-semibold italic">
              मान्यवर, अभ्युदय संस्थान अछोटी के रजत जयंती उत्सव में परिवारजनों के साथ आप सादर आमंत्रित हैं।
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-6">
              <div className="flex items-center gap-3 text-orange-800 bg-orange-100 px-4 py-2 rounded-full">
                <Calendar className="w-5 h-5" />
                <span className="font-bold">10-11 जनवरी 2026</span>
              </div>
              <div className="flex items-center gap-3 text-orange-800 bg-orange-100 px-4 py-2 rounded-full">
                <MapPin className="w-5 h-5" />
                <span className="font-bold">अछोटी, दुर्ग (छत्तीसगढ़)</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Theme Section */}
      <section className="py-20 px-4 bg-orange-900 text-white relative overflow-hidden">
        {/* Subtle background icons */}
        <div className="absolute top-0 right-0 p-10 opacity-10">
          <GraduationCap size={200} />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <SectionHeader 
            title="कार्यक्रम का स्वरूप" 
            subtitle="चेतना विकास, मूल्य शिक्षा एवं परिवार मूलक स्वराज्य व्यवस्था पर केंद्रित विमर्श, संवाद एवं उत्सव"
            dark
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: <GraduationCap size={40} />, title: "चेतना विकास", desc: "मानवीय संचेतना के विकास हेतु समर्पित सत्र" },
              { icon: <Heart size={40} />, title: "मूल्य शिक्षा", desc: "जीवन मूल्यों को शिक्षा के माध्यम से जीना" },
              { icon: <Users size={40} />, title: "स्वराज्य व्यवस्था", desc: "परिवार मूलक स्वराज्य व्यवस्था पर गहन संवाद" }
            ].map((feature, i) => (
              <div key={i} className="bg-white/10 p-8 rounded-2xl border border-white/20 text-center hover:bg-white/20 transition-all cursor-default">
                <div className="mb-4 flex justify-center text-orange-300">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-orange-100/80">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <SectionHeader title="कार्यक्रम की रूपरेखा" />

        <div className="flex justify-center mb-10 p-1 bg-orange-100 rounded-full w-fit mx-auto shadow-inner">
          <button 
            onClick={() => setActiveTab('day1')}
            className={`px-8 py-3 rounded-full font-bold transition-all ${activeTab === 'day1' ? 'bg-orange-600 text-white shadow-md' : 'text-orange-900 hover:bg-orange-200'}`}
          >
            प्रथम दिवस
          </button>
          <button 
            onClick={() => setActiveTab('day2')}
            className={`px-8 py-3 rounded-full font-bold transition-all ${activeTab === 'day2' ? 'bg-orange-600 text-white shadow-md' : 'text-orange-900 hover:bg-orange-200'}`}
          >
            द्वितीय दिवस
          </button>
        </div>

        <div className="transition-all duration-500 ease-in-out">
          {activeTab === 'day1' ? (
            <ScheduleTable schedule={DAY_1_SCHEDULE} />
          ) : (
            <ScheduleTable schedule={DAY_2_SCHEDULE} />
          )}
        </div>
      </section>

      {/* Venue & Location */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader title="स्थान एवं संपर्क" />
          
          <div className="bg-orange-50 p-10 rounded-3xl border-2 border-dashed border-orange-200">
            <div className="mb-8">
              <MapPin className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-orange-900 mb-2">अभ्युदय संस्थान परिसर एवं</h3>
              <h3 className="text-2xl font-bold text-orange-900 mb-4">अभिभावक विद्यालय परिसर, अछोटी</h3>
              <p className="text-lg text-slate-600">अछोटी, दुर्ग (छत्तीसगढ़)</p>
            </div>

            <div className="h-px w-full bg-orange-200 my-8"></div>

            <div className="space-y-4">
              <p className="text-orange-800 font-bold text-lg">सप्रेम प्रतीक्षा में</p>
              <h4 className="text-2xl font-black text-slate-800 heading-font">मानवीय शिक्षा शोध संस्थान</h4>
              <p className="text-slate-600 font-medium">अभ्युदय संस्थान अछोटी, दुर्ग (छत्तीसगढ़)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Decoration */}
      <footer className="py-12 px-4 text-center bg-slate-900 text-slate-400 relative">
        <div className="max-w-4xl mx-auto">
          <p className="mb-4">© 2025 Abhyudaya Sansthan Achhoti. All Rights Reserved.</p>
          <div className="flex justify-center gap-6">
             <a href="tel:9893025307" className="hover:text-orange-400 transition-colors" title="Call Chandrashekhar Bhaiya (9893025307)">
               <Phone size={20} />
             </a>
          </div>
        </div>
        
        {/* Decorative Banana Leaves Simulation */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between pointer-events-none opacity-20 h-48 overflow-hidden">
           <div className="w-64 h-full bg-green-800 rounded-tr-[100%] translate-y-12 -translate-x-12 blur-sm"></div>
           <div className="w-64 h-full bg-green-800 rounded-tl-[100%] translate-y-12 translate-x-12 blur-sm"></div>
        </div>
      </footer>
    </div>
  );
};

export default App;
