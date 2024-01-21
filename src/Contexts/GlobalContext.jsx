import { createContext, useEffect, useState,} from "react";


export const GlobalContext=createContext()   

export const GlobalProvider=({children})=>{
const [selectValue, setSelectValue]=useState(localStorage.getItem("siteColor") || "black")

const onChangeColor=(e)=>{
	localStorage.setItem("siteColor",e.target.value)
	setSelectValue(e.target.value)
}

useEffect(() => {
	const allContainers = Array.from(document.getElementsByClassName("container"));

	allContainers.map((container) => {
	  container.style.backgroundColor = selectValue;
	});
  }, [selectValue]);
  

 
	return (
		<GlobalContext.Provider value={{onChangeColor,selectValue}}>
			{children}
		</GlobalContext.Provider>
	)
}

