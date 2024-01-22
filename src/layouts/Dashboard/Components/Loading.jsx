// import style css
import style from "../DashboardStyle/Loading.module.scss"
import loadingImg from "../../../assets/images/loadin404Svg/loading.gif"


function Loading() {
  return (
	<div className={style.loading}>
		<img src={loadingImg} alt="" />
	</div>
  )
}

export default Loading
