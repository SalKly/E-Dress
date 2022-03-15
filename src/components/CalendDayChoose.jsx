import React from 'react'

function CalendDayChoose(props) {
  return (
    <div className="RBdays">
      <div onClick={() => { props.SetChoosenNumber(4) }} className="DContainer">
        <label className="form-control">
          <input type="radio" defaultChecked name="radio" />
          4-DAY RENTAL
        </label>
      </div>
      <div onClick={() => { props.SetChoosenNumber(8) }} className="DContainer">
        <label className="form-control">
          <input type="radio" name="radio" />
          8-DAY RENTAL
        </label>
      </div>


    </div>
  )
}

export default React.memo(CalendDayChoose);