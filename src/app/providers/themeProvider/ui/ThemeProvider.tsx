import React, { ReactElement } from 'react';
import { Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY } from 'app/providers/themeProvider/lib/themeContext';
import { useTheme } from '../lib/useTheme';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

export type ThemeProviderProps ={
    children:React.ReactNode
}
const ThemeProvider :React.FC<ThemeProviderProps> = (props) => {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme);
  const defaultProps = React.useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);
  const { children } = props;
  return (
      <ThemeContext.Provider value={defaultProps}>
          {children}
      </ThemeContext.Provider>
  );
};

export default ThemeProvider;
