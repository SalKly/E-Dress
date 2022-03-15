import React from 'react';
import { Link } from 'react-router-dom';

function Dropdown(props) {
  const { img, data } = props.DropDownInfo
  return <div onMouseEnter={() => {
    props.handleOnMouseDropdown()
  }} onMouseLeave={() => {
    props.handleOnMouseOutDropdown()
  }}
    style={props.style} className='dropdownContainer '>
    <div className='imgBox' ><img className='dropdownImg' src={img} /></div>

    <div className='dropdownContentBox flex' >
      {data.map((FirstLayer, index) => {
        return (
          <div>
            <h3 className='heading-tert'>{FirstLayer[0]}</h3>
            <ul className='dropdownNav'>
              {FirstLayer[1].map((SecondLayer) => {

                return (
                  <Link className='LinkRouter' to={`/products/${(SecondLayer + "").replace(/\s+/g, '')}`}>
                    <li> <a href='#' className='dropdownLink'>{SecondLayer}</a></li>
                  </Link>
                )
              })}
            </ul>


          </div>)

      })}


    </div >

  </div >

}
export default Dropdown;