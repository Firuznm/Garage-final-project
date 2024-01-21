// import style css
import style from "../../styles/HeaderCenter.module.scss"
import { IoIosArrowDown } from "react-icons/io";
import { HeaderShopDatas } from "../../MyWriteDatas/myDatas";
import { HeaderBlogDatas } from "../../MyWriteDatas/myDatas";
import { HeaderPagesDatas } from "../../MyWriteDatas/myDatas";
import { HeaderFeaturesDatas } from "../../MyWriteDatas/myDatas";
import   FooterHeaderPage from "../FooterHeaderPage";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function HeaderCenter({menu}) {
   const [openClose, setOpenClose]=useState(false)
   const [openCloseBlock, setOpenCloseBlock]=useState(false)
   const [openClosePage, setOpenClosePage]=useState(false)
   const [openCloseFeatures, setOpenCloseFeatures]=useState(false)
   const {t}=useTranslation()

   const onClickOpenClose=()=>{
	setOpenClose(!openClose)
   }

   const onClickOpenCloseBlock=()=>{
	setOpenCloseBlock(!openCloseBlock)
   }

   const onClickOpenClosePage=()=>{
	setOpenClosePage(!openClosePage)
   }

   const onClickOpenCloseFeatures=()=>{
	setOpenCloseFeatures(!openCloseFeatures)
   }
  return (    
	<div className={style.headercenterWrapper}>
	  <ul className={`${style.navPages} ${menu ? style.close : ""}`}>
					<li  className={style.homeLi}> <a className={style.homeLink} href="/">{t("home")}</a><IoIosArrowDown  className={style.arrowIcon}/>
				
					</li>
					<li  onClick={onClickOpenClose} className={style.shopLi}>{t("shop")}
					<IoIosArrowDown  className={style.arrowIcon}/>
				
				 	<div className={style.dropShopMenu}>
					<div className={`${style.shop} ${openClose ?style.openClose : ""}`}>
						{
							HeaderShopDatas.map(item=>
								<FooterHeaderPage liColor="white" key={item.id} data={item}/>
								)
						}
					</div>
					</div>
					</li>

					<li onClick={onClickOpenCloseBlock} className={style.blogLi}>{t("blog")}<IoIosArrowDown  className={style.arrowIcon}/>
					  <div className={style.BlogDropMenu}>
                         <div className={`${style.blog} ${openCloseBlock ?style.openClose : ""}`}>
							{
								HeaderBlogDatas.map(item=>(
									<FooterHeaderPage liColor="white" key={item.id} data={item}/>
								))
							}
						 </div>
					  </div> 
					</li>
					<li onClick={onClickOpenClosePage} className={style.pageLi}>{t("pages")}<IoIosArrowDown  className={style.arrowIcon}/>
					<div className={style.pageDropMenu}>
                         <div className={`${style.page} ${openClosePage ?style.openClose : ""}`}>
							{
								HeaderPagesDatas.map(item=>(
									<FooterHeaderPage liColor="white" key={item.id} data={item}/>
								))
							}
						 </div>
					  </div> 
					</li>
					<li onClick={onClickOpenCloseFeatures} className={style.featuresLi}>{t("features")}<IoIosArrowDown  className={style.arrowIcon}/>
					<div className={style.featureDropMenu}>
                         <div className={`${style.feature} ${openCloseFeatures ?style.openClose : ""}`}>
							{
								HeaderFeaturesDatas.map(item=>(
									<FooterHeaderPage liColor="white" key={item.id} data={item}/>
								))
							}
						 </div>
					  </div> 
					</li>
				</ul>
	</div>
  )
}
