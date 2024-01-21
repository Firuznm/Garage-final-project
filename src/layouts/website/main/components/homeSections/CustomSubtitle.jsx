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
// react icons import
import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import { useTranslation } from "react-i18next";

function CustomSubtitle() {   
    const {t}=useTranslation()
  return (
	<section id={style.costumSubtitle}>
	  <div className="container">
     <TitleList yellowTitle={t("yellowTitle")} whiteTitle={t("whiteTitle")}/>
      <div className={style.subtitleSlider}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
		loop={true}
		// navigation={true}
		navigation={{ 
			prevEl: '.swiper-nav-button-prev',
			nextEl: '.swiper-nav-button-next'
			}}
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
							<h5 className={style.contentTitle}>{t("yellowTitle")}</h5>
							<h3 className={style.productTitle}>{item.title}</h3>
							<div className={style.priceBtn}>
							<span className={style.productPrice}>Â£{item.price}</span>
							<Button title={t("shopNow")}/>
							</div>
						</div>
					</div>
				</SwiperSlide>
			))
		}
           	        <div className="swiper-nav-button-prev"><BsArrowLeft/></div>
					<div className="swiper-nav-button-next"><BsArrowRight/></div>
      </Swiper>
	  </div>
	  </div>
	</section>
  )
}

export default CustomSubtitle
