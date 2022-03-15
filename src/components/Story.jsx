import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom'


function Story(props) {

  return (
    <div className='Story-Section'>
      <Link className='Logo-Link Story-Logo' to={"/"}>
        <img className='Logo' src="https://sf-p.rtrcdn.com/images/sprites/reb/svg/rtr_logo.svg"></img>
      </Link>
      <div style={!props.topstate ? { marginTop: "10rem" } : null} className='Story-Cont'>

        <img data-aos="flip-left" data-aos-delay="100" src='imgs/Story.jpg'></img>
        <img data-aos="flip-left" data-aos-delay="150" src='imgs/Story1.jpg'></img>
        <img data-aos="flip-left" data-aos-delay="200" src='imgs/Story2.jpg'></img>
        <img data-aos="flip-left" data-aos-delay="250" src='imgs/Story3.jpg'></img>
        <img data-aos="flip-left" data-aos-delay="300" src='imgs/Story4.jpg'></img>
        <img data-aos="flip-left" data-aos-delay="350" src='imgs/Story5.jpg'></img>
        <img data-aos="flip-left" data-aos-delay="400" src='imgs/Story6.jpg'></img>
        <img data-aos="flip-left" data-aos-delay="450" src='imgs/Story7.jpg'></img>
        <img data-aos="flip-left" data-aos-delay="500" src='imgs/Story8.jpg'></img>
        <img data-aos="flip-left" data-aos-delay="550" src='imgs/Story9.jpg'></img>

        <p>"I will always be by your side"</p>











      </div>

    </div>
  )
}

export default Story