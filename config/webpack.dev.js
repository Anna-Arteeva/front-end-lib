const webpackMerge      = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig      = require('./webpack.common.js');
const helpers           = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:9090/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),

    new HtmlWebpackPlugin({
      filename: 'order-item-list.html',
      template: 'app/my/order-item-list/order-item-list.component.html'
    }),

    new HtmlWebpackPlugin({
      filename: 'docs/index.html',
      template: 'docs/index.html'
    }),

    new HtmlWebpackPlugin({
      filename: 'docs/UI.html',
      template: 'docs/UI.html'
    }),

    new HtmlWebpackPlugin({
      filename: 'docs/UI-2.html',
      template: 'docs/UI-2.html'
    }),

    new HtmlWebpackPlugin({
      filename: 'docs/UI-alerts.html',
      template: 'docs/UI-alerts.html'
    }),

    new HtmlWebpackPlugin({
      filename: 'docs/UI-buttons.html',
      template: 'docs/UI-buttons.html'
    }),

    new HtmlWebpackPlugin({
      filename: 'docs/UI-cards.html',
      template: 'docs/UI-cards.html'
    }),

    new HtmlWebpackPlugin({
      filename: 'docs/UI-flex.html',
      template: 'docs/UI-flex.html'
    }),

    new HtmlWebpackPlugin({
      filename: 'docs/UI-forms.html',
      template: 'docs/UI-forms.html'
    }),

    new HtmlWebpackPlugin({
      filename: 'docs/UI-tables.html',
      template: 'docs/UI-tables.html'
    }),

    new HtmlWebpackPlugin({
      filename: 'docs/UI-tags.html',
      template: 'docs/UI-tags.html'
    }),

    new HtmlWebpackPlugin({
      filename: 'docs/UI-type.html',
      template: 'docs/UI-type.html'
    }),

    new HtmlWebpackPlugin({
      filename: 'docs/UI-grid.html',
      template: 'docs/UI-grid.html'
    }),

    new HtmlWebpackPlugin({
      filename: 'docs/UI-icons.html',
      template: 'docs/UI-icons.html'
    }),

    new HtmlWebpackPlugin({
      filename: 'docs/UI-css-icons.html',
      template: 'docs/UI-css-icons.html'
    }),

    new HtmlWebpackPlugin({
      filename: 'invoice.html',
      template: 'app/my/invoice/invoice.component.html'
    }),


      //new docs

    new HtmlWebpackPlugin({
      filename: 'docs/architecture.html',
      template: 'docs/architecture.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'docs/alerts.html',
      template: 'docs/alerts.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'docs/bem.html',
      template: 'docs/bem.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'docs/buttons.html',
      template: 'docs/buttons.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'docs/card.html',
      template: 'docs/card.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'docs/colors.html',
      template: 'docs/colors.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'docs/dropdown.html',
      template: 'docs/dropdown.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'docs/flexbox.html',
      template: 'docs/flexbox.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'docs/forms.html',
      template: 'docs/forms.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'docs/grid.html',
      template: 'docs/grid.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'docs/icons.html',
      template: 'docs/icons.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'docs/pagination.html',
      template: 'docs/pagination.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'docs/spinner.html',
      template: 'docs/spinner.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'docs/tables.html',
      template: 'docs/tables.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'docs/tabs.html',
      template: 'docs/tabs.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'docs/tags-labels.html',
      template: 'docs/tags-labels.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'docs/tooltip.html',
      template: 'docs/tooltip.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'docs/typography.html',
      template: 'docs/typography.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'docs/utilities.html',
      template: 'docs/utilities.html'
    }),
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
