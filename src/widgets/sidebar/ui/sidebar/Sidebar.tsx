import cls from './sidebar.module.scss'
import {classNames} from 'shared/lib/classNames/classNames'
import React from "react";
import {ThemeSwitcher} from "widgets/themeSwitcher";
import {LangSwitcher} from "widgets/langSwitcher";

interface SidebarProps{
    className?:string
}
export const Sidebar = ({className}:SidebarProps) =>{
    const [collapsed, setCollapsed] = React.useState(false)
    const onToggle = ()=>{
        setCollapsed(prevState => !prevState)
    }
    return(
        <div className={classNames(cls.Sidebar,{[cls.collapsed]:collapsed},[className])}>
            <button onClick={onToggle} >Toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    )
}