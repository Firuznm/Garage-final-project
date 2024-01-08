// import style css
import style from "../../styles/ClientsOpinions.module.scss"
import TitleList from "../TitleList"
// import my write datas
import { ClientsOpinionsDatas } from "../../MyWriteDatas/myDatas"

export default function ClientsOpinions() {
  return (
	<section id={style.ClientsOpinions}>
		<div className="container">  
			<div className={style.TitleWrapper}>
			<TitleList myWriteStyle={"10px"} yellowTitle={"What people say about us"} whiteTitle={"CLIENTS OPINIONS"}/>
			<h2 className={style.testimonials}>TESTIMONIALS</h2>
			</div>
		 <div className={style.clientsWrapper}>
			{
			 ClientsOpinionsDatas.map(item=>(
				<div key={item.id} className={style.clientInfo}>
				<img className={style.clientImg} src={item.img}alt={item.name} />
				<p className={style.clientDescription}>{item.descrtiption}</p>
				<span className={style.clientName}>{item.name}</span>   - 
				<span className={style.clientCommet}>Happy Custome</span>
			 </div>
			 ))	
			}
		 </div>
		
		 
		</div>
	  
	</section>
  )
}
