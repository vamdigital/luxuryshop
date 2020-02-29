import React from 'react'
import PropTypes from 'prop-types'

import './video.scss'

const propTypes = {
  videoSourceMp4: PropTypes.string,
  fallbackWebm: PropTypes.string,
  className: PropTypes.string,
  dataQa: PropTypes.string
}

const defaultProps = {
  videoSourceMp4: '',
  fallbackWebm: '',
  className: 'video-fullscreen',
  dataQa: 'video-element'
}

const Video = props => {
  const { videoSourceMp4, fallbackWebm, className, dataQa } = props
  return (
    <video data-qa={dataQa} className={className} autoPlay loop playsInline muted>
      <source src={videoSourceMp4} type="video/mp4" />
      <source src={fallbackWebm} type="video/webm" />
    </video>
  )
}

Video.propTypes = propTypes
Video.defaultProps = defaultProps

export default Video
