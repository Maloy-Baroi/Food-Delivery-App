import React from 'react'
import { useState } from 'react'
import Menu from './Menu'
import Sidebar from './Sidebar'
import './MenuView.css'

const MenuView = () => {
    const [menuType, setMenuType] = useState("menu")

    const getMenuType = (whichOne) => {
        setMenuType(whichOne)
    }

    return (
        <div>
            <Sidebar />
            <div className='sidebar-container'>
                <div className='row adding-menu'>
                    <div className='col-md-9'></div>
                    <div className='col-md-3'>
                    <button className='btn button-add-menu' onClick={() => getMenuType('Add_Menu')}>Add Menu</button>
                    </div>
                </div>
                <Menu menu_or_form={menuType} />
            </div>
        </div>
    )
}

export default MenuView
