import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useCookies } from 'react-cookie'
import LogoutView from '../LogoutView'

const Navbar = ({ search }) => {
    const [token, setToken, removeToken] = useCookies(['myToken']);

    const onHandleSearchFormOpen = () => {
        document.querySelector('#search-form').classList.toggle('active');
    }

    const onHandleSearchFormClose = () => {
        document.querySelector('#search-form').classList.remove('active');
    }

    // const onHandleLogout = () => {
    //     removeToken(['myToken'])
    // }

    return (
        <div>
            <header>
                <div className='container'>
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="navbar-brand logo" to="/">
                                <i className="fas fa-utensils"></i>foodtush.
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                {token['myToken'] ?
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-display">
                                        <li className="nav-item" style={search === 'block' ? {
                                            display: 'block'
                                        } : {
                                            display: 'none'
                                        }}>
                                            <Link className="nav-link" to="/" title='Search' id='search-icon' onClick={onHandleSearchFormOpen}>
                                                <i className="fas fa-search" id="search-icon"></i>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/set-location" title=''>
                                                <i className="fas fa-map-marker-alt"></i>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/cart-view/" title=''>
                                                <i className='fas fa-shopping-cart'></i>
                                            </Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className='fas fa-user'></i>
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <Link className="dropdown-item" to="/">Profile</Link>
                                                </li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li>
                                                    <Link className="dropdown-item" to="/previous-order/">Previous Orders</Link>
                                                </li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li>
                                                    <Link className="dropdown-item" to="/">
                                                        <LogoutView text_or_icon='text' />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    :
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/login" title='Login'>
                                                <i className='fas fa-sign-in-alt'>
                                                    <br />
                                                    <p>Login</p>
                                                </i>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/signup" title='Signup'>
                                                <i className='fas fa-user-plus'>
                                                    <br />
                                                    <p>Signup</p>
                                                </i>
                                            </Link>
                                        </li>
                                    </ul>
                                }
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <form action="" id="search-form">
                <input type="search" placeholder="search here..." name="" id="search-box" />
                <label htmlFor="search-box">
                    <button className='bg-none'>
                        <i className="fas fa-search"></i>
                    </button>
                </label>
                <i className="fas fa-times" id="close" onClick={onHandleSearchFormClose}></i>
            </form>
        </div>
    )
}

export default Navbar
