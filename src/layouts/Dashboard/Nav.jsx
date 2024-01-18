import style from "./DashboardStyle/Nav.module.scss"
import { Link } from "react-router-dom"


export default function Nav() {
  return (
	<>
	<h2 className={style.dashboard}>MY DASHBOARD</h2>
   <div className={style.dashList}>
    <Link to="/admin/brands">Brands</Link>
	<Link to="/admin/products">Products</Link>
	<Link to="/admin/orders">Orders</Link>
		</div>
		</>
  )
}
