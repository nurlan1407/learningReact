import React, {Suspense} from 'react'
import {Route, Routes} from "react-router-dom";
import {AboutPage} from "pages/aboutPage";
import {MainPage} from "pages/mainPage";
import {routeConfig} from "shared/config/routerConfig/routeConfig";

const AppRouter = () => {
    return (
        <div className={'page-wrapper'}>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {Object.values(routeConfig).map(({element, path}) =>
                        <Route path={path} element={element} key={path}/>
                    )}
                </Routes>
            </Suspense>
        </div>
    )
}

export default AppRouter