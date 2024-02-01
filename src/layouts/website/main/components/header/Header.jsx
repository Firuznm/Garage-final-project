import style from "../../styles/Header.module.scss"
import { RxHamburgerMenu } from "react-icons/rx";

import HeaderRight from "./HeaderRight";
import HeaderCenter from "./HeaderCenter";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

function Header() {    
	const [hamburgerMenu, setHamburgerMenu]= useState(false)
	const [navColor,setNavColor]=useState(false)
	const {t}=useTranslation()
	// const headerRef = useRef(null)
	
	const onClickOpenCloseMenu=()=>{
		setHamburgerMenu(!hamburgerMenu)
	}


	// const navColorChange=()=>{
	// 	if(window.scrollY > 80){
	// 		setNavColor(true)
	// 	}
	// 	else{
	// 		setNavColor(false) 
	// 	}
	// }

	// window.addEventListener("scroll", navColorChange)   

	// const callbackFunction = ([e]) => {
	// 	if(e.intersectionRatio < 1) setNavColor(true)
	// 	else setNavColor(false)
	// };
	// const options = { threshold: [1] };
	// useEffect(() => {
	// 	const observer = new IntersectionObserver( 
	// 		callbackFunction,	
	// 		options
	// 	);
	// 	if(headerRef.current) observer.observe(headerRef.current);

	// 	return () => {
	// 		if(headerRef.current) observer.unobserve(headerRef.current)
	// 	}
	// }, [headerRef, options])
	 
  return (
	<section className={style.header}>
		<div style={{maxWidth:"1500px", padding:"0",}} className="container">
			<div 
			// ref={headerRef}
			 className={style.nav}>
				<div  className={style.logoHamburgerMenuWrapper}>
				<span onClick={onClickOpenCloseMenu} className={style.hamburgerMenu}><RxHamburgerMenu /></span>
				<a href="/" className={style.navLogo}>{t("myShop")}</a>
				</div>
			    <HeaderCenter menu={hamburgerMenu} setMenu={setHamburgerMenu}/>
				<HeaderRight/>
			</div>
			</div>  
	</section>   
  )
}

export default Header
