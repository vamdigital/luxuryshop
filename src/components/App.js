import React from 'react'
import { connect } from 'react-redux'
// Import selector
import getCount from '../redux/selector/sample'
// Import Action Creator Here
import { Increment, Decrement, Reset } from '../redux/actions/sample'

// We adding export const App because JEST doesn't have access to store so we are gonna test this outside of store
export const App = ({ count, increment, decrement, reset }) => {
  const add = e => {
    e.preventDefault()
    increment()
  }

  const sub = e => {
    e.preventDefault()
    if (count >= 1) {
      decrement()
    }
  }

  const res = e => {
    e.preventDefault()
    reset()
  }
  return (
    <div>
      <h1 data-qa="title">Sample Counter App with React - Redux - Reselect</h1>
      <p data-qa="count">{count}</p>
      <button type="button" onClick={add} data-qa="increment-button">
        Increment
      </button>
      <button type="button" onClick={sub} data-qa="decrement-button">
        decrement
      </button>
      <button type="button" onClick={res} data-qa="reset-button">
        reset
      </button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    count: getCount(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: count => {
      dispatch(Increment(count))
    },
    decrement: count => {
      dispatch(Decrement(count))
    },
    reset: count => {
      dispatch(Reset(count))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
