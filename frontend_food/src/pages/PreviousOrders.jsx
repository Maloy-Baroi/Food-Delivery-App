import React from 'react'
import Navbar from '../components/Home/Navbar'
import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import './PreviousOrders.css'
import OrderUpdate from '../components/OrderUpdate'

const PreviousOrders = () => {
    const [token] = useCookies(['myToken'])
    const [prevOrders, setPrevOrders] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/main/order-view/', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token['myToken']
            }
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setPrevOrders(response)
            })
            .catch(error => console.log(error))
    }, [])

    const onHandleUpdateStatus = (orderID, orderStatus) => {
        fetch('http://127.0.0.1:8000/main/order-status-change-api-view/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                "order_id": orderID,
                "status": orderStatus
            })
        })
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    return (
        <div>
            <Navbar />
            <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <h3>Past Orders</h3>
                    <div className='container pt-3 pb-3'>
                        {prevOrders.length > 0 ? prevOrders.map(order => {
                            return (
                                <div className='row order-box' key={order.order_id}>
                                    <div className='col-md-7'>
                                        <h4>{order.restaurant.restaurant_name}</h4>
                                        <span>
                                            {order.order_item.map(item => {
                                                return (
                                                    <span key={item.id}>({item.quantity} x {item.get_food_name}), </span>
                                                )
                                            })}
                                        </span><br />
                                        <span>{order.created.slice(11, 16)}, {order.created.slice(0, 10)}</span>
                                    </div>
                                    <div className='col-md-5'>
                                        <p className='text-center'>
                                            {order.status === 'Delivered' ?
                                                <button onClick={() => onHandleUpdateStatus(order.id, 'Completed')}>Delivered</button>
                                                : order.status
                                            }
                                        </p>
                                    </div>
                                </div>
                            )
                        }) : ""}
                    </div>
                </div>
                <div className='col-md-3'></div>
            </div>
        </div>
    )
}

export default PreviousOrders
