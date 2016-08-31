import { CHANGE_INPUT} from '../../constants/test/testType.js'
// import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/ActionTypes'

const initialState =
  {
    type:CHANGE_INPUT,
    text:'当前是初始化数据！'
  }

//reducer的固定写法
export default function changeInput(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return Object.assign({}, state, {
        type: CHANGE_INPUT,
        text:action.text
      })

    default:
      return state
  }
}
