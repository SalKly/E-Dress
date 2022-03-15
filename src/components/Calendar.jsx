import React, { useState } from 'react'
import styled from 'styled-components'
import Day from './Day';
import { RiArrowRightSLine } from 'react-icons/ri';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { RemoveScroll } from 'react-remove-scroll';
import { RemoveScrollBar } from 'react-remove-scroll-bar';



const ClickedNumbersIState = [[], [], [], [], [], [], [], [], [], [], [], []]

function Calendar(props) {


  // INITIALIZE
  let date = new Date()
  let Year = date.getFullYear();
  let Months = ["January", "February", "March", "April",
    "May", "June", "July", "August", "September", "October"
    , "November", "December"];
  let date2 = new Date(Months[date.getMonth()] + "1" + "," + Year)
  let Firstday = date2.getDay()
  let daysInMonth = new Date(Year, date.getMonth() + 1, 0).getDate();
  let NumbOD = Array.from(Array(daysInMonth).keys())

  let allDays = ["su", "Mo", "Tu", "We", "th", "fr", 'sa']



  const [OnCalendar, SetOnCalendar] = useState({
    CurrentMonth: Months[date.getMonth()],
    CurrentYear: Year,
    NumberOfDays: NumbOD,
    Day: Firstday + 1,
  });

  const [ActiveNumbers, SetActiveNumbers] = useState([[], [], [], [], [], [], [], [], [], [], [], []])
  const [DimmedNumbers, SetDimmedNumbers] = useState([[], [], [], [], [], [], [], [], [], [], [], []])
  const [ClickedNumbers, SetClickedNumbers] = useState([[], [], [], [], [], [], [], [], [], [], [], []])
  const [FlagClose, SetFlagClose] = useState(false)
  // const [ToClicked, SetToClicked] = useState(false)
  console.log(ClickedNumbers);

  if (props.helper.value === true && ClickedNumbers[Months.indexOf(OnCalendar.CurrentMonth)].length !== 0) {
    console.log("hi");

    SetClickedNumbers([[], [], [], [], [], [], [], [], [], [], [], []])


  }









  const FirstChild = styled.div
    `
    grid-column:${OnCalendar.Day}

`


  function HandleOnMouseOver(index) {

    if (!DimmedNumbers.includes(index)) {
      let max = index + props.ChoosenNumber;
      let NewActiveNumb = [[], [], [], [], [], [], [], [], [], [], [], []];
      for (let i = index; i < max; i++) {
        if (i > OnCalendar.NumberOfDays[OnCalendar.NumberOfDays.length - 1]) {
          NewActiveNumb[Months.indexOf(OnCalendar.CurrentMonth) + 1].push(i - OnCalendar.NumberOfDays[OnCalendar.NumberOfDays.length - 1] - 1)


          // SetActiveNumbers(
          //   ActiveNumbers[Months.indexOf(OnCalendar.CurrentMonth) + 1].push(i)


          // );
        }
        else {
          NewActiveNumb[Months.indexOf(OnCalendar.CurrentMonth)].push(i)


          // SetActiveNumbers(
          //   ActiveNumbers[Months.indexOf(OnCalendar.CurrentMonth)].push(i)


          // );
        }

      }




      SetActiveNumbers(NewActiveNumb)
      // SetActiveNumbers(
      //   ActiveNumbers[Months.indexOf(OnCalendar.CurrentMonth)] = ToBeActiveNumb

      //   ActiveNumbers[Months.indexOf(OnCalendar.CurrentMonth) + 1] = NextToBeActiveNumber


      // )




    }




  }
  function HandleOnMouseOut() {
    SetActiveNumbers([[], [], [], [], [], [], [], [], [], [], [], []]);
  }
  function HandleOnClick(index) {
    console.log(ActiveNumbers[Months.indexOf(OnCalendar.CurrentMonth) + 1]);
    if (!DimmedNumbers.includes(index)) {
      SetClickedNumbers(ActiveNumbers);

      props.SetState(true);
      let max = index + props.ChoosenNumber;
      let MonthNumber = Months.indexOf(OnCalendar.CurrentMonth) + 1;
      if (ActiveNumbers[Months.indexOf(OnCalendar.CurrentMonth) + 1].length === 0) {
        props.SetShown({
          rec: (index + 1) + "/" + MonthNumber,
          ret: max + "/" + MonthNumber
        })


      }
      else {
        props.SetShown({
          rec: (index + 1) + "/" + MonthNumber,
          ret: (1 + ActiveNumbers[Months.indexOf(OnCalendar.CurrentMonth) + 1][ActiveNumbers[Months.indexOf(OnCalendar.CurrentMonth) + 1].length - 1]) + "/" + (MonthNumber + 1)
        })


      }





    }

  }


  function HandleArrow(direction) {

    let CurrentMonthIndex = Months.indexOf(OnCalendar.CurrentMonth);
    let NextMonth = Months[CurrentMonthIndex + 1]    // The new CurrentMonth
    let NextYear = OnCalendar.CurrentYear;

    if (direction === 0) {
      if (CurrentMonthIndex === Months.length - 1) {
        NextMonth = Months[0];
        NextYear = NextYear + 1;

      }
      else {
        NextMonth = Months[CurrentMonthIndex + 1]

      }


    }
    else {
      if (CurrentMonthIndex === 0) {
        NextMonth = Months[Months.length - 1];
        NextYear = NextYear - 1;

      }
      else {
        NextMonth = Months[CurrentMonthIndex - 1]
      }

    }




    let NextDate = new Date(NextMonth + "1" + "," + NextYear)
    let NextDay = NextDate.getDay()
    let NextdaysInMonth = new Date(NextYear, Months.indexOf(NextMonth) + 1, 0).getDate();
    let NextNumbOD = Array.from(Array(NextdaysInMonth).keys())

    SetOnCalendar({
      CurrentMonth: NextMonth,
      CurrentYear: NextYear,
      NumberOfDays: NextNumbOD,
      Day: NextDay + 1,
    });




  }




  return (
    <div className="CalendarSection" style={props.State ? { display: "none" } : null}   >
      {!props.State ? <RemoveScrollBar /> : null}
      <div className="CalendarScreen">
        <div className='XBtn' onClick={() => { props.SetState(true) }}></div>

        <p className="CalenderTitle instruction">Pick a delivery date 1-2 days before your event</p>
        <div className="CalendarMain">
          <div className='CalendarContent'>
            <p className="CalenderTitle">{OnCalendar.CurrentMonth} {OnCalendar.CurrentYear}</p>
            <RiArrowLeftSLine onClick={() => { HandleArrow(1) }} style={OnCalendar.CurrentMonth === Months[date.getMonth()] && OnCalendar.CurrentYear === date.getFullYear() ? { display: "none" } : null} className='left-icon'></RiArrowLeftSLine>
            <RiArrowRightSLine onClick={() => { HandleArrow(0) }} className='right-icon' style={OnCalendar.CurrentMonth === Months[date.getMonth() + 5] ? { display: "none" } : null}></RiArrowRightSLine>
          </div>
          <div className="Days">
            <div className='DaysTitles'>
              <div>Su</div>
              <div>Mo</div>
              <div>Tu</div>
              <div>We</div>
              <div>Th</div>
              <div>Fr</div>
              <div>Sa</div>
            </div>
            <div className='DaysActual'>
              {
                OnCalendar.NumberOfDays.map((value, index) => {
                  if (OnCalendar.CurrentMonth === Months[date.getMonth()] && OnCalendar.CurrentYear === date.getFullYear() && index < date.getDate()) {
                    if (index === 0) {
                      return <FirstChild key={index} style={{ backgroundColor: "lightgray" }} >1</FirstChild>
                    }

                    else {
                      return <Day key={index} style={{ backgroundColor: "lightgray" }} State="NotActive" key={index} index={index} value={value + 1}></Day>

                    }


                  }
                  else {

                    if (DimmedNumbers[Months.indexOf(OnCalendar.CurrentMonth)].includes(index)) {
                      if (index === 0) {
                        return <FirstChild key={index} style={{ backgroundColor: "black" }} MouseEnter={() => { HandleOnMouseOver(0) }} onMouseOut={HandleOnMouseOut} onClick={() => { HandleOnClick(0) }} >1</FirstChild>
                      }

                      else {
                        return <Day key={index} style={{ backgroundColor: "black" }
                        } State="NotActive" HandleOnMouseOver={HandleOnMouseOver} HandleOnMouseOut={HandleOnMouseOut} HandleOnClick={HandleOnClick} key={index} index={index} value={value + 1
                        }></Day>

                      }

                    }
                    else {
                      if (ClickedNumbers[Months.indexOf(OnCalendar.CurrentMonth)].includes(index)) {
                        if (index === 0) {
                          return <FirstChild key={index} style={{ backgroundColor: "pink" }} MouseEnter={() => { HandleOnMouseOver(0) }} onMouseOut={HandleOnMouseOut} onClick={() => { HandleOnClick(0) }} >1</FirstChild>
                        }

                        else {
                          return <Day key={index} style={{ backgroundColor: "pink" }} State="Active" HandleOnMouseOver={HandleOnMouseOver} HandleOnMouseOut={HandleOnMouseOut} HandleOnClick={HandleOnClick} key={index} index={index} value={value + 1}></Day>

                        }

                      }
                      else {
                        if (ActiveNumbers[Months.indexOf(OnCalendar.CurrentMonth)].includes(index)) {
                          if (index === 0) {
                            return <FirstChild key={index} style={{ backgroundColor: "grey" }} MouseEnter={() => { HandleOnMouseOver(0) }} onMouseOut={HandleOnMouseOut} onClick={() => { HandleOnClick(0) }} >1</FirstChild>
                          }

                          else {
                            return <Day key={index} style={{ backgroundColor: "grey" }} State="Active" HandleOnMouseOver={HandleOnMouseOver} HandleOnMouseOut={HandleOnMouseOut} HandleOnClick={HandleOnClick} key={index} index={index} value={value + 1}></Day>

                          }

                        }
                        else {
                          if (index === 0) {
                            return <FirstChild key={index} onMouseEnter={() => { HandleOnMouseOver(0) }} onMouseOut={HandleOnMouseOut} onClick={() => { HandleOnClick(0) }} >1</FirstChild>
                          }

                          else {
                            return <Day key={index} HandleOnMouseOver={HandleOnMouseOver} State="Active" HandleOnMouseOut={HandleOnMouseOut} HandleOnClick={HandleOnClick} key={index} index={index} value={value + 1}></Day>

                          }
                        }

                      }

                    }
                  }




                })
              }










              {/* <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
              <div>10</div>
              <div>11</div>
              <div>12</div>
              <div>13</div>
              <div>14</div>
              <div>15</div>
              <div>16</div>
              <div>17</div>
              <div>18</div>
              <div>19</div>
              <div>20</div>
              <div>21</div>
              <div>22</div>
              <div>23</div>
              <div>24</div>
              <div>25</div>
              <div>26</div>
              <div>27</div>
              <div>28</div>
              <div>29</div>
              <div>30</div>
              <div>31</div> */}










            </div>





          </div>


        </div>

      </div>


    </div >

  )
}

export default Calendar