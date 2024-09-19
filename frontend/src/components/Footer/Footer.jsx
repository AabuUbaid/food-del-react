import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <div className='footer' id='footer'>
    <div className="footer-content">
        <div className="footer-left">
        <img src={assets.logo} alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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