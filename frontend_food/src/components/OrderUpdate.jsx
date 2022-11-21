import React from 'react'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'

const OrderUpdate = ({orderID, orderStatus}) => {
    const [token] = useCookies(['myToken'])
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/main/order-status-change-api-view/`, {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + token['myToken']
            },
            body: JSON.stringify({
                'order_id': orderID,
                'status': orderStatus
            })
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
            })
            .catch(error => console.log(error))
    }, [])
  return (
    <div>
      
    </div>
  )
}

export default OrderUpdate
