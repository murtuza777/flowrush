import { useState } from 'react';

type ThemeToggleProps = {
  onThemeChange: (theme: 'light' | 'dark') => void;
  currentTheme: 'light' | 'dark';
};

export default function ThemeToggle({ onThemeChange, currentTheme }: ThemeToggleProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    setIsAnimating(true);
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    onThemeChange(newTheme);
    
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="fixed top-20 right-6 z-50">
      <button
        onClick={handleToggle}
        className={`group relative w-16 h-8 rounded-full transition-all duration-300 ${
          currentTheme === 'dark' 
            ? 'bg-gradient-to-r from-slate-700 to-slate-800 border border-slate-600' 
            : 'bg-gradient-to-r from-blue-400 to-blue-500 border border-blue-300'
        } shadow-lg hover:shadow-xl hover:scale-105`}
        aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`}
      >
        {/* Track */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          {/* Background gradient */}
          <div className={`absolute inset-0 transition-all duration-300 ${
            currentTheme === 'dark' 
              ? 'bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900' 
              : 'bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400'
          }`} />
          
          {/* Animated stars for dark mode */}
          {currentTheme === 'dark' && (
            <div className="absolute inset-0">
              <div className="absolute top-1.5 left-2 w-0.5 h-0.5 bg-white rounded-full animate-ping opacity-60" />
              <div className="absolute top-2.5 left-4 w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-40" />
              <div className="absolute bottom-1.5 left-3 w-0.5 h-0.5 bg-white rounded-full animate-ping opacity-80" />
            </div>
          )}
          
          {/* Animated rays for light mode */}
          {currentTheme === 'light' && (
            <div className="absolute inset-0">
              <div className="absolute top-1 left-1 w-1 h-1 bg-white/60 rounded-full animate-pulse" />
              <div className="absolute top-2 right-2 w-0.5 h-0.5 bg-white/80 rounded-full animate-ping" />
              <div className="absolute bottom-1 left-3 w-0.5 h-0.5 bg-white/70 rounded-full animate-pulse" />
            </div>
          )}
        </div>

        {/* Thumb */}
        <div className={`absolute top-0.5 w-7 h-7 rounded-full transition-all duration-300 transform ${
          currentTheme === 'dark' ? 'translate-x-8' : 'translate-x-0.5'
        } ${isAnimating ? 'scale-110' : 'scale-100'} shadow-lg`}>
          <div className={`w-full h-full rounded-full transition-all duration-300 ${
            currentTheme === 'dark' 
              ? 'bg-gradient-to-br from-slate-200 to-slate-100 border border-slate-300' 
              : 'bg-gradient-to-br from-yellow-200 to-yellow-100 border border-yellow-300'
          } flex items-center justify-center overflow-hidden relative`}>
            
            {/* Moon icon for dark mode */}
            {currentTheme === 'dark' && (
              <svg 
                className="w-4 h-4 text-slate-600 transition-transform duration-300 group-hover:rotate-12" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" clipRule="evenodd" />
              </svg>
            )}
            
            {/* Sun icon for light mode */}
            {currentTheme === 'light' && (
              <svg 
                className="w-4 h-4 text-yellow-600 transition-transform duration-300 group-hover:rotate-90" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            )}
            
            {/* Inner glow effect */}
            <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
              currentTheme === 'dark' 
                ? 'bg-gradient-to-br from-slate-300/30 to-transparent' 
                : 'bg-gradient-to-br from-yellow-300/40 to-transparent'
            }`} />
          </div>
        </div>

        {/* Hover effect ring */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className={`absolute inset-0 rounded-full animate-ping ${
            currentTheme === 'dark' 
              ? 'bg-slate-400/20' 
              : 'bg-yellow-400/20'
          }`} />
        </div>
      </button>

      {/* Tooltip */}
      <div className="absolute top-full mt-2 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-[rgba(26,26,36,0.95)] backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2 shadow-lg">
          <div className="text-white font-medium text-sm whitespace-nowrap">
            {currentTheme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          </div>
          {/* Tooltip arrow */}
          <div className="absolute bottom-full right-4 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-[rgba(26,26,36,0.95)]"></div>
        </div>
      </div>
    </div>
  );
}
