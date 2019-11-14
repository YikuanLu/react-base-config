import { INCREASE_COUNT, DECREASE_COUNT } from './actions-types'

export function increaseCount() {
  return { type: INCREASE_COUNT }
}

export function decreaseCount() {
  return { type: DECREASE_COUNT }
}

export function changeCount(type) {
  switch (type) {
    case '+':
      return { type: INCREASE_COUNT }
    case '-':
      return { type: DECREASE_COUNT }
    default:
      throw new Error('请输入加或者减')
  }
}
