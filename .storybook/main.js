module.exports = {
  stories: [
    '../app/**/*.stories.tsx',
    '../app/**/*.stories.mdx',
    '../src/**/*.stories.tsx',
    '../src/**/*.stories.mdx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-next',
  ],
  core: {
    builder: 'webpack5',
  },
}
