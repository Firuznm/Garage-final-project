import React, { useContext, useEffect, useRef, } from 'react'
// import style css
import style from "../styles/Details.module.scss"
import { useParams } from "react-router-dom"
import { FaRegStar } from "react-icons/fa";
import { GlobalContext } from '../../../../Contexts/GlobalContext';
import { BasketContext } from '../../../../Contexts/BasketContext';

//   import slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

export default function Details() {
	   const {_id}=useParams()
       const {allProductDatas}=useContext(GlobalContext) 
	   const {addToCart} =useContext(BasketContext)
	   useEffect(()=>{
         window.scrollTo(0,0)
	   },[])

	   	// slick slider start
	const settings = {
		customPaging: function(i) {
		  return (
			<a>
			  {/* <img src={ imgs[i]} /> */}
			</a>
		  );
		},
		dots: true,
		dotsClass: "slick-dots slick-thumb",
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1    
	  };
	
	  const sliderRef = useRef(null);
	  const next = () => {
		sliderRef.current.slickNext();
	  };
	
	  const previous = () => {
		sliderRef.current.slickPrev();
	  };
	      
  return (
	<section id={style.details}>
		<div  className="container">   
	    {
		allProductDatas.filter(item=>item._id == _id).map(product=>(
			console.log("pr", product.images),
             <div key={product._id} className={style.prDetails}>
			      
				{/* <img src={product.img}  alt="" /> */}
				<div className={style.sliderImg}>
				<Slider {...settings}   ref={sliderRef}   >
             {
				product.images.map((img)=>(
					<div key={img.public_id}>
					<img  src={img.url} />
				  </div>
				))
			 }
        </Slider>
		<div className={style.arrow}>   
             <span className={style.prev} onClick={previous}>
			{/* <img src={Prev} alt="prev-img" /> */}
			prev
             </span>
             <span className={style.next} onClick={next}>  
              {/* <img className='next-img' src={Next} alt="next-img" /> */}
			  next
             </span>
           </div>
			 </div>
				
				<div className={style.prInfo}>
			    <h2 className={style.prTitle}>{product.title}</h2>
				   <div className={style.stars}><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /></div>
				<span className={style.prPrice}>product price: {product.productPrice} $</span>
                <span className={style.salePrice}>product sale price:{product.salePrice} $</span>
				<p className={style.prDescription}>{product.description}</p>
        
		      <button onClick={()=>addToCart(product)} className={style.addToCartBtn}>ADD TO CART</button>
		      <button className={style.buyItNow}>BUY IT NOW</button>
			   </div>
			</div>
		))
	 }
		</div>
	</section>
  )
}

