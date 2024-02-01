// import style css
import { useContext } from "react"
import style from "../../styles/SalePricePrLists.module.scss"
import { GlobalContext } from "../../../../../Contexts/GlobalContext"
import PrCart from "../PrCart"


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow,} from 'swiper/modules';



export default function SalePricePrLists() {
	  const {SalePracePrList}=useContext(GlobalContext) 
  return (
	<section id={style.SalePricePrLists}>
		<div className="container">
			
			<h2 className={style.salePrTitle}>ENDİRİMDƏ OLAN MƏHSULLAR</h2>

   {/* <div className={style.SalePricePrListsWrapper}>
				{
					SalePracePrList.map(product=>(
						<PrCart key={product._id} data={product}/>
					))
				 }
</div> */}
			<Swiper
        effect={'coverflow'}
        grabCursor={true}
		loop={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: -3,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, ]}
        className="salePriceSlider"
      >
            {
				SalePracePrList.map(product=>(
					<SwiperSlide>
					<PrCart key={product._id} data={product}/>
					</SwiperSlide>   
				))
			 }
             </Swiper>
		</div>
	  
	</section>
  )
}
