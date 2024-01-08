import React from 'react'
// import style
import  style from "../styles/Button.module.scss"

function Button({title}) {
  return (
	<div className={style.btn}>
	 {title}
	</div>
  )
}

export default Button
