/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import ProductCard from '../../components/Card'
import './shop.scss'

const Shop = props => {
  const { Products } = props
  return (
    <section className="page-section" id="shop">
      <div className="container">
        <h1 className="shop-title">The Collection</h1>
        <h2 className="shop-blurb">
          Leave your mark on every occasion, whatever your style. A decisive step to give
          personality and uniqueness to your fashion spirit. A selection that will allow you to find
          the right choice for your outfit: elegant, casual or smart, Dance Naturals will walk with
          you.
        </h2>
        <ul className="card">
          {Products.map(product => (
            <ProductCard
              productImage={product.productImage}
              productHoverImage={product.productHoverImage}
              key={product.productId}
              productAltText={product.productAltText}
              productId={product.productId}
              productPrice={product.productPrice}
              productTitle={product.productTitle}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Shop
