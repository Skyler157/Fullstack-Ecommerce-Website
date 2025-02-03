import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
            An eCommerce website is an online platform designed to facilitate the buying and selling of products or services.
            It provides users with a user-friendly interface to browse, search, and filter through a wide range of products, view detailed descriptions, and make secure purchases.
            Key features often include a shopping cart, a streamlined checkout process, multiple payment options, and customer account management for tracking orders and storing preferences.
            </p>
            <p>E-commerce websites are typically optimized for both desktop and mobile devices, offering a responsive design for a seamless shopping experience. 
                Additionally, it integrates secure payment gateways and customer support tools to ensure a safe and efficient transaction process.</p>
        </div>
    </div>
  )
}

export default DescriptionBox