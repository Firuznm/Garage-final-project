// import style css
import style from "../../styles/OurBrends.module.scss"

// import slick slider 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import myshop from "../../../../../Helpers/MyShop";
import urls from "../../../../../ApiValues/urls";


export default function OurBrends() {
	   const [allBrendsData, setAllBrendsData]=useState([]);
        
	   const getBrendsData= async ()=>{
		try {
			const brendsDataRes= await myshop.api().get(urls.siteAllBrends)
			setAllBrendsData(brendsDataRes.data.data)
		} catch (error) {
			console.log(error);
		}
	   }
       useEffect(()=>{
       getBrendsData()
	   },[])

	   const settings = {
		dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,     
        autoplaySpeed: false,
        cssEase: "linear",
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 1800,
				settings: {
				  slidesToShow: 4,    
				}
			  },
			{
			  breakpoint: 1500,
			  settings: {
				slidesToShow: 4,     
			  }
			},
			{
				breakpoint: 1250,
				settings: {
				  slidesToShow: 3.3,
				}
			  },
			  {
				breakpoint: 1100,
				settings: {
				  slidesToShow: 3,
				}
			  },
			{
			  breakpoint: 1000,
			  settings: {
				slidesToShow: 2.5, 
			  }
			},
			{
				breakpoint: 900,
				settings: {
				  slidesToShow: 5, 
				}
			  },
			{
			  breakpoint: 700,
			  settings: {
				slidesToShow: 3.5,   
			  }
			},
			{
				breakpoint: 580,
				settings: {
				  slidesToShow: 2.5,     
				}
			  },
			  {
				breakpoint: 430,
				settings: {
				  slidesToShow: 1.5,     
				}
			  }
		      ]		
	  }; 
  return (
	<section id={style.OurBrends}>
		<div className="container">
			<div className={style.OurBrendsWrapper}>
				<h3 className={style.title}>OUR BRENDS</h3>
				<hr className={style.brendsLine}/>
				<div className={style.OurBrendsSlider}>
				<Slider {...settings}>   
             {
				allBrendsData.map(brend=>(
					<div key={brend._id}>
						<span className={style.brendTitle} >{brend.name}</span>
                     </div>
				))
			 }

           </Slider> 
		   </div>
			</div>
		</div>
	  
	</section>
  )
}
