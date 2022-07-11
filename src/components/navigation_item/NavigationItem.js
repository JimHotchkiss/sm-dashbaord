import {React, useState} from 'react'
import './NavigationItem.css'

const NavigationItem = ({ name, categories, showTable, setShowTable }) => {


const [navigationClick, setNavigationClick] = useState(false)
const [itemBtn, setItemBtn] = useState({itemBtnId:"", clickStatus:false})

    const handleNavigationClick = () => {
        console.log(itemBtn)
       setNavigationClick(!navigationClick)
       setItemBtn({itemBtnId: "", clickStatus: false})
    }

    const handleItemBtnClick = (e, categoryId) => {
        if (itemBtn['itemBtnId'] === categoryId && itemBtn['clickStatus'] === true ) {
            setItemBtn({itemBtnId: "", clickStatus: false})
        } else {
            setItemBtn({itemBtnId: categoryId, clickStatus: true})
    
        }
        
    }

  return (
    <div className='navigation_item__container'>
        <div onClick={handleNavigationClick}  className='navigation_item__text_chevron_div'>
            <div className='navigation_item__text'>
                <p>{name}</p>
            </div>
            <div className={navigationClick ? 'navigation_item__chevron' : 'navigation_item__chevron_rotate'}></div>
        </div>
        <div className={navigationClick ? 'navigation_item__items_show' : 'navigation_item__items_hide'}>
            {categories.map((category) => (
                 <div 
                    onClick={(e) => handleItemBtnClick(e, category.id)}
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