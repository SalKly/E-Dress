import React from 'react'
import CategoryItem from './CategoryItem'


function Categories(props) {
  return (
    <section className='Section-Categories'>
      <div className='Category-cont flex  '>
        {props.CategoryInfo.map((item) => {
          return <CategoryItem itemInfo={item} ></CategoryItem>

        })}
      </div>

    </section>
  )
}

export default Categories