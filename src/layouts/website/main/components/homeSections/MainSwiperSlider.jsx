// import style scss
import style from "../../styles/MainSwiperSlider.module.scss"
// IMPORT MY WRITE DATAS
import { MainSwiperSliderDatas } from '../../MyWriteDatas/myDatas'; 

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade,  Autoplay, Navigation,} from 'swiper/modules';
import Button from '../Button';
// recat icons import
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { useTranslation } from "react-i18next";

function MainSwiperSlider() {
   const {t}=useTranslation()
  return (
	<section id={style.MainSwiperSlider}>
   
      <div style={{padding:0}} className="container">
    
	       <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={{ 
          prevEl: '.custom-swiper-button-prev',
          nextEl: '.custom-swiper-button-next'
          }}
	    	loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade,Autoplay,  Navigation,]}
        className="mySwiper"
      >
             
		{
			MainSwiperSliderDatas.map(data=>(
				<SwiperSlide key={data.id}>    
				<img src={data.image} />
				<div className={style.mainSwiperSliderText}>
          <h4 className={style.sliderBrandTitle}>{data.brandTitle}</h4>
          <h2 className={style.sliderTitle}>{data.title}</h2>
          <p className={style.sliderDescription}>{data.descrtiption}</p>
          <Button title={t("shopNow")}/>
        </div>
        </SwiperSlide>   
			))
		}
    	    <div className="custom-swiper-button-prev"><MdArrowBackIosNew /></div>
					<div className="custom-swiper-button-next"><MdArrowForwardIos /></div>
        </Swiper>
      </div>
      
	</section>

  )
}

export default MainSwiperSlider











  {/* <iframe loading="lazy" src="https://ads.newmedia.az/www/images/95747e644268589c83094354539089e1/index.html?clickTag=https://ads2.newmedia.az/www/delivery/ck.php?oaparams=2__bannerid=15024__zoneid=942__cb=c6f1769024__campaignid=3015719__p1=1704548826__p2=70708836b805ecf659959dabdb5f__p3=8364586247.b1d61377fbea3702d024ba50f667cbb6d2df0369__oadest=https%3A%2F%2Fapasport.az%2Fforecast%2Fpaid%3Futm_content%3DNewmedia%26utm_source%3Dapa.az%26utm_medium%3Diab_banner%26utm_campaign%3DApaSport%26utm_device%3Ddesktop" title="Video"
    frameborder="0" allow="autoplay; fullscreen; picture-in-picture" 
    allowfullscreen="true"></iframe>      */}