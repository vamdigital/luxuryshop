import React from 'react'
import { Link } from 'react-router-dom'
import VideoElement from '../../components/Video'
import videoMp4 from '../../assets/video/background-video1.mp4'
import videoWebm from '../../assets/video/background-video1.webm'

import './Home.scss'

const HomePage = () => {
  return (
    <div>
      <VideoElement videoSourceMp4={videoMp4} fallbackWebm={videoWebm} />
      <div className="home-content">
        <h1 className="home-title">The Collection</h1>
        <h2 className="home-blurb">
          Discover the designs and dive in to the world of fashion and amazing clothing range.
        </h2>
        <Link to="/Shop" className="home-cta">
          Shop Now
        </Link>
      </div>
    </div>
  )
}

export default HomePage
