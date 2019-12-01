import { ADD_COUNT, SUB_COUNT, RESET_COUNT } from '../constant'

export const Increment = count => {
  return {
    type: ADD_COUNT,
    payload: count
  }
}

export const Decrement = count => {
  return {
    type: SUB_COUNT,
    payload: count
  }
}

export const Reset = () => {
  return {
    type: RESET_COUNT,
    payload: 0
  }
}

export default {
  Increment,
  Decrement,
  Reset
}
