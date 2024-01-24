// import style css
import { useContext, useEffect } from "react"
import style from  "../styles/AllBasketProduct.module.scss"
import { BasketContext } from "../../../../Contexts/BasketContext"
import { FaRegTrashAlt } from "react-icons/fa";
import { BsBasket } from "react-icons/bs";

export default function AllBasketProduct() {
     const {BasketItems,removeFromBasket,getBasketTotal}=useContext(BasketContext)
    // console.log("bas",BasketItems);
	useEffect(()=>{
		window.scrollTo(0,0)
	  },[])
	  const allBasketPrCount=()=>{
		return BasketItems.reduce((prevCoun,basketPr)=> prevCoun+ basketPr.count ,0)
	  }
	 
  return (
	<section id={style.AllBasketProduct}>
		<div className="container">
		{
		  BasketItems.length === 0 ? <div className={style.noBasketPr}>Səbətdə məhsul yoxdur <BsBasket /></div> :
			<div className={style.AllBasketProductWrapper}>
				<div className={style.basketPrList}>
                     {
					BasketItems.map(product=>(
						<div key={product._id} className={style.basketOneProduct}>
                         <img src={product.images[0].url} alt={product.title} />
						 <div className={style.basketPrInfo}>
						  <h6>{product.title}</h6>
						  <span>{product.productPrice} $</span>
						  <span>{product.count} ədəd</span>
						  <span>product all Price: {product.productPrice * product.count}</span>
						  <span onClick={()=>removeFromBasket(product)} className={style.delete}><FaRegTrashAlt /></span>
						  </div>
						</div>     
					))
			    	} 
				</div>
				
					<div className={style.basketResult}>
					<span className={style.basketPrCount}>Basket product count:{allBasketPrCount()} ədəd</span>
					<span className={style.basketPrTotal}>Basket product total:{getBasketTotal()} $</span>
				</div>
			
			
			</div>
				}
		</div>
	  
	</section>
  )
}
