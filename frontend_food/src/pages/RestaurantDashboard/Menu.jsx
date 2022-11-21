import React from 'react'
import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'

const Menu = ({menu_or_form}) => {
    const [menus, setMenus] = useState([])
    const [token] = useCookies(['myToken'])
    const [restau] = useCookies(['myRestaurant'])

    const loadMenu = async () => {
        await fetch(`http://127.0.0.1:8000/main/all-item-in-menu/${restau['myRestaurant']}/`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(response => {
                setMenus(response)
                console.log(response)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        loadMenu()
        console.log(menu_or_form)
    }, [])

    return (
        <div className='container'>
            <div className='order-table'>
                <h2>restaurant Menu</h2>
                {menu_or_form === 'menu' ? 
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Food Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Food Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menus.length > 0 ?
                            menus.map(menu => {
                                return (
                                    <tr key={menu.id}>
                                        <td data-label="Image">
                                            <img src={menu.food_image} alt={menu.food_name} />
                                        </td>
                                        <td data-label="Food Name">{menu.food_name}</td>
                                        <td data-label="Description">{menu.food_description}</td>
                                        <td data-label="Food Price">৳ {menu.food_price}</td>
                                        <td data-label="Action">
                                            <button className='btn btn-beguni' style={{
                                                backgroundColor: '#422C73',
                                                color: '#fff'
                                            }}>Edit</button>
                                        </td>
                                    </tr>
                                )
                            })
                            : ""}
                    </tbody>
                </table>
            :
            <div>
                <form className='form-group'>
                    <input className='form-control' />
                </form>
            </div>
            }
            </div>
        </div>
    )
}

export default Menu
