import type { StorybookConfig } from '@storybook/react-webpack5';
const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
};
export default config;

// module.exports = {
//   stories: [
//       '../../src/**/*.stories.@(js|jsx|ts|tsx)',
//   ],
//   addons: [
//       '@storybook/addon-links',
//       '@storybook/addon-essentials',
//       '@storybook/addon-interactions',
//   ],
//   framework: '@storybook/react',
//   core: {
//       builder: 'webpack5',
//   },
// };
