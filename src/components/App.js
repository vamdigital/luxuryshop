import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/Home'
import Shop from '../pages/Shop'
import './App.scss'

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={() => <HomePage />} />
        <Route path="/Shop" exact component={() => <Shop />} />
      </Switch>
    </div>
  )
}

export default App
