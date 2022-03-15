import React from 'react'
import { ShopInfo } from '../Info'
import Menuitem from './Menuitem'
import Slider from "react-slick";
import { Link } from 'react-router-dom';




var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 3,
  initialSlide: 0,


  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1

      }
    }
  ]
};




function MenuSlider(props) {
  return (
    <div className='Slider-cont'>

      <div className='Slider-main'>
        <div className='Slider-Header'>
          <h3>Must Rent Dresses</h3>
          <Link className='Slider-all' to={"/products/CLOTHING"}>VIEW ALL</Link>
        </div>
        <Slider {...settings}>


          {ShopInfo.map((item, index) => {

            return <Menuitem state="0" key={index} getImg={props.getImg} data={item} ></Menuitem>


          })}
        </Slider>


      </div>
    </div>
  )
}

export default MenuSlider