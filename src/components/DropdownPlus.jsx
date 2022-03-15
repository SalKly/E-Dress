import React, { useState } from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

function DropdownPlus(props) {
  const [Clicked, SetClicked] = useState(false)


  function handleClick() {
    Clicked ? SetClicked(false) : SetClicked(true)



  }
  return (
    <div>
      <div className='filterContainer DropdownPlusItem'>
        <div onClick={handleClick} className='filterBox'>
          <div className='filterText DropdownPlusHeader'>
            {props.title}

          </div>
          <div className='filter-icon'>
            {!Clicked ? <AiOutlinePlus></AiOutlinePlus> : <AiOutlineMinus></AiOutlineMinus>}
          </div>

        </div>
        <div style={!Clicked ? { display: "none" } : null} className='FilterDropdown DropdownPlus'>
          <p className='DropdownPlusDesc'>{props.desc}</p>


        </div>
      </div>
    </div>
  )
}

export default DropdownPlus