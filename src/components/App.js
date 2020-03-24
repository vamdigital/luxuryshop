/* eslint-disable no-console */
import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import HomePage from '../pages/Home'
import Shop from '../pages/Shop'
import Product from '../pages/Product'
import Cart from '../pages/Cart'
import Header from './Header'
import './App.scss'

const Products = [
  {
    productId: '1',
    productImage: 'https://i.ibb.co/dg2jdjk/1.jpg',
    productHoverImage: 'https://i.ibb.co/HV38XgS/1-1.jpg',
    productAltText: 'Fashion -1',
    productPrice: '130',
    productTitle: 'skinny mid-rise Trousers'
  },
  {
    productId: '2',
    productImage: 'https://i.ibb.co/R4K33zk/2.jpg',
    productHoverImage: 'https://i.ibb.co/Cmm7g1C/2-2.jpg',
    productAltText: 'Hoodie with Slogan',
    productPrice: '50',
    productTitle: 'Hoodie with Slogan'
  }
]

const App = props => {
  const { location } = props
  console.log(process.env.API_PROD_URL)
  return (
    <div>
      <Header local={location} />
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/Shop" render={() => <Shop Products={Products} />} />
        <Route
          exact
          path="/Product/:productId"
          render={routerProps => <Product {...routerProps} Products={Products} />}
        />
        <Route exact path="/Cart" render={() => <Cart />} />
      </Switch>
    </div>
  )
}

export default withRouter(App)
