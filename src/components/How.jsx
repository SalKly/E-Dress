import React, { useLayoutEffect } from 'react';

function How(props) {




  return (<section style={!props.topstate ? { marginTop: "10rem" } : null} className=' section-how '>
    <div className='Container how-header'>
      <span className='subheading'>How it works</span>
      <h2 className='heading-secondary '>How Renting Works</h2>

    </div>
    <div className='HowCont Container grid grid--2-cols .grid--center-v'>
      {/* Step1 */}
      <div className='step-textbox'>
        <h3 className='heading-tert'>Pick a Plan</h3>
        <p className='how-to-descrip'>Whether you want new items delivered to your door every week, or you are looking for a monthly wardrobe pick-me-up, what and how you rent is entirely up to you.
          Each of our memberships start with 4 items at a time and vary based on how often you wish to receive new shipments. Our memberships are completely customizable and designed to evolve as you do. Add or remove spots and shipments as you see fit.</p>
      </div>
      <div className='step-imgbox'>
        <img className='imgbox-img' src={process.env.PUBLIC_URL + 'imgs/Howto_P1.png'}></img>
      </div>
      {/* Step2 */}
      <div className='step-imgbox'>
        <img className='imgbox-img' src={process.env.PUBLIC_URL + 'imgs/Howto_P1.png'}></img>
      </div>
      <div className='step-textbox'>
        <h3 className='heading-tert'>Pick a Plan</h3>
        <p className='how-to-descrip'>Whether you want new items delivered to your door every week, or you are looking for a monthly wardrobe pick-me-up, what and how you rent is entirely up to you.
          Each of our memberships start with 4 items at a time and vary based on how often you wish to receive new shipments. Our memberships are completely customizable and designed to evolve as you do. Add or remove spots and shipments as you see fit.</p>
      </div>
      {/* Step3 */}
      <div className='step-textbox'>
        <h3 className='heading-tert'>Pick a Plan</h3>
        <p className='how-to-descrip'>Whether you want new items delivered to your door every week, or you are looking for a monthly wardrobe pick-me-up, what and how you rent is entirely up to you.
          Each of our memberships start with 4 items at a time and vary based on how often you wish to receive new shipments. Our memberships are completely customizable and designed to evolve as you do. Add or remove spots and shipments as you see fit.</p>
      </div>
      <div className='step-imgbox'>
        <img className='imgbox-img' src={process.env.PUBLIC_URL + 'imgs/Howto_P1.png'}></img>
      </div>






    </div>



  </section>)

}
export default How;
