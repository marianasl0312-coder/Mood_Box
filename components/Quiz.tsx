
import React, { useState } from 'react';
import { QUESTIONS } from '../constants';

interface QuizProps {
  onComplete: (answers: any) => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const currentQuestion = QUESTIONS[step];

  const handleOptionSelect = (optionLabel: string) => {
    const newAnswers = { ...answers, [currentQuestion.id]: optionLabel };
    setAnswers(newAnswers);
    
    // Automatically advance if not the last step
    if (step < QUESTIONS.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    }
  };

  const isLastStep = step === QUESTIONS.length - 1;
  const canFinish = Object.keys(answers).length === QUESTIONS.length;

  return (
    <div className="flex flex-col h-full px-8 py-10 fade-in bg-cream">
      {/* Brand Header */}
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h1 className="text-earth font-serif text-3xl mb-1 tracking-tight">Mood Box</h1>
          <div className="w-12 h-1 bg-softPurple rounded-full"></div>
        </div>
        <div className="text-earth font-bold opacity-30 text-2xl font-serif italic">
          #{step + 1}
        </div>
      </div>

      {/* Question Content */}
      <div key={step} className="flex-1 fade-in">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-2 py-0.5 bg-sage/20 text-earth text-[10px] font-bold rounded uppercase tracking-widest">Check-in Mensal</span>
          <div className="flex-1 h-[2px] bg-sage/10 rounded-full overflow-hidden">
             <div 
               className="h-full bg-softPurple transition-all duration-500" 
               style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
             ></div>
          </div>
        </div>
        
        <h2 className="text-2xl font-serif text-earth leading-snug mb-8">{currentQuestion.text}</h2>
        
        <div className="space-y-4">
          {currentQuestion.options.map((option) => {
            const isSelected = answers[currentQuestion.id] === option.label;
            return (
              <button
                key={option.label}
                onClick={() => handleOptionSelect(option.label)}
                className={`w-full text-left p-5 rounded-3xl border-2 transition-all duration-300 transform active:scale-[0.98] ${
                  isSelected
                    ? 'bg-sage border-earth text-white shadow-lg'
                    : 'bg-white border-white/50 text-earth hover:border-sage shadow-sm'
                }`}
              >
                <div className="flex flex-col">
                  <span className={`text-lg font-bold mb-1 ${isSelected ? 'text-white' : 'text-earth'}`}>
                    {option.label}
                  </span>
                  <span className={`text-xs leading-relaxed ${isSelected ? 'text-cream/90' : 'text-gray-500'}`}>
                    {option.description}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="mt-8 pt-6 flex flex-col gap-4">
        {step > 0 && (
          <button 
            onClick={() => setStep(step - 1)}
            className="text-earth text-xs font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity self-center"
          >
            ← Voltar anterior
          </button>
        )}
        
        {isLastStep && (
          <button
            onClick={() => canFinish && onComplete(answers)}
            disabled={!canFinish}
            className={`w-full py-5 rounded-full font-bold text-white transition-all duration-500 shadow-xl text-lg ${
              canFinish 
                ? 'bg-softPurple opacity-100 transform translate-y-0' 
                : 'bg-gray-300 opacity-0 transform translate-y-10 pointer-events-none'
            }`}
          >
            Revelar meu Destino
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
