import React from 'react'
import '../css/Home.css'
import { Navbar } from './Navbar'
import { Products } from './Products'

export const Home = () => {
  return (
    <div className='home'>
    <Navbar/>
    <Products/>
    </div>
  )
}

