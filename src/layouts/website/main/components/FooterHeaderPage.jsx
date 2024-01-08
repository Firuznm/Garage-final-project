// import style css
import { Link } from "react-router-dom"
import style from "../styles/FooterHeaderPage.module.scss"
import { useState } from "react";


export default function FooterHeaderPage({data,liColor}) {  
	const [openClose, setOpenClose]=useState(false)

	const onClickOpenClose=()=>{
	 setOpenClose(!openClose)
	}   
	
  return (
	<div className={style.FooterHeaderPageWrapper}>
{data.title &&  <h3 onClick={onClickOpenClose} className={style.header}>{data.title}</h3>}	 

	  {data.pageList.map((page,index)=>(
     <Link style={{color:liColor}} className={style.page} key={index}>{page}</Link>
	  ))}
	</div>    
  )
}
