import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { RoomCategory, Manager } from '../types';

// Define the shape of our global state
interface AppState {
  currentUser: Manager | null;
  rooms: RoomCategory[];
  loading: boolean;
  error: string | null;
}

// Define the actions that can modify the state
type AppAction =
  | { type: 'SET_CURRENT_USER'; payload: Manager | null }
  | { type: 'SET_ROOMS'; payload: RoomCategory[] }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'CLEAR_ERROR' };

// Create the initial state
const initialState: AppState = {
  currentUser: null,
  rooms: [],
  loading: false,
  error: null,
};

// Create the context
const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

// Reducer function to handle state changes
const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return { ...state, currentUser: action.payload };
    case 'SET_ROOMS':
      return { ...state, rooms: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'CLEAR_ERROR':
      return { ...state, error: null };
    default:
      return state;
  }
};

// Provider component that wraps the app
interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the app context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};