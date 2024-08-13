import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// locales
import locales_en from "#src/asset/locales/en.json"
import locales_zhTW from "#src/asset/locales/zh-TW.json"

export const resources = {
    'en': locales_en,
    'zh-TW': locales_zhTW,
} as const

i18n.use(initReactI18next).init({
    resources,
    lng: 'zh-TW',
    fallbackLng: 'zh-TW',
    compatibilityJSON: 'v3',
    interpolation: {
        escapeValue: false
    },
})

export default i18n