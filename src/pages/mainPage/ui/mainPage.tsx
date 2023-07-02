import React from "react";
import {routeConfig} from "shared/config/routerConfig/routeConfig";
import {useTranslation} from "react-i18next";

const MainPage = () =>{
    const { t, i18n } = useTranslation();
    return(
        <h1>{t("Главная страница")}</h1>
    )
}


export default MainPage

