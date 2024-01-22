// import style css
import { useContext } from "react"
import style from  "../styles/AllBasketProduct.module.scss"
import { BasketContext } from "../../../../Contexts/BasketContext"
import { FaRegTrashAlt } from "react-icons/fa";

export default function AllBasketProduct() {
     const {BasketItems,removeFromBasket}=useContext(BasketContext)
    console.log("bas",BasketItems);
  return (
	<section id={style.AllBasketProduct}>
		<div className="container">
			<div className={style.AllBasketProductWrapper}>
			 {
					BasketItems.map(product=>(
						<div className={style.basketOneProduct}>
                         <img src={product.images[0].url} alt={product.title} />
						  <h6>{product.title}</h6>
						  <span>{product.productPrice}</span>
						  <span>{product.count}</span>
						  <span>product all Price: {product.productPrice * product.count}</span>
						  <span onClick={()=>removeFromBasket(product)} className={style.delete}><FaRegTrashAlt /></span>

						</div>
					))
				} 
				
			</div>
		</div>
	  
	</section>
  )
}
