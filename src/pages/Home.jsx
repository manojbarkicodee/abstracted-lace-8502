import React from 'react'
import Footer from '../components/Footer'
import Footerend from '../components/Footerend'
import Homebody from '../components/Homebody'
import Navbar from '../components/Navbar'

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