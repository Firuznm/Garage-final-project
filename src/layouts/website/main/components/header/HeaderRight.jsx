// import react icons
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { SlBasket } from "react-icons/sl";
import { MdOutlinePersonOutline } from "react-icons/md";
// import style
import style from  "../../styles/HeaderRight.module.scss"
import { useState } from "react";
import HeaderClose from "./HeaderClose";

export default function HeaderRight() {
	const [headerLogin, setHeaderLogin]=useState(false)
	const [searchOpenClose, setSearchOpenClose]=useState(false)
	const [basketOpenClose,setBasketOpenClose]=useState(false)
	
	const openCloseLogin=()=>{
		setHeaderLogin(!headerLogin)
		
	}
    const openCloseSearch=()=>{
		setSearchOpenClose(!searchOpenClose)
	}
	const openCloseBasket=()=>{
		setBasketOpenClose(!basketOpenClose)
	}
	 
  return (
	<div className={style.navRight}>
	<button onClick={openCloseLogin}  className={style.loginRegisterBtn}>
	 <span className={style.loginRegister}>	Login / Register</span>
		<MdOutlinePersonOutline  className={style.person}/>
 </button>
	<IoIosSearch onClick={openCloseSearch} className={style.searchIcon} />
	<FaRegHeart className={style.heartIcon} />

	<div onClick={openCloseBasket}  className={style.navBasket}>
	<SlBasket  className={style.BasketIcon}/>
	<span className={style.count}>0</span> 
	<span className={style.line}>/</span>
	<span className={style.price}>0.00 $</span>
	</div>

	<div className={`${style.login} ${headerLogin ? style.open : ""}`}>
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
	basket data
         </div>
	</div>



</div>
  )
}
