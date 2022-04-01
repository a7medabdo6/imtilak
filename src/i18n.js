import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const translationAr = {
  welcome: "wel ar",
  elmokhtabar: "المختبر",
};
const translationEn = {
  welcome: "wel",
  elmokhtabar: "elmokhtabar",
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEn },
    ar: { translation: translationAr },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export default i18n;
