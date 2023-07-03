import webpack from 'webpack';
import { BuildOptions } from './types/buildOptions';

export function buildResolvers(buildOptions:BuildOptions):webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [buildOptions.paths.src, 'node_modules'],
    alias: {},
    mainFiles: ['index'],
  };
}
