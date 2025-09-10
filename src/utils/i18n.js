import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from '../../src/locales/en.json'
import zh from '../../src/locales/zh.json'


i18n
    .use(LanguageDetector)//绑定react
    .use(initReactI18next)//自动检测语言
    .init({
        resources: {
            en: { translation: en }, 
            zh: { translation: zh }
        }, 
        fallbackLng: 'zh', //设为默认语言
        interpolation: { escapeValue: false }
    })

export default i18n
