
import React from 'react';

export const QUESTIONS = [
  {
    id: 'battery',
    text: 'Qual o tamanho da sua disposição para este mês?',
    options: [
      { label: 'Modo Slow', description: 'Quero algo que eu possa fazer em 15 min por dia.' },
      { label: 'Modo Imersão', description: 'Topo um projeto que exija foco e tardes inteiras.' },
      { label: 'Modo Descoberta', description: 'Apenas pequenas pílulas de novidade.' }
    ]
  },
  {
    id: 'space',
    text: 'Onde você planeja viver sua experiência este mês?',
    options: [
      { label: 'Meu casulo', description: 'Espaço limitado, algo limpo e silencioso.' },
      { label: 'Mãos sujas', description: 'Tenho espaço para tintas, terra ou bagunça.' },
      { label: 'Exploração urbana', description: 'Quero um voucher para uma aula externa.' }
    ]
  },
  {
    id: 'sensory',
    text: 'Qual sentido você quer aguçar agora?',
    options: [
      { label: 'Tátil', description: 'Sentir texturas, fios, argila.' },
      { label: 'Olfativo/Paladar', description: 'Temperos, chás, alquimia na cozinha.' },
      { label: 'Visual/Foco', description: 'Pintura, fotografia, observação.' }
    ]
  },
  {
    id: 'reward',
    text: 'O que você mais precisa sentir ao terminar sua Box?',
    options: [
      { label: 'Orgulho', description: 'Ter um objeto físico pronto para decorar/usar.' },
      { label: 'Conhecimento', description: 'Saber que agora domino uma técnica nova.' },
      { label: 'Paz', description: 'O processo foi mais importante que o resultado final.' }
    ]
  }
];

export const COMMUNITY_MEMBERS = [
  { id: 1, name: 'Ana Silva', image: 'https://picsum.photos/seed/ana/150/150', hobby: 'Aquarela' },
  { id: 2, name: 'Lucas M.', image: 'https://picsum.photos/seed/lucas/150/150', hobby: 'Terrários' },
  { id: 3, name: 'Carla Dias', image: 'https://picsum.photos/seed/carla/150/150', hobby: 'Escultura' },
  { id: 4, name: 'Bruno R.', image: 'https://picsum.photos/seed/bruno/150/150', hobby: 'Bonsai' },
];

export const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
);

export const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);

export const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);
