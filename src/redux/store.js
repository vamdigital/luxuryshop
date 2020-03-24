import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import rootReducer from './reducers'

const middlewares = [thunk]
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}
const middleware = applyMiddleware(...middlewares)

const store = createStore(rootReducer, composeWithDevTools(middleware))

export default store
