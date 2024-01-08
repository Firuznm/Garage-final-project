// import style css
import style from  "../styles/AllProducts.module.scss"
// import my write data
import { NewProductsDatas } from "../MyWriteDatas/myDatas"
import PrCart from "../components/PrCart"
import { useEffect } from "react"

export default function AllProducts() {
	useEffect(()=>{
     window.scrollTo(0,0)
	},[])
  return (
	<section id={style.allProduct}>
		<div className="container">
		<div className={style.prWrapper} >
              {
				NewProductsDatas.map(product=>(
						<PrCart key={product.id} data={product}/>
				))
			  }
			  </div>
			</div>
	  
	</section>
  )
}
