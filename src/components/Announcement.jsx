import React from 'react'


export const Announcement = (props) => {
  return (
    <div className='Anouncment-container'><p>{props.InfoAn}</p>
      <a href='#' className='An-cta'>Explore</a></div>
  )
}
