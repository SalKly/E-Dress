import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Menuitem(props) {

  return (
    <div className='MenuCardContainer'>

      <Link to={`/ProductInfo/${props.data._id}`} className=' MenuCardLink' onClick={() => {
        props.getImg(props.data)
      }} >

        <div className={props.state === "1" ? 'MenuCardImgs MenuCartmResp' : 'MenuCardImgs'}>


          <img className={props.state === "0" ? 'imgBack Responsive' : 'imgBack'} src={process.env.PUBLIC_URL + props.data.imgBack}
          />
          <img className={props.state === "0" ? 'imgFront Responsive' : 'imgFront'} src={process.env.PUBLIC_URL + props.data.imgFront} />

        </div>
      </Link>


      <div className='MenuCardText'>
        <p className='MenuCardName'>{props.data.name}</p>
        <p className='MenuCardPrice'>Price:{props.data.price}LE</p>

      </div>


    </div>

  )
}
// 
// style={!Mouseout ? { transitionDelay: "0s" } : null}

export default Menuitem