// import style css
import style from  "../../styles/SaveSale.module.scss"
// import react icons
import { MdEmail } from "react-icons/md";

function SaveSale() {
  return (
	<section id={style.saveSale}>
		<div style={{backgroundColor: "transparent", padding:0}} className="container">
			<div className={style.wrapperSaveSale}>
			<div className={style.content}>   
				<h5 className={style.italicTitle}>This is custom subtitle</h5>
				<h2 className={style.title}>SAVE 70% OFF SALE</h2>
				<p className={style.description}>Be the first to hear about new styles and offers and see how youâve helped.</p>
				<form  className={style.signUp}>
				<div className={style.inp}>
                <MdEmail /> <input type="email" className={style.email} placeholder="Your email address" />
				</div>
				<button className={style.signUpBtn}>SIGN UP</button>
				</form>
			</div>
		</div>   
		</div>
	</section>
  )
}

export default SaveSale
