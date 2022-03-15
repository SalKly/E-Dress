import React, { useState, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Filterbar from './Filterbar'
import Menu from './Menu'

function Shop(props) {

  const location = useLocation()
  const category = (location.pathname.split("/")[2]);
  const [filter, Setfilter] = useState({
  })
  const [sortby, Setsortby] = useState("newest")
  const [menuTitle, SetmenuTitle] = useState("All Clothes")

  console.log(filter);


  function MenuTitle(value) {
    SetmenuTitle(value)

  }

  return (
    <div className='Shop-Section'>
      <div style={!props.topstate ? { marginTop: "10rem" } : null} className='Shop-container'>
        <Filterbar Setfilter={Setfilter} MenuTitle={MenuTitle} className='Filterbar-container'></Filterbar>
        <Menu sort={sortby} filter={filter} category={category} Setsortby={Setsortby} MenuTitle={menuTitle} getImg={props.getImg} className='Menu-container' ></Menu>


      </div>
    </div>

  )
}

export default Shop