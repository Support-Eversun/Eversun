/**
 * Types communs utilisés dans toute l'application
 */

/**
 * Variantes de taille pour les composants UI
 */
export type Size = 'sm' | 'md' | 'lg' | 'xl';

/**
 * Variantes de couleur/style pour les composants
 */
export type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success' | 'warning' | 'info' | 'default';

/**
 * Propriétés de base pour les composants avec loading state
 */
export interface WithLoading {
  loading?: boolean;
}

/**
 * Propriétés de base pour les composants avec icône
 */
export interface WithIcon {
  icon?: React.ReactNode;
}

/**
 * Propriétés de base pour les composants avec label et erreur
 */
export interface WithLabelError {
  label?: string;
  error?: string;
  helperText?: string;
}

/**
 * Options pour les sélecteurs
 */
export interface SelectOption {
  value: string;
  label: string;
}

/**
 * État de pagination
 */
export interface PaginationState {
  page: number;
  limit: number;
  total: number;
}

/**
 * État de tri
 */
export interface SortState {
  key: string;
  direction: 'asc' | 'desc';
}
