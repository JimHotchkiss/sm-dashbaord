import React from 'react'
import './NavigationItem.css'

const NavigationItem = ({ name }) => {
  return (
    <div className='navigation_item__container'>
        <div className='navigation_item__text_chevron_div'>
            <div className='navigation_item__text'>
                <p>{name}</p>
            </div>
            <div className='navigation_item__chevron'></div>
        </div>
        <div className='navigation_item__items'>
        </div>
    </div>
  )
}

export default NavigationItem