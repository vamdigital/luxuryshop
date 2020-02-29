import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'

const propTypes = {
  productImage: PropTypes.string,
  productAltText: PropTypes.string,
  productTitle: PropTypes.string,
  productPrice: PropTypes.string,
  productId: PropTypes.string,
  currencySymbol: PropTypes.string
}

const defaultProps = {
  productImage: '',
  productAltText: '',
  productTitle: '',
  productPrice: '',
  productId: '',
  currencySymbol: '£'
}

const ProductCard = props => {
  const {
    productImage,
    productAltText,
    productTitle,
    productPrice,
    productId,
    currencySymbol
  } = props
  return (
    <li className="card-item">
      <div className="card-content">
        <img src={productImage} alt={productAltText} />
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
        />
      </div>
    </li>
  )
}

ProductCard.propTypes = propTypes
ProductCard.defaultProps = defaultProps

export default ProductCard
