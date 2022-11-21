import React from 'react'
import { useState, useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

import './Login.css'

const Login = () => {
    const [token, setToken] = useCookies(['myToken'])
    const [group, setGroup] = useCookies(['group_name'])
    const [myRestaurant, setMyRestaurant] = useCookies(['myRestaurant'])
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigator = useNavigate();

    const onHandleLogin = () => {
        console.log(email, password)
        fetch('http://127.0.0.1:8000/auth/login/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'email': email,
                'password': password
            })
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setToken('myToken', response['token']['access'])
                setGroup('group_name', response['user_group'])
                response['restaurant'] === 'None' ? setMyRestaurant('myRestaurant', "Not Found") 
                : setMyRestaurant('myRestaurant', response['restaurant_id'])
                response['user_group'] === 'customer' ? navigator('/') : response['user_group'] === 'restaurant' ? navigator('/restaurant-dashboard/') : navigator('/login')
            })
            .catch(err => console.error(err));
    }

    const showPassword = () => {
        const password = document.getElementById('id-password')
        const eyes = document.getElementById('fontawesome-eyes')
        if (password.type === 'password') {
            password.type = 'text';
            eyes.classList.remove('fa-eye');
            eyes.classList.add('fa-eye-slash');
        }
        else {
            password.type = 'password';
            eyes.classList.add('fa-eye');
            eyes.classList.remove('fa-eye-slash');
        }
    }

    return (
        <div className="log-container">
            <div className="top"></div>
            <div className="bottom"></div>
            <div className="center">
                <Link className="logo" to="/">
                    <i className="fas fa-utensils"></i>foodtus.
                </Link>
                <h2>Please Log In</h2>
                <input type="email" id='id-email' placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" id='id-password' placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
                <p className='see-password' id='seePassword' onClick={showPassword}>
                    <i className='fas fa-eye' id='fontawesome-eyes'> </i>
                    see password
                </p>
                <button className='btn btn-login-power w-100' onClick={onHandleLogin}>Login</button>
                <h2>&nbsp;</h2>
            </div>
        </div>
    )
}

export default Login
