import React, { useState, useCallback } from 'react'
import { AiOutlineCalendar } from 'react-icons/ai';
import { Link, Redirect, useNavigate } from 'react-router-dom';
import Calendar from './Calendar';
import CalendDayChoose from './CalendDayChoose';
import SizeAndFit from './SizeAndFit';




function ProductOneTimeRental(props) {
  const navigate = useNavigate()
  const [ChoosenNumber, SetChoosenNumber] = useState(4)
  const [FlagClose, SetFlagClose] = useState(true)
  const [SelectedShown, SetSelectedShown] = useState({
    rec: "",
    ret: ""
  })
  const [ChoosenSize, SetChoosenSize] = useState("")
  const [Factor, SetFactor] = useState(1)
  const [SizeFit, SetSizeFit] = useState(false)

  const [Helper, SetHelper] = useState(false)




  function HandleAddToCart(e) {
    e.preventDefault();
    let newItem = {
      name: props.productinfo.name,
      img: props.productinfo.imgFront,
      price: ChoosenNumber === 4 ? props.productinfo.price : props.productinfo.price * 2,
      Size: ChoosenSize,
      Date_rec: SelectedShown.rec,
      Date_ret: SelectedShown.ret



    }
    props.SetTotalPrice(prev => {
      return prev + newItem.price
    })
    props.SetCartInfo(prev => {
      return [...prev, newItem];
    })
    navigate("/Checkout")



  }









  function HandleSizeChange(e) {
    let value = e.target.value
    SetChoosenSize(value);
    SetSelectedShown({
      rec: "",
      ret: ""
    });
    SetHelper(true)

  }
  function handleHelper() {
    SetHelper(false)
    console.log("hi");

  }

  return (
    <div className='OneTimeRental'>
      <div className='OneTimeContent'>
        <div className='OnetimeText'>
          <p className='OnetimeTextTitle'>One-time rental</p>
          <p className='OnetimeTextSub'>Rent for 4 days</p>
          <p className='price'>{props.productinfo.price}LE</p>
        </div>
        <img src={props.productinfo.imgFront} width={"40px"} height={"60px"}></img>

      </div>

      <div className='ProductDD'>
        <form onSubmit={HandleAddToCart} className='DDcontent'>

          <div className='sizeCont'>
            <div className='chooseSize'>
              <label htmlFor="standard-select">Size</label>
              <div className="select">
                <select onChange={HandleSizeChange} required className="standard-select">

                  <option className='placeholderS' value="" disabled selected hidden>Select</option>
                  {props.productinfo.Size ? props.productinfo.Size.map((size, index) => {
                    return <option key={index} value={size}>{size}</option>
                  }) : null}


                </select>
              </div>
            </div>
            <a onClick={() => {
              SetSizeFit(true)
            }} className='SizeAFit'>Size&fit</a>
            <SizeAndFit SetState={SetSizeFit} State={SizeFit} ></SizeAndFit>
          </div>
          <div className='delivCont'>
            <p>Delivery and return</p>
            <div className="CalendCont">
              <CalendDayChoose SetChoosenNumber={SetChoosenNumber} ></CalendDayChoose>

              <div onClick={() => {
                SetFlagClose(false)
                handleHelper(false)
              }} className="Calendar">
                <input required className="DateSelected" defaultValue={SelectedShown.rec !== "" ? SelectedShown.rec + " - " + SelectedShown.ret : ""}></input>
                <AiOutlineCalendar className="CalendarIcon"></AiOutlineCalendar>
              </div>
            </div>


          </div>

          <button type='submit' className='AddToCartBtn'>Add to cart</button>



        </form>

      </div >
      <Calendar helper={{ value: Helper, Control: SetHelper }} SizeValue={ChoosenSize} SetShown={SetSelectedShown} SetState={SetFlagClose} State={FlagClose} ChoosenNumber={ChoosenNumber}></Calendar>


    </div >
  )
}

export default React.memo(ProductOneTimeRental);