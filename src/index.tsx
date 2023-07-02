import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app/app";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "app/providers/themeProvider"

const root = document.getElementById("root")
ReactDOM.render(
        <BrowserRouter>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
   ,
    root
);