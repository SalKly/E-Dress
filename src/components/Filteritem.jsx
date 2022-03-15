import React, { useState } from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import FilterDropdown from './FilterDropdown';


function Filteritem(props) {
  const [Clicked, SetClicked] = useState(false)
  function handleClick() {
    Clicked ? SetClicked(false) : SetClicked(true)



  }
  return (
    <div className='filterContainer'>
      <div onClick={handleClick} className='filterBox'>
        <div className='filterText'>
          {props.data[0]}
        </div>
        <div className='filter-icon'>
          {!Clicked ? <AiOutlinePlus></AiOutlinePlus> : <AiOutlineMinus></AiOutlineMinus>}
        </div>

      </div>
      <div style={!Clicked ? { display: "none" } : null} className='FilterDropdown'>
        <FilterDropdown Setfilter={props.Setfilter} name={props.data[0]} type={props.data[1]} data={props.data[2]}></FilterDropdown>



      </div>
    </div>

  )
}

export default Filteritem