import {GET_ACTIVE_ORDERS,GET_PAST_ORDERS} from "../actions/types"

const INIT_STATE ={
    activeOrders:[],
    pastOrders:[]
}

export default function orderReducer(state = INIT_STATE, action) {
    switch (action.type) {
      case GET_ACTIVE_ORDERS:
        return  {
          ...state,
          activeOrders: action.data
        }
      case GET_PAST_ORDERS:
        return{
          ...state,
          pastOrders:action.data
        }
      default:
        return state
    }
    
  }