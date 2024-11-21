import React from 'react'
import Navbar from './Section/Navbar'
import Hero from './Section/Hero'
import ButtonGradient from './assets/svg/ButtonGradient'
import Benefits from './Section/Benefits'
import Collaboration from './Section/Collaboration'
import BentoBox from './Section/BentoBox'

const App = () => {
  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Navbar/>
        <Hero/>
        <Benefits/>
        <Collaboration/>
        <BentoBox/>
      </div>

      <ButtonGradient/>
    </>
  )
}

export default App

