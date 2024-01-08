// import style css
import style from "../../styles/NewProducts.module.scss"
import PrCart from "../PrCart"
// import component 
import TitleList from "../TitleList"
// import my write data
import { NewProductsDatas } from "../../MyWriteDatas/myDatas"
import { Link } from "react-router-dom"

function NewProducts() {
  return (
	<section id={style.newProducts}>
		<div style={{padding:"0"}} className="container">
			<TitleList yellowTitle={"Check out latest of"} whiteTitle={"BRAND NEW PRODUCTS"}/>
			<div className={style.wrapperNewProducts}>
				{
				 NewProductsDatas.slice(0,8).map(item=>(
					<PrCart key={item.id} data={item}/>
				 ))
				}
                 
			</div>
			<Link className={style.allProductBtn} to={"/products"}>SEE ALL PRODUCT</Link>
		</div>
	  
	</section>
  )
}

export default NewProducts
