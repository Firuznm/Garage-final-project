import { createContext, useEffect, useState } from "react";
import myshop from "../Helpers/MyShop";
import urls from "../ApiValues/urls";


export const GlobalContext=createContext()   

export const GlobalProvider=({children})=>{
       const [allProductDatas, setAllProductDatas] = useState([]);
	   const [inpValue,setInpValue]=useState("")
	   const [loading, setLoading]=useState(true)
	   const [modal,setModal]=useState([])

	   const AddToModal=(item)=>{
		setModal(item)
	   }
  
    //  console.log("mod",modal);

	const getAllProductDatas= async ()=>{
		try {  
			const resAllProductData= await myshop.api().get(`${urls.siteAllProducts}?page=${1}&perPage=${33}&search=${""}`)
			      setAllProductDatas(resAllProductData.data.data.product)
				  setLoading(false)
		    } catch (error) {
			console.log(error);   
			setLoading(false)
		    }
	        }

	useEffect(()=>{
     getAllProductDatas()
	},[])

    
	const SalePracePrList=allProductDatas.filter(prod=> prod.salePrice !== null);
	

	 const searchResult=allProductDatas.filter(item=>inpValue.toLowerCase()===""? "" : item.title.toLowerCase().includes(inpValue))
  
    // console.log("all",allProductDatas);
	// console.log("search", searchResult);
 
	return (
		<GlobalContext.Provider  
		value={{allProductDatas,loading,searchResult,inpValue,setInpValue, SalePracePrList, 
			AddToModal, modal,setModal
		}}>
		
			{children}
		</GlobalContext.Provider>
	)
}

