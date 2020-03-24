import React from 'react'
import './product.scss'

const Product = props => {
  const { match, Products } = props
  const {
    params: { productId }
  } = match

  return (
    <div id="product-page">
      <div className="product-page-left-col">
        <img
          src={Products[productId - 1].productImage}
          alt={Products[productId - 1].productTitle}
        />
      </div>
      <div className="product-page-right-col">
        <div className="container">
          <p>
            <strong>Product ID: {productId} </strong>
            {Products[productId - 1].productTitle}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Product
