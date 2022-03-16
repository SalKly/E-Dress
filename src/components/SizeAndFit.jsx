import React from 'react'
import { RemoveScrollBar } from 'react-remove-scroll-bar';


function SizeAndFit(props) {
  return (
    <div style={!props.State ? { display: "none" } : null} className=' SizeAfitSection'>
      {props.State ? <RemoveScrollBar></RemoveScrollBar> : null}
      <div className=' SizeAFitScreen'>
        <div className='XBtn' onClick={() => { props.SetState(false) }}></div>

        <div className='SizeAFitItem'>
          <h3 className='CalenderTitle SizeAFitTitle'>Size & Fit Notes</h3>
          <p>Sized: XS-XL, one length available. Regular measures 40" from shoulder to hemline.</p>
        </div>
        <div className='SizeAFitItem'>
          <h3 className='CalenderTitle'>Size Chart</h3>
          <img src={process.env.PUBLIC_URL + '/imgs/Sizes.png'}></img>
        </div>
        <div className='SizeAFitItem'>
          <h3 className='CalenderTitle'>Plus Size Size Chart</h3>
          <img className='PlusSize' src={process.env.PUBLIC_URL + '/imgs/PlusSize.png'}></img>
        </div>
        <div className='SizeAFitItem'>
          <h3 className='CalenderTitle'>Length Chart</h3>
          <img src={process.env.PUBLIC_URL + "/" + 'imgs/length_Sizes.png'}></img>

        </div>
        <p>DRESSES MAY NOT BE OFFERED IN ALL OF THE ABOVE LENGTHS.</p>
      </div>

    </div >
  )
}

export default SizeAndFit