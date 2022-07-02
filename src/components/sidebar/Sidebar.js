import React from 'react'
import './Sidebar.css'
import HomeIcon from '../home_icon/HomeIcon'

const Sidebar = () => {
  return (
    <div className='sidebar__container'>
      <div className='sidebar__home_icon'>
        <HomeIcon />
      </div>
    </div>
  )
}

export default Sidebar