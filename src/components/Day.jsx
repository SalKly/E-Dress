import React from 'react'

function Day(props) {
  if (props.State === "Active") {
    return (
      <div onMouseEnter={() => { props.HandleOnMouseOver(props.index) }} onMouseOut={props.HandleOnMouseOut} onClick={() => { props.HandleOnClick(props.index) }} style={props.style}>{props.value}</div>
    )

  }
  else {
    return (<div style={props.style}>{props.value}</div>
    )


  }

}

export default Day