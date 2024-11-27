import React from 'react'
import Navbar from './Section/Navbar'
import Hero from './Section/Hero'
import ButtonGradient from './assets/svg/ButtonGradient'
import Benefits from './Section/Benefits'
import Collaboration from './Section/Collaboration'
import BentoBox from './Section/BentoBox'
import Pricing from './Section/Pricing'
import Roadmap from './Section/Roadmap'
import Footer from './Section/Footer'

const App = () => {
  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Navbar/>
        <Hero/>
        <Benefits/>
        <Collaboration/>
        <BentoBox/>
        <Pricing/>
        <Roadmap/>
        <Footer/>
      </div>

      <ButtonGradient/>
    </>
  )
}

export default App

