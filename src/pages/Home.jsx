import React from 'react'
// import { Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Footerend from '../components/Footerend'
import Homebody from '../components/Homebody'
import Navbar from '../components/Navbar'
// import Signup from './ignup'

const Home = () => {
  return (
    <div>
      <Navbar />
        <Homebody />
      <Footer />
      <Footerend />
    </div>
  )
}

export default Home