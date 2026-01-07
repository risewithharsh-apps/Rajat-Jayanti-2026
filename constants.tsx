
import React from 'react';
import { ScheduleItem, DaySchedule } from './types.ts';

export const DAY_1_SCHEDULE: DaySchedule = {
  dayNumber: "प्रथम दिवस",
  date: "10 जनवरी 2026",
  weekday: "शनिवार",
  items: [
    { time: "प्रातः 9:00 - 10:00", activity: "पंजीयन एवं चायपान" },
    { time: "सुबह 10:00 - 11:00", activity: "उद्घाटन सत्र" },
    { 
      time: "सुबह 11:30 - 1:00", 
      activity: "चेतना विकास मूल्य शिक्षा: अध्ययन, अभ्यास, प्रयास और उपलब्धि",
      type: 'highlight'
    },
    { time: "दोपहर 1:00", activity: "प्रदर्शनी का उद्घाटन" },
    { time: "दोपहर 1:30 - 3:00", activity: "लंच" },
    { time: "दोपहर 3:00 - 4:00", activity: "रजत जयंती प्रदर्शनी का अवलोकन" },
    { 
      time: "संध्या 4:00 - 7:00", 
      activity: "सांस्कृतिक कार्यक्रम",
      description: "पूर्व विद्यार्थियों, युवाओं, अध्यापिकाओं एवं मध्यस्थ दर्शन के अध्येताओं की विशेष प्रस्तुति।"
    },
    { time: "रात्रि 7:00 - 9:00", activity: "रात्रि भोज" },
  ]
};

export const DAY_2_SCHEDULE: DaySchedule = {
  dayNumber: "द्वितीय दिवस",
  date: "11 जनवरी 2026",
  weekday: "रविवार",
  items: [
    { 
      time: "प्रातः 9:00 - 11:00", 
      activity: "मूल्य शिक्षा से मानवीय व्यवस्था: अभ्युदय संस्थान की भूमिका",
      type: 'highlight'
    },
    { 
      time: "सुबह 11:00 - 1:00", 
      activity: "परिवार मूलक स्वराज्य व्यवस्था: मध्यस्थ दर्शन के अध्येताओं एवं प्रबुद्ध जनों के साथ संवाद" 
    },
    { time: "दोपहर 1:30 - 3:00", activity: "लंच" },
    { time: "दोपहर 3:00 - 4:00", activity: "रजत जयंती प्रदर्शनी का अवलोकन" },
    { 
      time: "संध्या 4:00 - 7:00", 
      activity: "सांस्कृतिक कार्यक्रम",
      description: "अभिभावक विद्यालय अछोटी के विद्यार्थियों द्वारा"
    },
    { time: "रात्रि 7:00 - 9:00", activity: "रात्रि भोज" },
  ]
};

const Marigold = ({ color }: { color: string }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" className="drop-shadow-sm">
    <circle cx="20" cy="20" r="16" fill={color} />
    <path d="M20 4 C24 4 24 10 20 10 C16 10 16 4 20 4" fill="rgba(0,0,0,0.1)" transform="rotate(0 20 20)" />
    {[...Array(12)].map((_, i) => (
      <path 
        key={i}
        d="M20 6 C23 6 23 14 20 14 C17 14 17 6 20 6" 
        fill="rgba(0,0,0,0.05)" 
        transform={`rotate(${i * 30} 20 20)`} 
      />
    ))}
    <circle cx="20" cy="20" r="8" fill={color} filter="brightness(1.1)" />
  </svg>
);

const MangoLeaf = () => (
  <svg width="30" height="60" viewBox="0 0 30 60" className="drop-shadow-sm">
    <path d="M15 0 C15 0 28 25 28 45 C28 55 22 60 15 60 C8 60 2 55 2 45 C2 25 15 0 15 0" fill="#166534" />
    <path d="M15 5 L15 55" stroke="#14532d" strokeWidth="1" strokeDasharray="2 2" />
  </svg>
);

export const GarlandDecoration = () => {
  return (
    <div className="w-full relative overflow-hidden h-32 md:h-40 bg-transparent select-none pointer-events-none">
      <style>{`
        @keyframes sway {
          0% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
          100% { transform: rotate(-2deg); }
        }
        .sway-item {
          animation: sway 4s ease-in-out infinite;
          transform-origin: top center;
        }
      `}</style>
      
      {/* The String (Toran) */}
      <svg className="absolute top-0 left-0 w-full h-24" preserveAspectRatio="none">
        <path d="M0,5 Q50,45 100,5 T200,5 T300,5 T400,5 T500,5 T600,5 T700,5 T800,5 T900,5 T1000,5" 
              fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" />
      </svg>

      <div className="absolute top-0 left-0 right-0 flex justify-between px-2 md:px-8">
        {[...Array(20)].map((_, i) => {
          const isFlower = i % 2 === 0;
          const isLeaf = !isFlower;
          const flowerColor = (i % 4 === 0) ? "#f97316" : "#fbbf24"; // Orange vs Yellow
          const offset = Math.sin(i * 0.8) * 15; // Vertical offset to follow the string curve roughly
          
          return (
            <div 
              key={i} 
              className="sway-item flex flex-col items-center" 
              style={{ 
                marginTop: `${8 + offset}px`,
                animationDelay: `${i * 0.2}s`
              }}
            >
              {isFlower ? (
                <div className="flex flex-col items-center -space-y-2">
                  <div className="w-1 h-3 bg-orange-700"></div>
                  <Marigold color={flowerColor} />
                  <Marigold color={i % 4 === 0 ? "#fbbf24" : "#f97316"} />
                </div>
              ) : (
                <div className="flex flex-col items-center -space-y-1">
                  <div className="w-1 h-3 bg-orange-700"></div>
                  <MangoLeaf />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const MangoLeaves = () => (
  <div className="w-full flex justify-between absolute bottom-0 px-4 opacity-40 pointer-events-none overflow-hidden">
    <img src="https://picsum.photos/seed/leaves1/400/200" className="w-40 md:w-64 transform -scale-x-100" alt="decoration" />
    <img src="https://picsum.photos/seed/leaves2/400/200" className="w-40 md:w-64" alt="decoration" />
  </div>
);
