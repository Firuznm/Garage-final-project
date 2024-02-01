// import style css
import style from "../styles/Footer.module.scss"
import FooterPage from "./FooterHeaderPage"   
// import my write datas
import { FooterPagesDatas } from "../MyWriteDatas/myDatas"
import { FooterStoreDatas } from "../MyWriteDatas/myDatas"

export default function Footer() {
  return (
	<section id={style.footer}>
		<div style={{ maxWidth:"1500px"}} className="container">
			<div className={style.footerWrapper}>
				<div className={style.footerPages}>
					{FooterPagesDatas.map(item=>(
						<FooterPage key={item.id} data={item} />
					))}
		   		</div>
				<div className={style.footerStore}>
                   <h2 className={style.header}>{FooterStoreDatas.title}</h2>
                  <p className={style.description}>{FooterStoreDatas.descrtiption}</p>
				  <span className={style.address}>{FooterStoreDatas.address}</span>
				 <a className={style.contact} href="">{FooterStoreDatas.contact}</a>
				 <img  className={style.PaymentCards} src={FooterStoreDatas.paymentCards} alt={FooterStoreDatas.title} />
				</div>
			</div>
		</div>
	  
	</section>
  )
}
