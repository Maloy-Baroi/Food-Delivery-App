import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Signup.css'

const SignupView = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [group, setGroup] = useState("")
    const navigator = useNavigate()

    const onHandleSignup = (e) => {
        e.preventDefault()
        console.log(email, password, confirmPassword, group)
        fetch('http://127.0.0.1:8000/auth/register-2/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'email': email,
                'password': password,
                'password2': confirmPassword,
                'groups': group
            })
          })
            .then(response => response.json())
            .then(response => {
                response['Success'] ? navigator('/login') : alert("Something went wrong!!!")
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="signup-container">
            <div className="screen">
                <div className="screen__content">
                    <form className="login">
                        <div className="login__field">
                            <i className="login__icon fas fa-user"></i>
                            <input type="text" className="login__input" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-lock"></i>
                            <input type="password" className="login__input" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-lock"></i>
                            <input type="password" className="login__input" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                        </div>
                        <div className="login__field display-flex">
                            <select value={group} className="login__input" onChange={e => setGroup(e.target.value)}>
                                <option value={"customer"}>Customer</option>
                                <option value={"restaurant"}>Restaurant</option>
                                <option value={"delivery_hero"}>Delivery Hero</option>
                            </select>
                        </div>
                        <button className="button login__submit" onClick={onHandleSignup}>
                            <span className="button__text">Signup Now</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>
                    </form>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
        </div>
    )
}

export default SignupView
