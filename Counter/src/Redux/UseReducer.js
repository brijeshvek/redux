/* eslint-disable default-case */
import { DECREMENT, INCREMENT} from './action'
const initialState = {
    count : 0
}

function UseReducer(state=initialState,action) {
  switch(action.type){
    case INCREMENT:return{count:state.count + 1}
    case DECREMENT:return{count:state.count - 1}
    default:return state
  }
}

export default UseReducer
