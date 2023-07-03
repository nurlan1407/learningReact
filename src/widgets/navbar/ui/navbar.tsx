import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/appLink/appLink';
import { useTranslation } from 'react-i18next';
import cls from './navbar.module.scss';

interface NavbarProps{
    className?:string,
}
export enum AppLinkTheme{
    PRIMARY='primary',
    SECONDARY='secondary'
}

export function Navbar({ className }:NavbarProps) {
  const { t, i18n } = useTranslation();
  return (
      <div className={classNames(cls.Navbar, {}, [className])}>
          <div className={cls.links}>
              <AppLink theme={AppLinkTheme.PRIMARY} to="about" className={classNames(cls.mainLink, {}, [])}>
                  {t('О Сайте')}
              </AppLink>
              <AppLink theme={AppLinkTheme.PRIMARY} to="">{t('Главная страница')}</AppLink>
          </div>

      </div>
  );
}
