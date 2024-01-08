import React, { useEffect, } from 'react'
// import style css
import style from "../styles/Details.module.scss"
import { useParams } from "react-router-dom"
import { FaRegStar } from "react-icons/fa";

import { NewProductsDatas } from '../MyWriteDatas/myDatas'

export default function Details() {
	   const {id}=useParams()
        
	   useEffect(()=>{
         window.scrollTo(0,0)
	   },[])

	
	      
  return (
	<section id={style.details}>
		<div  className="container">
	    {
		NewProductsDatas.filter(item=>item.id == id).map(product=>(
          <div key={product.id} className={style.prDetails}>
			      
				<img src={product.img}  alt="" />
				<div className={style.prInfo}>
			    <h2 className={style.prTitle}>{product.title}</h2>
				   <div className={style.stars}><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /></div>
				<span className={style.prPrice}> $ {product.price}</span>
				<p className={style.prDescription}>{product.description}</p>
        
		      <button className={style.addToCartBtn}>ADD TO CART</button>
		      <button className={style.buyItNow}>BUY IT NOW</button>
			   </div>
			</div>
		))
	 }
		</div>
	</section>
  )
}

