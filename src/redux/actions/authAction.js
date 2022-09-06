import axios from "axios";
import { Linking, Platform } from "react-native";
// import AsyncStorageLib from "@react-native-async-storage/async-storage";
// import AsyncStorage from "@react-native-community/async-storage";
import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQ,
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQ,
  LOGIN_USER_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  FORGOT_PASSWORD_REQ,
  FORGOT_PASSWORD_SUCCESS,
  VERIFY_CODE_FAILURE,
  VERIFY_CODE_REQ,
  VERIFY_CODE_SUCCESS,
  RESET_PASSWORD_FAILURE,
  RESET_PASSWORD_REQ,
  RESET_PASSWORD_SUCCESS,
} from "./types";

import { BASE_URL } from "../../utils/Constants";
// const qs = require("qs");

export const userRegister = (username, email, password, fullName, dob, accountType,cb) => {
  return dispatch => {
    dispatch({
      type: REGISTER_USER_REQ,
      data: {},
    });
    return axios.post(
      BASE_URL+'api/auth/register',
        {
          "name": username,
          "email": email,
          "password": password,
          "fullName": fullName,
          "dob": dob,
          "accountType": accountType
        }).then((res) => {
          cb()
          alert("Register Successfull")
          dispatch({
            type: REGISTER_USER_SUCCESS,
            data: {},
          });
        }).catch((er)=>{
          dispatch({
            type: REGISTER_USER_FAILURE,
            data: {},
          });
          alert('Something went wrong please again')
         console.log("My errr register-->> ", er);
         

        })
  
  }
}

export const userLogin = (email, password,cb) => {
  return dispatch => {
    dispatch({
      type: LOGIN_USER_REQ,
      data: {},
    });
    return axios.post(
        BASE_URL+'api/auth/login',
        {
          "email": email,
          "password": password
        }).then((res) => {
          cb()
          // AsyncStorageLib.setItem("email",res.data.email)
          alert("Login Successfull")
          console.log("Auth",res.data);
          dispatch({
            type: LOGIN_USER_SUCCESS,
            data: res.data,
          });
        }).catch((er)=>{
          dispatch({
            type: LOGIN_USER_FAILURE,
            data: {},
          });
          alert('Something went wrong please again')
         console.log("login-->> ", er);
        })
  }
}
export const forgotPassword = (email,cb) => {
  return dispatch => {
    dispatch({
      type: FORGOT_PASSWORD_REQ,
      data: {},
    });
    return axios.post(
        BASE_URL+'api/auth/forgotPassword',
        {
          "email": email
        }).then((res) => {
          cb()
          alert(`Email sent successfully,\nif you don't get email in your inbox please check your Spam or Junk folder`)
          dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
            data: {},
          });
        }).catch((er)=>{
          dispatch({
            type: FORGOT_PASSWORD_FAILURE,
            data: {},
          });
          alert('Something went wrong please again')
         console.log("forgotPassword-->> ", er);
        })
  }
}
export const verifyCode = (email,code,cb) => {
  return dispatch => {
    dispatch({
      type: VERIFY_CODE_REQ,
      data: {},
    });
    return axios.post(
        BASE_URL+'api/auth/verifyCode',
        {
          "email": email,
          "code":code
        }).then((res) => {
          cb()
          // alert("Verify Code Successfull")
          dispatch({
            type: VERIFY_CODE_SUCCESS,
            data: {},
          });
        }).catch((er)=>{
          dispatch({
            type: VERIFY_CODE_FAILURE,
            data: {},
          });
          alert('Something went wrong please again')
         console.log("verifyCode-->> ", er);
        })
  }
}
export const resetPassword = (email,password,cb) => {
  return dispatch => {
    dispatch({
      type: RESET_PASSWORD_REQ,
      data: {},
    });
    return axios.post(
        BASE_URL+'api/auth/resetPassword',
        {
          "email": email,
          "password":password
        }).then((res) => {
          cb()
          // alert("Password Changed")
          dispatch({
            type: RESET_PASSWORD_SUCCESS,
            data: {},
          });
        }).catch((er)=>{
          dispatch({
            type: RESET_PASSWORD_FAILURE,
            data: {},
          });
          alert('Something went wrong please again')
         console.log("forgotPassword-->> ", er);
        })
  }
}