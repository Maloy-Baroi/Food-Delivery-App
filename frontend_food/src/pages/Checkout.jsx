import React, { useState } from 'react'
import './Checkout.css'
import { BsPaypal } from 'react-icons/bs'
import { FaCcVisa } from 'react-icons/fa'
import { FaCcMastercard } from 'react-icons/fa'
import TotalPricing from '../components/TotalPricing'
import { useParams } from 'react-router-dom'

const Checkout = () => {
    const param = useParams()
    const [deliveryAddress, setDeliveryAddress] = useState("")

    return (
        <div style={{
            backgroundColor: "#fff"
        }}>
            <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4 main-checkout'>
                    <h2>Checkout</h2>
                    <label>Delivery Address</label>
                    <textarea onChange={e => setDeliveryAddress(e.target.value)} value={deliveryAddress} required>
                    {deliveryAddress ? deliveryAddress : "Write the delivery address"}
                    </textarea>
                    <div>
                    {deliveryAddress.length > 10 ?
                        <TotalPricing subTotal={param['subTotal']} CheckoutOkay='false' 
                        delivery_address={deliveryAddress} />
                         :
                         ""
                        }
                    </div>
                </div>
                <div className='col-md-4'></div>
            </div>
        </div>
    )
}

export default Checkout
