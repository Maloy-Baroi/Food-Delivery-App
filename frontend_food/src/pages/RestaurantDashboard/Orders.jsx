import React from 'react'
import { useCookies } from 'react-cookie'
import { useState, useEffect } from 'react'
import './Orders.css'

const Orders = () => {
    const [allOrders, setAllOrders] = useState([])
    const [token] = useCookies(['myToken'])
    const [restaurant] = useCookies(['myRestaurant'])

    const loadData = () => {
        fetch(`http://127.0.0.1:8000/restaurant/restaurant-order-list/` + restaurant['myRestaurant'] + '/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token['myToken']
            },
        })
            .then(response => response.json())
            .then(response => {
                setAllOrders(response)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        loadData()
    }, [])

    const onChangeStatus = (order_id, status) => {
        fetch(`http://127.0.0.1:8000/restaurant/order-status-change-api-view/`+order_id+'/'+status+'/', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token['myToken'],
            },
            body: JSON.stringify({})
        })
        .then(response => response.json())
        .then(response => {
            console.log(response)
            loadData()
        })
        .catch(error => console.log(error))
    }

    return (
        <div className='container'>
            <div className='order-table'>
                <h2>My Orders</h2>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Order Items</th>
                                <th scope="col">Delivery Address</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Status</th>
                                <th scope="col">Change Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allOrders ? allOrders.map(order => {
                                return (
                                    <tr key={order.id}>
                                        <td data-label="Order Items">{order.status !== 'In_cart' ? order.order_item.map(item => {
                                            return (
                                                <p style={{ fontWeight: '600', color: '#2765d7' }} key={item.id}>
                                                    {item.get_food_name}
                                                </p>
                                            )
                                        }) : ""}</td>
                                        <td data-label="Delivery Address">{order.status !== 'In_cart' ? order.billing_address : ""}</td>
                                        <td data-label="Amount">{order.status !== 'In_cart' ? order.get_totals : ""}</td>
                                        <td data-label="Amount">{order.status !== 'In_cart' ? order.status : ""}</td>
                                        <td data-label="Status">{order.status !== 'In_cart' ?
                                                order.status === 'Requested' ? 
                                                <p>
                                                <span onClick={() => onChangeStatus(order.id, 'Accepted')} className="my_cursor">Accept</span> /
                                                <span onClick={() => onChangeStatus(order.id, 'Rejected')} className="my_cursor"> Reject</span>
                                                </p>
                                                : order.status === 'Accepted' ? 
                                                <p onClick={() => onChangeStatus(order.id, 'Processing')} className="my_cursor">Making</p> 
                                                : order.status === 'Processing' ? "Food Making" : order.status
                                            : ""}</td>
                                    </tr>
                                )
                            }) : ""}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Orders
