import React, { useState } from 'react'
// import modal scss
import style from "../DashboardStyle/Modal.module.scss"

export default function Modal() {
	const [customModal, setCustomModal]=useState(false)
   
	const ModalShowHidden=()=>{
		setCustomModal(!customModal)
	}
  return (
	<>
	{customModal && <div className={style.formGroup}>

	<span onClick={ModalShowHidden} className={style.close}>X</span>
	</div>}
	</>
  )
}
