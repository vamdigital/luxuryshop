import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/Home'
import Shop from '../pages/Shop'
import Header from './Header'
import './App.scss'

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={() => <HomePage />} />
        <Route path="/Shop" exact component={() => <Shop />} />
      </Switch>
    </div>
  )
}

export default App
