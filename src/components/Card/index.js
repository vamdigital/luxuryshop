/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from '../Button'

const propTypes = {
  productImage: PropTypes.string,
  productHoverImage: PropTypes.string,
  productAltText: PropTypes.string,
  productTitle: PropTypes.string,
  productPrice: PropTypes.string,
  productId: PropTypes.string,
  currencySymbol: PropTypes.string
}

const defaultProps = {
  productImage: '',
  productHoverImage: '',
  productAltText: '',
  productTitle: '',
  productPrice: '',
  productId: '',
  currencySymbol: '£'
}

const ProductCard = props => {
  const {
    productImage,
    productHoverImage,
    productAltText,
    productTitle,
    productPrice,
    productId,
    currencySymbol
  } = props

  const [showHoverItem, setShowHoverItem] = useState(false)

  return (
    <li className="card-item">
      <div className="card-content">
        <div className="card-content__wrapper">
          <Link
            to={`Product/${productId}`}
            onMouseEnter={() => {
              setShowHoverItem(true)
            }}
            onMouseLeave={() => {
              setShowHoverItem(false)
            }}
          >
            {!showHoverItem && <img src={productImage} alt={productAltText} />}
            {showHoverItem && <img src={productHoverImage} alt={productAltText} />}
          </Link>
        </div>

        <p className="product-title">{productTitle}</p>
        <p className="product-price">
          {currencySymbol}
          {Number(productPrice).toFixed(2)}
        </p>
        <Button
          buttonText="Add to Cart"
          buttonType="button"
          buttonVariant="primary"
          dataId={productId}
          clickHandler={e => {
            e.preventDefault()
            e.stopPropagation()
            console.log('button clicked')
          }}
        />
      </div>
    </li>
  )
}

ProductCard.propTypes = propTypes
ProductCard.defaultProps = defaultProps

export default ProductCard
