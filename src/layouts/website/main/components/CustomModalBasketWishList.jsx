// import style scss
import style from "../styles/CustomModalBasketWishList.module.scss"


export default function CustomModalBasketWishList(item) {
  return (
	<div className={style.CustomModalBasketWishListWrapper}>
	  <img src={item.images[0].url} alt="" />
	  <h2>{item.title}</h2>
	</div>
  )
}
