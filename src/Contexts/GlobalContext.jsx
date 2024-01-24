import { createContext, useEffect, useState } from "react";
import myshop from "../Helpers/MyShop";
import urls from "../ApiValues/urls";


export const GlobalContext=createContext()   

export const GlobalProvider=({children})=>{
       const [allProductDatas, setAllProductDatas] = useState([]);
	   const [inpValue,setInpValue]=useState("")
	   const [loading, setLoading]=useState(true)
  
	const getAllProductDatas= async ()=>{
		try {  
			const resAllProductData= await myshop.api().get(`${urls.siteAllProducts}?page=${1}&perPage=${33}&search=${""}`)
			      setAllProductDatas(resAllProductData.data.data.product)
				  setLoading(false)
		    } catch (error) {
			console.log(error);   
		    }
	        }

	useEffect(()=>{
     getAllProductDatas()
	},[])

	 const searchResult=allProductDatas.filter(item=>inpValue.toLowerCase()===""? "" : item.title.toLowerCase().includes(inpValue))
  
    console.log("all",allProductDatas);
	console.log("search", searchResult);
 
	return (
		<GlobalContext.Provider  value={{allProductDatas,loading,searchResult,inpValue,setInpValue}}>
		
			{children}
		</GlobalContext.Provider>
	)
}

