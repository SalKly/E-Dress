import React from 'react'
import Slashitem from './Slashitem'

function Slash(props) {
  return (
    <div className='Slash-container'>
      <ul className="Slash">
        {props.SlashList.map((SlashItem, index) => {
          return <Slashitem maxLenght={props.SlashList.length - 1} index={index} key={index} SlashItem={SlashItem} ></Slashitem>
        })}
      </ul>
    </div>
  )
}

export default Slash