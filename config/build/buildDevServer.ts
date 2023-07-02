import {BuildOptions} from "./types/buildOptions";
import webpack from "webpack";
import type {Configuration as DevServerConfiguration} from 'webpack-dev-server'
export function buildDevServer(options:BuildOptions):DevServerConfiguration{
    return {
        port:options.port,
        open:true,
        historyApiFallback:true,
        hot:true
    }
}