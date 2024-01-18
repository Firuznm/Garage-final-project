import style from "../../styles/Header.module.scss"
import { RxHamburgerMenu } from "react-icons/rx";

import HeaderRight from "./HeaderRight";
import HeaderCenter from "./HeaderCenter";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../../../Contexts/GlobalContext";

function Header() {    
	const [hamburgerMenu, setHamburgerMenu]= useState(false)
	const [navColor,setNavColor]=useState(false)

	const{onClickColorChange, color,chCol,val}=useContext(GlobalContext)

	// const onChangeValue=(e)=>{
	// 	setVal(e.target.value)
	// }
	 
	const onClickOpenCloseMenu=()=>{
		setHamburgerMenu(!hamburgerMenu)
	}
	
	

	const navColorChange=()=>{
		if(window.scrollY > 80){
			setNavColor(true)
		}
		else{
			setNavColor(false)
		}
	}


	window.addEventListener("scroll", navColorChange)
	 
  return (
	<section className={style.header}>
		<div style={{padding: 0, backgroundColor:"transparent"}} className="container">
			<div className={`${style.nav} ${navColor ? style.navBlack : ""}`}>
				<span onClick={onClickOpenCloseMenu} className={style.hamburgerMenu}><RxHamburgerMenu /></span>
				<a href="/" className={style.navLogo}>MY SHOP</a>
				<button onClick={onClickColorChange}>{color}</button>
				<select value={val}  onChange={chCol} name="" id="">
					<option value="yellow">yellow</option>
					<option value="blue">blue</option>
					<option value="fuchsia">fuchsia</option>
				</select>
				{val}
			    <HeaderCenter menu={hamburgerMenu} setMenu={setHamburgerMenu}/>
				<HeaderRight/>
			</div>
			</div>  
	</section>   
  )
}

export default Header
