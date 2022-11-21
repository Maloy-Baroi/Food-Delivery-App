import React from 'react'
import Hero from '../components/Home/Hero'
import Navbar from '../components/Home/Navbar'
import RestaurantShowCase from '../components/Home/RestaurantShowCase'

const HomePage = () => {
    return (
        <div>
            <Navbar search="block" />
            <Hero />
            <RestaurantShowCase />
        </div>
    )
}

export default HomePage
