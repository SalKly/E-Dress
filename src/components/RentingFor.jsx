import React, { useState } from 'react'
import ReactDOM from 'react-dom';

import { GiDiamondRing } from "react-icons/gi";
import { BsFlower1 } from "react-icons/bs";
import { GiAmpleDress } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom';




function RentingFor() {

  const [Category, SetCategory] = useState("x")


  return (

    <div className='RentingFor-Section'>

      <div div className='Container RF-cont' >
        <h3 className='heading-tert med-margin'>I am renting for...</h3>
        <ul className='RentingFor-Links'>
          <Link to={`/products/${Category}`} state={{ Category }} className="LinkRouter">
            <li onMouseEnter={() => {
              SetCategory("Wedding")
            }}
            ><a className='Rf-Link' ><GiDiamondRing classname='RentingFor-Icon' ></GiDiamondRing></a>
              <p>Wedding</p></li>
          </Link>
          <Link to={`/shop/${Category}`} className="LinkRouter">
            <li onMouseEnter={() => {
              SetCategory("NightsOut")
            }}>
              <a className='Rf-Link'><BsFlower1 classname='RentingFor-Icon' ></BsFlower1></a>
              <p>Nights Out</p></li>
          </Link>
          <Link to={`/shop/${Category}`} className="LinkRouter">
            <li onMouseEnter={() => {
              SetCategory("AtTheOffice")
            }}>
              <a className='Rf-Link'><GiAmpleDress classname='RentingFor-Icon' ></GiAmpleDress></a>
              <p>At the office</p></li>
          </Link>
        </ul>


      </div>

    </div>

  )
}

export default RentingFor