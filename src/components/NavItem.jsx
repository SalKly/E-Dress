import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavItem(props) {
  const [Position, setPoistion] = useState(false)

  return (
    <Link className={props.id === 4 ? "LinkRouter Hidden" : props.id === 7 ? "LinkRouter Hidden2" : "LinkRouter"} to={`/products/${props.name}`
    }>
      <li ><a target={!props.target && !Position ? "true" : "false"} style={Position ? { position: "relative" } : null}
        onMouseEnter={() => {
          setPoistion(true)
          props.handleOnMouseNav(props.DropDownInfo)
        }} onMouseLeave={() => {
          setPoistion(false)
          props.hhandleOnMouseOutNav()
        }} className="main-nav-link" href="#">{props.name}</a>
      </li >
    </Link>


  );
}
export default NavItem;