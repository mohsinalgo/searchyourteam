import {combineReducers} from "redux";
import productReducer from "./productReducer"
import cartReducer from "./cartReducer"
import checkoutReducer from "./checkoutReducer"
import authentication from "./authReducer"
import orderReducer from "./orderReducer"
import calculateCartReducer from "./orderReducer"
import postReducer from "./postReducer";

const reducer = combineReducers({
    product:productReducer,
    postReducer:postReducer,
    cart:cartReducer,
    checkout:checkoutReducer,
    auth:authentication,
    order:orderReducer,
    calculate: calculateCartReducer
  })
export default reducer;