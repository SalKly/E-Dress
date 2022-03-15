import React, { useState } from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { Link } from 'react-router-dom';

function MNItem(props) {
  let [Clicked, SetClicked] = useState(false)
  function handleClick() {
    if (Clicked === true) {
      SetClicked(false)
    }
    else {
      SetClicked(true)
    }

  }

  return (
    <li className='MNItem-cont'>
      <div onClick={handleClick} className='MNItem-Headers'>
        {!Clicked ? <AiOutlinePlus ></AiOutlinePlus> :
          <AiOutlineMinus></AiOutlineMinus>}

        <p>{props.name}</p>

      </div>
      <div style={!Clicked ? { display: "none" } : null} className='MNdropdownContentBox ' >
        {(props.DropDownInfo.data).map((FirstLayer, index) => {
          return (
            <div className='MN-dropdownpart'>
              <h3 className='Mn-header'>{FirstLayer[0]}</h3>
              <ul className='MN-dropdownNav'>
                {FirstLayer[1].map((SecondLayer) => {
                  return (
                    <Link className='LinkRouter' to={`/products/${(SecondLayer + "").replace(/\s+/g, '')}`}>
                      <li onClick={() => {
                        props.Setstate(false)
                      }} > <a href='#' className='dropdownLink MN-dropdownLink '>{SecondLayer}</a></li>
                    </Link>
                  )
                })}
              </ul>


            </div>)

        })}


      </div >

    </li>
  )
}

export default MNItem