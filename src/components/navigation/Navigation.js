import {React, useState} from 'react'
import './Navigation.css'
import NavigationComponent from '../navigation_component/NavigationComponent'



const Navigation = () => {

  const [features, setFeatures] = useState([
    { featureName: 'Capital Products', id: 1,  productList: [
      { productName: 'Adaptable Beach Chair', categories:[{ name: 'Capital'}, { name: 'Disposables'}, { name: 'Replacement Parts'}], body: 'Product One body', id: 1},
      { productName: 'Alphavent', categories:[{ name: 'Capital'}, { name: 'Disposables'}, { name: 'Replacement Parts'}], body: 'Product One body', id: 2},
      { productName: 'Adaptable Arm Positioner', categories:[{ name: 'Capital'}, { name: 'Disposables'}, { name: 'Replacement Parts'}], body: 'Product One body', id: 3}
  ]}, {featureName: "Implant Families", categories:[{ name: 'Capital'}, { name: 'Disposables'}, { name: 'Replacement Parts'}], id: 2, productList: [
      { productName: 'Implant Family One', categories:[{ name: 'Capital'}, { name: 'Disposables'}, { name: 'Replacement Parts'}], id: 1},
      { productName: 'Implant Family Two', categories:[{ name: 'Capital'}, { name: 'Disposables'}, { name: 'Replacement Parts'}],  id: 2},
  ]},{featureName: "Arthro Specs", categories:[{ name: 'Capital'}, { name: 'Disposables'}, { name: 'Replacement Parts'}], id: 3, productList: [
    { productName: 'Arthro Spec One', categories:[{ name: 'Capital'}, { name: 'Disposables'}, { name: 'Replacement Parts'}], id: 1},
    { productName: 'Arthro Spec Two', categories:[{ name: 'Capital'}, { name: 'Disposables'}, { name: 'Replacement Parts'}], id: 2},
]}])

  return (
    <div className='navigation__container'>
      <NavigationComponent features={features} />
    </div>
  )
}

export default Navigation

