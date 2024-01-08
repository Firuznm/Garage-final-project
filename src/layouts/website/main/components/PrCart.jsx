// import style css
import { Link } from "react-router-dom"
import style from "../styles/PrCart.module.scss"
// import react icons
import { BsCart } from "react-icons/bs";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa6";

function PrCart({data}) {           
  return (
	<div className={style.warpperCart}>
		<Link to={`/products/${data.id}`} className={style.prImg}>
		<img src={data.img} alt={data.title} />
		</Link>
		<div className={style.prIconList}>
		<BsCart className={style.basketIcon} />
		<HiMagnifyingGlassPlus className={style.searchIcon}/>
		<FaRegHeart  className={style.heartIcon}/>
		</div>
		
	  <div className={style.prInfo}>
		<Link  to={`/products/${data.id}`} className={style.prTitle}>{data.title}</Link>
		<Link  to={`/products/${data.id}`} className={style.prBrend}>BASEL</Link>
		<span className={style.prPrice}>${data.price}</span>
	  </div>
	</div>    
  )
}

export default PrCart