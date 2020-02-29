import React from 'react'
import PropTypes from 'prop-types'

import './App.scss'
import videoMp4 from '../assets/video/background-video1.mp4'
import videoWebm from '../assets/video/background-video1.webm'

const propTypes = {
  title: PropTypes.string
}

const defaultProps = {
  title: 'React Shopping Cart'
}
const App = props => {
  const { title } = props
  return (
    <div>
      <video autoPlay loop playsInline muted>
        <source src={videoMp4} type="video/mp4" />
        <source src={videoWebm} type="video/webm" />
      </video>
      <div className="something">
        <h1>{title}</h1>
      </div>
    </div>
  )
}

App.propTypes = propTypes
App.defaultProps = defaultProps

export default App
