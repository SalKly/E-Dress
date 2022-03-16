
import React from 'react';
import ReactDOM from 'react-dom';

function Hero(props) {
  return (<section style={!props.topstate ? { marginTop: "10rem" } : null} className='hero-section' >
    <div className='hero'>
      <div className='hero-textbox'>
        <h1 className='heading-primary med-margin'>Dressed & Ready
          to Celebrate</h1>
        <p className='hero-desc'>Tis the season to sparkle and shine. Outfit yourself for
          the holidays and beyond with a subscription to fashion.

          Trials start at $69</p>
        <a className='btn btn-full margin-right-sm' href='#'>Explor memberships</a>
        <a className='btn btn-outline' href='#'> Learn more</a>

      </div>
      <div className='hero-imgbox'>
        <img className='hero-img' src="/Imgs/Dress1.jpg" alt='zew'></img>
      </div>
    </div>
  </section >);



};





export default Hero;
