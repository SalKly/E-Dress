import React, { useState } from 'react'
import Categories from './Categories'
import Filters from './Filters'

function Filterbar(props) {
  const [TopClicked, SetTopClicked] = useState(false)
  const [DressesClicked, SetDressesClicked] = useState(false)
  const [FormalClicked, SetFormalClicked] = useState(false)






  function handleCategoryClick(value) {




    // if (value == "Top") {
    //   SetTopClicked(true)
    //   SetLastvalue(value)

    //   SetDressesClicked(false)
    //   SetFormalClicked(false)
    //   SetSlashList((prevValue) => {
    //     return ["Clothing", value]

    //   })

    // }
    // else {
    //   if (value == "Dresses") {
    //     SetDressesClicked(true)
    //     SetTopClicked(false)
    //     SetLastvalue(value)

    //     SetFormalClicked(false)
    //     SetSlashList((prevValue) => {
    //       return ["Clothing", value]

    //     })

    //   }
    //   else {
    //     if (value == "Formal") {
    //       SetFormalClicked(true)
    //       SetTopClicked(false)
    //       SetLastvalue(value)
    //       SetDressesClicked(false)
    //       SetSlashList((prevValue) => {
    //         return ["Clothing", value]

    //       })


    //     }
    //     else {
    //       SetSlashList((prevValue) => {
    //         return ["Clothing", Lastvalue, value]

    //       })

    //     }

    //   }

    // }







  }




  return (
    <div className='Filterbar-container'>
      <Categories MenuTitle={props.MenuTitle} handleCategoryClick={handleCategoryClick}
        TopClicked={TopClicked} DressesClicked={DressesClicked} FormalClicked={FormalClicked} ></Categories>
      <Filters Setfilter={props.Setfilter} ></Filters>


    </div>
  )
}

export default Filterbar