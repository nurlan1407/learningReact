import cls from './navbar.module.scss'
import {classNames} from 'shared/lib/classNames/classNames'
import {Link} from "react-router-dom";
import {AppLink} from "shared/ui/appLink/appLink";
import {ThemeSwitcher} from "widgets/themeSwitcher";

interface NavbarProps{
    className?:string,
}
export enum AppLinkTheme{
    PRIMARY="primary",
    SECONDARY="secondary"
}

export const Navbar = ({className}:NavbarProps) =>{
    return(
        <div className={classNames(cls.Navbar,{},[className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} to={"about"} className={classNames(cls.mainLink,{},[])}>О Сайте</AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to={""}>Главная</AppLink>
            </div>

        </div>
    )
}