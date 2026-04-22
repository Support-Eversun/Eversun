import { create } from 'zustand';

/**
 * Types de notifications toast disponibles
 */
export type ToastType = 'success' | 'error' | 'warning' | 'info';

/**
 * Interface représentant une notification toast
 */
interface Toast {
  /** Identifiant unique du toast (généré automatiquement) */
  id: string;
  /** Type de notification détermine le style et l'icône */
  type: ToastType;
  /** Message à afficher */
  message: string;
  /** Durée d'affichage en millisecondes (défaut: 3000ms, 0 = permanent) */
  duration?: number;
<<<<<<< HEAD
=======
  /** Fonction appelée lors du clic sur le bouton annuler */
  onUndo?: () => void;
  /** Fonction appelée lors du clic sur le bouton réessayer */
  onRetry?: () => void;
>>>>>>> from-master
}

/**
 * Interface du store Zustand pour la gestion des toasts
 */
interface ToastStore {
  /** Liste des toasts actifs */
  toasts: Toast[];
  /** Ajoute un nouveau toast et retourne son ID */
<<<<<<< HEAD
  addToast: (type: ToastType, message: string, duration?: number) => string;
=======
  addToast: (type: ToastType, message: string, duration?: number, options?: { onUndo?: () => void; onRetry?: () => void }) => string;
>>>>>>> from-master
  /** Supprime un toast par son ID */
  removeToast: (id: string) => void;
  /** Supprime tous les toasts */
  clearToasts: () => void;
}

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
<<<<<<< HEAD
  addToast: (type, message, duration = 3000) => {
    const id = Math.random().toString(36).substring(7);
    const toast: Toast = { id, type, message, duration };
=======
  addToast: (type, message, duration = 3000, options = {}) => {
    const id = Math.random().toString(36).substring(7);
    const toast: Toast = { id, type, message, duration, ...options };
>>>>>>> from-master

    set((state) => ({ toasts: [...state.toasts, toast] }));

    if (duration > 0) {
      setTimeout(() => {
        set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) }));
      }, duration);
    }

    return id;
  },
  removeToast: (id) => {
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    }));
  },
  clearToasts: () => {
    set({ toasts: [] });
  },
}));

export const toast = {
  success: (message: string, duration?: number) =>
    useToastStore.getState().addToast('success', message, duration),
  error: (message: string, duration?: number) =>
    useToastStore.getState().addToast('error', message, duration),
  warning: (message: string, duration?: number) =>
    useToastStore.getState().addToast('warning', message, duration),
  info: (message: string, duration?: number) =>
    useToastStore.getState().addToast('info', message, duration),
};
