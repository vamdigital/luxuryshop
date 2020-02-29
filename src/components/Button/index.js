/* eslint-disable react/button-has-type */
import React from 'react'
import PropTypes from 'prop-types'
import './button.scss'

const PRIMARY_BUTTON = 'primary'
const SECONDARY_BUTTON = 'secondary'

const TYPE_BUTTON = 'button'
const TYPE_SUBMIT = 'submit'
const TYPE_RESET = 'reset'

const propTypes = {
  buttonText: PropTypes.string,
  dataQa: PropTypes.string,
  buttonVariant: PropTypes.oneOfType([PRIMARY_BUTTON, SECONDARY_BUTTON]),
  buttonType: PropTypes.oneOfType([TYPE_BUTTON, TYPE_SUBMIT, TYPE_RESET]),
  className: PropTypes.string,
  clickHandler: PropTypes.func
}

const defaultProps = {
  buttonText: '',
  dataQa: '',
  className: '',
  buttonVariant: PRIMARY_BUTTON,
  buttonType: TYPE_BUTTON,
  clickHandler: () => {}
}

const Button = props => {
  const { buttonText, dataQa, className, buttonVariant, buttonType, clickHandler } = props

  const additionalClassName = buttonVariant === 'primary' ? 'primary' : 'secondary'

  return (
    <>
      <button
        className={`button ${className} ${additionalClassName}`}
        data-qa={dataQa}
        type={buttonType}
        onClick={clickHandler}
      >
        {buttonText}
      </button>
    </>
  )
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps
export default Button
