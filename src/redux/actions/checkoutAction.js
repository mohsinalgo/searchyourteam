// import axios from "axios"
// import AsyncStorage from "@react-native-community/async-storage"
// import { POST_CHECKOUT, EMPTY_CART } from "./types"
// import { emptyCart ,emptyCartReciept} from "./cartAction"
// import { Alert } from "react-native"
// import {BASE_URL} from "../../utils/Constants"
// import {getActiveOrders} from "../actions"
// import {Linking} from "react-native"

// const qs = require("qs")

// export const dataCheckout = (pro,data) => {
// console.log("Pro Data -->> ", pro);
//     // return (dispatch) => {
//     //     let cart = ({})
//     //     let data2 = []
//     //     let temp3 = JSON.parse(pro.cart)
//     //    for(let i = 0; i<data.length; i++){
//     //     let clone = JSON.stringify(temp3[i])
//     //     data2[i]=JSON.parse(clone)
//     //     data2[i]["notes"] = data2[i].order_notes
//     //        if(Array.isArray(data[i].sub_item)&&data[i].sub_item.length){
             
//     //         console.log(data2)
//     //             data[i].sub_item?.map((item)=>{
//     //             let cat_id = ""
//     //             let arr = []
//     //             item.value.map((addon)=>{
//     //                 cat_id = addon.subcat_id
//     //                 arr.push(addon.value)
//     //             })
//     //             let temp1 = JSON.stringify(arr)
//     //             cart[cat_id] = JSON.parse(temp1)
//     //         })
//     //         let temp = JSON.stringify(cart)
//     //         data2[i]["sub_item"] = JSON.parse(temp)
//     //         cart = ({});
//     //        }
//     //        else{
//     //            let obj = JSON.parse(clone)
//     //            obj["notes"] = obj.order_notes
//     //            data2[i] = obj
//     //        }
//     //    }
//     //     pro.cart = JSON.stringify(data2)
//     //     console.log("California pro ",pro)
//     //     return axios.post(BASE_URL+"mobileapp/api/placeorder?json=1",qs.stringify(pro))
//     //         .then((data) => {
//     //             console.log("My Dataaa then", data);
//     //             console.log(data,"Place Oreder")
//     //             if (data.data.code === 1) {
//     //                 dispatch(emptyCart())
//     //                 dispatch(emptyCartReciept())
//     //                 return data.data.details.order_info;
//     //             }
//     //             else{
//     //                 console.log("My Dataaa catch-->> ", data);
//     //                 Alert.alert(
//     //                     "Error",
//     //                    data.data.msg,
//     //                   )
//     //                 return false;
//     //             }
//     //         })
//     //         .catch((err) =>{ 
//     //             console.log("Place Order Error -->",err)
//     //             return false;
//     //         })
//     // }

// }

