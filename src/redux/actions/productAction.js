// import axios from "axios"
// import { GET_ALL_CATEGORIES, GET_PRODUCT, SET_IMAGE_URL, RESTAURANT_MENU, GET_MERCHANT_INFO, START_FETCH, CONTAIN_IMAGE, GET_LOYALTY_POINTS,SET_MERCHANT } from "./types"
// import { BASE_URL, MERCHANT_ID } from "../../utils/Constants"
// import AsyncStorage from '@react-native-community/async-storage';


// export const getLoyaltyPoints = () => {
//   return (dispatch) => {
//   AsyncStorage.getItem("@clientTokenCalifornia")
// .then((token) => {
//   console.log(token, "client token")
//   axios.get(BASE_URL + "mobileapp/api/LoyaltyPoints?json=1", {
//     params: {
//       merchant_id: MERCHANT_ID,
//       client_token: token,
//     }
//   })
//   .then((res)=>{
//     console.log("Loyalty Points",res)
   
//     dispatch({
//         type:GET_LOYALTY_POINTS,
//         data:res.data.details
//     })

//   })
// })
//   }
// }

// export const imageUlr = (img) => {
//   return (dispatch) => {
//     dispatch({
//       type: SET_IMAGE_URL,
//       data: img + '/'
//     })
//   }
// }


// export const getProducts = () => {
//   return (dispatch) => {
//     axios.get(BASE_URL + "mobileapp/api/getItem?json=1", {
//       params: {
//         merchant_id: MERCHANT_ID,
//         cat_id: "191"
//       }
//     })
//       .then((res) => {
//         console.log("get Products Api check", res)
//         if (res.data.code === 1) {
//           dispatch({
//             type: GET_PRODUCT,
//             data: res.data.details.item
//           })
//         }

//       }).catch((err)=>{
//         console.log("Error in get Products -->>  ", err);
//       })
//   }
// }


// export const getMerchantDetails = (merchantId) => {
//   return (dispatch) => {
//     return AsyncStorage.getItem("@clientTokenCalifornia")
//       .then((token) => {
//         console.log(token, "client token")
//         return axios.get(BASE_URL + "mobileapp/api/GetMerchantDetails?json=1", {
//           params: {
//             merchant_id: merchantId,
//             client_token: token,
//           }
//         })
//           .then((res) => {
//             console.log("+++++++++++++++++++++++",res)
//             dispatch({
//               type: GET_MERCHANT_INFO,
//               data: res.data.details
//             })
//             return res.data.details

//           }). catch((e) => {
//             console.log(e,"error")
//           })
//       })
//   }
// }


// export const getRestaurantMenu = (id, token) => {
//   return (dispatch) => {
//     dispatch({
//       type: START_FETCH,
//       data: true
//     })
//     return axios.get(BASE_URL + "mobileapp/api/GetMenusListingV2?json=1", {
//       params: {
//         merchant_id: id,
//         client_token: token
//       }
//     })
//       .then((res) => {
//         // console.log(res.data.details.category_list)
//         console.log("+++++++++++++++++++ Get Menu Listing", res)
//         let temp = []
//         temp = res.data.details.category_list?res.data.details.category_list:[]
//         dispatch({
//           type: RESTAURANT_MENU,
//           data: temp
//         })
//         dispatch({
//           type: START_FETCH,
//           data: false
//         })
//         dispatch(imageUlr(res.data.details.image_path))
//         dispatch({
//           type: GET_ALL_CATEGORIES,
//           data: res.data.details.category_list
//         })
       
//       })
//       .catch((err)=>{
//         console.log("Error in Get Menu -->> ", err);
//         dispatch({
//           type: START_FETCH,
//           data: false
//         })
//       })
//   }
// }
