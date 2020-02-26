import { IConfig } from 'umi-types';

const config: IConfig = {
  plugins: [
    [
      'umi-plugin-react',
      {
        // TODO 开了没有用，以后在研究
        locale: true,
        dva: true,
        antd: true,
      },
    ],
    ['umi-plugin-block-dev', {
      layout: process.env.LAYOUT || 'ant-design-pro',
    }],
    require.resolve('./plugin'),
  ],
};

export default config;
