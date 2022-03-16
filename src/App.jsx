import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Hero from './components/Hero';
import Nav from "./components/Nav"
import Header from './components/Header';
import How from "./components/How";
import { mainNav, Announcements, Categories_info } from './Info';
import Categories from './components/Categories';
import RentingFor from './components/RentingFor';
import Shop from './components/Shop';
import Productinfo from './components/Productinfo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import Checkout from './components/Checkout';
import MenuSlider from './components/MenuSlider';
import Hero2 from './components/Hero2';
import ToHowto from './components/ToHowto';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import "./style.css"
import "./general.css"
import "./queries.css"


function App() {




  const [ChoosenImg, SetChoosenImgData] = useState("")
  const [CartInfo, SetCartInfo] = useState([])
  const [TotalPrice, SetTotalPrice] = useState(0)
  const [topstate, Settopstate] = useState(true)



  React.useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset === 0) {
        if (topstate === false) {
          Settopstate(true)
        }
      }
      else {
        if (topstate === true) {
          Settopstate(false)



        }


      }
    };

    return () => (window.onscroll = null);
  });






  return (
    <Router >
      <ScrollToTop />

      <Routes>


        <Route path='/E-Dress' element={<div> <Nav topstate={topstate} TotalPrice={TotalPrice} SetTotalPrice={SetTotalPrice} CartInfo={CartInfo} SetCartInfo={SetCartInfo} infoGet={mainNav}></Nav>
          <Hero topstate={topstate} ></Hero><RentingFor></RentingFor><MenuSlider getImg={SetChoosenImgData} ></MenuSlider><Hero2></Hero2><MenuSlider getImg={SetChoosenImgData} ></MenuSlider>
          <ToHowto></ToHowto></div>} />
        <Route exact path='/products/:category' element={<div><Nav topstate={topstate} TotalPrice={TotalPrice} SetTotalPrice={SetTotalPrice} CartInfo={CartInfo} SetCartInfo={SetCartInfo} infoGet={mainNav}></Nav>
          <Shop topstate={topstate} getImg={SetChoosenImgData}></Shop></div>}>

        </Route>

        <Route exact path='/ProductInfo/:id' element={<div><Nav topstate={topstate} TotalPrice={TotalPrice} SetTotalPrice={SetTotalPrice} CartInfo={CartInfo} SetCartInfo={SetCartInfo} infoGet={mainNav}></Nav><Productinfo topstate={topstate} SetTotalPrice={SetTotalPrice} SetCartInfo={SetCartInfo} ChoosenImg={ChoosenImg}></Productinfo></div>} />
        {/* <Route exact path='/Cart/:id' element={<Productinfo topstate={topstate} SetTotalPrice={SetTotalPrice} SetCartInfo={SetCartInfo} ChoosenImg={ChoosenImg}></Productinfo>} /> */}
        <Route exact path='/login' element={<Login ></Login>
        } />
        <Route exact path='/Register' element={<Register></Register>
        } />
        <Route exact path='/Checkout' element={<Checkout topstate={topstate} TotalPrice={TotalPrice} SetTotalPrice={SetTotalPrice} CartInfo={CartInfo} SetCartInfo={SetCartInfo} ></Checkout>
        } />
        <Route path='/HowTo' element={<div><Nav topstate={topstate} TotalPrice={TotalPrice} SetTotalPrice={SetTotalPrice} CartInfo={CartInfo} SetCartInfo={SetCartInfo} infoGet={mainNav}></Nav><How topstate={topstate}></How></div>}></Route>













      </Routes >
      <Footer></Footer>
    </Router >






  );

}
function Test(props) {

  return (<div><h1>hi : {props.text}</h1></div>)
}
export default App;
{/* <MenuSlider></MenuSlider> */ }
