import cls from './appLink.module.scss'
import {classNames} from 'shared/lib/classNames/classNames'
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";
import {useTheme} from "app/providers/themeProvider";
import {AppLinkTheme} from "widgets/navbar/ui/navbar";


interface AppLinkProps extends LinkProps{
    className?:string,
    theme?:AppLinkTheme
}
export const AppLink:FC <AppLinkProps>= (props) =>{
    const {to,children, className,theme} = props
    return(
        <Link to={to} className={classNames(cls.appLink, {}, [className, cls[theme]])}>{children}</Link>
    )
}