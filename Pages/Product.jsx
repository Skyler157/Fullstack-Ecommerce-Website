import React, {useContext} from 'react'
import { ShopContext } from '../../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import DescriptionBox from '../DescriptionBox/DescriptionBox';
import RelatedProducts from '../RelatedProducts/RelatedProducts';


const Product = () => {
  const {all_product}= useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Breadcrumb product={product || []}/>
      <ProductDisplay product={product || []}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product