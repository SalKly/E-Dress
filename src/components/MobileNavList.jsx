import React from 'react'
import MNItem from './MNItem'
import { GrFormClose } from "react-icons/gr";
import { BiSearchAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';



function MobileNavList(props) {
  console.log(props.state);
  return (
    <div className='MN-Section' style={!props.state ? { visibility: "hidden" } : null}>
      <div style={!props.state ? { width: "0" } : null} className='MN-Cont'>
        <div className='Search-cont'>
          <input placeholder='Search'></input>
          <BiSearchAlt className='Mn-search icon'></BiSearchAlt>

        </div>
        <ul className='MNlist'>
          {(props.info).map((item) => {
            return <MNItem

              Setstate={props.SetmobileNav} DropDownInfo={item.DropDownInfo} key={item.id} id={item.id} name={item.name}>
            </MNItem>
          })}

        </ul>
        <ul className='MNlist ExtraMN'>
          <MNItem
            DropDownInfo={{
              data: [
                ["", ["How it works", "Contact Us", "FAQs"]],


              ]
            }} name="Help">
          </MNItem>
          <Link to={"/login"}>
            <li><a className="secondary-nav-link signin" href="#">SIGN IN</a></li>
          </Link>
        </ul>

        <GrFormClose onClick={() => { props.SetmobileNav(false) }} style={!props.state ? { display: "none" } : null} className='icon BurgerX'></GrFormClose>
      </div>

    </div>
  )
}

export default MobileNavList