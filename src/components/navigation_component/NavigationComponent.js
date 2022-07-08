import React from 'react'
import NavigationTitle from '../navigation_title/NavigationTitle'
import NavigationItem from '../navigation_item/NavigationItem'

const NavigationComponent = ({ features, handleItemBtnClick, itemClicked }) => {
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