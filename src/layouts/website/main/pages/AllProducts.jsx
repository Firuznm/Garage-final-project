// import style css
import style from  "../styles/AllProducts.module.scss"
import PrCart from "../components/PrCart"
import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../../../Contexts/GlobalContext"
import { useTranslation } from "react-i18next"
import SiteLoading from "../components/SiteLoading"
import ReklamLeft from "../components/ReklamLeft"
import ReklamRight from "../components/ReklamRight"

export default function AllProducts() {
	const {allProductDatas,loading}=useContext(GlobalContext)
	const {t}=useTranslation()

	useEffect(()=>{
     window.scrollTo(0,0)
	},[])
  return (
    <>
	{
          loading ? <SiteLoading/> : 
         <>
		 <ReklamLeft/>
		  <section id={style.allProduct}>
		  <div style={{padding:0}} className="container">
			  <h2 className={style.allProducts}>{t("allProducts")}</h2>
		  <div className={style.prWrapper} >
				{
				  allProductDatas.map(product=>(
						  <PrCart key={product._id} data={product}/>
				  ))
				}
				</div>
			  </div>
	     </section>
		 <ReklamRight/>
		 </>
	}
	</>
  )
}  
