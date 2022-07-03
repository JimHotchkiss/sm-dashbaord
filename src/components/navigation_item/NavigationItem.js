import {React, useState} from 'react'
import './NavigationItem.css'

const NavigationItem = ({ name, categories }) => {

    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }
  return (
    <div className='navigation_item__container'>
        <div onClick={handleClick}  className='navigation_item__text_chevron_div'>
            <div className='navigation_item__text'>
                <p>{name}</p>
            </div>
            <div className={click ? 'navigation_item__chevron' : 'navigation_item__chevron_rotate'}></div>
        </div>
        <div className={click ? 'navigation_item__items_show' : 'navigation_item__items_hide'}>
            {categories.map((category) => (
                 <div key={Math.random()} className='navigation_item__items_text'>
                    <p>{category.name}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default NavigationItem