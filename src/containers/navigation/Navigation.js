import {React} from 'react'
import './Navigation.css'
import NavigationComponent from '../../components/navigation_component/NavigationComponent'



const Navigation = ({features, handleItemBtnClick, handleNavigationClick, itemBtn, navigationClick }) => {

  return (
    <div className='navigation__container'>
      <NavigationComponent
        handleItemBtnClick={handleItemBtnClick}
        itemBtn={itemBtn}
        handleNavigationClick={handleNavigationClick}
        navigationClick={navigationClick}
        features={features} 
       />
    </div>
  )
}

export default Navigation

