import React from 'react'
import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { Link } from 'react-router-dom'
import image from './images/home-img-1.png'
import './RestaurantShowCase.css'

const RestaurantShowCase = () => {
    const [restaurant, setRestaurant] = useState([])
    const [searchedRestaurant, setSearchedRestaurant] = useState([])
    const [city, setCity] = useCookies(['city'])
    const [area, setArea] = useCookies(['area'])

    useEffect(() => {
        if (city['city']) {
            fetch(`http://127.0.0.1:8000/main/city-restaurants/${city['city']}/${area['area']}/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(response => response.json())
                .then(response => {
                    setRestaurant(response)
                })
        }
        else {
            fetch('http://127.0.0.1:8000/main/restaurants/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(response => {
                    setRestaurant(response)
                })
        }
    }, [])
    return (
        <div>
            <div className="resto-container">
                {restaurant ? restaurant.map(resto => {
                    return (
                        <Link to={'/restaurant/'+resto.id+'/'+resto.restaurant_name+'/'} key={resto.id}>
                        <div className="card">
                        <img src={resto.get_main_image} alt={resto.restaurant_name} />
                        <div className="info-card">
                            <h1>{resto.restaurant_name}</h1>
                            <p>{resto.restaurant_type}</p>
                        </div>
                    </div>
                        </Link>
                    )
                }) : <h1>No Restaurant Found</h1>}
            </div>
        </div>
    )
}

export default RestaurantShowCase
