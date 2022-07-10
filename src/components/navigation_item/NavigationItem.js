import {React, useState} from 'react'
import './NavigationItem.css'

const NavigationItem = ({ name, categories}) => {

    const [click, setClick] = useState(false)
    const [itemBtn, setItemBtn] = useState({itemBtnId:"test", clickStatus:false})

    const handleClick = () => {
       setClick(!click)
       setItemBtn({itemBtnId: "", clickStatus: false})
    }

    const handleBtnClick = (e, categoryId) => {
        if (itemBtn['itemBtnId'] === categoryId && itemBtn['clickStatus'] === true ) {
            setItemBtn({itemBtnId: "", clickStatus: false})
        } else {
            setItemBtn({itemBtnId: categoryId, clickStatus: true})
        }
        
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
                 <div 
                    onClick={(e) => handleBtnClick(e, category.id)}
                    key={Math.random()} 
                    id={category.id}
                    className={itemBtn['itemBtnId'] === category.id && itemBtn['clickStatus'] ? 'navigation_item__items_text item_clicked' : 'navigation_item__items_text'}>
                    <p>{category.name}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default NavigationItem