// import style css
import { useContext } from "react"
import style from "../../styles/SalePricePrLists.module.scss"
import { GlobalContext } from "../../../../../Contexts/GlobalContext"
import PrCart from "../PrCart"




export default function SalePricePrLists() {
	  const {SalePracePrList}=useContext(GlobalContext) 
  return (
	<section id={style.SalePricePrLists}>
		<div className="container">
			<h2 className={style.salePrTitle}>ENDİRİMDƏ OLAN MƏHSULLAR</h2>
			<div className={style.SalePricePrListsWrapper}>
             {
				SalePracePrList.map(product=>(
					<PrCart key={product._id} data={product}/>
				))
			 }
			</div>
		</div>
	  
	</section>
  )
}
