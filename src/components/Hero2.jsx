import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
// import AOS from "aos";
// import "aos/dist/aos.css";



function Hero2() {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000
  //   });
  // }, []);



  return (
    <div className='Hero2-Section'>
      <div className='Hero2-cont'>

        <div className='img1'>
          <img src={process.env.PUBLIC_URL + '/imgs/Spring.jpg '} alt="z"></img>
          <div className='img1-Text'>
            <h2 className='heading-secondary bold'>Spring's Top Trends</h2>
            <Link to={"products/New"} className='hero2-desc'>RENT THEM ALL!</Link>
          </div>
        </div>
        <div className='img2'>

          <img src={process.env.PUBLIC_URL + '/imgs/Hijab.jpg '}></img>
          <div className='img2-Text'>
            <h2 className='heading-secondary bold' >Latest designes</h2>
            <Link to={"products/Spring"} className='hero2-desc'>GET STARTED!</Link>
          </div>

        </div>



      </div>
    </div>
  )
}

export default Hero2