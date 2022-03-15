import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Caregoryitemdropdown from './Caregoryitemdropdown'

export default function Categoryitem(props) {
  const [Clicked, SetClicked] = useState(false);
  function HandleOnClick() {
    props.HandleDropdown(props.index)
    props.HandleSlash(1, props.CatItem[0]);

  }



  return (
    <li className='Listitems' >
      <Link className='LinkRouter' to={`/products/${(props.CatItem[0] + "").replace(/\s+/g, '')}`}>
        <div className='Categories-link main-Caterogirs-link' href='#' onClick={HandleOnClick} >{props.CatItem[0]}</div>
      </Link>
      <ul style={!props.DropdownV ? { display: "none" } : null} className='Categories-apear'>
        {
          props.CatItem[1].map((CatDropdownitem, index) => {
            return <Caregoryitemdropdown CatDropdownitem={CatDropdownitem} key={index} HandleSlash={props.HandleSlash}  ></Caregoryitemdropdown>



          })
        }
      </ul>


    </li >
  )
}
