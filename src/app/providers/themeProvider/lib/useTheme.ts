import React from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './themeContext';

export interface UseThemeResult{
    theme:Theme,
    toggleTheme:()=>void
}
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

export const useTheme = ():UseThemeResult => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  const toggleTheme = () => {
    if (theme === Theme.LIGHT) {
      const newTheme = Theme.DARK;
      setTheme(newTheme);
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    } else {
      const newTheme = Theme.LIGHT;
      setTheme(newTheme);
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }
  };
  return { theme, toggleTheme };
};
