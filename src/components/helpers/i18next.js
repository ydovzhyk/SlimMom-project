import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../../locales/en.json';
import es from '../../locales/es.json';
import ru from '../../locales/ru.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
    ru: { translation: ru },
  },
  lng: 'en', // Встановіть мову за замовчуванням
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
