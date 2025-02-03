import React from 'react'
import './Breadcrumb.css'


const Breadcrumb = (props) => {
    const {product} = props;
  return (
    <div className='breadcrumb'>
        HOME <i class="fa fa-angle-right"></i> SHOP <i class="fa fa-angle-right"></i> {product.category} <i class="fa fa-angle-right"></i> {product.name}
    </div>
  )
}

export default Breadcrumb