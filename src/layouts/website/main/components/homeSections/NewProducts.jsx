// import style css
import style from "../../styles/NewProducts.module.scss"
import PrCart from "../PrCart"
// import component 
import TitleList from "../TitleList"
// import my write data
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useContext } from "react"
import { GlobalContext } from "../../../../../Contexts/GlobalContext"

function NewProducts() {
	const {t}=useTranslation()   
	const {allProductDatas}=useContext(GlobalContext)
  return (
	<section id={style.newProducts}>
		<div style={{padding:"0"}} className="container">
			<TitleList yellowTitle={t("Check-out-latest-of")} whiteTitle={t("BRAND-NEWP-RODUCTS")}/>
			<div className={style.wrapperNewProducts}>
				{
				 allProductDatas.slice(0,10).map(item=>(
					<PrCart key={item._id} data={item}/>
				 ))
				}
                 
			</div>
			<div className={style.allProduct}>
			<Link className={style.allProductBtn} to={"/products"}>SEE ALL PRODUCT</Link>
			</div>
		</div>
	  
	</section>
  )
}

export default NewProducts
