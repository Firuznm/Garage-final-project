// import style css
import { useContext, useEffect } from "react"
import style from "../styles/AllWishList.module.scss"
import { WishListContext } from "../../../../Contexts/WishList"
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function AllWishList() {
	    const {WishList, wishListPrDelete}=useContext(WishListContext)
   
		useEffect(()=>{
       window.scrollTo(0,0)
		},[])
        
  return (
	<section id={style.AllWishList}>
		<div className="container">
		<h2 className={style.AllWishListHeader}> All Wish List </h2>

	   {WishList.length === 0 ?  <div className={style.freeWishList}>Wish liste product yoxdur</div> : 
	   <div className={style.AllWishListProductWrapper}>
	    	{
				WishList.map(product=>(
         <div key={product._id} className={style.AllWishListProduct}>
			<div className={style.WishListPrImg}>
             <img  src={product.images[0].url} alt={product.title} />
			 </div>
			 <div className={style.WishListPrInfo}>
			 <h3 className={style.WishListPrTitle}>{product.title}</h3>
			 <p className={style.WishListPrDescription}>{product.description.slice(0,70)}</p>
			 <span className={style.WishListPrPrice}>{product.productPrice} $</span>
	{product.salePrice ?  <span className={style.WishListPrSalePrice}>{product.salePrice} $</span> : <span>0 $</span>}
	         <div>
				<Link to={`/products/${product._id}`} className={style.seeMoreProduct}>See more</Link>
			 <button onClick={()=> wishListPrDelete(product)} className={style.WishListDelete}>Delete</button>
			 </div>
			 </div>
			</div>
				))
			} 
			</div>
			}	
	      
		
		</div>
	  
	</section>
  )
}
