// import style css
import style from  "../../styles/OurPartners.module.scss"
//  import my write datas
import { OurPartnersImgList, OurPartnersInfoData } from "../../MyWriteDatas/myDatas"
import TitleList from "../TitleList"
import { Link } from "react-router-dom"
import Fancybox from "../Fancy"

export default function OurPartners() {
  return (
	<section id={style.OurPartners}>
	  <div className="container">
	  <Fancybox>
		<div className={style.partnersWrapper}>
		
			<div className={style.partnersImg}>
			
             {
				OurPartnersImgList.map((image,index)=>(
					<img data-fancybox="gallery" key={index} src={image} alt=""/>
				))
			 }
			
			</div>
			
			<div className={style.partnersInfo}>
               <TitleList yellowTitle={"Accessories store"} whiteTitle={"OUR PARTNERS"}/>
			   <p className={style.description}>{OurPartnersInfoData.descrtiption}</p>
			   <Link className={style.partnersBtn}>READ OUR STORY</Link>
			</div>
		</div>
		</Fancybox>  
	  </div>
	</section>
  )
}



