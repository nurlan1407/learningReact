import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { ThemeSwitcher } from 'widgets/themeSwitcher';
import { LangSwitcher } from 'widgets/langSwitcher';
import cls from './sidebar.module.scss';

interface SidebarProps{
    className?:string
}
export function Sidebar({ className }:SidebarProps) {
  const [collapsed, setCollapsed] = React.useState(false);
  const onToggle = () => {
    setCollapsed((prevState) => !prevState);
  };
  return (
      <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
          {/* eslint-disable-next-line i18next/no-literal-string */}
          <button type="button" onClick={onToggle}>Toggle</button>
          <div className={cls.switchers}>
              <ThemeSwitcher />
              <LangSwitcher className={cls.lang} />
          </div>
      </div>
  );
}
