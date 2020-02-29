import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import HomePage from '../pages/Home'
import Shop from '../pages/Shop'
import Header from './Header'
import './App.scss'

const App = props => {
  const { location } = props
  return (
    <div>
      <Header local={location} />
      <Switch>
        <Route path="/" exact component={() => <HomePage />} />
        <Route path="/Shop" exact component={() => <Shop />} />
      </Switch>
    </div>
  )
}

export default withRouter(App)
