import React from 'react'
import { filters } from '../Info'
import Filteritem from './Filteritem'

function Filters(props) {
  return (
    <div>
      <h3 className='FiltersHead'>Filters</h3>
      {filters.map((item, index) => {
        return <Filteritem Setfilter={props.Setfilter} data={item} key={index}></Filteritem>

      })}



    </div>
  )
}

export default Filters