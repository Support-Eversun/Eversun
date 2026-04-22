'use client';

import React, { useEffect, useRef } from 'react';
<<<<<<< HEAD
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
=======
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { X } from '@phosphor-icons/react';
>>>>>>> from-master
import type { Size } from '@/types/common';

interface ModalProps {
  /** Indique si la modal est ouverte */
  isOpen: boolean;
  /** Fonction appelée lors de la fermeture de la modal */
  onClose: () => void;
  /** Titre affiché dans l'en-tête de la modal */
  title?: string;
  /** Contenu de la modal */
  children: React.ReactNode;
  /** Taille de la modal */
  size?: Extract<Size, 'sm' | 'md' | 'lg' | 'xl'>;
}

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
  };

  return (
<<<<<<< HEAD
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md fade-in"
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className={cn(
          'relative w-full fade-in max-h-[90vh] flex items-center justify-center',
          sizeClasses[size]
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
      >
        <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl w-full flex flex-col overflow-hidden rounded-2xl border border-gray-200/50 dark:border-gray-700/50 max-h-[90vh]">
          {/* Header */}
          {title && (
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/30 dark:to-cyan-900/30">
              <h2 id="modal-title" className="text-xl font-bold bg-gradient-to-r from-teal-900 to-cyan-700 dark:from-teal-100 dark:to-cyan-200 bg-clip-text text-transparent">
                {title}
              </h2>
              <button
                onClick={onClose}
                className="p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-110 group"
              >
                <X className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-teal-600 dark:group-hover:text-teal-400" />
              </button>
            </div>
          )}

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 sm:py-6 bg-white/95 dark:bg-gray-900/95">
            {children}
          </div>
        </div>
      </div>
    </div>
=======
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={cn(
              'relative w-full max-h-[90vh] flex items-center justify-center',
              sizeClasses[size]
            )}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? 'modal-title' : undefined}
          >
            <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-md w-full flex flex-col overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 max-h-[90vh]">
              {/* Header */}
              {title && (
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                  <h2 id="modal-title" className="text-xl font-bold text-gray-900 dark:text-white">
                    {title}
                  </h2>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-[1.01] group"
                  >
                    <X className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-amber-600 dark:group-hover:text-amber-400" weight="bold" />
                  </button>
                </div>
              )}

              {/* Content */}
              <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 sm:py-6 bg-white/95 dark:bg-gray-900/95">
                {children}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
>>>>>>> from-master
  );
};

export default Modal;
