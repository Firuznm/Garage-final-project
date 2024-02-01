// import style css
import style from  "../styles/ReklamLeft.module.scss"
import reklamImgLeft from "../../../../assets/images/reklamImg/reklam6.gif"


export default function ReklamLeft() {
  return (
	<div className={style.reklamLeft}>
	  <img src={reklamImgLeft} alt="" />  
	</div>
  )   
}
     