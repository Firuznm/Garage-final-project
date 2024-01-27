import React, { useContext, useEffect,useState  } from 'react'
// import style css
import style from "../styles/Details.module.scss"
import { useParams } from "react-router-dom"
import { FaRegStar } from "react-icons/fa";
import { BasketContext } from '../../../../Contexts/BasketContext';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import myshop from '../../../../Helpers/MyShop';
import urls from '../../../../ApiValues/urls';
import SiteLoading from '../components/SiteLoading';

export default function Details() {
	   const {_id}=useParams()
	   const {addToCart} =useContext(BasketContext)
	   const [thumbsSwiper, setThumbsSwiper] = useState(null);
	   const [onePrData, setOnePrData]=useState([])
	   const [loading, setLoading]=useState(true)
	   useEffect(()=>{
         window.scrollTo(0,0)
	   },[])
     

	    const getOnePrData= async ()=>{
			try {
				const resOnePrData = await myshop.api().get(`${urls.siteOneProductData}${_id}`)
				      setOnePrData(resOnePrData.data.data)
					  setLoading(false)
			} catch (error) {
				console.log(error);
				setLoading(false)     
			}
		}

		useEffect(()=>{
      getOnePrData()
		},[])
    // console.log("one", onePrData);

  return (
	<>
	{
		loading ? <SiteLoading/> :
		<section id={style.details}>
		<div  className="container">   
	   
             <div  className={style.prDetails}>
			      
			<div className={style.prDetailsSlider}>
				<Swiper
				style={{
				'--swiper-navigation-color': 'green',
				}}
				loop={true}
				spaceBetween={10}
				navigation={true}
				thumbs={{ swiper: thumbsSwiper }}
				modules={[FreeMode, Navigation, Thumbs]}
				className={style.mySwiperSlider}
      >
		{
			onePrData.images?.map(img=>(
				<SwiperSlide key={img.public_id}>
				<img src={img.url} />
			  </SwiperSlide>
			))
		}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={style.sliderLittleImgWrapper}
      >
		{
          onePrData.images?.map(img=>(
			<SwiperSlide key={img.public_id}>
			<img  src={img.url}/>
		  </SwiperSlide>
		  ))
		}
          </Swiper>
				</div>

				<div className={style.prInfo}>
			    <h2 className={style.prTitle}>{onePrData.title}</h2>
				   <div className={style.stars}><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /></div>
				<span className={style.prPrice}>product price: <span className={onePrData.salePrice ? style.prevPriceLine : ""}>{onePrData.productPrice} $</span></span>
           {onePrData.salePrice && <span className={style.salePrice}>product sale price:{onePrData.salePrice} $</span>}
				<p className={style.prDescription}>{onePrData.description}</p>
		      <button onClick={()=>addToCart(product)} className={style.addToCartBtn}>ADD TO CART</button>
		      <button className={style.buyItNow}>BUY IT NOW</button>
			   </div>
			</div>
		{/* ))
	 } */}
		</div>
	    </section>
	}

	</>
  )
}


