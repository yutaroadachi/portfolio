// @ts-ignore
const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      include: ['../src/**/*.stories.mdx', '../src/**/*.stories.tsx'],
    },
  },
  // @see https://github.com/chakra-ui/chakra-ui/issues/2263
  refs: {
    '@chakra-ui/react': {
      disable: true,
    },
  },
  // @ts-ignore
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          src: path.resolve(__dirname, '../src'),
          '@emotion/core': path.resolve(
            __dirname,
            '../node_modules/@emotion/react'
          ),
          'emotion-theming': path.resolve(
            __dirname,
            '../node_modules/@emotion/react'
          ),
        },
      },
      // @see https://github.com/storybookjs/storybook/issues/16690
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            test: /\.mjs$/,
            include: /node_modules/,
            type: 'javascript/auto',
          },
        ],
      },
    }
  },
}
