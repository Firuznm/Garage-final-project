// import react icons
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { SlBasket } from "react-icons/sl";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlinePersonOutline } from "react-icons/md";
// import style
import style from  "../../styles/HeaderRight.module.scss"
import { useEffect, useState } from "react";
import HeaderClose from "./HeaderClose";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BasketContext } from "../../../../../Contexts/BasketContext";
import { WishListContext } from "../../../../../Contexts/WishList";

import { LanguageConext } from "../../../../../Contexts/LanguageContext";
import { useTranslation } from "react-i18next";
import { ColorContext } from "../../../../../Contexts/ColorContext";
import { GlobalContext } from "../../../../../Contexts/GlobalContext";

export default function HeaderRight() {
	const { BasketItems, getBasketTotal,getBasketDiscountedTotal, removeFromBasket,	basketModal }=useContext(BasketContext)
	const [searchOpenClose, setSearchOpenClose]=useState(false)
	const [basketOpenClose,setBasketOpenClose]=useState(false)
    const {WishList}=useContext(WishListContext)   
	const {searchResult,setInpValue,modal,setModal}=useContext(GlobalContext)
	const {t}=useTranslation()

	const [showTitle, setShowTitle] = useState(true);

	// useEffect(() => {
	// 	const timeoutId = setTimeout(() => {
	// 	  setShowTitle(false);
	// 	}, 1000);
	
	// 	return () => clearTimeout(timeoutId);
	//   }, []); 
    
	const {multiLang, onChangeLang}=useContext(LanguageConext)
	const{onChangeColor,selectValue}=useContext(ColorContext)

    const openCloseSearch=()=>{
		setSearchOpenClose(!searchOpenClose);
	}
	const openCloseBasket=()=>{
		setBasketOpenClose(!basketOpenClose)
	}
	 
	
  return (
	<div className={style.navRight}>
		<div className={style.serachLoginBasketWrapper}>
	{/* <Link  to={"/login"}
	  className={style.loginRegisterBtn}>
	 <span className={style.loginRegister}>	{t("Login")} / {t("Register")}</span>
		<MdOutlinePersonOutline  className={style.person}/>
     </Link> */}
	<IoIosSearch onClick={openCloseSearch} className={style.searchIcon} />

	<Link to="/all-wish-list-product" className={style.wishList}>
	<FaRegHeart  className={style.heartIcon} /> 
	 <span className={style.wishListCount}>{WishList.length}</span>
	</Link>   

	<div onClick={openCloseBasket}  className={style.navBasket}>
	<SlBasket  className={style.BasketIcon}/>
	<span className={style.count}>{BasketItems.length}</span> 
	<span className={style.line}>/</span>
	<span className={style.price}>{getBasketTotal()} $</span>    
	</div>

	<div className={`${style.searchWrapper} ${searchOpenClose ? style.open : ""}`}>
		<div className={style.searchInpIcon}>
		<input onChange={(e)=>setInpValue(e.target.value)} className={style.searchInp} type="text" placeholder="Search for products" />
		<IoIosSearch className={style.searchIcon} />
		</div>   
          <div className={style.searchArea}>
			{searchResult.map(result=>(
				<Link onClick={openCloseSearch} to={`/products/${result._id}`} key={result._id} className={style.searchResulWrapper}>
				    <img className={style.searchPrImg} src={result.images[0].url} alt="" />
					<h6 className={style.searchPrTitle}>{result.title}</h6>
					 <p className={style.description}>{result.description}</p>
					<span className={style.searchPrPrice}>{result.productPrice} $</span>
				</Link>
			))}
		  </div>
		<div onClick={openCloseSearch} className={style.closeSearch}>
			<HeaderClose/>
		</div>
	</div>
    
	{/* {showTitle ? <div>{modal._id}.slice(0,4)</div> : <div>{modal.title}</div>} */}
	
      

	<div className={`${style.basket} ${basketOpenClose ? style.open : ""}`}>
		<div className={style.basketHead}>
			<h3>SHOPPING CART</h3>
			<div onClick= {openCloseBasket}>
			<HeaderClose />
			</div>
		 </div>
          <div className={style.basketData}>
			<span className={style.prevPrice}>Əvvəlki cəmi qiyməti : {getBasketTotal()} $</span> 
			<span className={style.dicountedPrice}>Endirimli cəmi qiyməti : {getBasketDiscountedTotal()} $</span>
          {
			BasketItems.map(product=>(
				<div key={product._id} className={style.basketDataWrapper}>
					<div className={style.basketPrImg}>
					<img src={product.images[0].url} alt={product.title} />
					<span className={style.prCount}>{product.count}</span>
					</div>
					<div className={style.basketContent}>
					<h3 className={style.basketTitle}>{product.title}</h3>
					<hr className={style.line}/>
					<div>
					<span className={style.basketPrice}>Qiymeti:  <span className={product.salePrice ? style.priceLine : ""}>{product.productPrice}$</span></span>
					{product.salePrice && <span className={style.basketSalePrice}>Endirimli Qiymeti: {product.salePrice}</span>}
					</div>
					</div>
					<span onClick={()=>removeFromBasket(product)} className={style.delete}><FaRegTrashAlt /></span>
				</div>
			))
		  }
		  
         </div>
		<div onClick={openCloseBasket} className={style.viewBasketDiv}><Link to="/all-basket-products" className={style.viewBasket}>VIEW BASKET</Link></div>
		 
	</div>
	</div>

            <div className={style.selectedList}>
	            <select className={style.colorSelected} value={selectValue}  onChange={onChangeColor}>
					<option value="black">Black</option>
					<option value="blue">Blue</option>
					<option value="fuchsia">Fuchsia</option>
				</select>
				<select className={style.MultiLang} value={multiLang}  onChange={onChangeLang}>
					<option value="az">AZ</option>
					<option value="en">EN</option>
					<option value="ru">RU</option>
				</select>
	        </div>

</div>
  )
}











	// const [headerLogin, setHeaderLogin]=useState(false)
	// const openCloseLogin=()=>{
	// 	setHeaderLogin(!headerLogin)
		
	// }
	//  onClick={openCloseLogin} 

{/* <div className={`${style.login} ${headerLogin ? style.open : ""}`}>
		<div className={style.loginHead}>
			<h3>SIGN IN</h3>
			<div onClick= {openCloseLogin}>
			<HeaderClose />
			</div>
		</div>

		<form className={style.loginForm}>
     
	     <label htmlFor="email">Email address *</label>
		 <input type="email" id="email" />

		 <label htmlFor="password">Password *</label>
		 <input type="password" id="password" />

		 <button className={style.loginBtn}>LOGIN</button>
		</form>
	</div> */}
