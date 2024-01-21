// import react icons
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { SlBasket } from "react-icons/sl";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlinePersonOutline } from "react-icons/md";
// import style
import style from  "../../styles/HeaderRight.module.scss"
import { useState } from "react";
import HeaderClose from "./HeaderClose";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BasketContext } from "../../../../../Contexts/BasketContext";
import { WishListContext } from "../../../../../Contexts/WishList";

import { GlobalContext } from "../../../../../Contexts/GlobalContext";
import { LanguageConext } from "../../../../../Contexts/LanguageContext";
import { useTranslation } from "react-i18next";

export default function HeaderRight() {
	const { BasketItems, getBasketTotal,removeFromBasket }=useContext(BasketContext)
	const [searchOpenClose, setSearchOpenClose]=useState(false)
	const [basketOpenClose,setBasketOpenClose]=useState(false)
    const {WishList}=useContext(WishListContext)
	const {t}=useTranslation()

	const {multiLang, onChangeLang}=useContext(LanguageConext)

	const{onChangeColor,selectValue}=useContext(GlobalContext)
	// console.log("wish",WishList);

	// console.log("hed",BasketItems);  

    const openCloseSearch=()=>{
		setSearchOpenClose(!searchOpenClose)
	}
	const openCloseBasket=()=>{
		setBasketOpenClose(!basketOpenClose)
	}
	 
  return (
	<div className={style.navRight}>
	<Link  to={"/login"}
	  className={style.loginRegisterBtn}>
	 <span className={style.loginRegister}>	{t("Login")} / {t("Register")}</span>
		<MdOutlinePersonOutline  className={style.person}/>
 </Link>
	<IoIosSearch onClick={openCloseSearch} className={style.searchIcon} />

	<span className={style.wishList}>
	<FaRegHeart  className={style.heartIcon} /> 
	 <span className={style.wishListCount}>{WishList.length}</span>
	</span>

	<div onClick={openCloseBasket}  className={style.navBasket}>
	<SlBasket  className={style.BasketIcon}/>
	<span className={style.count}>{BasketItems.length}</span> 
	<span className={style.line}>/</span>
	<span className={style.price}>{getBasketTotal()} $</span>
	</div>

	<div className={`${style.searchWrapper} ${searchOpenClose ? style.open : ""}`}>
		<div className={style.searchInpIcon}>
		<input className={style.searchInp} type="text" placeholder="Search for products" />
		<IoIosSearch className={style.searchIcon} />
		</div>

		<div onClick={openCloseSearch} className={style.closeSearch}>
			<HeaderClose/>
		</div>
	</div>

	<div className={`${style.basket} ${basketOpenClose ? style.open : ""}`}>
		<div className={style.basketHead}>
			<h3>SHOPPING CART</h3>
			<div onClick= {openCloseBasket}>
			<HeaderClose />
			</div>
		 </div>
          <div className={style.basketData}>
          {
			BasketItems.map(product=>(
				<div key={product.id} className={style.basketDataWrapper}>
					<img src={product.img} alt={product.title} />
					<div className={style.basketContent}>
					<h3 className={style.basketTitle}>{product.title}</h3>
					<span className={style.basketPrice}>{product.price}</span>
					</div>
					<span onClick={()=>removeFromBasket(product)} className={style.delete}><FaRegTrashAlt /></span>
				</div>
			))
		  }
		  
         </div>
		<div onClick={openCloseBasket} className={style.viewBasketDiv}><Link to="/all-basket-products" className={style.viewBasket}>VIEW BASKET</Link></div>
		 
	</div>

    <div>
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
