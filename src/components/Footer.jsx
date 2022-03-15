import React from 'react'
import { Link } from 'react-router-dom'
import {
  TiSocialInstagram
} from "react-icons/ti";
import {
  TiSocialFacebook

} from "react-icons/ti";


function Footer() {
  return (
    <div className='Footer-cont'>
      <div className='Footer'>
        <div className='FooterItem'>
          <h3>GET HELP</h3>
          <ul className='ListFooter'>
            <li >
              <Link className='main-nav-link footer-link' to={"/HowTo"} > How it Works</Link>



            </li>
            <li>
              <Link className='main-nav-link footer-link' to={"/FAQS"} > FAQs</Link>

            </li>
            <li>
              <Link className='main-nav-link footer-link' to={"/Returns"} > Returning Your Rentals</Link>

            </li>
            <li>
              <Link className='main-nav-link footer-link' to={"/ContactUS"} > Contact Us</Link>

            </li>
          </ul>
        </div>
        <div className='FooterItem'>
          <h3>COMPANY</h3>
          <ul className='ListFooter'>
            <li >
              <Link className='main-nav-link footer-link' to={"/Vision"} >Vision</Link>
            </li>
            <li>
              <Link className='main-nav-link footer-link' to={"/Story"} > Story</Link>
            </li>
            <li>
              <Link className='main-nav-link footer-link' to={"/Careers"} >Careers</Link>
            </li>
          </ul>
        </div>

        <div className='FooterItem Socials'>
          <h3>BE SOCIAL</h3>
          <div className='social'>
            <a href='https://www.facebook.com'><TiSocialFacebook ></TiSocialFacebook>
            </a>
            <a href='https://www.instagram.com' ><TiSocialInstagram></TiSocialInstagram>
            </a>

          </div>



        </div>
      </div>
      <div className='Terms'>
        <p>© 2022 Rent the Runway. All Rights Reserved.</p>
        <ul className='Term-info'>
          <li><Link className='main-nav-link ' to={"/terms"}>Terms of Service</Link></li>
          <li><Link className='main-nav-link ' to={"/Privacy"}>Privacy Policy</Link></li>
          <li><Link className='main-nav-link ' to={"/Acces"}>Accessibility Statement</Link></li>
          <li><Link className='main-nav-link ' to={"/PersonalInfo"}> Do Not Sell My Personal Information</Link></li>

        </ul>
      </div>
    </div>
  )

}



export default Footer