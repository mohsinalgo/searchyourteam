// import axios from "axios"
// import AsyncStorage from "@react-native-community/async-storage"
// import {GET_ACTIVE_ORDERS,GET_PAST_ORDERS} from "./types"
// import {useSelector} from "react-redux"
// import {BASE_URL, MERCHANT_ID, MERCHANT_IDs} from "../../utils/Constants"

// export const getActiveOrders = () => {
//         return(dispatch)=>{
//             AsyncStorage.getItem("@clientTokenCalifornia")
//             .then((token)=>{
//                 console.log(MERCHANT_IDs.join())
//                 axios.get(BASE_URL+"mobileapp/api/ClientOrders?json=1",{
//                     params:{
//                         merchant_id:MERCHANT_IDs.join(),
//                         client_token:token,
//                         status:"active",
//                     }
//                 })
//                 .then((res)=>{
//                     console.log("active orders Api check",res)
//                     dispatch({
//                         type:GET_ACTIVE_ORDERS,
//                         data:res.data.details
//                     })
//                 })
//                 .catch((err)=>console.log(err,token))

//             })
//         }
// }
// export const getPastOrders = () => {
//     return(dispatch)=>{
//         AsyncStorage.getItem("@clientTokenCalifornia")
//             .then((token)=>{
//                 console.log(token)
//                 axios.get(BASE_URL+"mobileapp/api/ClientOrders?json=1",{
//                     params:{
//                         merchant_id:MERCHANT_IDs.join(),
//                         client_token:token,
//                         status:"completed",
//                     }
//                 })
//                 .then((res)=>{
//                     console.log("past orders Api check",res)
//                     dispatch({
//                         type:GET_PAST_ORDERS,
//                         data:res.data.details
//                     })
//                 })

//             })
//     }
// }