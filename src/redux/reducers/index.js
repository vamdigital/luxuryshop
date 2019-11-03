import { combineReducers } from 'redux'

// Import all the reducers here below
import { sample } from './sample'

const rootReducer = combineReducers({
  // pass the imported reducerss here
  data: sample
})

export default rootReducer
