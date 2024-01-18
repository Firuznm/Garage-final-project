import { createContext, useEffect, useState,} from "react";


export const GlobalContext=createContext()   

export const GlobalProvider=({children})=>{

const [color, setColor] = useState(localStorage.getItem("mycolor") || "red");

const [val, setVal]=useState(localStorage.getItem("col") || "yellow")

const onClickColorChange = () => {
  const newColor = color === "red" ? "green" : "red";
  setColor(newColor);
  localStorage.setItem("mycolor", newColor);
};

const chCol=(e)=>{
	localStorage.setItem("col",e.target.value)
	setVal(e.target.value)
}
useEffect(() => {
  const allContainers = Array.from(document.getElementsByClassName("container"));
  allContainers.forEach((container) => {
	container.style.backgroundColor = color;
  });
}, [color]);

useEffect(() => {
	const allContainers = Array.from(document.getElementsByClassName("container"));
	allContainers.forEach((container) => {
	  container.style.backgroundColor = val;
	});
  }, [val]);
  

	return (
		<GlobalContext.Provider value={{onClickColorChange, color,chCol,val}}>
			{children}
		</GlobalContext.Provider>
	)
}

