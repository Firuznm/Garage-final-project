// import style css
import { Link } from "react-router-dom"
import style from "../styles/PrCart.module.scss"
// import react icons
import { BsCart } from "react-icons/bs";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { useContext } from "react";
import { BasketContext } from "../../../../Contexts/BasketContext";
import { WishListContext } from "../../../../Contexts/WishList";
import { GlobalContext } from "../../../../Contexts/GlobalContext";



function PrCart({data}) {              
	const {addToCart,}=useContext(BasketContext)         
	const {AddWishList, WishList} = useContext(WishListContext)
	const {AddToModal}=useContext(GlobalContext)
    const findListItem = WishList.find((item) => item._id === data._id);

	const PercentageCalculationFunc = (obj) => {
		return 100 - (obj.salePrice * 100) / obj.productPrice;
	}

  return (
	<div className={style.warpperCart}>
		<Link to={`/products/${data._id}`} className={style.prImg}>
		<img src={data.images[0].url} alt={data.title} />
	{data.salePrice &&	<span className={style.salePercent}> -{PercentageCalculationFunc(data).toFixed(2)}% </span>}
		</Link>
		
		<div className={style.prIconListInfo}>
		<div className={style.prIconList}>
		<BsCart className={style.basketIcon} onClick={() => { addToCart(data); AddToModal(data); }} />

		<HiMagnifyingGlassPlus className={style.searchIcon}/>
		<span className={style.heartIcon} onClick={() => AddWishList(data, findListItem)} >{findListItem ? <FaHeart style={{fill:"red"}}/> : <FaRegHeart  />}
		</span>
		</div>     

	  <div className={style.prInfo}>
		<Link  to={`/products/${data._id}`} className={style.prTitle}>{data.title}</Link>
		<span className={style.prPrice}>Qiymeti : <span className={data.salePrice ? style.prevPrice: "" }>{data.productPrice} $</span></span>
      	{data.salePrice && <span className={style.prSalePrice}>Endirimli qiymeti : {data.salePrice} $</span>}	
	  </div>
	  </div>
	</div>    
  )
}   

export default PrCart