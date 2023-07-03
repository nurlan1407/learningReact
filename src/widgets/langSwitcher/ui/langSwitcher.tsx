import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/button/button';
import { useTranslation } from 'react-i18next';
import cls from './langSwitcher.module.scss';

interface LangSwitcherProps{
    className?:string
}
export function LangSwitcher({ className }:LangSwitcherProps) {
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
      <Button
        theme={ThemeButton.CLEAR}
        className={classNames(cls.LangSwitcher, {}, [className])}
        onClick={
            toggleLanguage
        }
      >
          {t('Язык')}
      </Button>
  );
}
