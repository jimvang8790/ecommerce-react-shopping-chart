import React from 'react'

const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
  return (
    <div>{productName}</div>
  )
}

export default Product