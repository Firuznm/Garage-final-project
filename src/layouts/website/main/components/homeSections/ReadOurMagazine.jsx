// import style css
import { Link } from "react-router-dom"
import style from "../../styles/ReadOurMagazine.module.scss"
import TitleList from "../TitleList"
// import my write datas
import { ReadOurMagazineDatas} from "../../MyWriteDatas/myDatas"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay} from 'swiper/modules';
function ReadOurMagazine() {
  return (
	<section id={style.readMagazine}>
		<div className="container">
			<TitleList yellowTitle={"Fresh articles worldwide"} whiteTitle={"READ OUR MAGAZINE"}/>
			<Swiper
        slidesPerView={1}
        spaceBetween={30}
		loop={true}
		autoplay={{
			delay: 2000,
			disableOnInteraction: false,
		  }}
        pagination={{
          clickable: true,
        }}
		modules={[Autoplay]}
		breakpoints={{
			600: {
			  slidesPerView: 2,
			  spaceBetween: 20,
			},
			950: {
			  slidesPerView: 3,
			  spaceBetween: 40,
			},
		  }}

        className={style.mySwiper}
      >
		{
		   ReadOurMagazineDatas.map(item=>(
			<SwiperSlide className={style.customClassName} key={item.id}>
				<div className={style.content}>
             <Link className={style.image}>
				<img src={item.img} alt={item.title} />
				<span className={style.date}>13 <br/> DEC</span>
				<Link className={style.dark}>Dark</Link>
			 </Link>
		
			 <Link className={style.title}>{item.title}</Link>
			 <Link className={style.commet}>Leave a comment</Link>
			 <p className={style.description}>{item.descrtiption}</p>
			 <Link className={style.readMore}>Read More</Link>
			 </div>
			
			</SwiperSlide>
		   ))
		}
      
      </Swiper>

			
		</div>
	  
	</section>
  )
}

export default ReadOurMagazine
