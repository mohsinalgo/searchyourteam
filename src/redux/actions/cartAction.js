
// import axios from "axios"
// import AsyncStorage from "@react-native-community/async-storage"
// import { ADD_TO_CART, UPDATE_CART, EMPTY_CART, REMOVE_CART_ITEM, GET_CART, CART_RECIEPT, REMOVE_CART_RECIEPT, EMPTY_CART_RECIEPT, GET_CART_RECIEPT, UPDATE_CART_RECIEPT, CALCULATE_RECEIPT } from "./types"

// export const addToCart = (product) => {
//     AsyncStorage.getItem("@cartCalifornia")
//         .then((item) => {
//             let pro = JSON.parse(item)
//             if (pro) {
//                 pro.push(product)

//             }
//             else {
                
//                 pro = [product]
//             }

//             AsyncStorage.setItem("@cartCalifornia", JSON.stringify(pro))
//             console.log(pro)
//         })



//     return (dispatch) => {
//         dispatch({
//             type: ADD_TO_CART,
//             data: product
//         })
//     }
// }

// export const updateCart = (product) => {
//     AsyncStorage.setItem("@cartCalifornia", JSON.stringify(product))
//     return (dispatch) => {
//         dispatch({
//             type: UPDATE_CART,
//             data: product
//         })
//     }
// }

// export const getCart = () => {

//     return (dispatch) => {
//         AsyncStorage.getItem("@cartCalifornia")
//             .then((res) => {
//                 let data = JSON.parse(res)
//                 console.log(data)
//                 dispatch({
//                     type: GET_CART,
//                     data: data ? data : [],
//                 })
//                 dispatch(getCartReciept())

//             })
//             .catch((err) => {
//                 console.log(err)
//             })

//     }

// }
// const getCartReciept = () =>{
//     return (dispatch) => {
//         AsyncStorage.getItem("@cartCaliforniaReciept")
//             .then((res) => {
//                 let data = JSON.parse(res)
//                 console.log(data)
//                 dispatch({
//                     type: GET_CART_RECIEPT,
//                     data: data ? data : [],
//                 })

//             })
//             .catch((err) => {
//                 console.log(err)
//             })

//     }
// }

// export const emptyCart = () => {
//     AsyncStorage.setItem("@cartCalifornia", "")
//     return (dispatch) => {
//         dispatch({
//             type: EMPTY_CART,
//             data: []
//         })
//     }
// }
// export const emptyCartReciept = () => {
//     AsyncStorage.setItem("@cartCaliforniaReciept", "")
//     return (dispatch) => {
//         dispatch({
//             type: EMPTY_CART_RECIEPT,
//             data: []
//         })
//     }
// }

// export const removeCartItem = (cart) => {
//     return (dispatch) => {
//         AsyncStorage.setItem("@cartCalifornia", JSON.stringify(cart))
//         dispatch({
//             type: REMOVE_CART_ITEM,
//             data: cart
//         })
//     }
// }
// export const removeCartReciept = (cart) => {
//     return (dispatch) => {
//         AsyncStorage.setItem("@cartCaliforniaReciept", cart.length >0?JSON.stringify(cart):"")
//         dispatch({
//             type: REMOVE_CART_RECIEPT,
//             data: cart
//         })
//     }
// }

// export const cartReciept = (product) => {
//     return (dispatch) => {
//         AsyncStorage.getItem("@cartCaliforniaReciept")
//             .then((item) => {
//                 let temp = product
//                 let sub_item = temp.sub_item
//                 let addons = ({})
//                 if(sub_item){
//                     sub_item.map((item,index)=>{
//                         if(addons[item.subcat_id]){
//                             addons[item.subcat_id].value.push(item)
//                         }
//                         else{
//                             addons[item.subcat_id] = {
//                                 subcat_name : item.subcat_name,
//                                 value : [item]
//                             }
//                         }
//                     })
//                     temp.sub_item = Object.values(addons)
//                     let pro = JSON.parse(item)
//                     if (pro) {
//                         pro.push(temp)
//                     }
//                     else {
//                         pro = [temp]
//                     }
//                     console.log("PRODUCT",product)
//                     AsyncStorage.setItem("@cartCaliforniaReciept", JSON.stringify(pro))
//                     dispatch({
//                         type:CART_RECIEPT,
//                         data:temp
//                     })

//                 }
//                 else{
//                     let pro = JSON.parse(item)
//                     if (pro) {
//                         pro.push(temp)
//                     }
//                     else {
//                         pro = [temp]
//                     }
//                     AsyncStorage.setItem("@cartCaliforniaReciept", JSON.stringify(pro))
//                     dispatch({
//                         type:CART_RECIEPT,
//                         data:temp
//                     })
//                 }
//             })
//     }
// }

// export const updateCartReciept = (recieptData, index, func,qty) => {
//     return (dispatch) => {
//         console.log(recieptData,">>>>>>>")
//         recieptData[index].qty=qty
//         recieptData[index].sub_item.map((item,index)=>{
//             item.value.map((adon)=>{
//                 adon.qty=qty
//             })
//         })
//         dispatch({
//             type:UPDATE_CART_RECIEPT,
//             data:recieptData
//         })
//         AsyncStorage.setItem("@cartCaliforniaReciept", JSON.stringify(recieptData))
//         console.log("From update action", recieptData)
//     }
// }

// export const calculateReceipt = (reciept) => {
//     return (dispatch) => {       
//         dispatch({
//             type:CALCULATE_RECEIPT,
//             data:reciept
//         })
//     }
// }