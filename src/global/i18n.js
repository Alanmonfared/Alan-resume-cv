import i18n from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const apiKey = "Ig5Qc27vX9JqPF1d9aaocA";
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "sv",

    ns: ["default"],
    defaultNS: "default",

    supportedLngs: ["sv","en","fa"],
    
    backend: {
      loadPath: loadPath
    }
  })


  export default i18n;