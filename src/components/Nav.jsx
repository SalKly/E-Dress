import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { BsWindowSidebar } from 'react-icons/bs';
import { FiMenu } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";




import { BiSearchAlt } from "react-icons/bi";

import { Link } from 'react-router-dom';
import Cart from './Cart';
import Dropdown from './Dropdown';
import NavItem from "./NavItem";
import AOS from "aos";
import "aos/dist/aos.css";
import MobileNavList from './MobileNavList';


function Nav(props) {






  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);
  const [onNav, setonNav] = useState(false)
  const [mobileNav, SetmobileNav] = useState(false)
  console.log(mobileNav);
  const [onDropdown, setonDropdown] = useState(false)
  const [DropdownSelected, setDropdownSelected] = useState({
    img: "",
    data: [],
  })
  const [CartSelected, SetCartSelected] = useState(false)
  const [navState, SetnavState] = useState(true)
  const [SearchActive, SetSearchActive] = useState(false)

  // const [topstate, Settopstate] = useState(true)
  // console.log(topstate);

  // const [flaghelper, Setflaghelper] = useState(false)




  // console.log("Scrollvalue is" + navState);

  function handleCartClick() {
    SetCartSelected(true)

  }

  function handleOnMouseDropdown() {
    setonDropdown(true);
  }

  function handleOnMouseOutNav() {
    setonNav(false);
  }
  function handleOnMouseOutDropdown() {
    setonDropdown(false);
  }
  function handleOnMouseNav(DropDownInfo) {
    setonNav(true);
    setDropdownSelected(DropDownInfo)

  }
  // let oldScrollY = 0;

  // const [direction, setDirection] = useState('up');

  // const controlDirection = () => {
  //   if (window.scrollY > oldScrollY) {

  //     setDirection('down');
  //   } else {
  //     setDirection('up');
  //   }
  //   oldScrollY = window.scrollY;
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', controlDirection);
  //   return () => {
  //     window.removeEventListener('scroll', controlDirection);
  //   };
  // }, []);
  let scrollvaue = 0;
  function handlescroll() {

    if (scrollvaue > window.scrollY) {

      SetnavState(prev => {
        if (prev === false) {
          return true
        }
        else {
          return prev
        }
      })


    }
    else {
      if (scrollvaue < window.scrollY) {

        SetnavState(prev => {
          if (prev === true) {
            return false
          }
          else {
            return prev
          }
        })

      }

    }
    scrollvaue = window.scrollY



  }
  useEffect(() => {
    window.addEventListener('scroll', handlescroll);
    return () => {
      window.removeEventListener('scroll', handlescroll);
    };
  }, []);

  // useEffect(() => {
  //   window.onscroll = () => {


  //   }
  //   return () => {
  //     window.onscroll = null;
  //   };
  // }, []);
  // React.useEffect(() => {
  //   window.onscroll = () => {
  //     if (window.pageYOffset === 0) {
  //       if (topstate === false) {
  //         Settopstate(true)
  //       }
  //     }
  //     else {
  //       if (topstate === true) {
  //         Settopstate(false)



  //       }


  //     }
  //   };

  //   return () => (window.onscroll = null);
  // });










  return (
    <div className='Header-section'>

      <header className={props.topstate ? "headerConst" : "headeronMove"} style={!navState ? { height: "0px", overflow: "hidden" } : null}>

        <nav className="main-nav">
          <div className='MN-main-nav-list' style={SearchActive ? { opacity: "0", visbility: "hidden" } : null}  >
            <FiMenu style={mobileNav ? { display: "none" } : null} onClick={() => { SetmobileNav(true) }} className='Burger'></FiMenu>
            <Link className='Logo-Link' to={"/E-Dress"}>
              <img className='Logo' src={"https://sf-p.rtrcdn.com/images/sprites/reb/svg/rtr_logo.svg"}></img>
            </Link>

          </div>
          <MobileNavList SetmobileNav={SetmobileNav} state={mobileNav} info={props.infoGet}></MobileNavList>


          <ul className=" main-nav-list" style={SearchActive ? { opacity: "0", visbility: "hidden" } : null} >
            <Link className='Logo-Link' to={"/E-Dress"}>
              <img className='Logo' src={"https://sf-p.rtrcdn.com/images/sprites/reb/svg/rtr_logo.svg"}></img>
            </Link>
            {(props.infoGet).map((navitemInfo) => {
              return <NavItem target={onDropdown} hhandleOnMouseOutNav={handleOnMouseOutNav} handleOnMouseNav={handleOnMouseNav}
                DropDownInfo={navitemInfo.DropDownInfo} key={navitemInfo.id} id={navitemInfo.id} name={navitemInfo.name}>



              </NavItem>
            })}

            <Dropdown handleOnMouseDropdown={handleOnMouseDropdown} handleOnMouseOutDropdown={handleOnMouseOutDropdown} DropDownInfo={DropdownSelected} style={(!onNav && !onDropdown) ? { display: "none" } : null} ></Dropdown>





          </ul>
        </nav>

        <nav className="secondary-nav">
          <li><div className='search' >
            {/* visbility: "hidden", opacity: "0" */}
            <input style={!SearchActive ? { width: "0px", background: "transparent", border: "1px solid transparent" } : null} className='SearchInput'></input>
            <BiSearchAlt onClick={() => {
              if (SearchActive) {
                SetSearchActive(false)


              }
              else {
                SetSearchActive(true)

              }
            }} className='search-icon icon'></BiSearchAlt>
          </div></li>


          <ul className="secondary-nav-list">
            <Link to={"/login"}>
              <li><a className="secondary-nav-link signin" href="#">sign in</a></li>
            </Link>
            <li><a className="secondary-nav-link" ><HiOutlineShoppingBag onClick={handleCartClick} className="icon"></HiOutlineShoppingBag></a>
              <div style={props.CartInfo.length === 0 ? { display: "none" } : null} className='CounterInCart'>{props.CartInfo.length}</div>

            </li>

          </ul>


          <a className="nav-cta" href="#">MEMBERSHIPS FROM $69</a>
        </nav>


      </header>

      <Cart SetTotalPrice={props.SetTotalPrice} TotalPrice={props.TotalPrice} CartInfo={props.CartInfo} SetCartInfo={props.SetCartInfo} State={CartSelected} SetState={SetCartSelected}></Cart>


    </div >);



};







export default Nav;
