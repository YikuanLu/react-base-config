import { INCREASE_COUNT, DECREASE_COUNT } from '../actions-types'

const initState = {
  count: {
    value: 2
  }
}

// 测试用改变数字加减游戏
function countController(state = initState, action) {
  switch (action.type) {
    case INCREASE_COUNT:
      return {
        ...state,
        count: {
          value: state.count.value + 1
        }
      }
    case DECREASE_COUNT:
      return {
        ...state,
        count: {
          value: state.count.value - 1
        }
      }
    default:
      return state
  }
}

export default countController
