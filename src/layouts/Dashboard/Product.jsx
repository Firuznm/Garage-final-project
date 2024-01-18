// import style css
import style from "../Dashboard/DashboardStyle/Product.module.scss"


export default function Product() {
  return (
	<section id={style.DashProduct}>
		<div className="container">
			<div className={style.DashProductWrapper}>
				<h2 className={style.title}>Dashboard Product list</h2>
			</div>
		</div>

	</section>
  )
}
