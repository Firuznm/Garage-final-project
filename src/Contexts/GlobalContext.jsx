import { createContext, useEffect, useState } from "react";
import myshop from "../Helpers/MyShop";
import urls from "../ApiValues/urls";


export const GlobalContext=createContext()   

export const GlobalProvider=({children})=>{
       const [allProductDatas, setAllProductDatas] = useState([]);
	   const [loading, setLoading]=useState(true)
  
	const getAllProductDatas= async ()=>{
		try {  
			const resAllProductData= await myshop.api().get(urls.siteAllProducts)
			      setAllProductDatas(resAllProductData.data.data.product)
				  setLoading(false)
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(()=>{
     getAllProductDatas()
	},[])
  
    console.log("all",allProductDatas);
 
	return (
		<GlobalContext.Provider  value={{allProductDatas,loading}}>
			{children}
		</GlobalContext.Provider>
	)
}

