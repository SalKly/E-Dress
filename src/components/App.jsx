import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Hero from './Hero';
import Nav from "./Nav"
import Header from './Header';
import How from "./How";
import { mainNav, Announcements, Categories_info } from '../Info';
import Categories from './Categories';
import RentingFor from './RentingFor';
import Shop from './Shop';
import Productinfo from './Productinfo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import Checkout from './Checkout';
import MenuSlider from './MenuSlider';
import Hero2 from '../Hero2';
import ToHowto from './ToHowto';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import Story from './Story';




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


        <Route exact path='/' element={<div>      <Nav topstate={topstate} TotalPrice={TotalPrice} SetTotalPrice={SetTotalPrice} CartInfo={CartInfo} SetCartInfo={SetCartInfo} infoGet={mainNav}></Nav>
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

        <Route path='/Story' element={<div><Story topstate={true} ></Story></div>}></Route>












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