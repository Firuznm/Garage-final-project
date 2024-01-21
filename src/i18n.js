import i18n  from "i18next";
import { initReactI18next } from "react-i18next";
import LocalLang from "./LocalLanguages/language.json";
import myshop from "./Helpers/MyShop";




export const defaultNS = 'translation';
export const resources = {
	az:{
		translation: LocalLang.az
	   },
	en:{
		translation: LocalLang.en
	    },
	ru:{
		translation: LocalLang.ru
	}
};

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',    
    lng: myshop.lng,
    fallbackLng: myshop.lng,
    resources: resources,
    defaultNS,
});

  export default i18n