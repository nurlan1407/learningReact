import webpack from 'webpack';
import path from 'path';
import { BuildOptions } from './types/buildOptions';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options:BuildOptions):webpack.Configuration {
  return {
    mode: options.mode,
    entry: options.paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: options.paths.output,
    },
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    plugins: buildPlugins(options),
    devtool: options.isDev ? 'inline-source-map' : undefined,
    devServer: options.isDev ? buildDevServer(options) : undefined,

  };
}

// path.resolve(__dirname,'src',"index.tsx")
