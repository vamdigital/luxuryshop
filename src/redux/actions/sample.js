import { ADD_COUNT, SUB_COUNT, RESET_COUNT } from '../constant'

export const Increment = count => {
  return {
    type: ADD_COUNT,
    count
  }
}

export const Decrement = count => {
  return {
    type: SUB_COUNT,
    count
  }
}

export const Reset = count => {
  return {
    type: RESET_COUNT,
    count
  }
}

export default {
  Increment,
  Decrement,
  Reset
}
