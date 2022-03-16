import React, { useLayoutEffect } from 'react'
import Nav from './Nav'
import info from '../Info'

import {
  RiDoorLockLine
} from "react-icons/ri";
import CheckouItem from './CheckouItem';
import { Link } from 'react-router-dom';


function Checkout(props) {



  console.log(props);
  function removeItem(index) {
    props.SetCartInfo(prev => {
      let x = [...prev]
      x.splice(index, 1)
      return x


    })
    props.SetTotalPrice(prev => {
      return prev - (props.CartInfo[index].price)
    })

  }
  if (props.CartInfo.length !== 0) {

    return (
      <div className='Checkout-cont'>
        <div className='Checkout-navbar'>
          <div className='Logo_title'>
            <Link className='Logo-Link' to={"/"}>
              <img className='Logo' src={process.env.PUBLIC_URL + "https://sf-p.rtrcdn.com/images/sprites/reb/svg/rtr_logo.svg"}
              ></img>
            </Link>
            <h2 className='heading-secondary CheckoutHeader'>Checkout</h2>


          </div>
          <div className='Secure_acc'>

            <p>Secure Payment
              <RiDoorLockLine className='securedLogo'></RiDoorLockLine>
            </p>
          </div>
        </div>
        <div className='Checkout-Section'>
          <div className='Checkout-main'>
            <div className='item-data'>
              {props.CartInfo.map((item, index) => {
                return (<CheckouItem removeItem={removeItem} key={index} index={index} data={item} ></CheckouItem>
                )

              })}






            </div>
            <div className='finalprice-cont'>
              <h3 className='heading-tert finalprice-heading'>Summary</h3>
              <div className='Promo'>
                <input placeholder='Promo Code'></input>
                <button>Apply</button>
              </div>
              <div className='price-details'>
                <div className='prices-cont'>
                  <p>Subtotal</p>
                  <p>${props.TotalPrice}</p>
                </div>
                <div className='prices-cont'>
                  <p>Rental Coverage</p>
                  <p>$5</p>
                </div>
                <div className='prices-cont'>
                  <p>Shipping</p>
                  <p>$9.95</p>
                </div>
                <div className='prices-cont'>
                  <p>Return via carrier </p>
                  <p>FREE</p>
                </div>
                <div className='prices-cont'>
                  <p>Tax</p>
                  <p>${0.05 * props.TotalPrice}</p>
                </div>
              </div>
              <div className='prices-cont Total'>
                <p  >Order Total</p>
                <p>${props.TotalPrice + 5 + 9.95 + (0.05 * props.TotalPrice)}</p>
              </div>

              <button className='Checkout-CTA'>Place order</button>

              <p>By placing this order, you agree to the Terms of Service and Privacy Policy.</p>

            </div>
          </div>
        </div>

      </div>
    )

  }
  else {
    return (<div className='CalendarSection EmptyCheckout-cont'>
      <div className='CalendarScreen EmptyCheckoutBox'>
        <h2 className='heading-secondary EmptyHeader' >Your bag is empty</h2>
        <Link to={"/products/CLOTHING"} className='EmptyCheckoutCont'>CONTINUE SHOPPING</Link>
      </div>
    </div>)
  }

}

export default Checkout