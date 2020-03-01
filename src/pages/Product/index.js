import React from 'react'
import './product.scss'

const Product = props => {
  const { match, Products } = props
  const {
    params: { productId }
  } = match

  return (
    <div id="product-page">
      <div className="container">
        <p>
          <strong>Product ID: {productId} </strong>
          {Products[productId - 1].productTitle}
        </p>
      </div>
    </div>
  )
}

export default Product
