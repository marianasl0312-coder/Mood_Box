
import React, { useState, useEffect } from 'react';

interface ResultProps {
  onConfirm: () => void;
}

const Result: React.FC<ResultProps> = ({ onConfirm }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-cream text-earth p-12 text-center fade-in">
        <div className="w-20 h-20 mb-8 relative">
          <div className="absolute inset-0 border-4 border-softPurple/20 border-t-softPurple rounded-full animate-spin"></div>
        </div>
        <h2 className="text-2xl font-serif mb-4 pulse-soft">Lendo seu Mood...</h2>
        <p className="text-gray-400 text-sm">Aguarde, estamos tecendo seu destino.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full px-8 py-12 bg-cream fade-in relative overflow-hidden">
      {/* Soft Particles (Visual only) */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-softPurple/30 rounded-full slow-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-40 right-10 w-3 h-3 bg-sage/30 rounded-full slow-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-softPurple/10 rounded-full slow-float" style={{ animationDelay: '2s' }}></div>

      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <span className="px-4 py-1 bg-softPurple/10 text-softPurple text-xs font-bold rounded-full mb-6 uppercase tracking-[0.2em]">Encontramos seu par</span>
        
        <div className="glow-soft rounded-[40px] bg-white p-2 mb-8 slow-float">
          <div className="w-48 h-48 rounded-[32px] overflow-hidden bg-cream flex items-center justify-center text-8xl">
            🧶
          </div>
        </div>

        <h2 className="text-3xl font-serif text-earth mb-4 leading-tight">Seu Match de Março:<br/>Crochê Meditativo</h2>
        
        <p className="text-gray-500 text-sm leading-relaxed mb-10 px-4">
          Débora, percebemos que você precisa de silêncio e texturas hoje. Esta box foi curada para te manter no presente, ponto a ponto.
        </p>
      </div>

      <button
        onClick={onConfirm}
        className="w-full py-5 bg-softPurple rounded-full font-bold text-white shadow-xl hover:shadow-softPurple/30 transition-all active:scale-[0.98] text-lg"
      >
        Confirmar Experiência
      </button>
    </div>
  );
};

export default Result;
