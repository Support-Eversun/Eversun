'use client';

<<<<<<< HEAD
import { useToastStore } from '@/store/useToastStore';
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react';
=======
import { useState, useEffect } from 'react';
import { useToastStore } from '@/store/useToastStore';
import { CheckCircle, XCircle, Warning, Info, X, ArrowCounterClockwise, ArrowClockwise } from '@phosphor-icons/react';
>>>>>>> from-master
import { motion, AnimatePresence } from 'framer-motion';

export default function ToastProvider() {
  const toasts = useToastStore((state) => state.toasts);
  const removeToast = useToastStore((state) => state.removeToast);
<<<<<<< HEAD
=======
  const [progress, setProgress] = useState<Record<string, number>>({});

  useEffect(() => {
    toasts.forEach((toast) => {
      if (toast.duration && !progress[toast.id]) {
        const duration = toast.duration;
        const interval = 100;
        let currentProgress = 0;

        const timer = setInterval(() => {
          currentProgress += interval;
          const percentage = (currentProgress / duration) * 100;
          setProgress((prev) => ({ ...prev, [toast.id]: percentage }));

          if (currentProgress >= duration) {
            clearInterval(timer);
            removeToast(toast.id);
          }
        }, interval);

        return () => clearInterval(timer);
      }
    });
  }, [toasts, progress, removeToast]);
>>>>>>> from-master

  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
<<<<<<< HEAD
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'error':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'info':
        return <Info className="w-5 h-5 text-teal-500" />;
      default:
        return <Info className="w-5 h-5 text-teal-500" />;
=======
        return <CheckCircle className="w-5 h-5 text-green-500" weight="bold" />;
      case 'error':
        return <XCircle className="w-5 h-5 text-red-500" weight="bold" />;
      case 'warning':
        return <Warning className="w-5 h-5 text-yellow-500" weight="bold" />;
      case 'info':
        return <Info className="w-5 h-5 text-teal-500" weight="bold" />;
      default:
        return <Info className="w-5 h-5 text-teal-500" weight="bold" />;
>>>>>>> from-master
    }
  };

  const getBgColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-700';
      case 'error':
        return 'bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-700';
      case 'warning':
        return 'bg-yellow-50 dark:bg-yellow-900/30 border-yellow-200 dark:border-yellow-700';
      case 'info':
        return 'bg-teal-50 dark:bg-teal-900/30 border-teal-200 dark:border-teal-700';
      default:
        return 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700';
    }
  };

  return (
    <div className="fixed top-4 right-4 z-[100] flex flex-col gap-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            transition={{ duration: 0.2 }}
<<<<<<< HEAD
            className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg border ${getBgColor(toast.type)} min-w-[300px]`}
          >
            {getIcon(toast.type)}
            <span className="flex-1 text-sm font-medium text-gray-900 dark:text-gray-100">
              {toast.message}
            </span>
            <button
              onClick={() => removeToast(toast.id)}
              className="p-1 rounded hover:bg-white/50 dark:hover:bg-gray-700 transition-colors"
              aria-label="Fermer"
            >
              <X className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </button>
=======
            className={`relative overflow-hidden rounded-lg shadow-md border ${getBgColor(toast.type)} min-w-[350px]`}
          >
            {/* Progress Bar */}
            {toast.duration && (
              <div className="absolute bottom-0 left-0 h-1 bg-current opacity-20">
                <motion.div
                  className="h-full bg-current"
                  initial={{ width: '100%' }}
                  animate={{ width: `${100 - (progress[toast.id] || 0)}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            )}

            <div className="flex items-center gap-3 px-4 py-4">
              {getIcon(toast.type)}
              <span className="flex-1 text-sm font-medium text-gray-900 dark:text-gray-100">
                {toast.message}
              </span>

              {/* Action Buttons */}
              <div className="flex items-center gap-1">
                {toast.onUndo && (
                  <button
                    onClick={() => {
                      toast.onUndo?.();
                      removeToast(toast.id);
                    }}
                    className="p-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110"
                    aria-label="Annuler"
                  >
                    <ArrowCounterClockwise className="w-4 h-4 text-gray-600 dark:text-gray-400" weight="bold" />
                  </button>
                )}
                {toast.onRetry && (
                  <button
                    onClick={() => {
                      toast.onRetry?.();
                      removeToast(toast.id);
                    }}
                    className="p-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110"
                    aria-label="Réessayer"
                  >
                    <ArrowClockwise className="w-4 h-4 text-gray-600 dark:text-gray-400" weight="bold" />
                  </button>
                )}
                <button
                  onClick={() => removeToast(toast.id)}
                  className="p-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110"
                  aria-label="Fermer"
                >
                  <X className="w-4 h-4 text-gray-500 dark:text-gray-400" weight="bold" />
                </button>
              </div>
            </div>
>>>>>>> from-master
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
