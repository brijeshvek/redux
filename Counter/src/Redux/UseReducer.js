/* eslint-disable default-case */
import { DECREMENT, INCREMENT, PURCHASE_BOOK } from './action'
const initialState = {
    count : 0,
    books :20
}

function UseReducer(state=initialState,action) {
  switch(action.type){
    case INCREMENT:return{...state,count:state.count + 1}
    case DECREMENT:return{...state,count:state.count - 1}
    case PURCHASE_BOOK :return {...state,book :state.book + 1}
    default:return state
  }
}

export default UseReducer
