// import style css
import style from "../../styles/CustomSubtitle.module.scss"
import TitleList from "../TitleList"
// IMPORT MY WRITE DATAS
import { CustomSubtitleSliderDatas } from "../../MyWriteDatas/myDatas"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination,Navigation} from 'swiper/modules';
import Button from "../Button";

function CustomSubtitle() {   
  return (
	<section id={style.costumSubtitle}>
	  <div className="container">
     <TitleList yellowTitle={"This is custom subtitle"} whiteTitle={"BASEL DARK LAYOUT"}/>
      <div className={style.subtitleSlider}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
		loop={true}
		navigation={true}
        pagination={{
          clickable: true,
        }}
		breakpoints={{
			900: {
			  slidesPerView: 2,
			  spaceBetween: 20,
			}
		  }}
        modules={[Pagination,Navigation]}
        className={style.mySwiper}

      >
		{
			CustomSubtitleSliderDatas.map(item=>(
				<SwiperSlide key={item.id}>
					<div className={style.sliderConten}>
						<img src={item.img} alt={item.title} />
						<div className={style.sliderContent}>
							<h5 className={style.contentTitle}>This is custom subtitle</h5>
							<h3 className={style.productTitle}>{item.title}</h3>
							<div className={style.priceBtn}>
							<span className={style.productPrice}>Â£{item.price}</span>
							<Button title={"SHOP NOW"}/>
							</div>
						</div>
					</div>
				</SwiperSlide>
			))
		}
       
      </Swiper>
	  </div>
	  </div>
	</section>
  )
}

export default CustomSubtitle
