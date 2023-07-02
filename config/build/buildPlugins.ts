import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions, BuildPaths} from "./types/buildOptions";
import {CleanWebpackPlugin} from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
export function buildPlugins(options:BuildOptions):webpack.WebpackPluginInstance[]{
    const htmlWebpackPlugin = new HtmlWebpackPlugin({template: options.paths.html})
    const progressPlugin = new webpack.ProgressPlugin()
    const cleanWebpackPlugin = new CleanWebpackPlugin()
    const miniCSSExtractPlugin = new MiniCssExtractPlugin({
        filename:"css/[name].[contenthash:8].css",
        chunkFilename:"css/[name].[contenthash:8].css"
    })
    const definePlugin = new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(options.isDev)
    })
    const hotModulePlugin = new webpack.HotModuleReplacementPlugin()
    const reactRefreshWebpackPlugin = new ReactRefreshPlugin()
    return [htmlWebpackPlugin,progressPlugin, miniCSSExtractPlugin,definePlugin, hotModulePlugin,reactRefreshWebpackPlugin]
}