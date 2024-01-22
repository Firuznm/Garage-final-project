// IMPORT STYLE CSS
 import style from "../styles/NotFound.module.scss"
//  IMPORT NOTFOUND SVG
import notFound from "../../../../assets/images/loadin404Svg/404.svg"


export default function NotFound() {
  return (
	<section className={style.notFoundSection}>
	<div className="container">
		<div className={style.notFound}>
			<img src={notFound} alt='burada 404 not found sekli var'/>
			<a href="/">ANA SƏHİFƏ </a>
		</div>  
	</div>
  </section>
  )
}
