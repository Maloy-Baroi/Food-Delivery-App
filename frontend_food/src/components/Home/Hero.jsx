import React from 'react'
import './Hero.css'
import image1 from './images/home-img-1.png'
import image2 from './images/home-img-2.png'
import image3 from './images/home-img-3.png'
import image4 from './images/kacchi-biryani.png'

const Hero = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active p-2">
          <div className='row'>
            <div className='col-md-6'>
              <img src={image1} className="d-block width-75" alt="Image2" />
            </div>
            <div className='col-md-6'>
              <div className="content">
                <span>special set menu</span>
                <h3>It's the food</h3>
                <p>You love most to order. Order Now, we will deliver to your home on the right time.</p>
                <a href="#" className="btn btn-order">order now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item p-2">
          <div className='row'>
            <div className='col-md-6'>
              <img src={image2} className="d-block width-75" alt="Image2" />
            </div>
            <div className='col-md-6'>
              <div className="content">
                <span>special person</span>
                <h3>It's the service</h3>
                <p>You love most to order. Order Now, we will deliver to your home on the right time.</p>
                <a href="#" className="btn btn-order">order now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item p-2">
          <div className='row'>
            <div className='col-md-6'>
              <img src={image3} className="d-block width-75" alt="Image2" />
            </div>
            <div className='col-md-6'>
              <div className="content">
                <span>special restaurant</span>
                <h3>spicy noodles</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                <a href="#" className="btn btn-order">order now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item p-2">
          <div className='row'>
            <div className='col-md-6'>
              <img src={image4} className="d-block width-75" alt="Image2" />
            </div>
            <div className='col-md-6'>
              <div className="content">
                <span>special dishes</span>
                <h3>spicy noodles</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                <a href="#" className="btn btn-order">order now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Hero
