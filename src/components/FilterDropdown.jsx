import React from 'react'


function FilterDropdown(props) {
  if (props.type === "1") {
    return (
      <div className='colorBox'>
        {props.data.map((item, index) => {
          return (<div onClick={() => {
            props.Setfilter(prev => {
              return ({
                ...prev,
                [props.name]: item
              })
            })
          }}
            className='colorSelector' key={index} style={{ backgroundColor: item }
            }></div>)
        })
        }

      </div >
    )
  }
  else {
    if (props.type === "2") {
      return (
        <div>
          {props.data.map((item, index) => {
            return (
              <div key={index}>
                <label className="container">{item}
                  <input onChange={(e) => {
                    if (e.target.checked) {
                      props.Setfilter(prev => {
                        return ({
                          ...prev,
                          [props.name]: item
                        })
                      })
                    }
                    else {
                      if (!e.target.checked) {

                        props.Setfilter(prev => {
                          delete prev[props.name]


                          return ({
                            ...prev,



                          })
                        })

                      }
                    }

                  }} type="checkbox" ></input>
                  <span className="checkmark"></span>
                </label>



              </div>
            )
          })
          }

        </div >
      )
    }
    else {
      return <div></div>
    }
  }
}

export default FilterDropdown