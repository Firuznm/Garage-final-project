// import style css
import style from "../../styles/OurBrends.module.scss"
// iport my write datas
import { OurBrendsDatas } from "../../MyWriteDatas/myDatas"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from "react-router-dom";

export default function OurBrends() {
  return (
	<section id={style.OurBrends}>
		<div className="container">
			<div className={style.OurBrendsWrapper}>
				<h3 className={style.title}>OUR BRENDS</h3>
				<hr className={style.brendsLine}/>
			<Swiper
        slidesPerView={4}
        spaceBetween={30}
		loop={true}
        pagination={{
          clickable: true,
        }}
        className={style.mySwiper}
      >
			{OurBrendsDatas.map(brend=>(
				<SwiperSlide key={brend.id}>
				<Link >{brend.title}</Link>
				</SwiperSlide>
			))}
	
           </Swiper>
			</div>
		</div>
	  
	</section>
  )
}
