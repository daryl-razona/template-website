import type { StrapiApp } from '@strapi/strapi/admin';
import ja from './translations/ja.json';

export default {
  config: {
    locales: ['en', 'ja'],
    translations: { ja },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
