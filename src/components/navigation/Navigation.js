import {React, useState} from 'react'
import './Navigation.css'
import NavigationComponent from '../navigation_component/NavigationComponent'



const Navigation = () => {

  const [features, setFeatures] = useState([
    { featureName: 'Capital Products', id: 1,  productList: [
      { productName: 'Capital One', body: 'Product One body', id: 1},
      { productName: 'Capital Two', body: 'Product One body', id: 2},
      { productName: 'Capital Three', body: 'Product One body', id: 3}
  ]}, {featureName: "Implant Families", id: 2, productList: [
      { productName: 'Implant Family One', id: 1},
      { productName: 'Implant Family Two', id: 2},
  ]}])

  return (
    <div className='navigation__container'>
      <NavigationComponent features={features} />
    </div>
  )
}

export default Navigation