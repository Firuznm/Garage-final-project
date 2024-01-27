import { createContext, useState,useEffect } from "react";


export const WishListContext=createContext();

const defaultwishList = JSON.parse(localStorage.getItem("list")) || [];   

export const WishListProvider=({children})=>{

	const [WishList , setWishList] = useState(defaultwishList);

	const AddWishList = (item, findWishListItem) => {
		if (!findWishListItem) {
		  setWishList((list) => [...list, item]);
		} else {
		  setWishList((list) => list.filter((wishlistItem) => wishlistItem._id !== item._id));
		}
	  };

	  const wishListPrDelete=(prd)=>{
		   setWishList((WishList)=>WishList.filter((pr)=> pr._id !== prd._id))
	}

	useEffect(() => {
		localStorage.setItem("list", JSON.stringify(WishList));    
	}, [WishList]);

	return(
		<WishListContext.Provider value={{ AddWishList, WishList,wishListPrDelete }}>
			{children}
		</WishListContext.Provider>
	)
}