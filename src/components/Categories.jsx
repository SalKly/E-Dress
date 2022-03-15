import React, { useState } from 'react'
import { Categories_info } from '../Info';
import Categoryitem from './Categoryitem';
import Slash from './Slash'




function Categories(props) {




  const [ChoosenDrop, SetChoosenDrop] = useState(-1)
  const [SlashList, SetSlashList] = useState(["Clothing"])
  const [Lastvalue, SetLastvalue] = useState()

  function HandleDropdown(i) {
    SetChoosenDrop(i)


  }

  function HandleSlash(layer, value) {
    props.MenuTitle(value)
    if (layer === 1) {
      SetSlashList(["Clothing", value])
      SetLastvalue(value)
    }
    else {
      SetSlashList(["Clothing", Lastvalue, value])

    }



  }

  return (
    <div className='CategoryBox'>
      <Slash SlashList={SlashList} ></Slash>


      <div>

        <p className='Catergories-title'>Clothing</p>

        <ul className='Categories-main'>
          {Categories_info.map((CatItem, index) => {
            return <Categoryitem DropdownV={index === ChoosenDrop ? true : false} HandleDropdown={HandleDropdown} CatItem={CatItem} index={index} key={index} HandleSlash={HandleSlash} ></Categoryitem>

          })}

          {/* <li className='Listitems'><a onClick={() => {
          props.handleCategoryClick("Top")
        }} className='Categories-link main-Caterogirs-link' href='#/'>Tops</a>
          <ul style={!props.TopClicked ? { display: "none" } : null} className='Tops-apear Categories-apear'>
            <li><a onClick={() => {
              props.handleCategoryClick("Blouses")
            }} className='Categories-link' href='#/'>blouses</a></li>
            <li><a onClick={() => {
              props.handleCategoryClick("Pants")
            }} className='Categories-link' href='#/'>Pants</a></li>
          </ul>
        </li>
        <li className='Listitems'><a onClick={() => {
          props.handleCategoryClick("Dresses")
        }} className='Categories-link main-Caterogirs-link' href='#/'>Dresses</a>
          <ul style={!props.DressesClicked ? { display: "none" } : null} className='Dresses-apear Categories-apear'>
            <li><a onClick={() => {
              props.handleCategoryClick("Wedding")
            }} className='Categories-link' href='#/'>wedding</a></li>
            <li><a onClick={() => {
              props.handleCategoryClick("NightsOut")
            }} className='Categories-link' href='#/'>NightsOut</a></li>
          </ul>
        </li>
        <li className='Listitems'><a onClick={() => {
          props.handleCategoryClick("Formal")
        }} className='Categories-link main-Caterogirs-link' href='#/'>Formal</a>
          <ul style={!props.FormalClicked ? { display: "none" } : null} className='Formal-apear Categories-apear'>
            <li><a onClick={() => {
              props.handleCategoryClick("Workevent")
            }} className='Categories-link' href='#/'>Workevent</a></li>
            <li><a onClick={() => {
              props.handleCategoryClick("ProfissionalEvent")
            }} className='Categories-link' href='#/'>profisssionalzew</a></li>
          </ul>
        </li> */}

        </ul>
      </div>
    </div>
  )
}

export default Categories