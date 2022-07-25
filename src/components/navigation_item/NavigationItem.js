import { React } from 'react'
import './NavigationItem.css'



const NavigationItem = ({ name, categories, itemClassName, handleItemBtnClick, handleNavigationClick, itemBtn, productItemId, navigationClick, chevron}) => {

  return (
    <div className='navigation_item__container'>
        <div 
            onClick={(e) => handleNavigationClick(e)}  
            className='navigation_item__text_chevron_div'
            data-id={productItemId}>
            <div className='navigation_item__text'>
                <p data-id={productItemId}>{name}</p>
            </div>
            {console.log(navigationClick['navigationProductClicKStatus'])}
            <div className={chevron}></div>
        </div>
        <div className={itemClassName}>
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