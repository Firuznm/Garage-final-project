// import style css
import style from "../../styles/HeaderClose.module.scss"
import { MdOutlineHorizontalRule } from "react-icons/md";
import { IoClose } from "react-icons/io5";

export default function HeaderClose() {
  return (
	<div className={style.close}>
			<span>CLOSE</span>
			<MdOutlineHorizontalRule className={style.lineIcon} />
			<IoClose  className={style.closeIcon}/>
			</div>
  )
}
