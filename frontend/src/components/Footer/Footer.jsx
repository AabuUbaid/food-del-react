import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <div className='footer' id='footer'>
    <div className="footer-content">
        <div className="footer-left">
        <img src={assets.logo} alt="" />
        <p>Tomato Food Del App brings the joy of delicious meals right to your fingertips. Craving something fresh, spicy, or comforting? With just a few taps, dive into a world of flavors and have your favorite dishes delivered to your door, hot and ready to enjoy. Say goodbye to long waits and complicated ordering—Tomato Food Del makes it easy to explore menus, customize orders, and track your meal from kitchen to doorstep. Whether you're planning a cozy night in or feeding the whole family, we’ve got the perfect dish for every moment.</p>
        <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
        </div>
        </div>
        <div className="footer-center">
        <h2>COMPANY</h2>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
        </div>
        <div className="footer-right">
        <h2>GET IN TOUCH</h2>
        <ul>
            <li>+92 817282482</li>
            <li>Aabutterfly.com</li>
        </ul>
        </div>
    </div>
    <hr />
    <p className="footer-copyrights">Copyrights 2024 © Tomato.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer