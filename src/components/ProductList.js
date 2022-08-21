import React from 'react';
import Product from './Product.js';

function ProductList(props) {
   
  return (
   props.productList.map((product,i)=>{
    return <Product product={product} key={i} incrementQuantity={props.incrementQuantity} index={i} decrementQuantity={props.decrementQuantity} /> 
   
    
    
   })
  )
}

export default ProductList;
