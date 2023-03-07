import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './en/en.json'
import es from './es/es.json'

const resources = {
  en: {
    translation: en
  },
  es: {
    translation: es
  }
}

void i18n.use(initReactI18next).init({
  resources,
  lng: 'es',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
