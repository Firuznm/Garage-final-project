// import style css
import style from "../styles/Auth.module.scss"
import { useState } from "react"

   
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";

export default function Auth() {
	const [passwordShowHidden, setPasswordShowHidden]=useState(true)

	const PasswordShowHiddenFunc=()=>{
		setPasswordShowHidden(!passwordShowHidden)
	}
  return (
	<section id={style.auth}>
		 
		<form className={style.form}>
		    <h2 className={style.singIn}>Sign In</h2>

			<label htmlFor="email">Email</label>
			<input type="email" placeholder="Email" />

		
			<label htmlFor="password">Password</label>
            <div className={style.numberWrapper}>
			<input type={passwordShowHidden ? "password" : "text"} placeholder="Password" />
			<span className={style.icon} onClick={PasswordShowHiddenFunc}>{passwordShowHidden? <IoEye /> : <IoMdEyeOff />}</span>
			</div>



			<button className={style.singInBtn} type="submit">Sign In</button>
		</form>

	</section>
  )
}
