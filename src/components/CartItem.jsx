import React, { useState } from 'react'
import { GrFormClose } from "react-icons/gr";


function CartItem(props) {
  console.log(props.value);

  console.log("hi");

  return (
    <div className='Item'>
      <div className='Datevalue'>
        <p>Arrival:{props.value.Date_rec}</p>
        <p>Return:{props.value.Date_ret}</p>
      </div>
      <div className='ItemContent'>
        <div className='ItemImg'>

          <img src={process.env.PUBLIC_URL + "/" + props.value.img}></img>
        </div>
        <div className='ItemInfo'>
          <p className='ItemHead'>{props.value.name}</p>
          <p className='Itemsize'>Size:{props.value.size}</p>
          <p className='ItemPrice'>{props.value.price}</p>
        </div>
        <div onClick={() => { props.removeItem(props.index) }} className='XButton'>
          <GrFormClose></GrFormClose>

        </div>
      </div>
    </div>

  )


}

export default CartItem