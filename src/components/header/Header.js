import React from 'react'
import StrykerIcon from '../stryker_icon/StrykerIcon'
import InfoIcon from '../info_icon/InfoIcon'
import HomeIcon from '../home_icon/HomeIcon'
import './Header.css'

const Header = () => {
  return (
    <div className='header__container'>
      <div className='header__wrapper'>
          <div className='header__stryker_icon'>
            <StrykerIcon />
          </div>
          <div>
            <div className='header__info_icon'>
              <InfoIcon />
            </div>
            <div className='header__home_icon_mobile'>
              <HomeIcon />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Header
