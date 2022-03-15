import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';



function Cart(props) {
  const navigate = useNavigate()



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
  return (
    <div style={!props.State ? { visibility: "hidden" } : null} className='CartSection' >
      <div style={!props.State ? { width: "0" } : null} className='CartContainer' >
        <div className='Intro'>
          <IoIosArrowForward onClick={() => {
            props.SetState()
          }} className='CartContArrow'></IoIosArrowForward>
          <p>Items will remain in your shopping bag for 20 minutes.</p>
        </div>

        {props.CartInfo.length !== 0 ? <div>

          <div className='CartItemsSection'>
            {props.CartInfo.map((item, index) => {
              return <CartItem removeItem={removeItem} key={index} index={index} value={item}></CartItem>


            })}






          </div>
          <div className='EndCartItem'>
            <div className='TotalPrice'>
              <p>Subtotal</p>
              <p>${props.TotalPrice}</p>

            </div>
            <button className='AddToCartBtn' onClick={() => {
              navigate("/CheckOut")
              props.SetState()

            }}>Check Out</button>
          </div>
        </div> : <div>
          <div className='EmptySection'>
            <p>There are no items in your shopping bag.</p>
          </div>
          <div className='BtnCont'> <button onClick={() => {
            props.SetState()


          }} className='EmptyBtn'>Continue Shopping</button>
          </div>
        </div>}








      </div >
    </div >
  )
}

export default Cart