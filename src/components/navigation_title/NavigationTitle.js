import React from 'react'
import './NavigationTitle.css'

const NavigationTitle = ({ name }) => {
  return (
    <div className='navigation_title__container'><h1>{name}</h1> </div>
  )
}

export default NavigationTitle