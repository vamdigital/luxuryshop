import { ADD_COUNT, SUB_COUNT, RESET_COUNT } from '../constant'

const initialState = {
  count: 0
}

export const sample = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNT:
      return {
        ...state,
        count: state.count + 1
      }
    case SUB_COUNT:
      return {
        ...state,
        count: state.count - 1
      }
    case RESET_COUNT:
      return {
        ...state,
        count: 0
      }
    default:
      return state
  }
}

export default sample
