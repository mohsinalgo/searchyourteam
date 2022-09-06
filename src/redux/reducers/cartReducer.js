import {ADD_TO_CART,UPDATE_CART,EMPTY_CART, REMOVE_CART_ITEM, GET_CART, CART_RECIEPT, UPDATE_CART_RECIEPT, EMPTY_CART_RECIEPT, REMOVE_CART_RECIEPT, GET_CART_RECIEPT, CALCULATE_RECEIPT} from "../actions/types"
// import AsyncStorage from "@react-native-community/async-storage"


const INIT_STATE ={
    cartData:[],
    recieptData:[]
}

export default function cartReducer(state = INIT_STATE, action) {
    switch (action.type) {
      case ADD_TO_CART:{
        let cart = [...state.cartData,action.data]
        // AsyncStorage.setItem("@cartCalifornia",JSON.stringify(cart))
        return  {
          ...state,
          cartData: cart
        }
      }

      case UPDATE_CART:{
        return{
          ...state,
          cartData:action.data
        }
      }

      case EMPTY_CART:{
        return{
          ...state,
          cartData:action.data
        }
      }

      case REMOVE_CART_ITEM:{
        return{
          ...state,
          cartData:action.data
        }
      }

    case GET_CART:{

      return{
        ...state,
        cartData:action.data
      }
    }
    case CART_RECIEPT:{
      let cart = [...state.recieptData,action.data]
      return  {
        ...state,
        recieptData: cart
      }
    }

    case UPDATE_CART_RECIEPT:{
      return{
        ...state,
        recieptData:action.data
      }
    }

    case EMPTY_CART_RECIEPT:{
      return{
        ...state,
        recieptData:action.data
      }
    }

    case REMOVE_CART_RECIEPT:{
      return{
        ...state,
        recieptData:action.data
      }
    }

  case GET_CART_RECIEPT:{

    return{
      ...state,
      recieptData:action.data
    }
  }

  case CALCULATE_RECEIPT:{
    return{
      ...state,
      receipt:action.data
    }
  }
      default:
        return state
    }
    
  }