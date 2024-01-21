import { createContext, useEffect, useState } from "react";
import myshop from "../Helpers/MyShop";
import i18n from "../i18n";


export const LanguageConext=createContext()

export const LanguageProvider=({children})=>{
	  const [multiLang,setMultiLang]=useState(myshop.lng)

	
	useEffect(()=>{
       const defaultLang=localStorage.getItem("lang") || myshop.lng
	         myshop.lng=defaultLang
			 i18n.changeLanguage(defaultLang)
			 setMultiLang(defaultLang)
	},[])

	const onChangeLang=(e)=>{
		const l=e.target.value
		i18n.changeLanguage(l)
		localStorage.setItem("lang",l)
		setMultiLang(l)
	}

	return(
		<LanguageConext.Provider value={{multiLang, onChangeLang}}>
			   {children}
		</LanguageConext.Provider>
	)
}