'use client';

import { useAppStore } from '@/store/useAppStore';
<<<<<<< HEAD
import { Sun, Moon } from 'lucide-react';
=======
import { Sun, Moon } from '@phosphor-icons/react';
>>>>>>> from-master

export default function ThemeToggle() {
  const { theme, toggleTheme } = useAppStore();

  return (
    <button
      onClick={toggleTheme}
<<<<<<< HEAD
      className="relative p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105 group"
=======
      className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-[1.01] group"
>>>>>>> from-master
      aria-label={
        theme === 'light' ? 'Activer le mode sombre' : 'Activer le mode clair'
      }
      title={theme === 'light' ? 'Mode sombre' : 'Mode clair'}
    >
      <div className="relative">
        {theme === 'light' ? (
<<<<<<< HEAD
          <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-teal-500 transition-colors" />
        ) : (
          <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-teal-500 transition-colors" />
=======
          <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-teal-500 transition-colors" weight="bold" />
        ) : (
          <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-teal-500 transition-colors" weight="bold" />
>>>>>>> from-master
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-10 rounded-full blur-md transition-opacity duration-200" />
      </div>
    </button>
  );
}
