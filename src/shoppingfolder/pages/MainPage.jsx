import React,{useState} from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import Collectns from '../Components/Collectns'
import {Gents,Ladies} from '../data'

import WomenCollcts from '../Components/WomenCollcts'

const MainPage = () => {
    const [men,setGentsFashion]=useState(Gents)
    const [women,setLadiesFashion]=useState(Ladies)
  return (
    <div>
      <Header/>
      <Banner/>
      <Collectns men={men}/>
      <WomenCollcts women={women}/>
      <Footer/>
    </div>
  )
}

export default MainPage
