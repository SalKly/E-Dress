import React from 'react'
import { GrFormClose } from "react-icons/gr";

function CheckouItem(props) {
  console.log(props.data);
  return (
    <div className='item'>
      <div className='item-header'>
        <p className='first-item-header'>{props.index === 0 ? "Renting" : ""}</p>
        <p>{props.data.Date_rec + "-" + props.data.Date_ret}</p>
      </div>
      <div className='item-info'>
        <div className='img_info'>
          <img className='Checkout-img' src={process.env.PUBLIC_URL + "/" + props.data.img} />
          <div className='info'>
            <p className='ItemHead'>{props.data.name}</p>
            <p>Description</p>
            <p className='Itemsize' >Size:{props.data.Size}</p>
            <p className='ItemPrice' >Price:{props.data.price}$</p>

          </div>
        </div>
        <div className='Checkout-X'>
          <GrFormClose onClick={() => {
            props.removeItem(props.index)
          }} ></GrFormClose>

        </div>
      </div>
    </div>
  )
}

export default CheckouItem