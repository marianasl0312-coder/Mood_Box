
import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-cream text-earth p-12 text-center fade-in">
      <div className="w-24 h-24 mb-8 relative">
        <div className="absolute inset-0 border-4 border-sage border-t-softPurple rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-2 border-sage opacity-20 rounded-full"></div>
      </div>
      <h2 className="text-2xl font-serif mb-4 pulse-soft">Sintonizando suas vibrações...</h2>
      <p className="text-gray-500 italic">"A criatividade é a inteligência se divertindo."</p>
      <p className="text-gray-400 text-sm mt-8">Analisando perfil...</p>
    </div>
  );
};

export default Loading;
