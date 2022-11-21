import React from 'react'
import { useCookies } from 'react-cookie'
import { Link, useNavigate } from 'react-router-dom'
import Orders from './Orders'
import './Sidebar.css'

const Sidebar = () => {
    const [token, setToken, removeToken] = useCookies(['myToken'])
    const [group, setGroup, removeGroup] = useCookies(['group_name'])
    const [myRestaurant, setMyRestaurant, removeMyRestaurant] = useCookies(['myRestaurant'])

    const navigator = useNavigate()

    return (
        <div className='sidebar'>
            <nav>
                <Link to="/restaurant-dashboard/"><i className="far fa-user"></i></Link>
                <Link to="/restaurant-order-view/">
                    <i className='fas fa-hamburger'></i>
                </Link>
                <Link to="/restaurant-menu-view/"><i className="fas fa-list-alt"></i></Link>
                <button title='Signout' onClick={() => {
                    removeToken(['myToken'])
                    removeGroup(['group_name'])
                    removeMyRestaurant(['myRestaurant'])
                    navigator('/login')
                }}>
                <i className="fas fa-sign-out-alt"></i>
                </button>
            </nav>
        </div>
    )
}

export default Sidebar
