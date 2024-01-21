// import style css
import { useContext } from "react"
import style from  "../styles/AllBasketProduct.module.scss"
import { BasketContext } from "../../../../Contexts/BasketContext"


export default function AllBasketProduct() {
     const {BasketItems}=useContext(BasketContext)
console.log("bas",BasketItems);
  return (
	<section id={style.AllBasketProduct}>
		<div className="container">
			<div className={style.AllBasketProductWrapper}>
			 {
					BasketItems.map(product=>(
						<div className={style.basketOneProduct}>
                         <img src={product.img} alt={product.title} />
						  <h6>{product.title}</h6>
						  <span>{product.price}</span>
						  <span>{product.count}</span>
						  <span>product all Price: {product.price * product.count}</span>
						  <span>sil</span>
						</div>
					))
				} 
				
			</div>
		</div>
	  
	</section>
  )
}
