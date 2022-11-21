import React from 'react'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import './MyLocation.css'
import Navbar from './Navbar'

const MyLocation = () => {
    const navigator = useNavigate();
    const [house, setHouse] = useState("")
    const [area, setArea] = useState("")
    const [city, setCity] = useState("")
    const [userHouse, setUserHouse] = useCookies(['house'])
    const [userArea, setUserArea] = useCookies(['area'])
    const [userCity, setUserCity] = useCookies(['city'])

    const setLocation = () => {
        setUserHouse('house', house)
        setUserArea('area', area)
        setUserCity('city', city)
        navigator('/')
    }

    return (
        <div>
            <Navbar />
            <div className='row margin'>
                <div className='col-md-4'></div>
                <div className='col-md-4'>
                    <h2 className='text-center'>Set Location</h2>
                    <input className='form-control' type="text" placeholder="House, Road" value={house} onChange={e => setHouse(e.target.value)} />
                    <input className='form-control' type="text" placeholder="Area/Ward" value={area} onChange={e => setArea(e.target.value)} />
                    <input className='form-control' type="text" placeholder="City" value={city} onChange={e => setCity(e.target.value)} />
                    <button className='btn btn-power w-100' onClick={setLocation}>
                        <i className='fas fa-location'> Set </i>
                    </button>
                </div>
                <div className='col-md-4'></div>
            </div>
        </div>
    )
}

export default MyLocation
