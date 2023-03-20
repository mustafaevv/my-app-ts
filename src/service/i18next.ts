import "react-i18next";
import { initReactI18next } from "react-i18next";
import i18next from "i18next";

import en from "../locales/en/language.json";
import ru from "../locales/ru/language.json";

i18next.use(initReactI18next).init<TransferFunction>({
  resources: {
    en: {
      translation: en,
    },
    ru: {
      translation: ru,
    },
  },
  lng: localStorage.getItem("lng") || "en",
});

export default i18next;
