import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

 const Breadcrum = (props) => {
  
    const {product}=props;
    
  // if (!product) {
  //   // Handle the case where product is undefined (e.g., loading state)
  //   return null; // or return a loading indicator, an empty string, or any fallback UI
  // }
  return (
    <div className='breadcrum'>
    HOME <img src={arrow_icon} alt=''/> SHOP <img src={arrow_icon} alt=''/> {product?.category} <img src={arrow_icon} alt=''/>{product?.name}
    {/* HOME <img src={arrow_icon} alt=''/> SHOP <img src={arrow_icon} alt=''/>
      {product.category && <><img src={arrow_icon} alt=''/> {product.category}</>}
      {product.name && <><img src={arrow_icon} alt=''/> {product.name}</>} */}
    </div>
  )
}
export default Breadcrum