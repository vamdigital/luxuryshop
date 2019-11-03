import { createSelector } from 'reselect'

const sample = state => state.data

const getCount = createSelector(
  sample,
  item => item.count
)

export default getCount
