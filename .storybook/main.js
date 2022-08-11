module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-next',
    '@chakra-ui/storybook-addon',
  ],
  // @see https://github.com/chakra-ui/chakra-ui/issues/2263
  refs: {
    '@chakra-ui/react': {
      disable: true,
    },
  },
  core: {
    builder: 'webpack5',
  },
}
