import React from "react"
import Nav from "./Nav"
import { Announcement } from "./Announcement";


function Header(props) {

  return (
    <div>
      <Nav infoGet={props.Info} />

    </div>);

};


export default Header;