import React from 'react'
import NavigationTitle from '../navigation_title/NavigationTitle'
import NavigationItem from '../navigation_item/NavigationItem'

const NavigationComponent = () => {
  return (
    <div className='navigation_component__container'>
        <div className='navigation_title__div'>
            <NavigationTitle name="Capital Products"/>
        </div>
        <div className='navigation_item_div'>
            <NavigationItem name="Adaptable Chair"/>
        </div>
        <div className='navigation_title__div'>
            <NavigationTitle name="Implant Families"/>
        </div>
        <div className='navigation_item_div'>
            <NavigationItem name="Iconix"/>
        </div>
    </div>
  )
}

export default NavigationComponent