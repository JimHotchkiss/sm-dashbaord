import React from 'react'
import NavigationTitle from '../navigation_title/NavigationTitle'
import NavigationItem from '../navigation_item/NavigationItem'

const NavigationComponent = ({ features, handleItemBtnClick, handleNavigationClick, itemBtn, navigationClick}) => {

const chevron = {
        height: "18px",
        width: "18px",
        marginTop: "10px",
        marginLeft: "auto",
        // background: "transparent url('./images/icon-arrow.svg') 0% 0% no-repeat padding-box",
        backgroundSize: "18px",
        transition: "all 0.3s linear"
        }

const rotateChevron = {
            height: "18px",
            width: "18px",
            marginTop: "10px",
            marginLeft: "auto",
            // background: "transparent url('./images/icon-arrow.svg') 0% 0% no-repeat padding-box",
            backgroundSize: "18px",
            transition: "all 0.3s linear",
            transform: "rotate(-0.5turn)"
            }

 
    return (
    <div className='navigation_component__container'>
        {features.map((feature) => (
            <div key={feature.id}>
                <div className='navigation_title__div'>
                    <NavigationTitle name={feature.featureName}/>
                </div>
                {feature.productList.map((productItem) => (
                    <div className='navigation_item_div' key={Math.random()}>
                         <NavigationItem 
                            chevronStyle={navigationClick['navigationProductClicKStatus'] && navigationClick['navigationProductId'] === productItem.productName ? rotateChevron : chevron}
                            productItemId={productItem.productName}
                            handleItemBtnClick={handleItemBtnClick}
                            handleNavigationClick={handleNavigationClick}
                            itemBtn={itemBtn}
                            chevronClassName={navigationClick['navigationProductClicKStatus'] && navigationClick['navigationProductId'] === productItem.productName ? 'navigation_item__chevron_rotate' : 'navigation_item__chevron'}
                            itemClassName={navigationClick['navigationProductId'] === productItem.productName ? 'navigation_item__items_show' : 'navigation_item__items_hide'}
                            categories={productItem.categories} 
                            name={productItem.productName}/>
                    </div>
                ))}
            </div>
        ))}
    </div>
  )
}

export default NavigationComponent