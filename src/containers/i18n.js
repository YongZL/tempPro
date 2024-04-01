import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import XHR from 'i18next-xhr-backend';
import zh_CN from '../../browser/assets/locales/zh-CN.json';
import en_US from '../../browser/assets/locales/en-US.json';

const resources = {
  zh: {
    translation: zh_CN,
  },
  en: {
    translation: en_US,
  },
};

i18next
  .use(XHR)
  .use(initReactI18next)
  .init({
    // backend: {
    //   loadPath: './locales/{{lng}}.json',
    // },
    // debug: true,
    react: {
      useSuspense: false,
    },
    resources,
    fallbackLng: 'en',
    preload: ['en'],
    keySeparator: false,
    interpolation: { escapeValue: false },
  });

export default i18next;
