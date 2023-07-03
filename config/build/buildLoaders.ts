import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/buildOptions';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  // if we use js we need babel
  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              nsSeparator: '~',
              locales: ['ru', 'en'],
              keyAsDefaultValue: true,
            },
          ],
        ],
      },
    },

  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: {
      loader: 'ts-loader',
      // options:{
      //     getCustomTransformers: ()=>({
      //         before:[options.isDev && ReactRefreshTypeScript()].filter(Boolean)
      //     }),
      //     transpileOnly: options.isDev
      // }
    },
    exclude: /node_modules/,
  };

  const styleLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes('.module.'),
            localIdentName: options.isDev ? '[path][name]__[local]' : '[hash:base64:8]',
          },
        },
      },
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };
  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };
  return [
    fileLoader, svgLoader, babelLoader, typescriptLoader, styleLoader,
  ];
}
