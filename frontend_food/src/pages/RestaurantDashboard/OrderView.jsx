import React from 'react'
import Orders from './Orders'
import Sidebar from './Sidebar'

const OrderView = () => {
    return (
        <div>
            <Sidebar />
            <div className='sidebar-container'>
                <Orders />
            </div>
        </div>
    )
}

export default OrderView
