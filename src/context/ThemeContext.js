import { createContext } from 'react';

export const ThemeContext = createContext({
  theme: {
    gradient: '-1',
  },
  setTheme: () => {}
});