import {React} from 'react'
import './NavigationItem.css'
import Chevron from './images/icon-arrow.svg'



const NavigationItem = ({ name, categories, itemClassName, chevronClassName, handleItemBtnClick, handleNavigationClick, itemBtn, productItemId, navigationClick}) => {
  
    // const chevron = {
    //     height: "18px",
    //     width: "18px",
    //     marginTop: "10px",
    //     marginLeft: "auto",
    //     // background: "transparent url('./images/icon-arrow.svg') 0% 0% no-repeat padding-box",
    //     backgroundSize: "18px",
    //     transition: "all 0.3s linear"
    //     }

// const rotateChevron = {
//             height: "18px",
//             width: "18px",
//             marginTop: "10px",
//             marginLeft: "auto",
//             // background: "transparent url('./images/icon-arrow.svg') 0% 0% no-repeat padding-box",
//             backgroundSize: "18px",
//             transition: "all 0.3s linear",
//             transform: "rotate(-0.5turn)"
//             }
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
            <div 
                style={{
                    height: "18px",
                    width: "18px",
                    marginTop: "10px",
                    marginLeft: "auto",
                    background: `transparent url(${Chevron}) 0% 0% no-repeat padding-box`,
                    backgroundSize: "18px",
                    transition: navigationClick['navigationProductClicKStatus'] ? "transform 20s linear" : null,
                    transform: navigationClick['navigationProductClicKStatus'] ? "rotate(-0.5turn)" : null,
                    
                }}></div>
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