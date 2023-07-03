import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/themeProvider';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { Theme } from 'app/providers/themeProvider/lib/themeContext';
import { Button, ThemeButton } from 'shared/ui/button/button';

interface ThemeSwitcherProps{
    className?:string
}
export function ThemeSwitcher({ className }:ThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme();
  return (
      <Button className={classNames('', {}, [className])} theme={ThemeButton.CLEAR} onClick={toggleTheme}>
          {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
      </Button>
  );
}
