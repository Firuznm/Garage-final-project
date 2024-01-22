// import style css
import style from "../styles/SiteLoading.module.scss"
// import loading gift
import siteLoading from "../../../../assets/images/loadin404Svg/loading1.webp"

export default function SiteLoading() {
  return (
	<div className={style.siteLoading}>
		<img src={siteLoading} alt="" />
	</div>
  )
}
