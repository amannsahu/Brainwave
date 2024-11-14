import React from 'react'
import Navbar from './Section/Navbar'
import Hero from './Section/Hero'
import ButtonGradient from './assets/svg/ButtonGradient'

const App = () => {
  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Navbar/>
        <Hero/>
      </div>

      <ButtonGradient/>
    </>
  )
}

export default App

