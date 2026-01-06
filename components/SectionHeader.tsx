
import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  dark?: boolean;
}

export const SectionHeader: React.FC<Props> = ({ title, subtitle, dark = false }) => {
  return (
    <div className="text-center mb-10 px-4">
      <div className="inline-block relative">
        <h2 className={`text-3xl md:text-4xl font-bold mb-2 ${dark ? 'text-white' : 'text-orange-900'} heading-font`}>
          {title}
        </h2>
        <div className="flex items-center justify-center gap-2 mt-1">
          <div className="h-0.5 w-12 bg-orange-400"></div>
          <div className="w-2 h-2 rounded-full bg-orange-600"></div>
          <div className="h-0.5 w-12 bg-orange-400"></div>
        </div>
      </div>
      {subtitle && <p className={`mt-4 text-lg ${dark ? 'text-orange-100' : 'text-orange-800'} max-w-2xl mx-auto`}>{subtitle}</p>}
    </div>
  );
};
