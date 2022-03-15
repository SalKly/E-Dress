import React from 'react'

function Caregoryitemdropdown(props) {
  return (
    <li ><div onClick={() => {
      props.HandleSlash(0, props.CatDropdownitem)
    }} className='Categories-link' >{props.CatDropdownitem}</div></li>
  )
}

export default Caregoryitemdropdown