
import React from 'react';
import { DaySchedule } from '../types.ts';
import { Clock, Star } from 'lucide-react';

interface Props {
  schedule: DaySchedule;
}

export const ScheduleTable: React.FC<Props> = ({ schedule }) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-orange-100 transition-all duration-300 hover:shadow-2xl">
      <div className="bg-orange-600 p-6 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
            {schedule.dayNumber}
          </span>
          <h3 className="text-2xl font-bold mt-2">{schedule.date}</h3>
        </div>
        <div className="text-xl md:text-2xl font-bold opacity-90">
          {schedule.weekday}
        </div>
      </div>

      <div className="p-4 md:p-8">
        <div className="space-y-4">
          {schedule.items.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col md:flex-row md:items-start gap-4 p-4 rounded-xl border transition-colors ${
                item.type === 'highlight' 
                  ? 'bg-orange-50 border-orange-200' 
                  : 'bg-transparent border-transparent hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-2 text-orange-600 font-bold min-w-[160px]">
                <Clock size={18} />
                <span>{item.time}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-start gap-2">
                  {item.type === 'highlight' && <Star className="text-orange-500 fill-orange-500 mt-1 shrink-0" size={16} />}
                  <h4 className={`text-lg font-bold ${item.type === 'highlight' ? 'text-orange-900' : 'text-slate-800'}`}>
                    {item.activity}
                  </h4>
                </div>
                {item.description && (
                  <p className="mt-1 text-slate-600 text-sm italic">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
