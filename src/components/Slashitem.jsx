import React from 'react'

function Slashitem(props) {
  return (
    <li className={props.index === props.maxLenght ? "lastone" : "notelastone"}><a href='#'>{props.index === 0 ? props.SlashItem : " / " + props.SlashItem}</a></li>
  )
}

export default Slashitem