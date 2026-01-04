import React from 'react';
import { Terminal, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  return (
    <header className="z-10 px-4 py-3 bg-lightSurface dark:bg-darkSurface shadow-md flex items-center justify-between shrink-0 transition-colors duration-300">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl">
          <Terminal className="text-indigo-600 dark:text-indigo-400 w-6 h-6" />
        </div>
        <h1 className="text-xl font-bold tracking-tight text-slate-800 dark:text-white">
          CodePocket
        </h1>
      </div>
      
      <button 
        onClick={toggleTheme}
        className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 active:scale-95 transition-all text-slate-600 dark:text-slate-300"
        aria-label="Toggle Theme"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </header>
  );
};

export default Navbar;