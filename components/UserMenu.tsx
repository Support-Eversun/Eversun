'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
<<<<<<< HEAD
import { User, LogOut, ChevronDown } from 'lucide-react';

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
=======
import { createPortal } from 'react-dom';
import { SignOut, User } from '@phosphor-icons/react';
import ConfirmDialog from '@/components/ui/ConfirmDialog';

export default function UserMenu() {
  const [showConfirm, setShowConfirm] = useState(false);
>>>>>>> from-master
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
<<<<<<< HEAD
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 group"
        aria-label="Menu utilisateur"
      >
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal-500 via-teal-600 to-cyan-500 shadow-lg flex items-center justify-center">
          <User className="h-4 w-4 text-white" />
        </div>
        <ChevronDown className={`h-4 w-4 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-50"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-12 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl z-50 overflow-hidden animate-in slide-in-right duration-200">
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
            >
              <LogOut className="h-4 w-4" />
              Déconnexion
            </button>
          </div>
        </>
      )}
    </div>
=======
    <>
      <button
        onClick={() => setShowConfirm(true)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 group"
        aria-label="Déconnexion"
      >
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 shadow-md flex items-center justify-center">
          <User className="h-4 w-4 text-white" weight="bold" />
        </div>
        <SignOut className="h-4 w-4 text-gray-500 dark:text-gray-400" weight="bold" />
      </button>

      {showConfirm && createPortal(
        <ConfirmDialog
          isOpen={showConfirm}
          onClose={() => setShowConfirm(false)}
          onConfirm={handleLogout}
          title="Déconnexion"
          message="Êtes-vous sûr de vouloir vous déconnecter ?"
          confirmText="Se déconnecter"
          cancelText="Annuler"
          variant="danger"
        />,
        document.getElementById('logout-dialog-portal')!
      )}
    </>
>>>>>>> from-master
  );
}
