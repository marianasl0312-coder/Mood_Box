
import React from 'react';

const Profile: React.FC = () => {
  const preferences = [
    { emoji: '☕', label: 'Café Artesanal' },
    { emoji: '🎨', label: 'Tons Pastéis' },
    { emoji: '🕯️', label: 'Luz Quente' },
    { emoji: '🎧', label: 'Lo-fi Beats' }
  ];

  const history = [
    { emoji: '🪴', name: 'Terrário de Suculentas', date: 'Jan/26' },
    { emoji: '🎄', name: 'Guirlanda Aromática', date: 'Dez/25' },
    { emoji: '🥋', name: 'Tai Chi Chuan', date: 'Nov/25' }
  ];

  const communityPosts = [
    { 
      id: 1, 
      image: 'https://images.unsplash.com/photo-1613409101689-5f212f36f966?q=80&w=300&auto=format&fit=crop', 
      caption: 'Paciência no bordado.', 
      date: 'Há 2 dias' 
    },
    { 
      id: 2, 
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=300&auto=format&fit=crop', 
      caption: 'Yoga matinal.', 
      date: 'Há 1 semana' 
    },
    { 
      id: 3, 
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=300&auto=format&fit=crop', 
      caption: 'Minhas mudas cresceram.', 
      date: 'Há 2 semanas' 
    },
    { 
      id: 4, 
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=300&auto=format&fit=crop', 
      caption: 'Explorando aquarelas.', 
      date: 'Há 1 mês' 
    }
  ];

  return (
    <div className="flex flex-col h-full overflow-y-auto no-scrollbar pb-32 fade-in bg-cream">
      {/* Profile Header */}
      <section className="px-8 pt-12 pb-8 flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
          <img 
            src="https://picsum.photos/seed/debora/200/200" 
            alt="Débora" 
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-2xl font-serif text-earth mb-2">Débora</h2>
        <p className="text-sage font-medium text-sm leading-relaxed px-4 italic">
          "Aqui, o erro não é bug, é parte do aprendizado. Sinta o agora."
        </p>
      </section>

      <div className="px-6 space-y-8">
        {/* Estatísticas de Presença */}
        <section>
          <div className="bg-sage/10 border border-sage/20 rounded-3xl p-6 flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-earth font-bold text-sm mb-1">Estatísticas de Presença</h3>
              <p className="text-xs text-gray-500 mb-3">Expandindo seus horizontes, uma box por vez.</p>
              <div className="flex items-baseline gap-1">
                <span className="text-earth font-serif text-2xl font-bold">4h20</span>
                <span className="text-[10px] text-sage font-bold uppercase tracking-tighter">100% Presente</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A3B18A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v10l4.5 4.5"/></svg>
            </div>
          </div>
        </section>

        {/* Minhas Preferências (DNA Sensorial) */}
        <section>
          <h3 className="text-earth font-bold text-[10px] uppercase tracking-[0.2em] mb-4 opacity-60">Minhas Preferências</h3>
          <div className="flex flex-wrap gap-2">
            {preferences.map((pref, idx) => (
              <div key={idx} className="bg-white px-3 py-1.5 rounded-full border border-sage/10 shadow-sm flex items-center gap-2">
                <span className="text-sm">{pref.emoji}</span>
                <span className="text-[11px] text-earth font-medium">{pref.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Histórico de Experiências (Estante) */}
        <section>
          <h3 className="text-earth font-bold text-[10px] uppercase tracking-[0.2em] mb-4 opacity-60">Minha Estante de Hobbies</h3>
          <div className="space-y-3">
            {history.map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-2xl border border-sage/10 shadow-sm flex items-center justify-between group hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-cream rounded-xl flex items-center justify-center text-xl">
                    {item.emoji}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-earth leading-tight">{item.name}</h4>
                    <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">{item.date}</p>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full bg-sage/20 flex items-center justify-center text-sage">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Configuração de Curadoria */}
        <section className="bg-white/40 rounded-2xl p-4 border border-dashed border-sage/30">
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7B61FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            </div>
            <div>
              <p className="text-[11px] text-gray-400 font-medium italic">
                Curadoria ajustada para:
              </p>
              <p className="text-xs text-earth font-bold">
                Exercícios leves e Atividades Manuais
              </p>
            </div>
          </div>
        </section>

        {/* Meus Posts na Comunidade - Now at the end */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-earth font-bold text-[10px] uppercase tracking-[0.2em] opacity-60">Meus Posts na Comunidade</h3>
            <span className="text-[10px] text-softPurple font-bold uppercase tracking-wider cursor-pointer">Ver Feed</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {communityPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-sage/5 group hover:shadow-md transition-all">
                <div className="aspect-square w-full overflow-hidden">
                  <img src={post.image} alt={post.caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-3">
                  <p className="text-[11px] text-earth font-medium truncate mb-1">{post.caption}</p>
                  <p className="text-[9px] text-gray-400 uppercase tracking-tighter">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer Decoration */}
      <div className="mt-16 opacity-10 flex justify-center pb-8">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="18" stroke="#588157" strokeWidth="2" strokeDasharray="4 4"/>
          <path d="M20 12V28M12 20H28" stroke="#588157" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  );
};

export default Profile;
