import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt=''/>
                <p>Bringing deliciousness to your doorstep, one meal at a time.Enjoy the finest flavours, delivered to you. Need assistance? Contact Us or connect with us on Social Media for updates and offers.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt=''/>
                    <img src={assets.twitter_icon} alt=''/>
                    <img src={assets.linkedin_icon} alt=''/>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+94 716558509</li>
                    <li>E-Taste@gmail.com</li>
                </ul>
            </div>
            
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2024 © E-Taste.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
