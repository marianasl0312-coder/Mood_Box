
import React from 'react';
import { COMMUNITY_MEMBERS } from '../constants';

interface HomeProps {
  isBoxConfirmed?: boolean;
}

const Home: React.FC<HomeProps> = ({ isBoxConfirmed = false }) => {
  const moods = ['✨', '🌿', '🧘', '🎨', '🔋'];

  return (
    <div className="flex flex-col h-full overflow-y-auto no-scrollbar pb-24 fade-in">
      {/* Header */}
      <header className="px-6 pt-10 pb-6 bg-white/50 backdrop-blur-sm sticky top-0 z-10 border-b border-sage/10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-serif text-earth">Bom dia, Débora</h1>
            <p className="text-sm text-gray-500 italic">Qual a intenção de hoje?</p>
          </div>
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-sage shadow-sm">
            <img src="https://picsum.photos/seed/debora/100/100" alt="Avatar" />
          </div>
        </div>
      </header>

      <div className="px-6 space-y-8 mt-4">
        {/* Featured Card */}
        <section className="fade-in">
          <div className={`rounded-3xl p-6 text-white shadow-xl relative overflow-hidden group transition-all duration-700 ${isBoxConfirmed ? 'bg-softPurple' : 'bg-earth'}`}>
            <div className="absolute -right-4 -top-4 w-32 h-32 bg-white rounded-full opacity-10 group-hover:scale-110 transition-transform"></div>
            
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-[10px] rounded-full mb-3 uppercase tracking-wider font-bold">
              {isBoxConfirmed ? 'Box em Preparação' : 'Box do Mês'}
            </span>
            
            <h2 className="text-3xl font-serif mb-2">
              {isBoxConfirmed ? 'Crochê Meditativo' : 'Jardim de Vidro'}
            </h2>
            
            <p className="text-cream/80 text-sm mb-6 leading-relaxed">
              {isBoxConfirmed 
                ? 'Sua jornada de calma começa em breve. Estamos embalando seus fios e agulhas com todo carinho.' 
                : 'Redescubra a natureza criando seu próprio ecossistema em miniatura. Kit completo com musgos, pedras e cristais.'}
            </p>
            
            <button className={`px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${isBoxConfirmed ? 'bg-white text-softPurple' : 'bg-cream text-earth hover:bg-white'}`}>
              {isBoxConfirmed ? 'Acompanhar Envio' : 'Explorar Kit'}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </section>

        {/* Quick Mood Selector */}
        <section>
          <h3 className="text-earth font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
            Humor agora
          </h3>
          <div className="flex justify-between gap-2">
            {moods.map((mood, idx) => (
              <button key={idx} className="flex-1 aspect-square bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm hover:shadow-md hover:bg-sage/10 transition-all border border-sage/5">
                {mood}
              </button>
            ))}
          </div>
        </section>

        {/* Community Section */}
        <section className="pb-4">
          <div className="flex justify-between items-end mb-4">
            <h3 className="text-earth font-bold text-sm uppercase tracking-wider">Comunidade</h3>
            <span className="text-xs text-softPurple font-medium cursor-pointer">Ver tudo</span>
          </div>
          <div className="flex gap-4 overflow-x-auto no-scrollbar py-2 -mx-6 px-6">
            {COMMUNITY_MEMBERS.map((member) => (
              <div key={member.id} className="min-w-[140px] bg-white rounded-2xl p-3 shadow-sm border border-sage/10 hover:shadow-md transition-shadow">
                <div className="w-full aspect-square rounded-xl overflow-hidden mb-3">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <p className="font-bold text-earth text-sm truncate">{member.name}</p>
                <p className="text-xs text-gray-400">Concluiu: {member.hobby}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
