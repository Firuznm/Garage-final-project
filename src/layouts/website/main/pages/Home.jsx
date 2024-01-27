import React, { useContext, useEffect } from 'react'
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
import { GlobalContext } from '../../../../Contexts/GlobalContext'
import SiteLoading from '../components/SiteLoading'
import SalePricePrLists from '../components/homeSections/SalePricePrLists'

export default function Home() {
	const {loading}=useContext(GlobalContext)
	useEffect(()=>{
       window.scrollTo(0,0)
	},[])
  return (
 <>
 {
	loading ? <SiteLoading/> : 
     <>
	  <MainSwiperSlider/>
	  <SalePricePrLists/>
      <CustomSubtitle/>
	  <NewProducts/>
	  <SaveSale/>
	  <ReadOurMagazine/>
	 
	  <ClientsOpinions/>
	  <OurBrends/>
	  <OurPartners/>
	</>
 }
	</>
  )
}
