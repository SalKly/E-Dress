import React, { useState, useRef, useLayoutEffect } from 'react'
import styled from 'styled-components'
import ProductOneTimeRental from './ProductOneTimeRental';
import Header from './Header';
import DropdownPlus from './DropdownPlus';






const OnHoverImg = styled.div`
width: 48rem;
height: 72rem;
transition: all 0.05s;
background-repeat: no-repeat;

z-index: -1;
opacity: 0;
position: absolute;




`

function Productinfo(props) {
  console.log(props.ChoosenImg);


  const [Showimg, setShowimg] = useState("")
  if (Showimg === "") {

    props.ChoosenImg.imgFront ? setShowimg(props.ChoosenImg.imgshowFront) : console.log(Showimg);

  }



  const targetRef = useRef();

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });




  function Choosenimg(url) {
    setShowimg(url)

  }
  function MouseMovment(e) {


    const width = targetRef.current.offsetWidth;
    const heigh = targetRef.current.offsetHeight;
    const oX = Math.floor((e.nativeEvent.offsetX / width) * 100)
    const oY = Math.floor((e.nativeEvent.offsetY / heigh) * 100)
    setDimensions({
      width: oX,
      height: oY
    })


  }

  //   style={{ left: dimensions.width + "%", top: dimensions.heigh + "%" }
  // }


  return (
    <div style={!props.topstate ? { marginTop: "10rem" } : null} className='Product-Section'>

      <div className='ProductContainer'>
        <nav className='ProductSideimg'>
          <div onClick={() => { Choosenimg(props.ChoosenImg.imgshowFront) }} ><img src={props.ChoosenImg.imgFront} ></img> </div>
          <div onClick={() => { Choosenimg(props.ChoosenImg.imgshowBack) }} ><img src={props.ChoosenImg.imgBack} ></img> </div>
          <div onClick={() => { Choosenimg(props.ChoosenImg.imgshowBack2) }} ><img src={props.ChoosenImg.imgBack2} ></img> </div>
          {/* <a onClick={() => { Choosenimg(props.ChoosenImg.imgBack3) }} href='#'><img src={props.ChoosenImg.imgBack3} ></img> </a> */}

        </nav>
        <div onMouseMove={MouseMovment} className='ProductMainimg'>

          <OnHoverImg ref={targetRef} style={{ backgroundPosition: dimensions.width + "%" + " " + dimensions.height + "%", backgroundImage: "url(" + Showimg + ")" }} className='OnHoverImg' >
          </OnHoverImg>


          <img className='DefImg' src={Showimg}></img>




        </div>
        <div className='ProductAddtoBag'>

          <div className='ProductText'>
            <h3 className='heading-tert ProductTitle'>TigerDress</h3>
            <span>Orignal Price:$$</span>
          </div>
          <div className='PlansContainer'>
            <ProductOneTimeRental SetTotalPrice={props.SetTotalPrice} SetCartInfo={props.SetCartInfo} productinfo={props.ChoosenImg} ></ProductOneTimeRental>
            <div className='BuyNow'></div>



          </div>
          <div className='ExtraInfo'>
            <DropdownPlus title="Product Info" desc={props.ChoosenImg.desc}></DropdownPlus>
            <DropdownPlus title="Stylist Info" desc={props.ChoosenImg.styleNotes}></DropdownPlus>
            <DropdownPlus title="Sizes Info" desc={props.ChoosenImg.SizeInfo}></DropdownPlus>


          </div>





        </div>


      </div>


    </div >
  )
}

export default Productinfo