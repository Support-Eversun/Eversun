// Client-side logging for user actions
// This is a simple implementation that can be extended with proper analytics

export type UserActionType =
  | 'login'
  | 'logout'
  | 'client_view'
  | 'client_edit'
  | 'client_create'
  | 'client_delete'
  | 'filter_apply'
  | 'search'
  | 'pagination_change'
  | 'section_change'
  | 'theme_toggle';

interface UserAction {
  type: UserActionType;
  section?: string;
  clientId?: string;
  details?: Record<string, any>;
  timestamp: number;
}

export function logUserAction(action: UserAction) {
  // In development, log to console
  if (process.env.NODE_ENV === 'development') {
    console.log('[User Action]', action);
  }

  // In production, this could send to an analytics service
  // For now, we'll store in localStorage for debugging
  try {
    const actions = JSON.parse(localStorage.getItem('userActions') || '[]');
    actions.push(action);
    // Keep only last 100 actions
    if (actions.length > 100) {
      actions.shift();
    }
    localStorage.setItem('userActions', JSON.stringify(actions));
  } catch (error) {
    console.error('Failed to log user action:', error);
  }
}

export function getUserActions(): UserAction[] {
  try {
    return JSON.parse(localStorage.getItem('userActions') || '[]');
  } catch {
    return [];
  }
}

export function clearUserActions() {
  localStorage.removeItem('userActions');
}
