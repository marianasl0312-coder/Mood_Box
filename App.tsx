
import React, { useState, useEffect } from 'react';
import Quiz from './components/Quiz';
import Home from './components/Home';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Result from './components/Result';
import { AppView } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('quiz');
  const [showNavbar, setShowNavbar] = useState(false);
  const [isBoxConfirmed, setIsBoxConfirmed] = useState(false);

  const handleQuizComplete = (answers: any) => {
    console.log('User preferences:', answers);
    // Going to the result revelation screen instead of loading directly to home
    setView('result');
  };

  const handleConfirmExperience = () => {
    setIsBoxConfirmed(true);
    setView('loading');
    
    // Brief loading after confirmation to simulate processing
    setTimeout(() => {
      setView('home');
      setShowNavbar(true);
    }, 1500);
  };

  const navigateTo = (newView: AppView) => {
    setView(newView);
  };

  const renderView = () => {
    switch (view) {
      case 'quiz':
        return <Quiz onComplete={handleQuizComplete} />;
      case 'result':
        return <Result onConfirm={handleConfirmExperience} />;
      case 'loading':
        return <Loading />;
      case 'home':
        return <Home isBoxConfirmed={isBoxConfirmed} />;
      case 'search':
        return (
          <div className="flex flex-col items-center justify-center h-full p-8 text-center fade-in text-earth bg-cream">
            <h2 className="text-2xl font-serif mb-2">Explorar Hobbies</h2>
            <p className="text-gray-500 italic">"Novas caixas sendo preparadas para você."</p>
            <div className="mt-8 opacity-20 animate-bounce">
               <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
            </div>
          </div>
        );
      case 'profile':
        return <Profile />;
      default:
        return <Quiz onComplete={handleQuizComplete} />;
    }
  };

  return (
    <div className="h-full bg-cream relative flex flex-col">
      <main className="flex-1 overflow-hidden">
        {renderView()}
      </main>
      
      {showNavbar && view !== 'loading' && view !== 'result' && (
        <Navbar activeView={view} onNavigate={navigateTo} />
      )}
    </div>
  );
};

export default App;
