
import React from 'react';
import { HomeIcon, SearchIcon, UserIcon } from '../constants';
import { AppView } from '../types';

interface NavbarProps {
  activeView: AppView;
  onNavigate: (view: AppView) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeView, onNavigate }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-[414px] mx-auto bg-white/90 backdrop-blur-md border-t border-sage/20 h-20 flex items-center justify-around px-8 z-50 rounded-t-[32px] shadow-[0_-5px_20px_-10px_rgba(0,0,0,0.1)]">
      <button 
        onClick={() => onNavigate('home')}
        className={`flex flex-col items-center gap-1 transition-colors ${activeView === 'home' ? 'text-softPurple' : 'text-gray-400'}`}
      >
        <HomeIcon />
        <span className="text-[10px] font-bold">Home</span>
      </button>
      
      <button 
        onClick={() => onNavigate('search')}
        className={`flex flex-col items-center gap-1 transition-colors ${activeView === 'search' ? 'text-softPurple' : 'text-gray-400'}`}
      >
        <SearchIcon />
        <span className="text-[10px] font-bold">Explorar</span>
      </button>

      <button 
        onClick={() => onNavigate('profile')}
        className={`flex flex-col items-center gap-1 transition-colors ${activeView === 'profile' ? 'text-softPurple' : 'text-gray-400'}`}
      >
        <UserIcon />
        <span className="text-[10px] font-bold">Perfil</span>
      </button>
    </nav>
  );
};

export default Navbar;
