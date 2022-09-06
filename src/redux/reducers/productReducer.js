// import {CONTAIN_IMAGE, GET_ALL_CATEGORIES, GET_MERCHANT_INFO, GET_PRODUCT, GET_VOUCHERS, RESTAURANT_MENU, SET_IMAGE_URL, START_FETCH,GET_LOYALTY_POINTS} from "../actions/types"
// const INIT_STATE ={
//   categories:[],
//   merchant_info:null,
//   imagePath:null,
//   popular:null,
//   menuData:[],
//   loading:true,
//   isImage:false,
//   loyalty:null
// }

// export default (state = INIT_STATE, action)=> {
//     switch (action.type) {
//       case GET_ALL_CATEGORIES:
//         return  {
//           ...state,
//           categories: action.data
//         }
//       case SET_IMAGE_URL:
//         return {
//           ...state,
//           imagePath:action.data
//         }
//       case GET_PRODUCT:
//         return{
//           ...state,
//           popular:action.data
//         }
//       case RESTAURANT_MENU:
//         return{
//           ...state,
//           menuData:action.data
//         }
//       case GET_MERCHANT_INFO:
//         return{
//           ...state,
//           merchant_info:action.data
//         }
//       case START_FETCH:
//         return{
//           ...state,
//           loading:action.data
//         }
//       case CONTAIN_IMAGE:
//         return{
//           ...state,
//           isImage:action.data
//         }
//         case GET_VOUCHERS:
//         return{
//           ...state,
//           vouchers:action.data
//         }
//         case GET_LOYALTY_POINTS:
//         return{
//           ...state,
//           loyalty:action.data
//         }
//       default:
//         return state
//     }
    
//   }