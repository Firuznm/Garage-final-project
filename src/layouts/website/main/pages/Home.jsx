import React from 'react'
import MainSwiperSlider from '../components/homeSections/MainSwiperSlider'
import CustomSubtitle from '../components/homeSections/CustomSubtitle'
import NewProducts from '../components/homeSections/NewProducts'
import SaveSale from '../components/homeSections/SaveSale'
import ReadOurMagazine from '../components/homeSections/ReadOurMagazine'
import ClientsOpinions from '../components/homeSections/ClientsOpinions'
import OurPartners from '../components/homeSections/OurPartners'
import OurBrends from '../components/homeSections/OurBrends'
import ReklamLeft from '../components/ReklamLeft'
import ReklamRight from '../components/ReklamRight'

export default function Home() {
  return (
	<section  >
	  <MainSwiperSlider/>
      <CustomSubtitle/>
	  <NewProducts/>
	  <SaveSale/>
	  <ReadOurMagazine/>
	  <ClientsOpinions/>
	  <OurBrends/>
	  <OurPartners/>

	</section>
  )
}
