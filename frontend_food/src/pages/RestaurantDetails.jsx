import React from 'react'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Home/Navbar'
import './RestaurantDetails.css'
import Swal from 'sweetalert2'

const RestaurantDetails = () => {
    const param = useParams()
    const [token] = useCookies(['myToken'])
    const [menus, setMenus] = useState([])
    const [restaurantName, setRestaurantName] = useState("")
    const [restaurantImage, setRestaurantImage] = useState("")

    const Handle_AddToCart = (item_id, rest_id) => {
        fetch(`http://127.0.0.1:8000/main/add-to-cart/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + token['myToken']
            },
            body: JSON.stringify({
                "food_menu_id": item_id,
                "restaurant_id": rest_id,
                "quantity": 1
            })
        })
        .then(response => response.json())
        .then(response => {
            console.log(response)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: response['Success'],
                showConfirmButton: false,
                timer: 1500
            })
        })
    }

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/main/all-item-in-menu/${param['id']}/`, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(response => {
            setMenus(response)
            setRestaurantName(response[0].Restaurant_name)
            setRestaurantImage(response[0].rest_image)
        })
    }, [])

  return (
    <div>
    <Navbar search={"none"} />
    <div className='container mt-2'>
        <div className='row'>
        <div className='col-md-3'>
            <h2 className='restaurant-name'>{restaurantName}</h2>
        </div>
        <div className='col-md-9'>
        <img src={restaurantImage} alt={restaurantName} style={{height: "350px", width: '100%'}} />
        </div>
        </div>
    </div>
    <section id="popular" className="module">
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3 col-md-12 col-lg-12">
          <div className="module-header wow fadeInUp animated" style={{
            visibility: "visible", animationName: "fadeInUp"
        }}>
            <h2 className="module-title text-center">Popular Dishes</h2>
            <h3 className="module-subtitle">Our most popular menu</h3>
          </div>
        </div>
      </div>
      {menus? menus.map(menu => {
        return (<div className="row" key={menu.id}>
        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className="menu">
            <div className="row">
            <div className='col-sm-4 col-md-4'>
                <img src={menu.food_image} alt={menu.food_name} />
            </div>
              <div className="col-sm-4 col-md-4">
                <h4 className="menu-title">{menu.food_name}</h4>
                <div className="menu-detail">{menu.food_description}</div>
              </div>
              <div className="col-sm-4 col-md-4 menu-price-detail">
                <h4 className="menu-price text-center text-success">৳ {menu.food_price}</h4>
                <br />
                <p className='text-center'>
                    <button className='btn btn-power' onClick={() => Handle_AddToCart(menu.id, param['id'])}>
                    <i className='fas fa-shopping-cart'></i>
                        Add to Cart
                    </button>
                </p>
              </div>
            </div>
          </div>  
        </div>
      </div>)
      }) : ""}  
    </div>
  </section>
    </div>
  )
}

export default RestaurantDetails
