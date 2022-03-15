import React from 'react'

function CategoryItem(props) {
  const { img, title } = props.itemInfo
  return (
    <div CategoryItem-box >
      <img className='CategoryItem-img' src={img}></img>
      <div className='Category-TextBox'>
        <h3 className='heading-tert'>{title}</h3>
        <button className='Category-Button'>Shop Now</button>
      </div>

    </div>
  )
}

export default CategoryItem